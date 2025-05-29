import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/graphql',
    timeout: 2 * 60 * 1000,
});




// 預設多語系字典
export const defaultI18nDict: Record<string, Record<string, string>> = {
    'en-US': {
        '400': 'The requested parameter is wrong',
        '401': 'Please login before continuing',
        '404': 'Request Not Found/Route',
        '413': 'The request/file sent exceeds the server limit size',
        '500': 'Internal Server Error',
        '503': 'System under maintenance',
        '504': 'Please check your network and try again',
        '511': 'Area not available',
        'CANCEL_ERROR': 'Request has been cancelled. Only possible if `cancelToken` is provided in config, see axios `Cancellation`',
        'CLIENT_ERROR': 'Any non-specific 400 series error',
        'CONNECTION_ERROR': 'Server not available, bad dns',
        'NETWORK_ERROR': 'Your mobile network connection is unstable. Please check your network connection status and try again.',
        'SERVER_ERROR': 'Any 500 series error',
        'TIMEOUT_ERROR': 'The server has not responded for more than {sec} seconds. Please confirm your network connection status or contact customer service',
    },
    'zh-TW': {
        '400': '請求的參數錯誤',
        '401': '請先登入再繼續',
        '404': '請求未找到/路由錯誤',
        '413': '請求/發送的檔案超出伺服器限制大小',
        '500': '內部伺服器錯誤',
        '503': '系統維護',
        '504': '請檢查網路後重試',
        '511': '區域不可用',
        'CANCEL_ERROR': '請求已取消。僅在配置中提供 `cancelToken` 時可能發生，請參閱 axios 的 `Cancellation`',
        'CLIENT_ERROR': '任意非特定的400系列錯誤',
        'CONNECTION_ERROR': '伺服器不可用，DNS錯誤',
        'NETWORK_ERROR': '您的行動網路連線不穩定。請檢查網路連線後重試。 ',
        'SERVER_ERROR': '任意500系列錯誤',
        'TIMEOUT_ERROR': '伺服器已超過 {sec} 秒未回應。請確認您的網路連線狀態或聯絡客服',
    },
    'zh-CN': {
        '400': '请求的参数错误',
        '401': '请先登录再继续',
        '404': '请求未找到/路由错误',
        '413': '请求/发送的文件超出服务器限制大小',
        '500': '内部服务器错误',
        '503': '系统维护中',
        '504': '请检查网络后重试',
        '511': '区域不可用',
        'CANCEL_ERROR': '请求已取消。仅当配置中提供 `cancelToken` 时可能发生，请参阅 axios 的 `Cancellation`',
        'CLIENT_ERROR': '任意非特定的400系列错误',
        'CONNECTION_ERROR': '服务器不可用，DNS错误',
        'NETWORK_ERROR': '您的移动网络连接不稳定。请检查网络连接后重试。',
        'SERVER_ERROR': '任意500系列错误',
        'TIMEOUT_ERROR': '服务器已超过 {sec} 秒未响应。请确认您的网络连接状态或联系客服',
    },

};
