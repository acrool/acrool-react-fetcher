import {objToFormData} from '@acrool/js-utils/convert';

import {ERequestHeaderContentType} from './config';
import {TBody, TContentTypeResolver} from './types';

/**
 * 依據 Content-Type 處理 body
 * @param data
 * @param contentType
 */
export const getDataWithContentType = (
    contentType: ERequestHeaderContentType,
    data: TBody = {},
): FormData | string => {
    if (contentType === ERequestHeaderContentType.formData) return objToFormData(data);
    if (contentType === ERequestHeaderContentType.formUrlDecode) new URLSearchParams(data as Record<string, string>).toString();
    return JSON.stringify(data);
};


/**
 * 根據 method 取得 Content-Type
 * @param method
 */
export const getContentTypeWithMethod: TContentTypeResolver = (method) => {
    if (['post', 'put'].includes(method.toLowerCase())) {
        // 預設 post/put 用 application/json
        return ERequestHeaderContentType.json;
    }
    if (['delete'].includes(method.toLowerCase())) {
        // 預設 delete 用 application/json
        return ERequestHeaderContentType.json;
    }
    // 其他（如 get）
    return ERequestHeaderContentType.json;
};
