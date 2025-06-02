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


export interface ISiteConfig {
    siteName: string
    meta: {title: string, description: string}
    defaultLang: ELocales
    whiteLang: ELocales[]
    theme: TTheme

}
