import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, useCallback, useContext, useState} from 'react';

import {IAuthTokens} from './types';

// 定義 payload 與 token 的型別
export interface AuthPayload {
    userId: string
    username: string

    // 你可以根據實際需求擴充欄位
    [key: string]: any
}


interface AuthState {
    payload: AuthPayload | null
    tokens: IAuthTokens | null
    isRefreshing: boolean
    login: (tokens: IAuthTokens) => void
    logout: () => void
    updateTokens: (tokens: IAuthTokens) => void
    // clearTokens: () => void
    refreshing: (isRefreshing: boolean) => void
    getTokens: () => IAuthTokens | null
    getAccessToken: () => string | undefined
    getRefreshToken: () => string | undefined
}

const AuthStateContext = createContext<AuthState | undefined>(undefined);

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (!context) {
        throw new Error('useAuthState 必須在 AuthStateProvider 內使用');
    }
    console.log('context.tokens', context.tokens);

    return {
        ...context,
        isAuth: isNotEmpty(context.tokens),
    };
};

interface AuthStateProviderProps {
    children: ReactNode
}

const AuthStateProvider: React.FC<AuthStateProviderProps> = ({children}) => {
    const [_payload, _setPayload] = useState<AuthPayload | null>(null);
    const [_tokens, _setTokens] = useState<IAuthTokens | null>(null);
    const [_isRefreshing, _setIsRefreshing] = useState(false);

    /**
     * 登入，設置 payload 與 tokens
     * @param payload 使用者資訊
     * @param tokens 認證 Token
     */
    const login = useCallback((tokens: IAuthTokens) => {
        // setPayload(payload);
        _setTokens(tokens);
    }, []);

    /**
     * 登出，清除 payload 與 tokens
     */
    const logout = useCallback(() => {
        _setPayload(null);
        _setTokens(null);
    }, []);

    /**
     * 更新 tokens
     * @param tokens 新的認證 Token
     */
    const updateTokens = useCallback((tokens: IAuthTokens) => {
        _setTokens(tokens);
    }, []);

    /**
     * 設置是否正在刷新 Token 狀態
     * @param isRefreshing 是否正在刷新
     */
    const refreshing = useCallback((isRefreshing: boolean) => {
        _setIsRefreshing(isRefreshing);
    }, []);

    /**
     * 取得目前的 tokens
     * @returns tokens 或 null
     */
    const getTokens = useCallback(() => _tokens, [_tokens]);

    /**
     * 取得目前的 accessToken
     * @returns accessToken 或 undefined
     */
    const getAccessToken = useCallback(() => _tokens?.accessToken, [_tokens]);

    /**
     * 取得目前的 refreshToken
     * @returns refreshToken 或 undefined
     */
    const getRefreshToken = useCallback(() => _tokens?.refreshToken, [_tokens]);

    console.log('tokens', _tokens);


    return (
        <AuthStateContext.Provider value={{
            payload: _payload,
            tokens: _tokens,
            isRefreshing: _isRefreshing,
            login,
            logout,
            updateTokens,
            refreshing,
            getTokens,
            getAccessToken,
            getRefreshToken,
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
