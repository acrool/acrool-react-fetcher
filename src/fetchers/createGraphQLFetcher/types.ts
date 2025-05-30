import {IRequestConfig} from '../types';


export interface IUseFetcherArgs<TVariables = {}> {
    variables?: TVariables
    fetchOptions?: IRequestConfig
}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}


