import logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

import {useAuthState} from '../AuthStateProvider';
import {SystemException} from '../exception';
import {checkIsRefreshTokenAPI, getResponseFirstError} from '../utils';
import AxiosCancelException from './AxiosCancelException';
import {axiosInstance} from './config';
import {
    IAxiosClientProviderProps,
    TInterceptorRequest,
    TInterceptorResponseError,
    TInterceptorResponseSuccess
} from './types';


let isTokenRefreshing = false;
let pendingRequestQueues: Array<(isRefreshOK: boolean) => void> = [];

export const AxiosClientContext = createContext<AxiosInstance>(axiosInstance);
export const useAxiosClient = () => useContext(AxiosClientContext);

interface IProps extends IAxiosClientProviderProps{
    children: React.ReactNode
}


/**
 * Axios Client 提供者
 * @param children
 * @param authTokensManager
 * @param onRefreshToken
 * @param onForceLogout
 * @param getLocale
 * @param t
 * @param onError
 * @constructor
 */
const AxiosClientProvider = ({
    children,
    onRefreshToken,
    onForceLogout,
    getLocale,
    t = (key: string, options?: any) => key, // fallback
    onError,
}: IProps) => {

    const {tokensRef, updateTokens} = useAuthState();


    useLayoutEffect(() => {
        const interceptorReq = axiosInstance.interceptors.request.use(interceptorsRequest);
        const interceptorRes = axiosInstance.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError);
        return () => {
            axiosInstance.interceptors.request.eject(interceptorReq);
            axiosInstance.interceptors.response.eject(interceptorRes);
        };
    }, [isTokenRefreshing, updateTokens]);


    /**
     * 發送 refreshToken 並更新 token 狀態
     */
    const postRefreshToken = () => {
        const refreshToken = tokensRef?.current?.refreshToken;
        logger.warning('postRefreshToken', refreshToken);
        if(!onRefreshToken || !refreshToken) return;

        onRefreshToken(refreshToken)
            .then(authTokens => {
                // 假設外部 refreshToken 已經自動更新 token 狀態
                if(isEmpty(authTokens)){
                    throw new SystemException({
                        message: 'Refresh Token Fail',
                        code: 'SERVICE_HTTP_401',
                    });
                }
                // authTokensManager.update(authTokens);
                updateTokens(authTokens);
                runPendingRequest(true);
            })
            .catch(() => {
                // handleOnForceLogout();
                runPendingRequest(false);
            });
    };


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
     * 處理登出
     */
    const handleOnForceLogout = () => {
        logger.warning('Logout');
        isTokenRefreshing = false;
        updateTokens(null);

        if(onForceLogout) onForceLogout();
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
                        message: t('errorHttp.401', {def: '請求的API沒有權限'}),
                        code: 'SERVICE_HTTP_401',
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

            if(tokensRef?.current?.accessToken){
                originConfig.headers['Authorization'] = `Bearer ${tokensRef?.current?.accessToken}`;
            }

            if(!checkIsRefreshTokenAPI(originConfig) && isTokenRefreshing){
                pushPendingRequestQueues(resolve, reject)(originConfig);
                reject(new AxiosCancelException({message: 'Token refreshing, so request save queues not send', code: 'REFRESH_TOKEN'}));
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

        if(response && originalConfig) {


            if (status === 401 || responseFirstError.code === 'UNAUTHENTICATED') {
                // 若沒有 RefreshToken 或 這次請求是 RefreshToken API 則直接拋出錯誤
                logger.warning('401OrUNAUTHENTICATED', tokensRef?.current?.refreshToken);

                if (isEmpty(tokensRef?.current?.refreshToken) || checkIsRefreshTokenAPI(originalConfig)) {
                    isTokenRefreshing = false; // 考慮放置位置
                    handleOnForceLogout();
                    return Promise.reject(new SystemException(responseFirstError));
                }

                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    postRefreshToken();
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

export default AxiosClientProvider;
