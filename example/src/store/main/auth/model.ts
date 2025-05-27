import {IAuthTokens} from '@acrool/react-fetcher';

/** -----------------------------------------
 |             Store Model                   |
 /** ---------------------------------------*/
export type TPayload = {
    id: string,
    account: string,
    name: string,
    isAdmin: boolean,
    exp: number,
    permissions: string[],
    personalWorkspaceId: string,
} | undefined


export interface ICheckIn {
    authTokens: IAuthTokens
    name: string
    resolve?: (value: unknown) => void
}
