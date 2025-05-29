import {jsonDecode} from '@acrool/js-utils/string';
import {AuthStateProvider, FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

import {IAuthTokens, usePutAuthRefreshTokenMutation} from '@/store/__generated__';


interface IProps {
    children: JSX.Element
}

const persistAuthKey = 'persist:acrool-auth';
const refreshingHeaderKey = 'X-Requested-Refresh-Token';

const ReactFetcherProvider = ({
    children
}: IProps) => {
    const handleChangeLocale = (newLocale: string) => {
        dayjs.locale(newLocale);
    };

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
        <FetcherClientProvider
            getLocale={() => 'zh-TW'}
            checkIsRefreshTokenRequest={config => {
                return config.headers[refreshingHeaderKey] === '1';
            }}
        >
            {children}
        </FetcherClientProvider>
    </AuthStateProvider>;

};

export default ReactFetcherProvider;

