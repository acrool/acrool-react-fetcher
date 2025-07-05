import {BlockWrapper} from '@acrool/react-block';
import {LocaleAsyncProvider} from '@acrool/react-locale';
import dayjs from 'dayjs';
import React, {JSX} from 'react';
import styled from 'styled-components';

import {persistKeyMap} from '@/config/app';
import {DEFAULT_LOCALE, serverDictionaries} from '@/config/locale';

interface IProps {
    children: JSX.Element
}


/**
 * 多語系提供者
 * @param children
 */
const AppLocaleProvider = ({
    children
}: IProps) => {
    const handleChangeLocale = (newLocale: string) => {
        dayjs.locale(newLocale);
    };

    return <LocaleAsyncProvider
        localeDictionaries={serverDictionaries}
        defaultLocale={DEFAULT_LOCALE}
        onChangeLocale={handleChangeLocale}
        renderLoading={() => <BlockWrapperFixed queueKey="locale-fetching"/>}
        persistKey={`${persistKeyMap.locale}-locale`}
    >
        {children}
    </LocaleAsyncProvider>;
};

export default AppLocaleProvider;


const BlockWrapperFixed = styled(BlockWrapper)`
    position: fixed;
    inset: 0;
`;
