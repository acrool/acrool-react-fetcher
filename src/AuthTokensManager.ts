import {IAuthTokens} from './types';

/**
 * Token 管理類別
 */
export default class AuthTokensManager {
    private _getter: () => IAuthTokens | undefined;
    private _updater: (tokens: IAuthTokens) => void;
    private _clearer: () => void;
    private _isRefreshing = false;


    get isRefreshing () {
        return this._isRefreshing;
    }

    /**
     * 取得 Tokens
     */
    get tokens(): IAuthTokens | undefined {
        return this._getter();
    }

    /**
     * 取得 RefreshToken
     */
    get refreshToken(): IAuthTokens | undefined {
        return this._getter();
    }

    /**
     * 取得 AccessToken
     */
    get accessToken(): IAuthTokens | undefined {
        return this._getter();
    }


    constructor(options: {
        getter: () => IAuthTokens | undefined,
        updater: (tokens: IAuthTokens) => void,
        clearer: () => void,
    }) {
        this._getter = options.getter;
        this._updater = options.updater;
        this._clearer = options.clearer;
    }


    /**
     * 更新 Token
     * @param tokens
     */
    public update(tokens: IAuthTokens) {
        this._updater(tokens);
    }

    /**
     * 清理 Token
     */
    public clear() {
        this._clearer();
    }

    /**
     * 刷新Token狀態
     * @param isRefreshing
     */
    public refreshing(isRefreshing: boolean) {
        this._isRefreshing = isRefreshing;
        return this;
    }
}
