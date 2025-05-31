import {AxiosInstance} from 'axios';

import createGraphQLFetcher from './createGraphQLFetcher';

// 用於模擬 delay
jest.mock('@acrool/js-utils/promise', () => ({
    delay: () => Promise.resolve(),
}));

describe('createGraphQLFetcher', () => {
    let mockAxiosInstance: jest.Mocked<AxiosInstance>;

    beforeEach(() => {
        mockAxiosInstance = {
            post: jest.fn().mockResolvedValue({data: {data: {result: 'ok'}}}),
        } as any;
    });

    it('應該正確發送基本 GraphQL 查詢', async () => {
        const query = 'query { hello }';
        const fetcher = createGraphQLFetcher(mockAxiosInstance, query);
        const result = await fetcher();
        expect(mockAxiosInstance.post).toHaveBeenCalledWith(
            '',
            JSON.stringify({query, variables: undefined}),
            expect.objectContaining({
                headers: expect.objectContaining({'Content-Type': 'application/json'}),
            })
        );
        expect(result).toEqual({result: 'ok'});
    });

    it('應該正確傳遞 variables', async () => {
        const query = 'query ($id: ID!) { user(id: $id) { name } }';
        const fetcher = createGraphQLFetcher(mockAxiosInstance, query);
        const variables = {id: 123};
        await fetcher({variables});
        expect(mockAxiosInstance.post).toHaveBeenCalledWith(
            '',
            JSON.stringify({query, variables}),
            expect.any(Object)
        );
    });

    it('應該正確處理 multipart/form-data（檔案上傳）', async () => {
        const query = 'mutation ($file: Upload!) { upload(file: $file) { url } }';
        const file = new File(['file content'], 'test.txt', {type: 'text/plain'});
        const variables = {file};
        const fetcher = createGraphQLFetcher(mockAxiosInstance, query);
        await fetcher({variables});
        // 取得呼叫時的 data 參數
        const call = mockAxiosInstance.post.mock.calls[0];
        const data = call[1] as FormData;
        expect(data instanceof FormData).toBe(true);
        expect(Array.from(data.keys())).toEqual(['operations', 'map', '0']);
        expect(data.get('operations')).toContain(query);
        expect(data.get('map')).toContain('variables.file');
        expect(data.get('0')).toBe(file);
        expect(call[2]?.headers?.['Content-Type']).toBe('multipart/form-data');
    });

    it('應該合併自訂 headers', async () => {
        const query = 'query { hello }';
        const fetcher = createGraphQLFetcher(mockAxiosInstance, query);
        await fetcher({fetchOptions: {headers: {Authorization: 'Bearer token'}}});
        const call = mockAxiosInstance.post.mock.calls[0];
        expect(call[2]?.headers?.Authorization).toBe('Bearer token');
    });
});
