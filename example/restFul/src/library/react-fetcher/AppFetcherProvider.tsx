import {dialog} from '@acrool/react-dialog';
import {FetcherProvider, getRestFulResponseFormatError, TCheckErrorIs401, TCheckIsErrorResponse,TCheckIsRefreshTokenRequest,TOnResponseError} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import React, {JSX} from 'react';

import {axiosInstance} from './axiosInstance';
import {refreshingHeaderKey} from './config';



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
    const onResponseError: TOnResponseError = (error) => {
        // 如果錯誤代碼在忽略清單中，則不顯示全域錯誤
        if (error.code && IGNORED_ERROR_CODES.includes(error.code)) {
            console.log('[AppFetcherProvider] Ignored error:', error);
            return;
        }

        // 顯示全域錯誤訊息
        dialog.error(error.message, {code: error.code});
    };

    /**
     * 檢查是否為刷新 token 的請求
     * @param config
     */
    const checkIsRefreshTokenRequest: TCheckIsRefreshTokenRequest = (config) => {
        return config.headers[refreshingHeaderKey] === '1';
    };

    /**
     * 檢查是否為錯誤回應 (option)
     * (使用在非標準 HTTP STATUS CODE 的情況下)
     * @param response
     */
    const checkIsErrorResponse: TCheckIsErrorResponse = (response) => {
        // 檢查是否有 success 錯誤 等
        return response?.data?.success === false;
    };

    /**
     * 檢查錯誤是否為 401 (未授權) 錯誤
     * (必須先 checkIsErrorResponse 判定為 錯誤回應)
     * @param error
     */
    const checkErrorIs401: TCheckErrorIs401 = (error) => {
        // 檢查是否有 success 錯誤 等
        console.log('response?.data?.code', error.code);

        return error?.code === 'Unauthorized';
    };


    return <FetcherProvider
        axiosInstance={axiosInstance}
        locale={locale}
        isDebug
        getResponseFormatError={getRestFulResponseFormatError}
        onResponseError={onResponseError}
        checkIsRefreshTokenRequest={checkIsRefreshTokenRequest}
        checkIsErrorResponse={checkIsErrorResponse}
        checkErrorIs401={checkErrorIs401}
    >
        {children}
    </FetcherProvider>;

};

export default AppFetcherProvider;

