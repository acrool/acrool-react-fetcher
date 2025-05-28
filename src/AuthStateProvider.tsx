import logger from '@acrool/js-logger';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, RefObject, useCallback, useContext, useRef, useState} from 'react';

import {IAuthTokens} from './types';

// 定義 payload 與 token 的型別
export interface AuthPayload {
    userId: string
    username: string

    // 你可以根據實際需求擴充欄位
    [key: string]: any
}

// 新增 updateTokens 的型別
export type AuthTokensUpdater = (tokensOrUpdater: IAuthTokens | null | ((curr: IAuthTokens | null) => IAuthTokens | null)) => void;

interface AuthState {
    lastUpdateTimestamp: number
    tokensRef: RefObject<IAuthTokens|null>|null
    updateTokens: AuthTokensUpdater
    isAuth: boolean
    // clearTokens: () => void
}

const AuthStateContext = createContext<AuthState>({
    lastUpdateTimestamp: 0,
    tokensRef: null,
    updateTokens: () => {},
    isAuth: false,
});

export const useAuthState = () => useContext(AuthStateContext);

interface AuthStateProviderProps {
    children: ReactNode
}

const AuthStateProvider = ({
    children,
}: AuthStateProviderProps) => {
    const tokensRef = useRef<IAuthTokens>(null);
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    /**
     * 更新 tokens
     * @param tokensOrUpdater 新的認證 Token 或 (curr) => 新的 Token
     */
    const updateTokens: AuthTokensUpdater = (tokensOrUpdater) => {
        let nextTokens: IAuthTokens | null;
        if (typeof tokensOrUpdater === 'function') {
            nextTokens = (tokensOrUpdater as (curr: IAuthTokens | null) => IAuthTokens | null)(tokensRef.current);
        } else {
            nextTokens = tokensOrUpdater;
        }
        logger.danger('更新Token', nextTokens);
        tokensRef.current = nextTokens;
        setIsAuth(isNotEmpty(nextTokens));
        setLastUpdateTimestamp(Date.now());
    };



    return (
        <AuthStateContext.Provider value={{
            tokensRef,
            isAuth,
            updateTokens,
            lastUpdateTimestamp,
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
