import logger from '@acrool/js-logger';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, RefObject, useCallback, useContext, useRef, useState} from 'react';

import {SystemException} from './exception';
import {IAuthTokens} from './types';

// 定義 payload 與 token 的型別
export interface AuthPayload {
    userId: string
    username: string

    // 你可以根據實際需求擴充欄位
    [key: string]: any
}

// 新增 updateTokens 的型別
export type TAuthTokensUpdater = (tokensOrUpdater: IAuthTokens | null | ((curr: IAuthTokens | null) => IAuthTokens | null)) => void;


type TOnRefreshToken = (refreshToken: string) => Promise<IAuthTokens|undefined>;
type TRefreshToken = () => Promise<void>;
type TOnForceLogout = () => void;
type TForceLogout = () => void;
type TOnSetTokens = TAuthTokensUpdater;
type TOnGetTokens = () => IAuthTokens | null;
type TGetTokens = () => IAuthTokens | null;

interface AuthState {
    lastUpdateTimestamp: number
    // tokensRef: RefObject<IAuthTokens|null>|null
    getTokens: TGetTokens
    updateTokens: TAuthTokensUpdater
    refreshTokens: TRefreshToken
    forceLogout: TForceLogout
    isAuth: boolean
    // clearTokens: () => void
}

const AuthStateContext = createContext<AuthState>({
    lastUpdateTimestamp: 0,
    // tokensRef: null,
    isAuth: false,
    getTokens: () => {
        logger.warning('AuthStateContext','getTokens not yet ready');
        return null;
    },
    updateTokens: () => logger.warning('AuthStateContext','updateTokens not yet ready'),
    forceLogout: () => logger.warning('AuthStateContext','forceLogout not yet ready'),
    refreshTokens: async () => {
        logger.warning('AuthStateContext','refreshToken not yet ready');
        return undefined;
    },
});

export const useAuthState = () => useContext(AuthStateContext);

interface AuthStateProviderProps {
    children: ReactNode
    onSetTokens: TOnSetTokens
    onGetTokens: TOnGetTokens
    onRefreshTokens: TOnRefreshToken
    onForceLogout: TOnForceLogout
}

const AuthStateProvider = ({
    children,
    onGetTokens,
    onSetTokens,
    onRefreshTokens,
    onForceLogout
}: AuthStateProviderProps) => {
    // const tokensRef = useRef<IAuthTokens>(null);
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    /**
     * 更新 tokens
     * @param tokensOrUpdater 新的認證 Token 或 (curr) => 新的 Token
     */
    const updateTokens: TAuthTokensUpdater = (tokensOrUpdater) => {
        let nextTokens: IAuthTokens | null;
        if (typeof tokensOrUpdater === 'function') {
            nextTokens = (tokensOrUpdater as (curr: IAuthTokens | null) => IAuthTokens | null)(onGetTokens());
        } else {
            nextTokens = tokensOrUpdater;
        }
        logger.danger('更新Token', nextTokens);
        // tokensRef.current = nextTokens;
        onSetTokens(nextTokens);
        setIsAuth(isNotEmpty(nextTokens));
        setLastUpdateTimestamp(Date.now());
    };


    /**
     * 強制登出
     */
    const handleOnForceLogout = () => {
        updateTokens(null);
        onSetTokens(null);
        onForceLogout();
    };

    /**
     * 當刷新 tokens 時世紀ㄢ
     */
    const handleOnRefreshTokens = async () => {
        // const refreshToken = tokensRef.current?.refreshToken;
        const refreshToken = onGetTokens()?.refreshToken;
        if(!refreshToken) return;

        try {
            const authTokens = await onRefreshTokens(refreshToken);
            if(isEmpty(authTokens)){
                throw new SystemException({message: 'refresh token fail'});
            }
            updateTokens(authTokens);

            return;

        } catch (err){
            handleOnForceLogout();
        }

    };



    return (
        <AuthStateContext.Provider value={{
            lastUpdateTimestamp,
            // tokensRef,
            isAuth,
            getTokens: onGetTokens,
            updateTokens,
            refreshTokens: handleOnRefreshTokens,
            forceLogout: handleOnForceLogout
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
