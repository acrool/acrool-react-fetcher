import {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import React, {createContext, useContext, useLayoutEffect} from 'react';

import {SystemException} from '../exception';
import {checkIsRefreshTokenAPI, getResponseFirstError, getSystemError} from '../utils';
import AxiosCancelException from './AxiosCancelException';
import {axiosInstance} from './config';
import {AxiosClientDependencies,TInterceptorRequest, TInterceptorResponse} from './types';

let pendingRequestQueues: Array<(isRefreshOK: boolean) => void> = [];
let isTokenRefreshing = false;

export const AxiosClientContext = createContext<AxiosInstance>(axiosInstance);
export const useAxiosClient = () => useContext(AxiosClientContext);

interface IProps {
    children: React.ReactNode
    dependencies: AxiosClientDependencies
}

const AxiosClientProvider = ({
    children,
    dependencies,
}: IProps) => {
    const {
        getTokenInfo,
        refreshToken,
        onForceLogout,
        getLocale,
        t = (key: string, options?: any) => key, // fallback
        onError,
    } = dependencies;

    useLayoutEffect(() => {
        const interceptorReq = axiosInstance.interceptors.request.use(interceptorsRequest);
        const interceptorRes = axiosInstance.interceptors.response.use(interceptorsResponse);
        return () => {
            axiosInstance.interceptors.request.eject(interceptorReq);
            axiosInstance.interceptors.response.eject(interceptorRes);
        };
    }, [isTokenRefreshing]);

    const postRefreshToken = () => {
        refreshToken()
            .then(res => {
                if(!res) return;
                // 假設外部 refreshToken 已經自動更新 token 狀態
                runPendingRequest(true);
            })
            .catch(() => {
                onForceLogout();
                runPendingRequest(false);
            });
    };

    const runPendingRequest = (isSuccess: boolean) => {
        isTokenRefreshing = false;
        for(const cb of pendingRequestQueues){
            cb(isSuccess);
        }
        pendingRequestQueues = [];
    };

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

    const interceptorsRequest: TInterceptorRequest = (originConfig) => {
        return new Promise((resolve, reject) => {
            const {accessToken} = getTokenInfo();
            originConfig.headers['Accept-Language'] = getLocale();
            originConfig.headers['Authorization'] = accessToken ? `Bearer ${accessToken}`: undefined;
            if(!checkIsRefreshTokenAPI(originConfig) && isTokenRefreshing){
                pushPendingRequestQueues(resolve, reject)(originConfig);
                reject(new AxiosCancelException({message: 'Token refreshing, so request save queues not send', code: 'REFRESH_TOKEN'}));
            }
            resolve(originConfig);
        });
    };

    const interceptorsResponse: TInterceptorResponse = (response) => {
        const originalConfig = response.config;
        const error = getResponseFirstError(response);
        const {refreshToken: refreshTokenValue} = getTokenInfo();
        if(error){
            if (onError) {
                onError({code: error.code, response, originalConfig});
            }
            if(error.code === 'UNAUTHENTICATED'){
                if(!refreshTokenValue || checkIsRefreshTokenAPI(originalConfig)) {
                    isTokenRefreshing = false;
                    onForceLogout();
                    return Promise.reject(getSystemError(response));
                }
                if(!isTokenRefreshing){
                    isTokenRefreshing = true;
                    postRefreshToken();
                }
                return new Promise((resolve, reject) => {
                    pushPendingRequestQueues(resolve, reject)(originalConfig);
                });
            }
            return Promise.reject(getSystemError(response));
        }
        return response;
    };

    return <AxiosClientContext.Provider value={axiosInstance}>{children}</AxiosClientContext.Provider>;
};

export default AxiosClientProvider;
