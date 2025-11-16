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
): FormData | string | object => {
    if ([ERequestContentType.formData].includes(contentType)) return objToFormData(data);
    if(contentType === ERequestContentType.formUrlDecode) return data;
    return JSON.stringify(data);
};

