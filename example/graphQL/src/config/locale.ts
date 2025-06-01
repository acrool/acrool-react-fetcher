import {TLocaleDictionariesAsync} from '@acrool/react-locale';

import {asset} from '@/utils/config';


/**
 * `${languageCode}-${countryCode}`
 *
 * languageCode 是包含兩個字母的小寫代碼，由 ISO-639 所定義。
 * https://zh.wikipedia.org/zh-tw/ISO_639-1
 *
 * countryCode 是包含兩個字母的大寫代碼，由 ISO-3166 所定義。
 * https://zh.wikipedia.org/zh-tw/ISO_3166-1
 *
 * 例如，en-US 是美國英文的語言值。
 */
export enum ELocales {
    enUS = 'en-US',
    zhTW = 'zh-TW',
}

export const serverDictionaries: TLocaleDictionariesAsync = {
    [ELocales.enUS]: () => import('../locales/en-US'),
    [ELocales.zhTW]: () => import('../locales/zh-TW'),
};

export const DEFAULT_LOCALE = ELocales.zhTW;



export const optionData: Array<{text: string, value: ELocales, avatarUrl: string, code: string}> = [
    {text: 'ENGLISH', value: ELocales.enUS, code: 'en', avatarUrl: asset('/images/country/USA.webp')},
    {text: '繁體中文', value: ELocales.zhTW, code: 'zh-tw', avatarUrl: asset('/images/country/TWN.webp')},
];
