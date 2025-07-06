import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance, AxiosRequestConfig} from 'axios';

import {IRequestConfig} from '../types';
import {ICreateGraphqlOptions, IUseGraphQLFetcherArgs} from './types';
import {getVariablesFileMap, TFileMapVariables} from './utils';



/**
 * GraphQL 的查詢器
 * https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
 * @param axiosInstance
 * @param query
 * @param options
 */
const createGraphQLFetcher = <TData, TArgs extends IUseGraphQLFetcherArgs<TFileMapVariables>>(
    axiosInstance: AxiosInstance,
    query: string,
    options: ICreateGraphqlOptions
): ((args?: TArgs) => Promise<TData>) => {

    return async (args?: TArgs) => {
        let data: FormData|string|undefined = undefined;
        let contentType: string|undefined = undefined;
        let fetchOptions = {} as IRequestConfig;
        let headers = {} as AxiosRequestConfig['headers'];

        if(args?.fetchOptions){
            const {headers: tmpHeader, ...tmpFetchOptions} = args.fetchOptions;
            fetchOptions = tmpFetchOptions;
            headers = tmpHeader;
        }

        const variables = args?.variables;

        let isMultipartFormData = false;
        if(variables){
            const varOptions = getVariablesFileMap<TArgs['variables']>(variables);
            isMultipartFormData = varOptions.values.length > 0;

            // 如有檔案上傳，變更格式
            if(isMultipartFormData) {
                contentType = 'multipart/form-data';

                const operations = JSON.stringify({
                    query,
                    variables: varOptions.variables
                });

                const fileMapObj = varOptions.map.reduce<Record<string, string[]>>((acc, val, index) => {
                    acc[index] = [val];
                    return acc;
                }, {});

                const graphqlFormOptions = [
                    {name: 'operations', value: operations},
                    {name: 'map', value: JSON.stringify(fileMapObj)},
                    ...varOptions.values.map((row, index) => {
                        return {name: index, value: row};
                    }),
                ];

                data = new FormData();
                graphqlFormOptions.forEach(row => {
                    (data as FormData).append(row.name.toString(), row.value);
                });

            }
        }

        if(!isMultipartFormData){
            contentType = 'application/json';
            data = JSON.stringify({query, variables});
        }

        const endpoint = '';

        const [res] = await Promise.all([
            axiosInstance.post(endpoint, data, {
                fetchOptions,
                headers: {
                    ...headers,
                    'Content-Type': contentType,
                    'Apollo-Require-Preflight': 'true',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }),
            delay(fetchOptions?.leastTime ?? options?.fetcherLeastTime ?? 100),
        ]);
        return res.data.data;
    };
};

export default createGraphQLFetcher;
