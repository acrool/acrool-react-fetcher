export interface IAuthTokens { accessToken?: string, refreshToken?: string }

// 新增 updateTokens 的型別
export type TAuthTokensUpdater = (tokensOrUpdater: IAuthTokens | null | ((curr: IAuthTokens | null) => IAuthTokens | null)) => void;


export type TOnRefreshToken = (refreshToken: string) => Promise<IAuthTokens|undefined>;
export type TRefreshToken = () => Promise<void>;
export type TOnForceLogout = () => void;
export type TForceLogout = () => void;
export type TOnSetTokens = TAuthTokensUpdater;
export type TOnGetTokens = () => IAuthTokens | null;
export type TGetTokens = () => IAuthTokens | null;
