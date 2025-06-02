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

    // 2. PutAuthLogin → POST /api/auth/sign/login
    http.post('/api/auth/sign/login', async ({request}) => {
        const formData = await request.formData();
        const account = formData.get('account');
        const password = formData.get('password');
        if (account === 'tester' && password === 'acrool_is_good_task_system') {
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
        const body = (await request.json()) as {refreshToken: string};
        const {refreshToken} = body;
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
