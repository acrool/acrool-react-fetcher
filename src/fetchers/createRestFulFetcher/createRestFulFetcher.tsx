import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance} from 'axios';

import {fetcherLeastTime} from '../config';
import {IRequestConfig} from '../types';
import {ERequestMethod} from './config';
import {IDocument, IUseRestFulFetcherArgs, TContentTypeResolver, TFileMapVariables} from './types';
import {getContentTypeWithMethod, getDataWithContentType} from './utils';



/**
 * RestFul 的查詢器
 * https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
 * @param axiosInstance
 * @param document
 * @param contentTypeResolver
 */
const createRestFulFetcher = <TData, TArgs extends IUseRestFulFetcherArgs<TFileMapVariables|void>>(
    axiosInstance: AxiosInstance,
    document: IDocument,
    contentTypeResolver: TContentTypeResolver = getContentTypeWithMethod
): ((args?: TArgs) => Promise<TData>) => {
    return async (args?: TArgs) => {
        const method = document?.method || '';
        const options = args?.fetchOptions;
        const variables = typeof args === 'object' && args !== null && 'variables' in args ? args.variables : undefined;

        const params = variables?.params;
        const contentType = options?.headers?.contentType ?? contentTypeResolver(method.toUpperCase() as ERequestMethod);

        const config: IRequestConfig = {
            url: document.url,
            method,
            params,
            data: getDataWithContentType(contentType, variables?.body),
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
