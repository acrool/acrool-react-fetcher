import logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
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

/**
 * 最近一次換發 token：from 是換發前的 accessToken，to 是換發後的。
 * 晚到的 401 帶的是 from、而目前的 token 仍是 to，表示是同一個登入只是換發過，改用新 token 重送即可
 */
let lastRefreshedAccessToken: {from: string, to: string} | null = null;

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
    }, [getTokens, refreshTokens, updateTokens, forceLogout, locale]);


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
            const requestAccessToken = !forceGuest && accessTokens ? accessTokens : undefined;

            if (requestAccessToken) {
                originConfig.headers['Authorization'] = [authorizationPrefix, requestAccessToken]
                    .filter(str => str)
                    .join(' ');
            }
            // 重送時會再經過這裡，一律覆寫成這次實際帶的 token
            (originConfig as IInternalRequestConfig).requestAccessToken = requestAccessToken;

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
     * @param httpStatus
     */
    const handleOnResponseError = (responseFirstError: IFormatResponseErrorReturn, httpStatus: string) => {
        if (onResponseError) {
            onResponseError(responseFirstError, httpStatus);
        }
    };

    /**
     * 這個請求是否要略過全域錯誤回調
     * createRestFulFetcher／createGraphQLFetcher 會把呼叫端的 fetchOptions 放在 config.fetchOptions，
     * 直接呼叫 axiosInstance 的則是寫在 config 最外層，兩種都要認
     * @param config
     */
    const checkIsIgnoreGlobalError = (config?: IInternalRequestConfig) => {
        const fetchOptions = (config as {fetchOptions?: IRequestConfig} | undefined)?.fetchOptions;
        return config?.ignoreGlobalError === true || fetchOptions?.ignoreGlobalError === true;
    };

    /**
     * 處理「請求帶的 token 已經不是目前的」401
     * - 那個 token 是被換發掉的（同一個登入）：改用目前的 token 重送；換發還在進行中就排進佇列，換發完再送
     * - 其他情況（已登出、換了帳號）：只 reject 這次請求。不能拿新 token 重送，那會用另一個帳號執行舊的請求
     * @param originalConfig 失敗的請求
     * @param requestAccessToken 失敗的請求帶的 token
     * @param currentAccessToken 目前的 token
     * @param responseFirstError 整理過的錯誤
     */
    const handleStaleTokenUnauthorized = (
        originalConfig: IInternalRequestConfig,
        requestAccessToken: string,
        currentAccessToken: string | undefined,
        responseFirstError: IFormatResponseErrorReturn,
    ): Promise<AxiosResponse> => {
        const isRefreshedToken = lastRefreshedAccessToken?.from === requestAccessToken
            && lastRefreshedAccessToken.to === currentAccessToken;

        if (!isRefreshedToken) {
            return Promise.reject(new FetcherException(responseFirstError));
        }

        if (isTokenRefreshing) {
            return new Promise((resolve, reject) => {
                pushPendingRequestQueues(resolve, reject)(originalConfig);
            });
        }

        originalConfig.pendingRequest = true;
        return axiosInstance(originalConfig);
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

            if (status === 401 || (checkErrorIs401 && checkErrorIs401(responseFirstError, String(status)))) {

                const tokens = getTokens();
                const requestAccessToken = originalConfig.requestAccessToken;

                // 請求帶的 token 已經不是目前的（送出後已登出、重新登入或換發過）：
                // 失效的是舊 token，跟目前的登入無關，不換發、不登出、不回報 onResponseError
                if (requestAccessToken && requestAccessToken !== tokens?.accessToken) {
                    if (isDebug) logger.warning('[FetcherProvider] 401 with stale token, skip refresh/logout');
                    return handleStaleTokenUnauthorized(originalConfig, requestAccessToken, tokens?.accessToken, responseFirstError);
                }

                if (isDebug) logger.warning('[FetcherProvider] enter refresh token flow', {refreshToken: tokens?.refreshToken});

                if (isEmpty(tokens?.refreshToken) || isRefresh || originalConfig.pendingRequest) {
                    isTokenRefreshing = false;
                    if (isDebug) logger.warning('[FetcherProvider] no refreshToken/refreshAPI|pendingRequest fail, force logout');
                    forceLogout();

                    if(!checkIsIgnoreGlobalError(originalConfig)) handleOnResponseError(responseFirstError, String(status));
                    return Promise.reject(new FetcherException(responseFirstError));
                }

                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    const fromAccessToken = tokens?.accessToken;
                    if (isDebug) logger.warning('[FetcherProvider] refreshTokens');
                    refreshTokens()
                        .then(() => {
                            if (isDebug) logger.info('[FetcherProvider] refreshTokens success');
                            const toAccessToken = getTokens()?.accessToken;
                            lastRefreshedAccessToken = fromAccessToken && toAccessToken
                                ? {from: fromAccessToken, to: toAccessToken}
                                : null;
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
        if(!checkIsIgnoreGlobalError(originalConfig)) handleOnResponseError(responseFirstError, String(status));
        return Promise.reject(new FetcherException(responseFirstError));
    };

    return <AxiosClientContext.Provider
        value={axiosInstance}
    >
        {children}
    </AxiosClientContext.Provider>;
};

export default FetcherProvider;
