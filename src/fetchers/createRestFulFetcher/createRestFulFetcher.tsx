import {delay} from '@acrool/js-utils/promise';
import {AxiosInstance} from 'axios';

import {fetcherLeastTime} from '../config';
import {IRequestConfig} from '../types';
import {ERequestHeaderContentType} from './config';
import {IDocument, IUseFetcherArgs, TFileMapVariables} from './types';
import {flattenObjectToFormData} from './utils';


/**
 * RestFul 的查詢器
 * @param axiosInstance
 * @param document
 */
const createRestFulFetcher = <TData, TArgs extends IUseFetcherArgs<TFileMapVariables>>(
    axiosInstance: AxiosInstance,
    document: IDocument
): ((args?: TArgs) => Promise<TData>) => {

    return async (args?: TArgs) => {

        const method = document?.method;
        const options = args?.fetchOptions?.fetchOptions;
        const params = args?.params;

        /**
         * 取得 Axios 設定
         */
        const getAxiosConfig = (): IRequestConfig => {
            if(method && ['post','put'].includes(method.toLowerCase())){
                const {body, contentType} = flattenObjectToFormData(args?.body ?? {}, ERequestHeaderContentType.formData);
                return {
                    url: document.url,
                    method,
                    data: body,
                    headers: {
                        ...options?.headers,
                        'Content-Type': contentType,
                    },
                };
            }
            if(method && ['delete'].includes(method.toLowerCase())){
                const {body, contentType} = flattenObjectToFormData(args?.body ?? {}, ERequestHeaderContentType.formUrlDecode);
                return {
                    url: document.url,
                    method,
                    data: body,
                    headers: {
                        ...options?.headers,
                        'Content-Type': contentType,
                    }
                };
            }

            return {
                url: document.url,
                method,
                params,
                headers: {
                    ...options?.headers,
                    'Content-Type': ERequestHeaderContentType.json,
                }
            };
        };



        const [res] = await Promise.all([
            axiosInstance(getAxiosConfig()),
            delay(options?.leastTime ?? fetcherLeastTime),
        ]);

        return res.data;

    };
};


export default createRestFulFetcher;
