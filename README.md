# Acrool React Fetcher

<a href="https://acrool-react-fetcher.pages.dev/" title="Acrool React Fetcher - This is a block function for React development loading block">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/example/public/og.webp" alt="Acrool React Fetcher Logo"/>
</a>

<p align="center">
    This is a toast message function for React development notifications
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

- Supports queue block list
- Plug and unplug using `@acrool/react-portal` and `framer-motion`

## Install

```bash
yarn add @acrool/react-fetcher
```


## Usage

add in your index.tsx
```tst
import "@acrool/react-fetcher/dist/index.css";
```

add in your App.tsx

```tsx
import {BlockPortal} from "@acrool/react-fetcher";

const App = () => {
    return (
        <div>
            <BaseUsed/>
            <BlockPortal
                isVisibleQueueKey={false}
                loader={<Loader/>}
                defaultMessage="Loading..."
            />
        </div>
    );
};
```

then in your page

```tsx
import {block} from '@acrool/react-fetcher';
import {useEffect} from "react";

const Example = () => {

    useEffect(() => {
        block.show();
        
        setTimeout(() => {
            block.hide();
        }, 3000)
    }, []);

    return (
        <div>
            sample page
        </div>
    );
};
```

- block.show
- block.hide


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/play-in-example-button.svg)](https://acrool-react-fetcher.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
