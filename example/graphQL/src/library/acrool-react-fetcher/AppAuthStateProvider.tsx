import {jsonDecode} from '@acrool/js-utils/string';
import {AuthStateProvider, IAuthTokens} from '@acrool/react-fetcher';
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


    return <AuthStateProvider
        onGetTokens={() => {
            const tokensStr = localStorage.getItem(persistAuthKey);
            if(!tokensStr) return null;
            return jsonDecode<IAuthTokens>(tokensStr) ?? null;
        }}
        onSetTokens={authTokens => {
            const tokensStr = JSON.stringify(authTokens);
            localStorage.setItem(persistAuthKey, tokensStr);
        }}

        onRefreshTokens={async (refreshToken) => {
            const res = await RefreshTokenMutation({
                variables: {input: {refreshToken: refreshToken}},
                fetchOptions: {
                    headers: {
                        [refreshingHeaderKey]: '1',
                    }
                },
            }).unwrap();

            return res?.authRefreshToken.authTokens;
        }}
        onForceLogout={ () => {
            // removeAuthTokens();
        }}
    >
        {children}
    </AuthStateProvider>;

};

export default AppAuthStateProvider;

