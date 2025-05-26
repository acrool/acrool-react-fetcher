import {BlockWrapper} from '@acrool/react-block';
import {FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';
import styled from 'styled-components';


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

    return <FetcherClientProvider
        dependencies={{
            getTokenInfo: () => ({accessToken: 'token'}),
            refreshToken: () => Promise.resolve({tokenInfo: {accessToken: 'token'}}),
            onForceLogout: () => {},
            getLocale: () => 'zh-TW',
        }}
    >
        {children}
    </FetcherClientProvider>;
};

export default ReactFetcherProvider;

