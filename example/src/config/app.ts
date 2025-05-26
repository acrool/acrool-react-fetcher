
const routePrefixPath = '';
const assetPrefixUrl = `${routePrefixPath}/static`;
const storagePrefixPath = '/uploads';
const loginRoutePath = '/sign/login';

const api = {
    baseUrl: '/api-admin',
    timeout: 120 * 1000
};
const persistKey = 'persist:acrool-backdesk';

const persistWhileList = [
    'auth.profile',
    'auth.workspaceId',
    'auth.sendVerifyCodeLastTime',

    'project.projectViewMode',
    'project.projectTaskViewMode',
    'project.projectEvaluateViewMode',
    'project.isVisibleProjectKanbanBanner',
    'project.isVisibleTaskKanbanBanner',
];
const persistVersion = '1.0.13';
const fetchDataDelayMinMs = 300;
const submitDataDelayMinMs = 400;
const isEnableMobileConsole = false;
const isFilterMenuAuth = true; // @@@@  檢查目錄權限 (開發evaluate關閉) @@@@

const slackLink = 'https://www.threads.com/@acrooldev';

export {
    slackLink,
    assetPrefixUrl,
    storagePrefixPath,
    api,
    persistKey,
    persistWhileList,
    persistVersion,
    fetchDataDelayMinMs,
    submitDataDelayMinMs,
    routePrefixPath,
    isEnableMobileConsole,
    isFilterMenuAuth,
    loginRoutePath,
};
