import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

import {IInternalRequestConfig} from '../fetchers/types';
//
//
export type TInterceptorRequest = (value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
export type TInterceptorResponseSuccess = (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;
export type TInterceptorResponseError = (error: AxiosError<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;


//
//
// export interface IFetchOptions extends InternalAxiosRequestConfig{
//     requestCode?: string
// }
//
//
//
// export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
// export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}
//

export interface IFormatResponseErrorReturn {
    message: string
    code?: string
    path?: string
    args?: any
}


export type TGetResponseFormatError = (axiosError?: AxiosError) => IFormatResponseErrorReturn
export type TCheckIsRefreshTokenRequest = (config: IInternalRequestConfig) => boolean
export type TCheckIsErrorResponse = (response: AxiosResponse) => boolean
export type TOnResponseError = (error: IFormatResponseErrorReturn) => void
