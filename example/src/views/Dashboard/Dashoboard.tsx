import {Flex} from '@acrool/react-grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useGetBookmarkQuery} from '@/store/__generated__';
import {useLogout} from '@/store/main/auth/hook';

const Dashboard = () => {
    const navigate = useNavigate();
    const Bookmark = useGetBookmarkQuery({
        variables: {bookmarkId: '1'}
    }, {
        skip: false,
    });
    const logout = useLogout();

    /**
     * 模擬AccessToken失效, 刷新成功, 重發請求
     */
    const handleMockTokenInvalid = () => {
        window.mockTokens = {
            ...window.mockTokens,
            accessToken: 'mock-invalid-token',
        };

        Bookmark.refetch();
    };

    /**
     * 模擬AccessToken失效, 刷新失敗, 停止重發
     */
    const handleMockTokenInvalidRefreshFail = () => {
        window.mockTokens = {
            refreshToken: 'mock-invalid-token',
            accessToken: 'mock-invalid-token',
        };

        Bookmark.refetch();
    };

    return  <div>
        <h2>Dashboard</h2>
        <p>
            This page dashboard.
        </p>
        <Flex column className="gap-2 justify-content-center">
            <button type="button" onClick={logout}>Logout</button>
            <button type="button" onClick={handleMockTokenInvalid}>Mock reFetch + token invalid</button>
            <button type="button" onClick={handleMockTokenInvalidRefreshFail}>Mock reFetch + token invalid + refresh token fail</button>
        </Flex>

        {Bookmark.data?.bookmark?.name}

        {JSON.stringify(window.mockTokens)}
    </div>;
};

export default Dashboard;
