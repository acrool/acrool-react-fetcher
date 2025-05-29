import {jsonDecode} from '@acrool/js-utils/string';
import {AuthStateProvider, FetcherProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

import {IAuthTokens, usePutAuthRefreshTokenMutation} from '@/store/__generated__';
import {useLocale} from "@acrool/react-locale";


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
            locale={locale}
            checkIsRefreshTokenRequest={config => {
                return config.headers[refreshingHeaderKey] === '1';
            }}
        >
            {children}
        </FetcherProvider>
    </AuthStateProvider>;

};

export default ReactFetcherProvider;

