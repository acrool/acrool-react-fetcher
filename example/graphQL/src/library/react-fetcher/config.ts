export const baseURL = `${import.meta.env.VITE_API_TARGET_DOMAIN}/graphql`;

export const refreshingHeaderKey = 'X-Requested-Refresh-Token';

// 定義不需要顯示全域錯誤的錯誤代碼
export const IGNORED_ERROR_CODES: string[] = [
];


export const persistAuthKey = 'persist:acrool-fetcher-auth';
