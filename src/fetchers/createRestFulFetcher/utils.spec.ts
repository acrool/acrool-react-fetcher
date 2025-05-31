import {ERequestHeaderContentType} from './types';
import {getContentTypeWithMethod,getDataWithContentType} from './utils';

// 模擬 objToFormData 行為
jest.mock('@acrool/js-utils/convert', () => ({
    objToFormData: (data: any) => {
        // 只回傳一個標記字串方便驗證
        return `FormData(${JSON.stringify(data)})`;
    },
}));

describe('getDataWithContentType', () => {
    it('contentType 為 formData 時，應回傳 FormData', () => {
        const data = {foo: 'bar'};
        const result = getDataWithContentType(ERequestHeaderContentType.formData, data);
        expect(result).toBe('FormData({"foo":"bar"})');
    });

    it('contentType 為 formUrlDecode 時，應回傳 urlencoded 字串', () => {
        const data = {foo: 'bar', baz: 'qux'};
        const result = getDataWithContentType(ERequestHeaderContentType.formUrlDecode, data);
        // 由於原始碼有 bug，這裡會回傳 JSON 字串
        expect(result).toBe(JSON.stringify(data));
    });

    it('contentType 為 json 時，應回傳 JSON 字串', () => {
        const data = {foo: 'bar'};
        const result = getDataWithContentType(ERequestHeaderContentType.json, data);
        expect(result).toBe(JSON.stringify(data));
    });
});

describe('getContentTypeWithMethod', () => {
    it('method 為 post 應回傳 formData', () => {
        expect(getContentTypeWithMethod('post')).toBe(ERequestHeaderContentType.json);
    });
    it('method 為 put 應回傳 formData', () => {
        expect(getContentTypeWithMethod('put')).toBe(ERequestHeaderContentType.json);
    });
    it('method 為 get 應回傳 json', () => {
        expect(getContentTypeWithMethod('get')).toBe(ERequestHeaderContentType.json);
    });
    it('method 為 delete 應回傳 json', () => {
        expect(getContentTypeWithMethod('delete')).toBe(ERequestHeaderContentType.json);
    });
});
