import {http, HttpResponse} from 'msw';

let validAuthTokens = {
    accessToken: 'init-accessToken',
    refreshToken: 'init-refreshToken',
};
// let validAuthTokens = {
//     accessToken: 'login-accessToken',
//     refreshToken: 'login-refreshToken',
// };
let refreshCount = 0;

export const handlers = [
    // 1. GetBookmark → GET /bookmark/:bookmarkId
    http.get('/api/bookmark/:bookmarkId', ({request, params}) => {
        const headerAuth = request.headers.get('authorization');
        if (headerAuth !== `Bearer ${validAuthTokens.accessToken}`) {
            return HttpResponse.json<{}>({
                message: 'Token expired or invalid',
                code: 'Unauthorized',
                path: `/api/bookmark/${params.bookmarkId}`,
            }, {status: 401});
        }
        return HttpResponse.json({
            id: params.bookmarkId,
            name: 'Acrool',
            desc: '任務管理系統',
            url: 'https://acrool.com',
            faviconUrl: null
        });
    }),

    http.get('/api/bookmark/:bookmarkId/links', ({request, params}) => {
        const headerAuth = request.headers.get('authorization');
        if (headerAuth !== `Bearer ${validAuthTokens.accessToken}`) {
            return HttpResponse.json<{}>({
                message: 'Token expired or invalid',
                code: 'Unauthorized',
                path: `/api/bookmark/${params.bookmarkId}`,
            }, {status: 401});
        }
        return HttpResponse.json({
            rows: [
                {id: '1', url: 'https://acrool.com'},
                {id: '2', url: 'https://medium.com/@imaginechiu'},
                {id: '3', url: 'https://github.com/acrool'}
            ],
            paginateInfo: {
                /** 總筆數 */
                totalItems: 3,
                /** 總頁數 */
                totalPages: 1,
            },
            paginateMeta: {
                currentPage: 1,
                pageLimit: 10,
            },
        });
    }),

    // 2. PutAuthLogin → POST /api/auth/sign/login
    http.post('/api/auth/sign/login', async ({request}) => {
        const formData = await request.json() as {account: string, password: string};

        const account = formData?.account;
        const password = formData?.password;
        if (account === 'tester2') {
            return HttpResponse.json({
                message: '帳號重複',
                code: 'ACCOUNT_RECOMMEND',
                path: '/api/auth/sign/login',
                args: {
                    newAccount: 'tester2a9999'
                }
            }, {status: 400});
        }
        if (account === 'tester1' && password === 'acrool_is_good_task_system') {
            validAuthTokens = {
                accessToken: 'login-accessToken',
                refreshToken: 'login-refreshToken',
            };
            return HttpResponse.json({
                name: '測試者',
                authTokens: validAuthTokens
            });
        }
        return HttpResponse.json({
            message: '帳號或密碼錯誤',
            code: 'Unauthorized',
            path: '/api/auth/sign/login',
        }, {status: 401});
    }),

    // 3. PutAuthLogout → POST /auth/logout
    http.post('/api/auth/sign/logout', async () => {
        validAuthTokens = {
            accessToken: '',
            refreshToken: '',
        };
        return HttpResponse.json({
            message: '已成功登出',
            updateCount: 1
        });
    }),

    // 4. PutAuthRefreshToken → POST /auth/refresh-token
    http.post('/api/auth/sign/refresh', async ({request}) => {
        console.log('backend refreshToken.......');
        const formData = await request.json() as {refreshToken: string};
        const refreshToken = formData.refreshToken;


        if (refreshToken === 'mock-empty-token') {
            return HttpResponse.json({
                authTokens: {}
            });
        }
        if (refreshToken !== validAuthTokens.refreshToken) {
            return HttpResponse.json({
                message: '刷新Token失敗'
            }, {status: 401});
        }
        validAuthTokens = {
            accessToken: `refresh-${refreshCount}-accessToken`,
            refreshToken: `refresh-${refreshCount}-refreshToken`,
        };
        refreshCount += 1;
        return HttpResponse.json({
            authTokens: validAuthTokens
        });
    }),
];
