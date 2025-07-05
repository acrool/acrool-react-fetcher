export const baseURL: string = '/api';

export const refreshingHeaderKey = 'X-Requested-Refresh-Token';

// 定義不需要顯示全域錯誤的錯誤代碼
export const IGNORED_ERROR_CODES = [
    'ACCOUNT_RECOMMEND', // 推薦帳號
];
