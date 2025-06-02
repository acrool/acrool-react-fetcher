import {useAuthState} from '@acrool/react-fetcher';
import {Flex} from '@acrool/react-grid';
import {useLocale} from '@acrool/react-locale';
import {toast} from '@acrool/react-toaster';
import React from 'react';
import {useNavigate} from 'react-router';

import {refreshingHeaderKey} from '@/library/acrool-react-fetcher/config';
import {useAppDispatch} from '@/library/redux';
import {
    bookmarkApi,
    useGetBookmarkQuery,
    usePutAuthLogoutMutation,
    usePutAuthRefreshTokenMutation
} from '@/store/__generated__';

const Dashboard = () => {
    const navigate = useNavigate();
    const {t, locale, setLocale} = useLocale();
    const dispatch = useAppDispatch();

    const {updateTokens, getTokens, isAuth} = useAuthState();
    const [AuthLogoutMutation] = usePutAuthLogoutMutation();
    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    const Bookmark1 = useGetBookmarkQuery({
        variables: {bookmarkId: '1'}
    });
    const Bookmark2 = useGetBookmarkQuery({
        variables: {bookmarkId: '2'}
    });
    const Bookmark3 = useGetBookmarkQuery({
        variables: {bookmarkId: '3'}
    });


    const handleRefreshToken = () => {
        const tokens = getTokens();
        if(!tokens?.refreshToken){
            toast.error('refreshToken is empty');
            return;
        }

        const res = RefreshTokenMutation({
            variables: {input: {refreshToken: tokens.refreshToken}},
            fetchOptions: {
                headers: {
                    [refreshingHeaderKey]: '1',
                }
            },
        }).unwrap()
            .then(res => {
                updateTokens(res.authRefreshToken.authTokens);
            })
            .catch(() => {
                toast.error('refreshToken fail');
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

        setTimeout(() => {
            Bookmark3.refetch();
        },100);
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
    </div>;
};

export default Dashboard;
