import {getProtocolDomain} from '@acrool/js-utils/uri';

import {assetPrefixUrl, routePrefixPath,storagePrefixPath} from '@/config/app';

import packageInfo from '../../../package.json';


/**
 * 去除雙斜線但不包含 ://
 * @param url
 */
export function removeSlashes(url) {
    const domain = getProtocolDomain(url)
        .replace(/\/+$/, '');  // 去除結尾的斜線

    const path = url.replace(domain, '')
        .replace(/\/\//g, '/')
        .replace(/^\//, ''); // 去除開頭的斜線

    return `${domain}/${path}`;
}



/**
 * 取得版本號
 */
export function getAppVersion(): string{
    return packageInfo.version;
}


/**
 * 取得後台上傳檔案的路徑資源網址
 */
export function storage(path?: string): string{
    if(path){
        const formatPath = `${storagePrefixPath}/${path}`;
        return removeSlashes(formatPath);
    }
    return '';
}


/**
 * 取得前端資源網址
 */
export function asset(path?: string): string{
    if(path){
        const formatPath = `${assetPrefixUrl}/${path}`;
        return removeSlashes(formatPath);
    }
    return '';
}

/**
 * 取得前端資源網址
 */
export function navOpen(path?: string): string{
    if(path){
        const formatPath = `${routePrefixPath}/${path}`;
        return removeSlashes(formatPath);
    }
    return '';
}


