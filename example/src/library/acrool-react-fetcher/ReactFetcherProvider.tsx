import {AuthStateProvider, FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

import {IAuthTokens, usePutAuthRefreshTokenMutation} from '@/store/__generated__';
import {useRefreshToken} from '@/store/main/auth/hook';
import {jsonDecode} from '@acrool/js-utils/string';
import {removeAuthTokens} from '@/store/main/auth/utils';


interface IProps {
    children: JSX.Element
}

const persistAuthKey = 'persist:acrool-auth';


const ReactFetcherProvider = ({
    children
}: IProps) => {
    const handleChangeLocale = (newLocale: string) => {
        dayjs.locale(newLocale);
    };

    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    const RefreshToken = useRefreshToken();

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
                    requestCode: 'refreshToken',
                    // headers: {
                    //     [refreshingHeaderKey]: 'true',
                    // }
                }
            }).unwrap();

            return res?.authRefreshToken.authTokens;
        }}
        onForceLogout={ () => {
            // removeAuthTokens();
        }}
    >
        <FetcherClientProvider
            getLocale={() => 'zh-TW'}
        >
            {children}
        </FetcherClientProvider>
    </AuthStateProvider>;

};

export default ReactFetcherProvider;

