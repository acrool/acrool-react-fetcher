import logger from '@acrool/js-logger';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, RefObject, useCallback, useContext, useEffect, useRef, useState} from 'react';

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
    getTokens: TGetTokens
    updateTokens: TAuthTokensUpdater
    refreshTokens: TRefreshToken
    forceLogout: TForceLogout
    isAuth: boolean
}

const AuthStateContext = createContext<AuthState>({
    lastUpdateTimestamp: 0,
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
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);


    useEffect(() => {
        setIsAuth(isNotEmpty(onGetTokens()));
    }, []);

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
        onSetTokens(nextTokens);
        setIsAuth(isNotEmpty(nextTokens));
        setLastUpdateTimestamp(Date.now());
    };


    /**
     * 強制登出
     */
    const handleOnForceLogout = () => {
        updateTokens(null);
        onForceLogout();
    };

    /**
     * 當刷新 tokens 時世紀ㄢ
     */
    const handleOnRefreshTokens = async () => {
        const refreshToken = onGetTokens()?.refreshToken;
        if(!refreshToken) return;

        try {
            const authTokens = await onRefreshTokens(refreshToken);
            if(isEmpty(authTokens)){
                throw new SystemException({message: 'refresh token fail', code: 'REFRESH_TOKEN_EMPTY'});
            }
            updateTokens(authTokens);

            return;

        } catch (err){
            handleOnForceLogout();
            throw new SystemException({message: 'refresh token fail', code: 'REFRESH_TOKEN_CATCH'});
        }

    };



    return (
        <AuthStateContext.Provider value={{
            lastUpdateTimestamp,
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
