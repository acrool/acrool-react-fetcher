import {IRequestConfig} from '../types';


export type IUseFetcherArgs<TVariables> = TVariables | (TVariables & {
    fetchOptions?: IRequestConfig,
})

export interface IDocument {
    url: string
    method?: string
}

export type TFileMapVariables = Record<string, any>;
export type TBody = Record<string, any> | FormData | File[] | File;
export type TContentTypeResolver = (method: string) => string;

export enum ERequestHeaderContentType {
    formData = 'multipart/form-data',
    formUrlDecode = 'application/x-www-form-urlencoded',
    json = 'application/json',
}

