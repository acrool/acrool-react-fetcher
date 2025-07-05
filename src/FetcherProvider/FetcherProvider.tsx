import logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosInstance} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

import {useAuthState} from '../AuthStateProvider';
import {FetcherException} from '../exception';
import {IInternalRequestConfig, IRequestConfig} from '../fetchers/types';
import AxiosCancelException from './AxiosCancelException';
import {
    TCheckIsErrorResponse,
    TCheckIsRefreshTokenRequest,
    TGetResponseFormatError,
    TInterceptorRequest,
    TInterceptorResponseError,
    TInterceptorResponseSuccess, TOnResponseError,
} from './types';
import {getRestFulResponseFormatError} from './utils';


let isTokenRefreshing = false;
let pendingRequestQueues: Array<(isRefreshOK: boolean) => void> = [];

export const AxiosClientContext = createContext<AxiosInstance | null>(null);

export const useAxiosClient = () => {
    const axiosInstance = useContext(AxiosClientContext);

    if (axiosInstance) {
        throw new Error('useAxiosClient must be used inside FetcherProvider');
    }
    return axiosInstance;
};

interface IProps {
    children: React.ReactNode
    axiosInstance: AxiosInstance
    checkIsRefreshTokenRequest?: TCheckIsRefreshTokenRequest
    checkIsErrorResponse?: TCheckIsErrorResponse
    locale?: string
    getResponseFormatError?: TGetResponseFormatError
    onResponseError?: TOnResponseError
    authorizationPrefix?: string
    isDebug?: boolean
}

/**
 * Axios Client 提供者
 * @param children
 * @param authTokensManager
 * @param locale
 * @param onResponseError
 */
const FetcherProvider = ({
    children,
    axiosInstance,
    locale = 'en-US',
    getResponseFormatError = getRestFulResponseFormatError,
    onResponseError,
    checkIsRefreshTokenRequest,
    checkIsErrorResponse,
    authorizationPrefix = 'Bearer',
    isDebug = false,
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
        if (isDebug) logger.warning('[FetcherProvider] runPendingRequest', {isSuccess});
        isTokenRefreshing = false;
        for (const cb of pendingRequestQueues) {
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
        reject: (value: FetcherException<unknown>) => void
    ) => {
        return (originConfig: IRequestConfig) => {
            if (isDebug) logger.info('[FetcherProvider] Request add pending queue', {originConfig});
            pendingRequestQueues.push((isTokenRefreshOK: boolean) => {
                if (isTokenRefreshOK) {
                    originConfig.pendingRequest = true;

                    resolve(axiosInstance(originConfig));
                } else {
                    reject(new FetcherException({
                        message: 'Please login before continuing',
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
            originConfig.headers['Accept-Language'] = locale;

            const accessTokens = getTokens()?.accessToken;
            const forceGuest = (originConfig.fetchOptions as IInternalRequestConfig)?.forceGuest;

            if (!forceGuest && accessTokens) {
                originConfig.headers['Authorization'] = [authorizationPrefix, accessTokens]
                    .filter(str => str)
                    .join(' ');
            }

            // 判斷是否為 refreshToken API
            const isRefreshTokenAPI = originConfig && checkIsRefreshTokenRequest ? checkIsRefreshTokenRequest(originConfig) : false;
            if (!isRefreshTokenAPI && isTokenRefreshing) {
                pushPendingRequestQueues(resolve, reject)(originConfig);
                reject(new AxiosCancelException({
                    message: 'Token refreshing, so request save queues not send',
                    code: 'REFRESHING_TOKEN'
                }));
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
        if (isDebug) logger.info('[FetcherProvider] interceptorsResponseSuccess', {response});

        if (checkIsErrorResponse && checkIsErrorResponse(response)){
            // 拋出自定義錯誤讓 catch 接住
            return Promise.reject(response);
        }
        return response;
    };


    /**
     * 處理 response 失敗
     * @param axiosError
     */
    const interceptorsResponseError: TInterceptorResponseError = (axiosError) => {
        const response = axiosError.response;
        const originalConfig = axiosError.config as IInternalRequestConfig;
        const status = axiosError.status;
        const responseFirstError = getResponseFormatError(axiosError);

        if (isDebug) logger.warning('[FetcherProvider] interceptorsResponseError', {status, responseFirstError});

        if (onResponseError && originalConfig.ignoreErrorCallback !== true) {
            onResponseError(responseFirstError);
        }


        const isRefresh = originalConfig && checkIsRefreshTokenRequest ? checkIsRefreshTokenRequest(originalConfig) : false;

        if (response && originalConfig) {
            if (status === 401 || responseFirstError.code === 'UNAUTHENTICATED') {

                const tokens = getTokens();

                if (isDebug) logger.warning('[FetcherProvider] enter refresh token flow', {refreshToken: tokens?.refreshToken});

                if (isEmpty(tokens?.refreshToken) || isRefresh || originalConfig.pendingRequest) {
                    isTokenRefreshing = false;
                    if (isDebug) logger.warning('[FetcherProvider] no refreshToken/refreshAPI|pendingRequest fail, force logout');
                    forceLogout();
                    return Promise.reject(new FetcherException(responseFirstError));
                }

                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    if (isDebug) logger.warning('[FetcherProvider] refreshTokens');
                    refreshTokens()
                        .then(() => {
                            if (isDebug) logger.info('[FetcherProvider] refreshTokens success');
                            runPendingRequest(true);
                        })
                        .catch(() => {
                            if (isDebug) logger.danger('[FetcherProvider] refreshTokens fail');
                            runPendingRequest(false);
                        });
                }

                return new Promise((resolve, reject) => {
                    pushPendingRequestQueues(resolve, reject)(originalConfig);
                });
            }
        }
        return Promise.reject(new FetcherException(responseFirstError));
    };

    return <AxiosClientContext.Provider
        value={axiosInstance}
    >
        {children}
    </AxiosClientContext.Provider>;
};

export default FetcherProvider;
