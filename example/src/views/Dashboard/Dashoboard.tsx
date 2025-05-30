import {useAuthState} from '@acrool/react-fetcher';
import {Flex} from '@acrool/react-grid';
import {useLocale} from '@acrool/react-locale';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useGetBookmarkQuery} from '@/store/__generated__';
import {useLogout} from '@/store/main/auth/hook';

const Dashboard = () => {
    const navigate = useNavigate();
    const {locale, setLocale} = useLocale();

    const {updateTokens, getTokens} = useAuthState();

    const Bookmark1 = useGetBookmarkQuery({
        variables: {bookmarkId: '1'}
    });
    const Bookmark2 = useGetBookmarkQuery({
        variables: {bookmarkId: '2'}
    });
    const Bookmark3 = useGetBookmarkQuery({
        variables: {bookmarkId: '3'}
    });
    const logout = useLogout();

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
            <button type="button" onClick={logout}>Logout</button>
            <button type="button" onClick={() => Bookmark1.refetch()}>reFetch</button>
            <button type="button" onClick={handleMockTokenInvalid}>Mock reFetch + token invalid</button>
            <button type="button" onClick={handleMockTokenInvalidRefreshFail}>Mock reFetch + token invalid + refresh token fail</button>
            <button type="button" onClick={handleMockTokenInvalidRefreshEmpty}>Mock reFetch + token invalid + refresh token empty</button>
        </Flex>
        <Flex className="gap-2 justify-content-center">
            <button type="button" onClick={() => setLocale('en-US')}>en-US</button>
            <button type="button" onClick={() => setLocale('zh-TW')}>zh-TW</button>
        </Flex>

        {Bookmark1.data?.bookmark?.name}
        {Bookmark2.data?.bookmark?.name}

        {JSON.stringify(getTokens(), null, 2)}
        Locale: {locale}
    </div>;
};

export default Dashboard;
