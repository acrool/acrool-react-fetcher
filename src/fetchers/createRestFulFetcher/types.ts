import {IRequestConfig} from '../types';



export type IUseFetcherArgs<TVariables> = TVariables | (TVariables & {
    fetchOptions?: IRequestConfig,
})

// export interface IObjectArgs {
//     params?: unknown
//     variables?: unknown
//     body?: unknown
// }



export interface IDocument {
    url: string
    method?: string
}

export type TFileMapVariables = Record<string, any>;
