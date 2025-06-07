import {IRequestConfig} from '../types';
import {ERequestMethod} from './config';




// export interface IUseRestFulFetcherArgs<TVariables = {}> {
//     variables?: TVariables
//     fetchOptions?: IRequestConfig
// }

export type IUseRestFulFetcherArgs<TVariables> =
    TVariables extends void
        ? void | { fetchOptions?: IRequestConfig }
        : { variables: TVariables, fetchOptions?: IRequestConfig };


export interface IDocument {
    url: string
    method?: string
}

export type TFileMapVariables = Record<string, any>;
export type TBody = Record<string, any> | FormData | File[] | File;
export type TContentTypeResolver = (method: ERequestMethod) => string;

