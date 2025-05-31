import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthState } from '@acrool/react-fetcher';
import { Flex } from '@acrool/react-grid';
import { useLocale } from '@acrool/react-locale';
import { useNavigate } from 'react-router-dom';
import { useGetBookmarkQuery } from '@/store/__generated__';
import { useLogout } from '@/store/main/auth/hook';
const Dashboard = () => {
    var _a, _b, _c, _d;
    const navigate = useNavigate();
    const { locale, setLocale } = useLocale();
    const { updateTokens, getTokens } = useAuthState();
    const Bookmark1 = useGetBookmarkQuery({
        variables: { bookmarkId: '1' }
    });
    const Bookmark2 = useGetBookmarkQuery({
        variables: { bookmarkId: '2' }
    });
    const Bookmark3 = useGetBookmarkQuery({
        variables: { bookmarkId: '3' }
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
        }, 100);
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
        }, 100);
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
    return _jsxs("div", { children: [_jsx("h2", { children: "Dashboard" }), _jsx("p", { children: "This page dashboard." }), _jsxs(Flex, { column: true, className: "gap-2 justify-content-center", children: [_jsx("button", { type: "button", onClick: logout, children: "Logout" }), _jsx("button", { type: "button", onClick: () => Bookmark1.refetch(), children: "reFetch" }), _jsx("button", { type: "button", onClick: handleMockTokenInvalid, children: "Mock reFetch + token invalid" }), _jsx("button", { type: "button", onClick: handleMockTokenInvalidRefreshFail, children: "Mock reFetch + token invalid + refresh token fail" }), _jsx("button", { type: "button", onClick: handleMockTokenInvalidRefreshEmpty, children: "Mock reFetch + token invalid + refresh token empty" })] }), _jsxs(Flex, { className: "gap-2 justify-content-center", children: [_jsx("button", { type: "button", onClick: () => setLocale('en-US'), children: "en-US" }), _jsx("button", { type: "button", onClick: () => setLocale('zh-TW'), children: "zh-TW" })] }), (_b = (_a = Bookmark1.data) === null || _a === void 0 ? void 0 : _a.bookmark) === null || _b === void 0 ? void 0 : _b.name, (_d = (_c = Bookmark2.data) === null || _c === void 0 ? void 0 : _c.bookmark) === null || _d === void 0 ? void 0 : _d.name, JSON.stringify(getTokens(), null, 2), "Locale: ", locale] });
};
export default Dashboard;
