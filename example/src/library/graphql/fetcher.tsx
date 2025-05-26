import {AxiosRequestConfig} from 'axios';

import {useAxiosClient} from '@/library/axios/AxiosClientProvider';
import {axiosInstance} from '@/library/axios/config';

import {getVariablesFileMap, TFileMapVariables} from './utils';

// doc: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#usage-example-isreacthook-true
const delay = (ms: number) => new Promise(resolve => {
    setTimeout(() => {
        resolve(true);
    }, ms);
});


export interface IFetchOptions extends AxiosRequestConfig{
    requestCode?: string
}
export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}

// export const useFetchData = <TData, TArgs extends IUseFetcherArgs<TFileMapVariables>>(
//     query: string,
// ): ((args?: TArgs) => Promise<TData>) => {
//     const axiosInstance = useAxiosClient();
//
//     ;
// };


export interface IUseFetcherArgs<TVariables = {}> {variables?: TVariables, fetchOptions?: IFetchOptions}
export interface IUseSubscriptionArgs<TVariables> {variables?: TVariables}

export const fetchData = <TData, TArgs extends IUseFetcherArgs<TFileMapVariables>>(
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
        };

        const [res] = await Promise.all([
            axiosInstance.post(endpoint, data, {
                ...options,
                headers,
            }),
            delay(400),
        ]);
        return res.data.data;
    };
};

//
// export const fetchData = async <TData, TVariables extends IUseFetcherArgs<TFileMapVariables>, TArgs extends IFetchOptions>
// (
//     query: {document: string, variables: TVariables},
//     api: any,
//     args?: TArgs
// ) => {
//
//     let data: FormData|string|undefined = undefined;
//     let contentType: string|undefined = undefined;
//     const options = args?.fetchOptions;
//     // const variables = args?.variables;
//
//     let isMultipartFormData = false;
//     if(query.variables){
//         const varOptions = getVariablesFileMap<TVariables>(query.variables);
//         isMultipartFormData = varOptions.values.length > 0;
//
//         // 如有檔案上傳，變更格式
//         if(isMultipartFormData) {
//             contentType = 'multipart/form-data';
//
//             const operations = JSON.stringify({
//                 query: query.document,
//                 variables: varOptions.variables
//             });
//
//             const graphqlFormOptions = [
//                 {name: 'operations', value: operations},
//                 {name: 'map', value: JSON.stringify({0: varOptions.map})},
//                 ...varOptions.values.map((row, index) => {
//                     return {name: index, value: row};
//                 }),
//             ];
//
//             data = new FormData();
//             graphqlFormOptions.forEach(row => {
//                 (data as FormData).append(row.name.toString(), row.value);
//             });
//
//         }
//     }
//
//     if(!isMultipartFormData){
//         contentType = 'application/json';
//         data = JSON.stringify({query: query.document, variables: query.variables});
//     }
//
//     const endpoint = '/';
//     const headers = {
//         'Content-Type': contentType,
//         'Apollo-Require-Preflight': 'true',
//         'X-Requested-With': 'XMLHttpRequest',
//     };
//
//     const [res] = await Promise.all([
//         axiosInstance.post(endpoint, data, {
//             ...options,
//             headers,
//         }),
//         delay(400),
//     ]);
//
//     return {
//         data: res.data.data,
//         meta: {},
//     };
//     // return res.data.data;
// };
