import {objToFormData} from '@acrool/js-utils/convert';

import {ERequestContentType, ERequestMethod} from './config';
import {TBody, TContentTypeResolver} from './types';

/**
 * 依據 Content-Type 處理 body
 * @param data
 * @param contentType
 */
export const getDataWithContentType = (
    contentType: ERequestContentType,
    data: TBody = {},
): FormData | string => {
    if (contentType === ERequestContentType.formData) return objToFormData(data);
    if (contentType === ERequestContentType.formUrlDecode) new URLSearchParams(data as Record<string, string>).toString();
    return JSON.stringify(data);
};


/**
 * 根據 method 取得 Content-Type
 * @param method
 */
export const getContentTypeWithMethod: TContentTypeResolver = (method) => {
    // if ([ERequestMethod.POST, ERequestMethod.PUT].includes(method)) return ERequestContentType.formData;
    // if ([ERequestMethod.DELETE].includes(method)) return ERequestContentType.formUrlDecode;
    return ERequestContentType.json;
};
