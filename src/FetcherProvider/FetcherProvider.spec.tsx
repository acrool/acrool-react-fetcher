import {act, render} from '@testing-library/react';
import axios, {AxiosRequestConfig} from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {AuthStateProvider, IAuthTokens, TOnRefreshToken} from '../AuthStateProvider';
import {FetcherException} from '../exception';
import FetcherProvider from './FetcherProvider';


const unauthorized = {message: 'Unauthorized', code: 'UNAUTHORIZED'};

/**
 * 可以從外面決定何時完成的 Promise
 */
const createDeferred = () => {
    let resolve: () => void = () => {};
    const promise = new Promise<void>(r => {
        resolve = r;
    });
    return {promise, resolve};
};

/**
 * 模擬一支「送出後先停住，等 gate 打開才回 401」的 API，用來讓 401 晚到
 */
const createLateUnauthorized = () => {
    const sent = createDeferred();
    const gate = createDeferred();
    const reply = async (): Promise<[number, typeof unauthorized]> => {
        sent.resolve();
        await gate.promise;
        return [401, unauthorized];
    };
    return {sent: sent.promise, release: gate.resolve, reply};
};

/**
 * 請求帶的 token
 * @param config
 */
const getAuthorization = (config: AxiosRequestConfig) => config.headers?.Authorization;

interface ISetupArgs {
    tokens: IAuthTokens | null
    onRefreshTokens?: TOnRefreshToken
}

/**
 * 掛上 AuthStateProvider + FetcherProvider，token 存在 store.tokens
 * @param args
 */
const setup = ({tokens, onRefreshTokens}: ISetupArgs) => {
    const store = {tokens};
    const axiosInstance = axios.create();
    const mock = new MockAdapter(axiosInstance);
    const onResponseError = jest.fn();
    const onForceLogout = jest.fn();

    render(
        <AuthStateProvider
            onGetTokens={() => store.tokens}
            onSetTokens={(next) => {
                store.tokens = typeof next === 'function' ? next(store.tokens) : next;
            }}
            onRefreshTokens={onRefreshTokens}
            onForceLogout={onForceLogout}
        >
            <FetcherProvider axiosInstance={axiosInstance} onResponseError={onResponseError}>
                <div/>
            </FetcherProvider>
        </AuthStateProvider>
    );

    return {store, axiosInstance, mock, onResponseError, onForceLogout};
};


describe('FetcherProvider 的 401 處理', () => {

    it('請求帶的是目前的 token：登出並回報 onResponseError', async () => {
        const {store, axiosInstance, mock, onResponseError, onForceLogout} = setup({tokens: {accessToken: 'token-a'}});
        mock.onGet('/user').reply(401, unauthorized);

        await act(async () => {
            await expect(axiosInstance.get('/user')).rejects.toEqual(new FetcherException(unauthorized));
        });

        expect(onForceLogout).toHaveBeenCalledTimes(1);
        expect(store.tokens).toBeNull();
        expect(onResponseError).toHaveBeenCalledTimes(1);
        expect(onResponseError).toHaveBeenCalledWith(unauthorized, '401');
    });

    it('沒有登入、請求沒帶 token：維持原本的行為，登出並回報', async () => {
        const {axiosInstance, mock, onResponseError, onForceLogout} = setup({tokens: null});
        mock.onGet('/public').reply(401, unauthorized);

        await act(async () => {
            await expect(axiosInstance.get('/public')).rejects.toBeInstanceOf(FetcherException);
        });

        expect(onForceLogout).toHaveBeenCalledTimes(1);
        expect(onResponseError).toHaveBeenCalledTimes(1);
    });

    it('同一個 token 的多支請求都回 401，登出後馬上換了新 token：晚到的 401 不會把新 token 登出', async () => {
        const {store, axiosInstance, mock, onResponseError, onForceLogout} = setup({tokens: {accessToken: 'old-token'}});
        const balance = createLateUnauthorized();
        mock.onGet('/user').reply(401, unauthorized);
        mock.onGet('/balance').reply(balance.reply);

        await act(async () => {
            const balanceRequest = axiosInstance.get('/balance');
            await balance.sent;

            await expect(axiosInstance.get('/user')).rejects.toBeInstanceOf(FetcherException);
            expect(store.tokens).toBeNull();

            // 例如展機模式：登出後立刻取得新的試玩帳號
            store.tokens = {accessToken: 'new-token'};
            balance.release();

            await expect(balanceRequest).rejects.toEqual(new FetcherException(unauthorized));
        });

        expect(store.tokens).toEqual({accessToken: 'new-token'});
        expect(onForceLogout).toHaveBeenCalledTimes(1);
        expect(onResponseError).toHaveBeenCalledTimes(1);
    });

    it('已經登出（目前沒有 token）：晚到的舊 token 401 不再登出、不再回報', async () => {
        const {store, axiosInstance, mock, onResponseError, onForceLogout} = setup({tokens: {accessToken: 'token-b'}});
        const balance = createLateUnauthorized();
        mock.onGet('/user').reply(401, unauthorized);
        mock.onGet('/balance').reply(balance.reply);

        await act(async () => {
            const balanceRequest = axiosInstance.get('/balance');
            await balance.sent;

            await expect(axiosInstance.get('/user')).rejects.toBeInstanceOf(FetcherException);
            balance.release();

            await expect(balanceRequest).rejects.toBeInstanceOf(FetcherException);
        });

        expect(store.tokens).toBeNull();
        expect(onForceLogout).toHaveBeenCalledTimes(1);
        expect(onResponseError).toHaveBeenCalledTimes(1);
    });

    it('有換發機制，但請求送出後換了帳號：舊 token 的 401 只 reject，不換發、不登出、不回報', async () => {
        const onRefreshTokens = jest.fn<ReturnType<TOnRefreshToken>, Parameters<TOnRefreshToken>>();
        const {store, axiosInstance, mock, onResponseError, onForceLogout} = setup({
            tokens: {accessToken: 'user-a', refreshToken: 'refresh-a'},
            onRefreshTokens,
        });
        const orders = createLateUnauthorized();
        mock.onGet('/orders').reply(orders.reply);

        await act(async () => {
            const ordersRequest = axiosInstance.get('/orders');
            await orders.sent;

            // 請求還沒回來就登出、換成另一個帳號
            store.tokens = {accessToken: 'user-b', refreshToken: 'refresh-b'};
            orders.release();

            await expect(ordersRequest).rejects.toEqual(new FetcherException(unauthorized));
        });

        expect(store.tokens).toEqual({accessToken: 'user-b', refreshToken: 'refresh-b'});
        expect(onRefreshTokens).not.toHaveBeenCalled();
        expect(onForceLogout).not.toHaveBeenCalled();
        expect(onResponseError).not.toHaveBeenCalled();
    });

    it('換發過 token：晚到的 401 帶的是換發前的 token，改用新 token 重送，不再換發一次', async () => {
        const onRefreshTokens = jest.fn<ReturnType<TOnRefreshToken>, Parameters<TOnRefreshToken>>(
            async () => ({accessToken: 'token-2', refreshToken: 'refresh-2'})
        );
        const {store, axiosInstance, mock, onResponseError, onForceLogout} = setup({
            tokens: {accessToken: 'token-1', refreshToken: 'refresh-1'},
            onRefreshTokens,
        });
        const balance = createLateUnauthorized();
        mock.onGet('/user').reply(config => {
            return getAuthorization(config) === 'Bearer token-2' ? [200, {name: 'user'}] : [401, unauthorized];
        });
        mock.onGet('/balance').reply(config => {
            return getAuthorization(config) === 'Bearer token-2' ? [200, {balance: 5}] : balance.reply();
        });

        await act(async () => {
            const balanceRequest = axiosInstance.get('/balance');
            await balance.sent;

            // 第一個 401 換發成 token-2，並用新 token 重送
            const user = await axiosInstance.get('/user');
            expect(user.data).toEqual({name: 'user'});
            expect(store.tokens).toEqual({accessToken: 'token-2', refreshToken: 'refresh-2'});

            balance.release();
            const balanceResponse = await balanceRequest;
            expect(balanceResponse.data).toEqual({balance: 5});
        });

        expect(onRefreshTokens).toHaveBeenCalledTimes(1);
        expect(onRefreshTokens).toHaveBeenCalledWith('refresh-1');
        expect(onForceLogout).not.toHaveBeenCalled();
        expect(onResponseError).not.toHaveBeenCalled();
    });
});
