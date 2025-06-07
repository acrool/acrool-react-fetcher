import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance} from 'axios';

import {fetcherLeastTime} from '../config';
import {IRequestConfig} from '../types';
import {ERequestMethod} from './config';
import {
    IDocument,
    IUseRestFulFetcherArgs,
    IUseRestFulFetcherArgs2,
    TContentTypeResolver,
    TFileMapVariables
} from './types';
import {getContentTypeWithMethod, getDataWithContentType} from './utils';



/**
 * RestFul 的查詢器
 * https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
 * @param axiosInstance
 * @param document
 * @param contentTypeResolver
 */
const createRestFulFetcher = <TData, TArgs extends IUseRestFulFetcherArgs2<TFileMapVariables|void>>(
    axiosInstance: AxiosInstance,
    document: IDocument,
    contentTypeResolver: TContentTypeResolver = getContentTypeWithMethod
): ((args?: TArgs) => Promise<TData>) => {
    return async (args?: TArgs) => {
        const method = document?.method || '';
        const options = args?.fetchOptions;
        const body = typeof args === 'object' && args !== null && 'body' in args ? args.body : undefined;
        const params = typeof args === 'object' && args !== null && 'params' in args ? args.params : undefined;

        console.log('variables', args);

        const contentType = options?.headers?.contentType ?? contentTypeResolver(method.toUpperCase() as ERequestMethod);

        const config: IRequestConfig = {
            url: document.url,
            method,
            params,
            data: getDataWithContentType(contentType, body),
            ...options,
            headers: {
                ...options?.headers,
                'Content-Type': contentType,
            },
        };

        const [res] = await Promise.all([
            axiosInstance(config),
            delay(options?.leastTime ?? fetcherLeastTime),
        ]);
        return res.data;
    };
};


export default createRestFulFetcher;
