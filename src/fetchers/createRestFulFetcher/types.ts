import {IRequestConfig} from '../types';
import {ERequestContentType, ERequestMethod} from './config';




// export interface IUseRestFulFetcherArgs<TVariables = {}> {
//     variables?: TVariables
//     fetchOptions?: IRequestConfig
// }

export type IRestFulEndpointsQueryReturn<TVariables> =
    TVariables extends void
        ? void | { fetchOptions?: IRequestConfig }
        : { variables: TVariables, fetchOptions?: IRequestConfig };


export type ICreateRestFulFetcherArgs<TVariables> =
    TVariables extends void
        ? void | { fetchOptions?: IRequestConfig }
        : { body: TFileMapVariables, param: TFileMapVariables, fetchOptions?: IRequestConfig };


export interface IDocument {
    url: string
    method?: string
    contentType?: string
}

export type TFileMapVariables = Record<string, any>;
export type TBody = Record<string, any> | FormData | File[] | File;
export type TContentTypeResolver = (method: ERequestMethod) => ERequestContentType;

export interface ICreateRestFulOptions {
    contentTypeResolver?: TContentTypeResolver
    fetcherLeastTime?: number
}
