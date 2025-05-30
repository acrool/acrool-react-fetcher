import {objToFormData} from '@acrool/js-utils/convert';

import {ERequestHeaderContentType} from './config';

/**
 *
 * @param obj 送出物件
 * @param contentType
 */
export function flattenObjectToFormData(
    obj: Record<string, any>,
    contentType: ERequestHeaderContentType
): { body: FormData | string, contentType: string } {


    if (contentType === ERequestHeaderContentType.formData) {
        const formData = objToFormData(obj);
        return {
            contentType,
            body: formData,
        };

    } else if (contentType === ERequestHeaderContentType.formUrlDecode) {
        return {
            contentType,
            body: new URLSearchParams(obj as Record<string, string>).toString(),
        };

    } else {
        return {
            contentType,
            body: JSON.stringify(obj),
        };
    }
}
