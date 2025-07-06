import logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosError, AxiosInstance} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

import {useAuthState} from '../AuthStateProvider';
import {FetcherException} from '../exception';
import {IInternalRequestConfig, IRequestConfig} from '../fetchers/types';
import AxiosCancelException from './AxiosCancelException';
import {
    IFormatResponseErrorReturn, TCheckErrorIs401,
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

    if (!axiosInstance) {
        throw new Error('useAxiosClient must be used inside FetcherProvider');
    }
    return axiosInstance;
};

interface IProps {
    children: React.ReactNode
    axiosInstance: AxiosInstance
    checkIsRefreshTokenRequest?: TCheckIsRefreshTokenRequest
    checkIsErrorResponse?: TCheckIsErrorResponse
    checkErrorIs401?: TCheckErrorIs401
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
    checkErrorIs401,
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

        if (checkIsErrorResponse && checkIsErrorResponse(response)) {
            return interceptorsResponseError(new AxiosError(
                response.data.message,
                'ERR_BAD_RESPONSE',
                response.config,
                response.request,
                response,
            ));
        }

        return response;
    };


    /**
     * 處理 response 錯誤
     * @param responseFirstError
     */
    const handleOnResponseError = (responseFirstError: IFormatResponseErrorReturn) => {
        if (onResponseError) {
            onResponseError(responseFirstError);
        }
    };

    /**
     * 處理 response 失敗
     * @param axiosError
     */
    const interceptorsResponseError: TInterceptorResponseError = (axiosError) => {
        if (isDebug) logger.danger('[FetcherProvider] interceptorsResponseError', {axiosError});

        const response = axiosError.response;
        const originalConfig = axiosError.config as IInternalRequestConfig;
        const status = axiosError.status;
        const responseFirstError = getResponseFormatError(axiosError);


        if (isDebug) logger.warning('[FetcherProvider] interceptorsResponseError(2)', {status, responseFirstError});


        const isRefresh = originalConfig && checkIsRefreshTokenRequest ? checkIsRefreshTokenRequest(originalConfig) : false;

        if (response && originalConfig) {

            if (status === 401 || (checkErrorIs401 && checkErrorIs401(responseFirstError))) {

                const tokens = getTokens();

                if (isDebug) logger.warning('[FetcherProvider] enter refresh token flow', {refreshToken: tokens?.refreshToken});

                if (isEmpty(tokens?.refreshToken) || isRefresh || originalConfig.pendingRequest) {
                    isTokenRefreshing = false;
                    if (isDebug) logger.warning('[FetcherProvider] no refreshToken/refreshAPI|pendingRequest fail, force logout');
                    forceLogout();

                    if(originalConfig.ignoreErrorCallback !== true) handleOnResponseError(responseFirstError);
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

        // 處理其他錯誤
        if(originalConfig.ignoreErrorCallback !== true) handleOnResponseError(responseFirstError);
        return Promise.reject(new FetcherException(responseFirstError));
    };

    return <AxiosClientContext.Provider
        value={axiosInstance}
    >
        {children}
    </AxiosClientContext.Provider>;
};

export default FetcherProvider;
