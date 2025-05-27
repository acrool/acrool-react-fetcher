import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

import AuthTokensManager from '../AuthTokensManager';
import {IAuthTokens, IResponseFirstError} from '../types';

export type TInterceptorRequest = (value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
export type TInterceptorResponseSuccess = (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;
export type TInterceptorResponseError = (error: AxiosError<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;

export interface IAxiosClientProviderProps {
    // authTokensManager: AuthTokensManager
    // getAuthTokens: () => IAuthTokens |undefined
    onRefreshToken?: () => Promise<IAuthTokens|undefined>
    onForceLogout: () => void
        getLocale: () => string
    t?: (key: string, options?: any) => string
    onError?: (error: IResponseFirstError) => void
}
