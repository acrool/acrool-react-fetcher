import {jsonDecode} from '@acrool/js-utils/string';

import {persistKey, persistVersion} from '@/config/app';
import {gridConfig} from '@/config/grid';
import {DEFAULT_LOCALE,ELocales} from '@/config/locale';
import {siteConfig} from '@/config/site';
import configureStore from '@/library/redux/configureStore';
import {asset, getAppVersion} from '@/utils/config';


function getDefaultLocale(locale: ELocales): ELocales {
    if (siteConfig.whiteLang.includes(locale)) {
        return locale;
    }
    return DEFAULT_LOCALE;
}


interface IInitialState {
}


const persistKeyMap = {
    root: persistKey,
    locale: `${persistKey}-locale`,
    auth: `${persistKey}-auth`,
    version: `${persistKey}-version`,
};

/**
 * 取得持久化預設Redux狀態
 */
function getPreloadedState() {
    const userLanguage = getDefaultLocale(navigator.language as ELocales);

    // 持久化資料回存到 Redux (若版本不同則重設)
    let initialState: IInitialState|undefined = {};
    if (persistVersion !== window.localStorage.getItem(`${persistKey}-version`)) {
        window.localStorage.setItem(persistKeyMap.version, persistVersion);
        window.localStorage.setItem(persistKeyMap.locale, userLanguage);
        window.localStorage.setItem(persistKeyMap.auth, '{}');
        window.localStorage.setItem(persistKeyMap.root, '{}');

    } else {
        initialState = jsonDecode(window.localStorage.getItem(persistKeyMap.auth) || '{}');
        initialState = jsonDecode(window.localStorage.getItem(persistKeyMap.root) || '{}');
    }

    return initialState;
}

console.log('info: ', JSON.stringify({
    nodeEnv: process.env.NODE_ENV,
    version: getAppVersion(),
    assetUrl: asset('/imagePath'),
    language: navigator.language,
    // uploadUrl: uploadUrl('/imagePath'),
}));




const preloadedState = getPreloadedState();
const {store, reduxSelector, reduxDispatch} = configureStore(preloadedState);
// const history = createReduxHistory(store);

const appTheme = siteConfig.theme;


export {
    store,
    // history,
    gridConfig,
    appTheme,
    reduxSelector,
    reduxDispatch,
};
