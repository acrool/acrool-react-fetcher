import {ELocales} from '@/config/locale';

import {ISiteConfig} from './types';

export const siteConfig: ISiteConfig = {
    siteName: 'Acrool Fetcher',
    meta: {
        title: 'Acrool Fetcher',
        description: 'Acrool is the ultimate project management tool. Start up a board in seconds, automate tedious tasks, and collaborate anywhere, even on mobile.',
    },
    defaultLang: ELocales.enUS,
    whiteLang: [ELocales.enUS, ELocales.zhTW],
    theme: {
        pwaStartUpBackground: '#0e0f13',
        primaryColor: '#0a66c2',
        primaryContrastColor: 'rgba(0, 163, 224, 0.8)',
        primaryShadowColor: 'rgba(0, 163, 224, 0.4)',
        primaryGradientColor: '#004e6b',
        loaderMaskColor: '#0d3c6f',
        secondColor: '#a8d580',
        thirdColor: '#9c92ff',
    },
};
