import {AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';

export interface IFetchOptions extends InternalAxiosRequestConfig{
    requestCode?: string
}


export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}


export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}

export interface IAuthTokens { accessToken?: string, refreshToken?: string }

export interface IResponseFirstError {
    message: string
    code: string
    path?: string
    args?: any
}
