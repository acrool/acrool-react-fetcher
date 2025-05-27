import {isEmpty} from '@acrool/js-utils/equal';
import {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

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
import {useAuthState} from "../AuthStateProvider";

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
    // authTokensManager,
    onRefreshToken,
    onForceLogout,
    getLocale,
    t = (key: string, options?: any) => key, // fallback
    onError,
}: IProps) => {

    const authState = useAuthState();

    useLayoutEffect(() => {
        const interceptorReq = axiosInstance.interceptors.request.use(interceptorsRequest);
        const interceptorRes = axiosInstance.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError);
        return () => {
            axiosInstance.interceptors.request.eject(interceptorReq);
            axiosInstance.interceptors.response.eject(interceptorRes);
        };
    }, [authState.isRefreshing, authState.tokens]);


    /**
     * 發送 refreshToken 並更新 token 狀態
     */
    const postRefreshToken = () => {
        if(!onRefreshToken) return;

        onRefreshToken()
            .then(authTokens => {
                // 假設外部 refreshToken 已經自動更新 token 狀態
                if(isEmpty(authTokens)){
                    throw new SystemException({
                        message: 'Refresh Token Fail',
                        code: 'SERVICE_HTTP_401',
                    });
                }
                // authTokensManager.update(authTokens);
                authState.updateTokens(authTokens);
                runPendingRequest(true);
            })
            .catch(() => {
                handleOnForceLogout();
                runPendingRequest(false);
            });
    };


    /**
     * 執行 pendingRequestQueues
     * @param isSuccess
     */
    const runPendingRequest = (isSuccess: boolean) => {
        // authTokensManager.refreshing(false);
        authState.refreshing(false);
        for(const cb of pendingRequestQueues){
            cb(isSuccess);
        }
        pendingRequestQueues = [];
    };


    /**
     * 處理登出
     */
    const handleOnForceLogout = () => {
        // authTokensManager
        //     .refreshing(false)
        //     .clear();
        authState.refreshing(false);
        authState.logout();

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
            // const authTokens = authTokensManager.tokens;
            const authTokens = authState.tokens;

            originConfig.headers['Accept-Language'] = getLocale();

            if(authTokens?.accessToken){
                originConfig.headers['Authorization'] = `Bearer ${authTokens.accessToken}`;
            }

            // if(!checkIsRefreshTokenAPI(originConfig) && authTokensManager.isRefreshing){
            //     pushPendingRequestQueues(resolve, reject)(originConfig);
            //     reject(new AxiosCancelException({message: 'Token refreshing, so request save queues not send', code: 'REFRESH_TOKEN'}));
            // }
            if(!checkIsRefreshTokenAPI(originConfig) && authState.isRefreshing){
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
        // const authTokens = authTokensManager.tokens;
        const authTokens = authState.tokens;


        // const {refreshToken: refreshTokenValue} = getAuthTokens();
        if (onError) {
            onError(responseFirstError);
        }

        if(response && originalConfig) {
            if (status === 401 || responseFirstError.code === 'UNAUTHENTICATED') {
                // 若沒有 RefreshToken 或 這次請求是 RefreshToken API 則直接拋出錯誤

                if (isEmpty(authTokens?.refreshToken) || checkIsRefreshTokenAPI(originalConfig)) {
                    handleOnForceLogout();
                    return Promise.reject(new SystemException(responseFirstError));
                }

                // if (!authTokensManager.isRefreshing) {
                //     authTokensManager.refreshing(true);
                //     postRefreshToken();
                // }
                if (!authState.isRefreshing) {
                    authState.refreshing(true);
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
