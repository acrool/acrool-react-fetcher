import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, useCallback, useContext, useState} from 'react';

import {IAuthTokens} from './types';
import logger from "@acrool/js-logger";

// 定義 payload 與 token 的型別
export interface AuthPayload {
    userId: string
    username: string

    // 你可以根據實際需求擴充欄位
    [key: string]: any
}


interface AuthState {
    tokens: IAuthTokens | null
    updateTokens: (tokens: IAuthTokens|null) => void
    // clearTokens: () => void
    getTokens: () => IAuthTokens | null
}

const AuthStateContext = createContext<AuthState>({
    tokens: null,
    updateTokens: () => {},
    getTokens: () => null,
});

export const useAuthState = () => {
    const context = useContext(AuthStateContext);


    return {
        ...context,
        isAuth: isNotEmpty(context.tokens),
    };
};

interface AuthStateProviderProps {
    children: ReactNode
}

const AuthStateProvider: React.FC<AuthStateProviderProps> = ({children}) => {
    const [_tokens, _setTokens] = useState<IAuthTokens | null>(null);

    /**
     * 更新 tokens
     * @param tokens 新的認證 Token
     */
    const updateTokens = (tokens: IAuthTokens|null) => {
        logger.danger('更新Token');
        _setTokens(tokens);
    };

    /**
     * 取得目前的 tokens
     * @returns tokens 或 null
     */
    const getTokens = () => _tokens;



    return (
        <AuthStateContext.Provider value={{
            tokens: _tokens,
            updateTokens,
            getTokens,
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
