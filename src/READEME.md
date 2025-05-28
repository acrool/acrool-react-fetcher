# Acrool React Fetcher

<a href="https://acrool-react-fetcher.pages.dev/" title="Acrool React Fetcher - This is a fetcher message function for React development fetcher">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/example/public/og.png" alt="Acrool React Fetcher Logo"/>
</a>

<p align="center">
    This is a fetcher message function for React development fetcher
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/@acrool/react-fetcher/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/react-fetcher/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/npm/dt/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)

</div>


`^1.1.0 support react >=18.0.0 <20.0.0`


## Features

- Support rtk-query use api request method
- Support auth manager (accessToken, refreshToken), Refresh mechanism

## Install

```bash
yarn add framer-motion @acrool/react-fetcher
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-fetcher/dist/index.css";
```

add in your App.tsx

```tsx
import {AuthStateProvider, AuthTokensManager,FetcherClientProvider} from '@acrool/react-fetcher';
import dayjs from 'dayjs';
import React, {JSX} from 'react';

import {usePutAuthRefreshTokenMutation} from '@/store/__generated__';
import {useRefreshToken} from '@/store/main/auth/hook';
import {removeAuthTokens} from '@/store/main/auth/utils';


interface IProps {
    children: JSX.Element
}


const ReactFetcherProvider = ({
  children
}: IProps) => {
    const handleChangeLocale = (newLocale: string) => {
        dayjs.locale(newLocale);
    };

    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    const RefreshToken = useRefreshToken();

    return <AuthStateProvider>
        <FetcherClientProvider
            // authTokensManager={new AuthTokensManager({
            //     getter: () => window.mockTokens,
            //     updater: (authTokens) => {
            //         window.mockTokens = authTokens;
            //     },
            //     clearer: () => {
            //         window.mockTokens = undefined;
            //     }
            // })}
            onRefreshToken={async (refreshToken) => {
                const res = await RefreshTokenMutation({
                    variables: {input: {refreshToken: refreshToken}},
                    fetchOptions: {
                        requestCode: 'refreshToken',
                        // headers: {
                        //     [refreshingHeaderKey]: 'true',
                        // }
                    }
                }).unwrap();

                return res?.authRefreshToken.authTokens;
            }}
            onForceLogout={ () => {
                removeAuthTokens();
            }}
            getLocale={() => 'zh-TW'}
        >
            {children}
        </FetcherClientProvider>
    </AuthStateProvider>;

};

export default ReactFetcherProvider;


```

## License

MIT © [Acrool](https://github.com/acrool)
