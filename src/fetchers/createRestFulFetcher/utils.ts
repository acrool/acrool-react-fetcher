import {objToFormData} from '@acrool/js-utils/convert';

import {ERequestHeader} from './config';

/**
 *
 * @param obj 送出物件
 * @param contentType
 */
export function flattenObjectToFormData(
    obj: Record<string, any>,
    contentType : ERequestHeader
): { body: FormData | string, contentType: string } {


    if (contentType === ERequestHeader.formData) {
        const formData = objToFormData(obj);
        return {
            contentType,
            body: formData,
        };

    } else if (contentType === ERequestHeader.formUrlDecode) {
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
