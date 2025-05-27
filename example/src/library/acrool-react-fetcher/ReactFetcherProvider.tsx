import {AuthStateProvider, AuthTokensManager,FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

import {usePutAuthRefreshTokenMutation} from '@/store/__generated__';
import {useRefreshToken} from '@/store/main/auth/hook';
import {removeAuthTokens} from '@/store/main/auth/utils';





interface IProps {
    children: JSX.Element
}


/**
 * 多語系提供者
 * @param children
 */
const ReactFetcherProvider = ({
    children
}: IProps) => {
    const handleChangeLocale = (newLocale: string) => {
        dayjs.locale(newLocale);
    };

    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    const RefreshToken = useRefreshToken();

    console.log('xx');

    return <AuthStateProvider>
        <FetcherClientProvider
            // authTokensManager={new AuthTokensManager({
            //     getter: () => window.mockTokens,
            //     updater: (authTokens) => {
            //         window.mockTokens = authTokens;
            //     },
            //     clearer: () => {
            //         window.mockTokens = undefined;
            //     }
            // })}
            onRefreshToken={async (refreshToken) => {
                console.log('refresh token', refreshToken);
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
                removeAuthTokens();
            }}
            getLocale={() => 'zh-TW'}
        >
            {children}
        </FetcherClientProvider>
    </AuthStateProvider>;

};

export default ReactFetcherProvider;

