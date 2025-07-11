import logger from '@acrool/js-logger';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState} from 'react';

import {FetcherException} from '../exception';
import {
    IAuthTokens,
    TAuthTokensUpdater,
    TForceLogout,
    TGetTokens, TOnForceLogout,
    TOnGetTokens, TOnRefreshToken,
    TOnSetTokens,
    TRefreshToken
} from './types';


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
    onRefreshTokens?: TOnRefreshToken
    onForceLogout?: TOnForceLogout
    isDebug?: boolean
}

const AuthStateProvider = ({
    children,
    onGetTokens,
    onSetTokens,
    onRefreshTokens,
    onForceLogout,
    isDebug = false,
}: AuthStateProviderProps) => {
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(() => {
        return isNotEmpty(onGetTokens());
    });



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
        onSetTokens(nextTokens);
        setIsAuth(isNotEmpty(nextTokens));
        setLastUpdateTimestamp(Date.now());
    };


    /**
     * 強制登出
     */
    const handleOnForceLogout = () => {
        updateTokens(null);

        if(onForceLogout){
            onForceLogout();
        }
    };

    /**
     * 當刷新 tokens 時世紀ㄢ
     */
    const handleOnRefreshTokens = async () => {
        const refreshToken = onGetTokens()?.refreshToken;
        if(!refreshToken || !onRefreshTokens) {
            if (isDebug) logger.danger('[AuthStateProvider] handleOnRefreshTokens', 'refreshToken|onRefreshTokens empty');
            throw new FetcherException({message: 'refreshToken|onRefreshTokens empty', code: 'REFRESH_TOKEN_EMPTY'});
        }

        try {
            const authTokens = await onRefreshTokens(refreshToken);
            if(isEmpty(authTokens)){
                if (isDebug) logger.danger('[AuthStateProvider] handleOnRefreshTokens', 'new refresh token fail');

                throw new FetcherException({message: 'new refresh token fail', code: 'NEW_REFRESH_TOKEN_EMPTY'});
            }
            updateTokens(authTokens);

            return;

        } catch (err){
            handleOnForceLogout();
            throw new FetcherException({message: 'refresh token fail', code: 'REFRESH_TOKEN_CATCH'});
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
