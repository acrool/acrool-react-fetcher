# Acrool React Fetcher

Acrool React Fetcher is a solution for API integration and Auth state management in React projects. It helps you easily manage tokens, make API requests, perform GraphQL queries, and handle authentication flows.

<a href="https://acrool-react-fetcher.pages.dev/" title="Acrool React Fetcher - This is a block function for React development loading block">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/example/graphQL/public/og.png" alt="Acrool React Fetcher Logo"/>
</a>

<p align="center">
    A solution for API integration and token management in React projects
</p>


- [GraphQL](https://acrool-react-fetcher-graphql.pages.dev/)
- [RestFul](https://acrool-react-fetcher-restful.pages.dev/)



<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/@acrool/react-fetcher/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-fetcher?style=for-the-badge)](https://github.com/acrool/react-fetcher/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)
[![npm](https://img.shields.io/npm/dt/@acrool/react-fetcher.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-fetcher)

</div>


## Features

- Token state management and custom refresh mechanism
- GraphQL query support and custom fetcher
- Seamless integration with Redux Toolkit Query
- Flexible provider composition
- Easy to test and simulate login/logout/token invalidation scenarios

## Installation

```bash
yarn add @acrool/react-fetcher
```

## Quick Start

### 1. Import styles

Add the following to your entry file (e.g. `index.tsx`):

```ts
import "@acrool/react-fetcher/dist/index.css";
```

### 2. Provider structure

Wrap your app with `AuthStateProvider` and `AxiosClientProvider`. It is recommended to use `AppFetcherProvider` to automatically wrap all necessary providers:

```tsx
import AppFetcherProvider from '@/library/acrool-react-fetcher';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppFetcherProvider>
    <App />
  </AppFetcherProvider>
);
```

### 3. Create baseApi (GraphQL query)

For Redux Toolkit Query, create `baseApi.ts`:

```ts
import { createGraphQLFetcher } from '@acrool/react-fetcher';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from '@/library/acrool-react-fetcher';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: async (query, api, extraOptions) => {
    // Token handling and refresh are managed automatically
    const data = await createGraphQLFetcher(axiosInstance, query.document)(query.args);
    return { data };
  },
  endpoints: () => ({}),
});
```

### 4. Use Auth state and API in your pages

#### Get and update tokens

```tsx
import { useAuthState } from '@acrool/react-fetcher';

const { getTokens, updateTokens } = useAuthState();
```

#### Send GraphQL query

```tsx
const { data, refetch } = useGetBookmarkQuery({ variables: { bookmarkId: '1' } });
```

#### Simulate token invalidation and refresh

```tsx
const handleMockTokenInvalid = () => {
  updateTokens(curr => ({
    ...curr,
    accessToken: 'mock-invalid-token',
  }));
  refetch();
};
```

#### Login/Logout

```tsx
const login = useLogin();
const logout = useLogout();

await login({ variables: { input: { account, password } } });
logout();
```

### 5. More examples

- The Dashboard page demonstrates how to operate token, API, and locale switching
- The Login page demonstrates login and error handling

---

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
