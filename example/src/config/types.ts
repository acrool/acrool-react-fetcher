import {ELocales} from '@/config/locale';

export type TTheme = {
    pwaStartUpBackground: string,
    primaryColor: string,
    primaryContrastColor: string,
    primaryShadowColor: string,
    primaryGradientColor: string,
    loaderMaskColor: string,
    secondColor: string,
    thirdColor: string,
};


export enum ESiteEnv {dev='dev', evaluate='evaluate', prod='prod'}
export enum ECountry {malaysia='malaysia', china='china', vietnam='vietnam', thailand='thailand', indonesia='indonesia', philippine='philippine', singapore='singapore'}
export enum EDevice {browser = 'browser', webBrowser = 'webBrowser', mobileBrowser = 'mobileBrowser', app ='app', iosApp = 'iosApp', androidApp = 'androidApp'}

export type TDeviceIcon = Record<EDevice, string>

export interface ISiteConfig {
    siteName: string
    meta: {title: string, description: string}
    defaultLang: ELocales
    whiteLang: ELocales[]
    theme: TTheme

}
