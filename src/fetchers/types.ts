import {InternalAxiosRequestConfig} from 'axios';



export interface IFetchOptions extends InternalAxiosRequestConfig{
    requestCode?: string
}

export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}

