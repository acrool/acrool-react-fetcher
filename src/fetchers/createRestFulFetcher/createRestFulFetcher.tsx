import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance} from 'axios';

import {fetcherLeastTime} from '../config';
import {IRequestConfig} from '../types';
import {IDocument, IUseFetcherArgs, TContentTypeResolver, TFileMapVariables} from './types';
import {getContentTypeWithMethod, getDataWithContentType} from './utils';



/**
 * RestFul 的查詢器
 * https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
 * @param axiosInstance
 * @param document
 * @param contentTypeResolver
 */
const createRestFulFetcher = <TData, TArgs extends IUseFetcherArgs<TFileMapVariables>>(
    axiosInstance: AxiosInstance,
    document: IDocument,
    contentTypeResolver: TContentTypeResolver = getContentTypeWithMethod
): ((args?: TArgs) => Promise<TData>) => {
    return async (args?: TArgs) => {
        const method = document?.method || '';
        const options = args?.fetchOptions?.fetchOptions;
        const params = args?.params;
        const contentType = options?.headers?.contentType ?? contentTypeResolver(method.toLowerCase());

        const config: IRequestConfig = {
            url: document.url,
            method,
            params,
            data: getDataWithContentType(contentType, args?.body),
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
