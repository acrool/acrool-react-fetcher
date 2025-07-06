import {graphql, http, HttpResponse} from 'msw';
import {isNotEmpty} from "@acrool/js-utils/equal";

// let validAuthTokens = {
//     accessToken: 'init-accessToken',
//     refreshToken: 'init-refreshToken',
// };
let validAuthTokens = {
    accessToken: 'login-accessToken',
    refreshToken: 'login-refreshToken',
};
let refreshCount = 0;

export const handlers = [


    graphql.query('GetBookmark', ({request, variables}) => {
        const headerAuth = request.headers.get('authorization');
        if (headerAuth !== `Bearer ${validAuthTokens.accessToken}`) {
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
                    faviconUrl: null
                }
            }
        });
    }),



    // authLogin graphql mutation handler
    graphql.mutation('PutAuthLogin', async ({variables}) => {
        const {input} = variables as any;
        if (input.account === 'tester' && input.password === 'acrool_is_good_task_system') {
            validAuthTokens = {
                accessToken: 'login-accessToken',
                refreshToken: 'login-refreshToken',
            };

            return HttpResponse.json({
                data: {
                    authLogin: {
                        name: '測試者',
                        authTokens: validAuthTokens
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
        validAuthTokens = {
            accessToken: '',
            refreshToken: '',
        };

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
        // const headerAuth = request.headers.get('authorization');
        //
        // if(isNotEmpty(headerAuth)){
        //     return HttpResponse.json({
        //         errors: [
        //             {message: '不可帶入 Header authorization'}
        //         ]
        //     }, {status: 401});
        // }

        if (variables.input.refreshToken === 'mock-empty-token') {
            return HttpResponse.json({
                data: {
                    authRefreshToken: {
                        authTokens: {
                        }
                    }
                }
            });
        }

        if (variables.input.refreshToken !== validAuthTokens.refreshToken) {
            return HttpResponse.json({
                errors: [
                    {message: '刷新Token失敗'}
                ]
            }, {status: 401});
        }

        validAuthTokens = {
            accessToken: `refresh-${refreshCount}-accessToken`,
            refreshToken: `refresh-${refreshCount}-refreshToken`,
        };
        refreshCount+=1;

        return HttpResponse.json({
            data: {
                authRefreshToken: {
                    authTokens: validAuthTokens
                }
            }
        });
    }),


];
