import {render, waitFor} from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import React from 'react';

import AuthTokensManager from '../../AuthTokensManager';
import AxiosClientProvider, {useAxiosClient} from '../AxiosClientProvider';
import {axiosInstance} from '../config';
import {IAxiosClientProviderProps} from '../types';

const TestComponent: React.FC<{ onResult: (data: any) => void }> = ({onResult}) => {
    const client = useAxiosClient();
    React.useEffect(() => {
        client.post('/test', {foo: 'bar'})
            .then(res => onResult(res.data))
            .catch(err => onResult(err));
    }, [client, onResult]);
    return null;
};

describe('AxiosClientProvider', () => {
    let mock: AxiosMockAdapter;
    let accessToken = 'token1';
    let refreshTokenValue = 'refresh1';
    let refreshCalled = false;
    let forceLogoutCalled = false;

    const getAuthTokens = () => ({
        accessToken,
        refreshToken: refreshTokenValue,
    });

    const refreshToken = jest.fn(async () => {
        refreshCalled = true;
        // 模擬刷新成功
        accessToken = 'token2';
        refreshTokenValue = 'refresh2';
        return {accessToken, refreshToken: refreshTokenValue};
    });

    const onForceLogout = jest.fn(() => {
        forceLogoutCalled = true;
    });

    const getLocale = () => 'zh-TW';

    const dependencies: IAxiosClientProviderProps = {
        authTokensManager: new AuthTokensManager({
            getter: () => getAuthTokens(),
            updater: (authTokens) => {
                // refreshToken(authTokens);
            },
            clearer: () => {

            }
        }),
        onRefreshToken: refreshToken,
        onForceLogout,
        getLocale,
    };

    beforeEach(() => {
        mock = new AxiosMockAdapter(axiosInstance);
        accessToken = 'token1';
        refreshTokenValue = 'refresh1';
        refreshCalled = false;
        forceLogoutCalled = false;
        refreshToken.mockClear();
        onForceLogout.mockClear();
    });

    afterEach(() => {
        mock.restore();
    });

    it('正常登入請求', async () => {
        mock.onPost('/test').reply(config => {
            expect(config.headers?.Authorization).toBe('Bearer token1');
            return [200, {ok: true}];
        });

        const onResult = jest.fn();
        render(
            <AxiosClientProvider {
                ...dependencies
            }>
                <TestComponent onResult={onResult} />
            </AxiosClientProvider>
        );

        await waitFor(() => {
            expect(onResult).toHaveBeenCalledWith({ok: true});
        });
        expect(refreshToken).not.toHaveBeenCalled();
        expect(onForceLogout).not.toHaveBeenCalled();
    });

    it('token 過期，自動刷新成功，原請求重發', async () => {
        let first = true;
        mock.onPost('/test').reply(config => {
            if (first) {
                first = false;
                // 模擬 token 過期
                return [200, {errors: [{code: 'UNAUTHENTICATED', message: 'token expired'}]}];
            }
            // 第二次用新 token
            expect(config.headers?.Authorization).toBe('Bearer token2');
            return [200, {ok: 'refreshed'}];
        });

        const onResult = jest.fn();
        render(
            <AxiosClientProvider {
                ...dependencies
            }>
                <TestComponent onResult={onResult} />
            </AxiosClientProvider>
        );

        await waitFor(() => {
            expect(onResult).toHaveBeenCalledWith({ok: 'refreshed'});
        });
        expect(refreshToken).toHaveBeenCalled();
        expect(onForceLogout).not.toHaveBeenCalled();
    });

    it('token 過期，refresh 也失敗，強制登出', async () => {
        mock.onPost('/test').reply(config => {
            // 一律回傳 token 過期
            return [200, {errors: [{code: 'UNAUTHENTICATED', message: 'token expired'}]}];
        });
        // refreshToken 這次直接 throw
        refreshToken.mockImplementationOnce(async () => {
            throw new Error('refresh failed');
        });

        const onResult = jest.fn();
        render(
            <AxiosClientProvider {
                ...dependencies
            }>
                <TestComponent onResult={onResult} />
            </AxiosClientProvider>
        );

        await waitFor(() => {
            expect(onForceLogout).toHaveBeenCalled();
            expect(onResult.mock.calls[0][0]).toBeInstanceOf(Error);
        });
    });

    it('WS_FORBIDDEN 會觸發 onError 回調', async () => {
        mock.onPost('/test').reply(config => {
            return [200, {errors: [{code: 'WS_FORBIDDEN', message: 'forbidden'}]}];
        });
        const onError = jest.fn();
        const customDeps = {...dependencies, onError};
        const onResult = jest.fn();
        render(
            <AxiosClientProvider {
                ...dependencies
            }>
                <TestComponent onResult={onResult} />
            </AxiosClientProvider>
        );
        await waitFor(() => {
            expect(onError).toHaveBeenCalledWith(
                expect.objectContaining({code: 'WS_FORBIDDEN'})
            );
        });
    });
});
