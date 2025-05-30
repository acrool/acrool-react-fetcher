import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance} from 'axios';

import {fetcherLeastTime} from '../config';
import {IUseFetcherArgs} from './types';
import {getVariablesFileMap, TFileMapVariables} from './utils';

// doc: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true


/**
 * GrqpahQL 的查詢氣
 * @param axiosInstance
 * @param query
 */
const createGraphQL2Fetcher = <TData, TArgs extends IUseFetcherArgs<TFileMapVariables>>(
    axiosInstance: AxiosInstance,
    query: string,
): ((args?: TArgs) => Promise<TData>) => {

    return async (args?: TArgs) => {
        let data: FormData|string|undefined = undefined;
        let contentType: string|undefined = undefined;
        const options = args?.fetchOptions;
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
        const headers = {
            'Content-Type': contentType,
            'Apollo-Require-Preflight': 'true',
            'X-Requested-With': 'XMLHttpRequest',
            ...options?.headers,
        };

        const [res] = await Promise.all([
            axiosInstance.post(endpoint, data, {
                ...options,
                headers,
            }),
            delay(options?.leastTime ?? fetcherLeastTime),
        ]);
        return res.data.data;
    };
};

export default createGraphQL2Fetcher;
