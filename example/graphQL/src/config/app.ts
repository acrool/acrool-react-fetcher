const routerPath = {
    login: '/sign-in',
    dashboard: '/',
};

const persistWhileList = [
    'auth',
];
const persistKey = 'persist:fetcher';
const persistVersion = '1.3.2';
const persistKeyMap = {
    root: persistKey,
    version: `${persistKey}-version`,
    locale: `${persistKey}-locale`,
    auth: `${persistKey}-auth`,
    themeMode: `${persistKey}-themeMode`,
};
const assetPrefixUrl = '/static';

const fetcherLeastTime = 400;

export {
    fetcherLeastTime,
    persistKeyMap,
    persistVersion,
    persistWhileList,
    routerPath,
    assetPrefixUrl,
};
