import {AxiosRequestConfig} from "axios";

export interface IFetchOptions extends AxiosRequestConfig{
    requestCode?: string
}


export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}


export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}
