import {jsonDecode} from '@acrool/js-utils/string';
import {AuthStateProvider, IAuthTokens, TOnForceLogout, TOnGetTokens, TOnRefreshToken, TOnSetTokens} from '@acrool/react-fetcher';
import React, {JSX} from 'react';

import {usePutAuthRefreshTokenMutation} from '@/store/__generated__';

import {persistAuthKey, refreshingHeaderKey} from './config';


interface IProps {
    children: JSX.Element
}

/**
 * 認證狀態提供者
 * @param children
 */
const AppAuthStateProvider = ({
    children
}: IProps) => {
    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    /**
     * 當需要取得 token 時
     */
    const onGetTokens: TOnGetTokens = () => {
        const tokensStr = localStorage.getItem(persistAuthKey);
        if(!tokensStr) return null;
        return jsonDecode<IAuthTokens>(tokensStr) ?? null;
    };

    /**
     * 當需要設定 token 時
     * @param authTokens
     */
    const onSetTokens: TOnSetTokens = (authTokens) => {
        const tokensStr = JSON.stringify(authTokens);
        localStorage.setItem(persistAuthKey, tokensStr);
    };

    /**
     * 當需要刷新 token 時
     * @param refreshToken
     */
    const onRefreshTokens: TOnRefreshToken = async (refreshToken) => {
        const res = await RefreshTokenMutation({
            variables: {input: {refreshToken: refreshToken}},
            fetchOptions: {
                headers: {
                    [refreshingHeaderKey]: '1',
                }
            },
        }).unwrap();

        return res?.authRefreshToken.authTokens;
    };

    /**
     * 當登出時
     */
    const onForceLogout: TOnForceLogout = () => {
        // removeAuthTokens();
    };


    return <AuthStateProvider
        onGetTokens={onGetTokens}
        onSetTokens={onSetTokens}
        onRefreshTokens={onRefreshTokens}
        onForceLogout={onForceLogout}
    >
        {children}
    </AuthStateProvider>;
};

export default AppAuthStateProvider;
