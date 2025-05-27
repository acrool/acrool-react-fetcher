import {AuthTokensManager,FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

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
    const RefreshToken = useRefreshToken();


    return <FetcherClientProvider
        authTokensManager={new AuthTokensManager({
            getter: () => window.mockTokens,
            updater: (authTokens) => {
                window.mockTokens = authTokens;
            },
            clearer: () => {
                window.mockTokens = undefined;
            }
        })}
        onRefreshToken={async () => {
            const res = await RefreshToken();
            return res?.authRefreshToken.authTokens;
        }}
        onForceLogout={ () => {
            removeAuthTokens();
        }}
        getLocale={() => 'zh-TW'}
    >
        {children}
    </FetcherClientProvider>;
};

export default ReactFetcherProvider;

