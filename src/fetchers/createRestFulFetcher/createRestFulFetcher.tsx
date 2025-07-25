import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance, AxiosRequestConfig} from 'axios';

import {IRequestConfig} from '../types';
import {ERequestContentType, ERequestMethod} from './config';
import {
    ICreateRestFulFetcherArgs, ICreateRestFulOptions,
    IDocument,
    TFileMapVariables
} from './types';
import {getDataWithContentType} from './utils';



/**
 * RestFul 的查詢器
 * https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
 * @param axiosInstance
 * @param document
 * @param options
 */
const createRestFulFetcher = <TData, TArgs extends ICreateRestFulFetcherArgs<TFileMapVariables|void>>(
    axiosInstance: AxiosInstance,
    document: IDocument,
    options?: ICreateRestFulOptions
): ((args?: TArgs) => Promise<TData>) => {
    return async (args?: TArgs) => {
        const method = document?.method || '';
        let fetchOptions = {} as IRequestConfig;
        let headers = {} as AxiosRequestConfig['headers'];

        if(args?.fetchOptions){
            const {headers: tmpHeader, ...tmpFetchOptions} = args.fetchOptions;
            fetchOptions = tmpFetchOptions;
            headers = tmpHeader;
        }

        const body = typeof args === 'object' && args !== null && 'body' in args ? args.body : undefined;
        const params = typeof args === 'object' && args !== null && 'params' in args ? args.params : undefined;


        let contentType = ERequestContentType.json;

        if(headers?.contentType) contentType = headers.contentType;
        else if(options?.contentTypeResolver) contentType = options.contentTypeResolver(method.toUpperCase() as ERequestMethod);
        else if(document.contentType) contentType = document.contentType as ERequestContentType;


        const config: IRequestConfig = {
            url: document.url,
            method,
            params,
            data: getDataWithContentType(contentType, body),
            fetchOptions,
            headers: {
                ...headers,
                'Content-Type': contentType,
            },
        };

        const [res] = await Promise.all([
            axiosInstance(config),
            delay(fetchOptions?.leastTime ?? options?.fetcherLeastTime ?? 100),
        ]);
        return res.data;
    };
};


export default createRestFulFetcher;
