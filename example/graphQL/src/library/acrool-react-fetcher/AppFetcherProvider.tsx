import {jsonDecode} from '@acrool/js-utils/string';
import {AuthStateProvider, FetcherProvider, getGraphQLResponseFormatError} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import React, {JSX} from 'react';

import {IAuthTokens, usePutAuthRefreshTokenMutation} from '@/store/__generated__';

import {axiosInstance, persistAuthKey, refreshingHeaderKey} from './config';



interface IProps {
    children: JSX.Element
}


const AppFetcherProvider = ({
    children
}: IProps) => {

    const {locale} = useLocale();

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
        <FetcherProvider
            axiosInstance={axiosInstance}
            locale={locale}
            isDebug
            getResponseFormatError={getGraphQLResponseFormatError}
            checkIsRefreshTokenRequest={config => {
                return config.headers[refreshingHeaderKey] === '1';
            }}
        >
            {children}
        </FetcherProvider>
    </AuthStateProvider>;

};

export default AppFetcherProvider;

