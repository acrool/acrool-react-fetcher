import {IRequestConfig} from '../types';



export interface IUseFetcherArgs<TVariables extends IObjectArgs> {
    params?: TVariables['params']
    body?: TVariables['body']
    variables?: TVariables['variables']
    fetchOptions?: IRequestConfig
}

export interface IObjectArgs {
    params?: unknown
    variables?: unknown
    body?: unknown
}



export interface IDocument {
    url: string
    method?: string
}

export type TFileMapVariables = Record<string, any>;
