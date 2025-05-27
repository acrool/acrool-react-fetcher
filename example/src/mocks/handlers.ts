import {graphql, http, HttpResponse} from 'msw';

let validAccessToken = 'mock-login-access-token';
let validRefreshToken = 'mock-login-refresh-token';

export const handlers = [


    graphql.query('GetBookmark', ({request, variables}) => {
        const headerAuth = request.headers.get('authorization');
        if (headerAuth !== `Bearer ${validAccessToken}`) {
            return HttpResponse.json<{}>({
                errors: [
                    {
                        message: 'Token expired or invalid',
                        code: 'Unauthorized',
                        path: 'authLogin',
                    }
                ]
            }, {status: 401});
        }
        return HttpResponse.json({
            data: {
                bookmark: {
                    id: variables.bookmarkId,
                    name: 'Acrool',
                    desc: '任務管理系統',
                    url: 'https://acrool.com',
                    devUrl: '',
                    evaluateUrl: '',
                    country: 'TWA',
                    remark: '',
                    faviconUrl: null
                }
            }
        });
    }),



    // authLogin graphql mutation handler
    graphql.mutation('PutAuthLogin', async ({variables}) => {
        const {input} = variables as any;
        if (input.account === 'tester' && input.password === 'acrool_is_good_task_system') {
            validAccessToken = 'mock-login-valid-token';
            return HttpResponse.json({
                data: {
                    authLogin: {
                        name: '測試者',
                        authTokens: {
                            accessToken: validAccessToken,
                            refreshToken: validRefreshToken
                        }
                    }
                }
            });
        }
        return HttpResponse.json({
            errors: [
                {message: '帳號或密碼錯誤'}
            ]
        }, {status: 401});
    }),

    // authLogout graphql mutation handler
    graphql.mutation('PutAuthLogout', async () => {
        validAccessToken = '';
        return HttpResponse.json({
            data: {
                authLogout: {
                    message: '已成功登出',
                    updateCount: 1
                }
            }
        });
    }),


    // refreshToken handler
    graphql.mutation('PutAuthRefreshToken', async ({request, variables}) => {
    // 這裡可以驗證 refreshToken
        if (variables.input.refreshToken !== validRefreshToken) {
            return HttpResponse.json({
                errors: [
                    {message: '刷新Token失敗'}
                ]
            }, {status: 401});
        }


        validAccessToken = 'refresh-new-access-token'; // 模擬換新 token
        validRefreshToken = 'refresh-new-refresh-token';
        return HttpResponse.json({
            data: {
                authRefreshToken: {
                    authTokens: {
                        accessToken: validAccessToken,
                        refreshToken: validRefreshToken,
                    }
                }
            }
        });
    }),


];
