import {IRequestConfig} from '../types';


export interface IUseGraphQLFetcherArgs<TVariables = {}> {
    variables?: TVariables
    fetchOptions?: IRequestConfig
}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}



export interface ICreateGraphqlOptions {
    // contentTypeResolver?: TContentTypeResolver
    fetcherLeastTime?: number
}
