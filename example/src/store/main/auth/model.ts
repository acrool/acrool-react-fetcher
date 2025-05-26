
/** -----------------------------------------
 |             Store Model                   |
 /** ---------------------------------------*/
export interface IToken {
    accessToken: TAccessToken
    refreshToken: TAccessToken
}
export type TAccessToken = string;
export type TPayload = {
    id: string,
    account: string,
    name: string,
    isAdmin: boolean,
    exp: number,
    permissions: string[],
    personalWorkspaceId: string,
} | undefined

export interface IProfile {
    id: number
    name: string
    email: string
    avatarUrl: string
}



export interface IRefreshTokenArgs {
    tokenInfo: {
        refreshToken: string,
        accessToken: string,
    }
}

export interface ICheckInArgs {
    tokenInfo: {
        refreshToken: string,
        accessToken: string,
    }
    profile: IProfile
}
export interface ISignUpArgs {
    account: string
    password: string
    confirmPassword: string
    email: string
    name: string
    verifyCode: string
    verifyCodeId: string
}
export interface IResetPasswordArgs {
    email: string
    verifyCode: string
    verifyCodeId: string
    newPassword: string
    confirmNewPassword: string
}
export interface ISendVerifyCode {
    email: string
}

export interface ICheckIn {
    tokenInfo: IToken
    name: string
    resolve?: (value: unknown) => void
}
