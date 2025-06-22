import createRestFulFetcher from './createRestFulFetcher';
import {IDocument, ICreateRestFulFetcherArgs} from './types';

describe('createRestFulFetcher', () => {
    let mockAxios: jest.Mock;
    let document: IDocument;

    beforeEach(() => {
        mockAxios = jest.fn();
        document = {
            url: '/api/test',
            method: 'get',
        };
    });

    it('應正確發送 GET 請求並回傳資料', async () => {
        const mockData = {foo: 'bar'};
        mockAxios.mockResolvedValueOnce({data: mockData});
        const fetcher = createRestFulFetcher(mockAxios as any, document);
        const result = await fetcher();
        expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
            url: '/api/test',
            method: 'get',
        }));
        expect(result).toEqual(mockData);
    });

    it('應正確處理 POST 請求與 body', async () => {
        document.method = 'post';
        const mockData = {ok: 1};
        mockAxios.mockResolvedValueOnce({data: mockData});
        const fetcher = createRestFulFetcher(mockAxios as any, document);
        const body = {a: 1};
        await fetcher({body} as ICreateRestFulFetcherArgs<any>);
        expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
            method: 'post',
            data: expect.anything(),
        }));
    });

    it('應正確處理 headers 與 params', async () => {
        const mockData = {ok: true};
        mockAxios.mockResolvedValueOnce({data: mockData});
        const fetcher = createRestFulFetcher(mockAxios as any, document);
        const args = {
            params: {id: 123},
            fetchOptions: {
                fetchOptions: {
                    headers: {Authorization: 'Bearer token'},
                },
            },
        } as ICreateRestFulFetcherArgs<any>;
        await fetcher(args);
        expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
            params: {id: 123},
            headers: expect.objectContaining({Authorization: 'Bearer token'}),
        }));
    });
});
