import {FetcherProvider, getGraphQLResponseFormatError, TCheckIsRefreshTokenRequest} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import React, {JSX} from 'react';

import {axiosInstance} from './axiosInstance';
import {refreshingHeaderKey} from './config';



interface IProps {
    children: JSX.Element
}


/**
 * AppFetcherProvider is a wrapper component that provides a configured FetcherProvider instance.
 * It integrates application-specific settings like locale, axios instance, and debug options,
 * and passes them to the FetcherProvider for consistent API request handling across the app.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped within the FetcherProvider.
 *
 * @returns {JSX.Element} A FetcherProvider component with the configured options.
 */
const AppFetcherProvider = ({
    children
}: IProps) => {

    const {locale} = useLocale();


    /**
     * 檢查是否為刷新 token 的請求
     * @param config
     */
    const checkIsRefreshTokenRequest: TCheckIsRefreshTokenRequest = (config) => {
        return config.headers[refreshingHeaderKey] === '1';
    };


    return <FetcherProvider
        axiosInstance={axiosInstance}
        locale={locale}
        isDebug
        getResponseFormatError={getGraphQLResponseFormatError}
        checkIsRefreshTokenRequest={checkIsRefreshTokenRequest}
    >
        {children}
    </FetcherProvider>;

};

export default AppFetcherProvider;

