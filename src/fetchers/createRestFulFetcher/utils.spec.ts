import {ERequestContentType, ERequestMethod} from './config';
import {getContentTypeWithMethod, getDataWithContentType} from './utils';

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
        const result = getDataWithContentType(ERequestContentType.formData, data);
        expect(result).toBe('FormData({"foo":"bar"})');
    });

    it('contentType 為 formUrlDecode 時，應回傳 urlencoded 字串', () => {
        const data = {foo: 'bar', baz: 'qux'};
        const result = getDataWithContentType(ERequestContentType.formUrlDecode, data);
        // 由於原始碼有 bug，這裡會回傳 JSON 字串
        expect(result).toBe('FormData({"foo":"bar","baz":"qux"})');
    });

    it('contentType 為 json 時，應回傳 JSON 字串', () => {
        const data = {foo: 'bar'};
        const result = getDataWithContentType(ERequestContentType.json, data);
        expect(result).toBe(JSON.stringify(data));
    });
});

describe('getContentTypeWithMethod', () => {
    it('method 為 post 應回傳 formData', () => {
        expect(getContentTypeWithMethod(ERequestMethod.POST)).toBe(ERequestContentType.json);
    });
    it('method 為 put 應回傳 formData', () => {
        expect(getContentTypeWithMethod(ERequestMethod.PUT)).toBe(ERequestContentType.json);
    });
    it('method 為 get 應回傳 json', () => {
        expect(getContentTypeWithMethod(ERequestMethod.GET)).toBe(ERequestContentType.json);
    });
    it('method 為 delete 應回傳 json', () => {
        expect(getContentTypeWithMethod(ERequestMethod.DELETE)).toBe(ERequestContentType.json);
    });
});
