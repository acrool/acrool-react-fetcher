import {dialog} from '@acrool/react-dialog';
import {FetcherProvider, getRestFulResponseFormatError} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import React, {JSX} from 'react';

import {axiosInstance, refreshingHeaderKey} from './config';



interface IProps {
    children: JSX.Element
}

// 定義不需要顯示全域錯誤的錯誤代碼
const IGNORED_ERROR_CODES = [
    'ACCOUNT_RECOMMEND', // 推薦帳號
];

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
     * 處理全域錯誤
     * @param error
     */
    const handleGlobalError = (error: {message: string, code?: string, path?: string, args?: any}) => {
        // 如果錯誤代碼在忽略清單中，則不顯示全域錯誤
        if (error.code && IGNORED_ERROR_CODES.includes(error.code)) {
            console.log('[AppFetcherProvider] Ignored error:', error);
            return;
        }

        // 顯示全域錯誤訊息
        dialog.error(error.message, {code: error.code});
    };

    return <FetcherProvider
        axiosInstance={axiosInstance}
        locale={locale}
        isDebug
        getResponseFormatError={getRestFulResponseFormatError}
        onError={handleGlobalError}
        checkIsRefreshTokenRequest={config => {
            return config.headers[refreshingHeaderKey] === '1';
        }}
    >
        {children}
    </FetcherProvider>;

};

export default AppFetcherProvider;

