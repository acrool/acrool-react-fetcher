# Acrool React Fetcher

<a href="https://acrool-react-fetcher.pages.dev/" title="Acrool React Fetcher - Fetcher list with React Component">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/example/public/og.webp" alt="Acrool React Fetcher Logo"/>
</a>

<p align="center">
    Drop-down menu with rich functions, including search/groups options/avatar/multi for Reactjs
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/@acrool/react-fetcher/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/react-fetcher/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/npm/dt/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)

</div>

## Features

- Supports two themes (light/dark)
- Support multiple selection function
- Support groups options
- Support avatar display
- Support search search function
- Support value custom type (string, number, boolean, object...)
- Support accessibility (keyboard Tab, Arrow Top, Bottom, Enter)

## Install

```bash
yarn add @acrool/react-fetcher
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-fetcher/dist/index.css";
```

then in your page
```tsx
import {Fetcher, FetcherMulti} from '@acrool/react-fetcher';


const Example = () => {
    const [value, setValue] = useState<string|null>('');
    const [multiValue, setMultiValue] = useState<Array<string|null>|null>(null);

    const renderFetcher = () => {
        const options = [
            {text: 'Jack Wu', value: '1'},
            {text: 'Imagine Chiu', value: '2'},
            {text: 'Jason Dinwiddie', value: '3'},
            {text: 'Gloria Lu', value: '4'},
        ];
        return <Fetcher value={value} onChange={setValue} options={options}/>;
    }
    
    const renderFetcherMulti = () => {
        const options = [
            {text: 'Select option item...', value: '', avatarUrl: ''},
            {text: 'Jack Wu', value: '1', avatarUrl: asset('/images/avatar/female-1.jpg')},
            {text: 'Imagine Chiu', value: '2', avatarUrl: asset('/images/avatar/female-2.jpg')},
            {text: 'Jason Dinwiddie', value: '3', avatarUrl: asset('/images/avatar/female-3.jpg')},
            {text: 'Gloria Lu', value: '4', avatarUrl: asset('/images/avatar/female-4.jpg')},
        ];
        return <FetcherMulti value={multiValue} onChange={setMultiValue} options={options2} isDark/>;
    }
    
    return (
        <>
            {renderFetcher()}
            {renderFetcherMulti()}
        </>
    );

};
```

<img src="https://acrool-react-fetcher.pages.dev/preview.webp" alt="Acrool React Fetcher Preview" width="700"/>



## Options

if need use `null` value, options type

```json
{
    "compilerOptions": {
        "strictNullChecks": false
    }
}
```

There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/play-in-example-button.svg)](https://acrool-react-fetcher.pages.dev)


## License

MIT © [imagine10255](https://github.com/imagine10255)
