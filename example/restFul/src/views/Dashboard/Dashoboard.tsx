import {block} from '@acrool/react-block';
import {useAuthState} from '@acrool/react-fetcher';
import {Flex} from '@acrool/react-grid';
import {useLocale} from '@acrool/react-locale';
import {toast} from '@acrool/react-toaster';
import React from 'react';
import {useNavigate} from 'react-router';

import {axiosInstance} from '@/library/react-fetcher/axiosInstance';
import {refreshingHeaderKey} from '@/library/react-fetcher/config';
import {useAppDispatch} from '@/library/redux';
import {
    bookmarkApi,
    useGetBookmarkByIdQuery,
    useGetBookmarkLinksQuery,
    usePostAuthSignLogoutMutation,
    usePostAuthSignRefreshMutation
} from '@/store/__generated__';

const Dashboard = () => {
    const navigate = useNavigate();
    const {t, locale, setLocale} = useLocale();
    const dispatch = useAppDispatch();

    const {updateTokens, getTokens, isAuth} = useAuthState();
    const [AuthLogoutMutation] = usePostAuthSignLogoutMutation();
    const [RefreshTokenMutation] = usePostAuthSignRefreshMutation();

    const Bookmark1 = useGetBookmarkByIdQuery({
        variables: {
            id: '1',
        }
    });
    const Bookmark2 = useGetBookmarkByIdQuery({
        variables: {
            id: '2',
        }
    });
    const Bookmark3 = useGetBookmarkByIdQuery({
        variables: {
            id: '3',
        }
    });
    const BookmarkLinks = useGetBookmarkLinksQuery({
        variables: {
            id: '1',
            currentPage: 1,
            pageLimit: 10,
        }
    });




    const handleRefreshToken = () => {
        block.show();
        const tokens = getTokens();
        if(!tokens?.refreshToken){
            toast.error('refreshToken is empty');
            return;
        }

        RefreshTokenMutation({
            variables: {
                body: {refreshToken: tokens.refreshToken},
            },
            fetchOptions: {
                // forceGuest: true,
                // ignoreGlobalError: true,
                headers: {

                    [refreshingHeaderKey]: '1',
                }
            },
        }).unwrap()
            .then(res => {
                updateTokens(res.authTokens);
            })
            .catch(() => {
                toast.error('refreshToken fail');
            })
            .finally(() => {
                block.hide();
            });
    };

    const handleLogout = () => {
        AuthLogoutMutation()
            .unwrap()
            .then(res => {
                updateTokens(null);
                // dispatch(actions.logout());
                // navigate(loginRoutePath);
                setTimeout(() => {
                    dispatch(bookmarkApi.util.invalidateTags(
                        [
                            {type: 'Bookmark'}
                        ]
                    ));
                }, 10);

                console.log(t('message.logout', {def: 'Thank you for your use, you have successfully logged out'}));
            });
    };


    /**
     * 模擬AccessToken失效, 刷新成功, 重發請求成功
     */
    const handleMockTokenInvalid = () => {
        updateTokens(curr => {
            return {
                ...curr,
                accessToken: 'mock-invalid-token',
            };
        });

        Bookmark1.refetch();
        Bookmark2.refetch();

        // setTimeout(() => {
        //     Bookmark3.refetch();
        // },100);
    };

    /**
     * 模擬AccessToken失效, 刷新失敗, 停止重發
     */
    const handleMockTokenInvalidRefreshFail = () => {
        updateTokens({
            refreshToken: 'mock-invalid-token',
            accessToken: 'mock-invalid-token',
        });


        Bookmark1.refetch();
        Bookmark2.refetch();

        setTimeout(() => {
            Bookmark3.refetch();
        },100);
    };

    /**
     * 模擬AccessToken失效, 刷新回傳為空, 停止重發
     */
    const handleMockTokenInvalidRefreshEmpty = () => {
        updateTokens({
            refreshToken: 'mock-empty-token',
            accessToken: 'mock-invalid-token',
        });

        Bookmark1.refetch();
    };

    /**
     * 測試 500 錯誤
     */
    const handleError500 = async () => {
        try {
            const response = await axiosInstance.post('/api/error500');
            console.log('Error 500 response:', response.data);
        } catch (error: any) {
            // axios 錯誤會包含 code 屬性，例如 ERR_BAD_RESPONSE
            console.error('Error 500:', error.code, error.message, error.response?.data);
            toast.error(`500 Error: ${error.response?.data?.message || error.message} (${error.code})`);
        }
    };

    /**
     * 測試 ERR_NETWORK 錯誤 (網路錯誤/CORS)
     * axios 會在以下情況回傳 ERR_NETWORK：
     * 1. 網路連線中斷
     * 2. CORS 被瀏覽器阻止
     * 3. 伺服器無法連線
     * 4. DNS 解析失敗
     */
    const handleNetworkError = async () => {
        try {
            const response = await axiosInstance.post('/api/network-error');
            console.log('Network response:', response.data);
        } catch (error: any) {
            // ERR_NETWORK: 網路錯誤，沒有 response
            console.error('Network Error:', error.code, error.message, error);
            toast.error(`Network Error: ${error.message} (${error.code})`);
        }
    };

    /**
     * 判斷是否可能為 CORS 錯誤
     * 由於瀏覽器安全限制，無法直接區分 CORS 和其他網路錯誤
     * 只能透過「是否為跨域請求」來間接判斷
     */
    const isCorsError = (error: any, requestUrl: string): boolean => {
        if (error.code !== 'ERR_NETWORK') return false;

        try {
            const url = new URL(requestUrl, window.location.origin);
            const isCrossOrigin = url.origin !== window.location.origin;
            return isCrossOrigin && !error.response;
        } catch {
            return false;
        }
    };

    /**
     * 測試真實 CORS 錯誤
     * 請求外部網站會被瀏覽器 CORS 政策阻止
     */
    const handleRealCorsError = async () => {
        const targetUrl = 'https://www.google.com';
        try {
            const response = await axiosInstance.get(targetUrl);
            console.log('Google response:', response.data);
        } catch (error: any) {
            const possibleCors = isCorsError(error, targetUrl);
            console.error('Error details:', {
                code: error.code,
                message: error.message,
                response: error.response,
                isCrossOrigin: true,
                possibleCorsError: possibleCors,
            });

            if (possibleCors) {
                toast.error(`可能是 CORS 錯誤: 跨域請求被阻止 (${error.code})`);
            } else {
                toast.error(`Network Error: ${error.message} (${error.code})`);
            }
        }
    };

    return  <div>
        <h2>Dashboard</h2>
        <p>
            This page dashboard.
        </p>
        <Flex column className="gap-2 justify-content-center">
            <button type="button" onClick={handleLogout}>Logout</button>
            <button type="button" onClick={handleRefreshToken}>Refresh Token</button>
            <button type="button" onClick={() => Bookmark1.refetch()}>reFetch</button>
            <button type="button" onClick={handleMockTokenInvalid}>Mock reFetch + token invalid</button>
            <button type="button" onClick={handleMockTokenInvalidRefreshFail}>Mock reFetch + token invalid + refresh token fail</button>
            <button type="button" onClick={handleMockTokenInvalidRefreshEmpty}>Mock reFetch + token invalid + refresh token empty</button>
            <button type="button" onClick={handleError500}>Test Error 500</button>
            <button type="button" onClick={handleNetworkError}>Test ERR_NETWORK (MSW)</button>
            <button type="button" onClick={handleRealCorsError}>Test Real CORS (google.com)</button>
        </Flex>
        <Flex className="gap-2 justify-content-center">
            <button type="button" onClick={() => setLocale('en-US')}>en-US</button>
            <button type="button" onClick={() => setLocale('zh-TW')}>zh-TW</button>
        </Flex>


        <div>
            AuthTokens: {JSON.stringify(getTokens(), null, 2)}
        </div>
        <div>
            Bookmark: {JSON.stringify(Bookmark1.data, null, 2)}
        </div>
        <div>
            Locale: {locale}
        </div>
        <div>
            isAuth: {String(isAuth)}
        </div>

        <div>
            {BookmarkLinks.data?.rows.map(row => {
                return <div key={row.id}>
                    {row.url}
                </div>;
            })}
        </div>
    </div>;
};

export default Dashboard;
