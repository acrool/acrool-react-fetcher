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


interface AuthState {
    tokensRef: RefObject<IAuthTokens|null>|null
    updateTokens: (tokens: IAuthTokens|null) => void
    isAuth: boolean
    // clearTokens: () => void
}

const AuthStateContext = createContext<AuthState>({
    tokensRef: null,
    updateTokens: () => {},
    isAuth: false,
});

export const useAuthState = () => useContext(AuthStateContext);

interface AuthStateProviderProps {
    children: ReactNode
}

const AuthStateProvider: React.FC<AuthStateProviderProps> = ({children}) => {
    const tokensRef = useRef<IAuthTokens>(null);
    const [count, updateCount] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    /**
     * 更新 tokens
     * @param tokens 新的認證 Token
     */
    const updateTokens = (tokens: IAuthTokens|null) => {
        logger.danger('更新Token', tokens);
        tokensRef.current = tokens;
        setIsAuth(isNotEmpty(tokens));
        updateCount(curr => curr+1);
    };



    return (
        <AuthStateContext.Provider value={{
            tokensRef,
            isAuth,
            updateTokens,
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
