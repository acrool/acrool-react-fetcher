import {useLocale} from '@acrool/react-locale';

import {ELocales} from '@/config/locale';


const docHost = 'https://docs.acrool.com';



export const useDocUrl = () => {
    const {locale} = useLocale();

    const getDocUrl = (path: string) => {
        const currLocale = locale === ELocales.enUS ? '': `/${locale}`;

        return `${docHost}${currLocale}${path}`;
    };
    return {
        getDocUrl
    };
};
