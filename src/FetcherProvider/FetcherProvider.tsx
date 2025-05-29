import logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

import {useAuthState} from '../AuthStateProvider';
import {SystemException} from '../exception';
import AxiosCancelException from './AxiosCancelException';
import {axiosInstance, defaultI18nDict} from './config';
import {
    IResponseFirstError,
    TInterceptorRequest,
    TInterceptorResponseError,
    TInterceptorResponseSuccess
} from './types';
import {getResponseFirstError} from './utils';


let isTokenRefreshing = false;
let pendingRequestQueues: Array<(isRefreshOK: boolean) => void> = [];

export const AxiosClientContext = createContext<AxiosInstance>(axiosInstance);
export const useAxiosClient = () => useContext(AxiosClientContext);

interface IProps {
    children: React.ReactNode
    i18nDict?: Record<string, Record<number, string>>
    checkIsRefreshTokenRequest?: (config: InternalAxiosRequestConfig) => boolean
    getLocale: () => string
    onError?: (error: IResponseFirstError) => void
}

/**
 * Axios Client 提供者
 * @param children
 * @param authTokensManager
 * @param getLocale
 * @param onError
 */
const FetcherProvider = ({
    children,
    getLocale,
    onError,
    i18nDict,
    checkIsRefreshTokenRequest,
}: IProps) => {

    const {
        getTokens,
        updateTokens,
        refreshTokens,
        forceLogout
    } = useAuthState();


    useLayoutEffect(() => {
        const interceptorReq = axiosInstance.interceptors.request.use(interceptorsRequest);
        const interceptorRes = axiosInstance.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError);
        return () => {
            axiosInstance.interceptors.request.eject(interceptorReq);
            axiosInstance.interceptors.response.eject(interceptorRes);
        };
    }, [getTokens, refreshTokens, updateTokens, forceLogout]);



    /**
     * 執行 pendingRequestQueues
     * @param isSuccess
     */
    const runPendingRequest = (isSuccess: boolean) => {
        logger.warning('runPendingRequest');

        isTokenRefreshing = false;
        for(const cb of pendingRequestQueues){
            cb(isSuccess);
        }
        pendingRequestQueues = [];
    };



    /**
     * 將 request 放入 pendingRequestQueues
     * @param resolve
     * @param reject
     */
    const pushPendingRequestQueues = (
        resolve: (value: any) => void,
        reject: (value: SystemException) => void
    ) => {
        return (originConfig: InternalAxiosRequestConfig) => {
            pendingRequestQueues.push((isTokenRefreshOK: boolean) => {
                if (isTokenRefreshOK) {
                    resolve(axiosInstance(originConfig));
                } else {
                    reject(new SystemException({
                        message: getErrorMessage(401),
                        code: 'UNAUTHORIZED',
                        path: 'AxiosClientProvider.pushPendingRequestQueues'
                    }));
                }
            });
        };
    };

    /**
     * 設定 request header
     * @param originConfig
     */
    const interceptorsRequest: TInterceptorRequest = (originConfig) => {
        return new Promise((resolve, reject) => {
            logger.warning('interceptorsRequest');

            originConfig.headers['Accept-Language'] = getLocale();

            const accessTokens = getTokens()?.accessToken;
            logger.info('setHeader', accessTokens);
            if(accessTokens){
                originConfig.headers['Authorization'] = `Bearer ${accessTokens}`;
            }

            // 判斷是否為 refreshToken API
            const isRefresh = originConfig && checkIsRefreshTokenRequest ? checkIsRefreshTokenRequest(originConfig): false;

            if(!isRefresh && isTokenRefreshing){
                pushPendingRequestQueues(resolve, reject)(originConfig);
                reject(new AxiosCancelException({message: 'Token refreshing, so request save queues not send', code: 'REFRESH_TOKEN'}));
                return;
            }
            resolve(originConfig);
        });
    };


    /**
     * 處理 response 成功
     * @param response
     */
    const interceptorsResponseSuccess: TInterceptorResponseSuccess = (response) => {
        return response;
    };

    /**
     * 取得多語系錯誤訊息
     */
    const getErrorMessage = (status: number) => {
        const locale = getLocale();
        const dict = (i18nDict?.[locale] || defaultI18nDict[locale] || defaultI18nDict['en-US']);
        return dict?.[status] || `Error: ${status}`;
    };

    /**
     * 處理 response 失敗
     * @param axiosError
     */
    const interceptorsResponseError: TInterceptorResponseError = (axiosError) => {
        const response = axiosError.response;
        const originalConfig = axiosError.config;
        const status = axiosError.status;

        const responseFirstError = getResponseFirstError(response);

        logger.warning('interceptorsResponseError');

        if (onError) {
            onError(responseFirstError);
        }

        // 判斷是否為 refreshToken API
        const isRefresh = originalConfig && checkIsRefreshTokenRequest ? checkIsRefreshTokenRequest(originalConfig): false;

        if(response && originalConfig) {
            if (status === 401 || responseFirstError.code === 'UNAUTHENTICATED') {
                // 若沒有 RefreshToken 或 這次請求是 RefreshToken API 則直接拋出錯誤
                const tokens = getTokens();
                logger.warning('401OrUNAUTHENTICATED', tokens?.refreshToken);

                if (isEmpty(tokens?.refreshToken) || isRefresh) {
                    isTokenRefreshing = false;
                    forceLogout();

                    return Promise.reject(new SystemException(responseFirstError));
                }

                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    logger.warning('postRefreshToken');

                    refreshTokens()
                        .then(() => runPendingRequest(true))
                        .catch(() => {
                            logger.danger('refreshTokens fail');
                            runPendingRequest(false);
                        });
                }

                return new Promise((resolve, reject) => {
                    pushPendingRequestQueues(resolve, reject)(originalConfig);
                });
            }
        }
        return Promise.reject(new SystemException(responseFirstError));
    };

    return <AxiosClientContext.Provider value={axiosInstance}>{children}</AxiosClientContext.Provider>;
};

export default FetcherProvider;
