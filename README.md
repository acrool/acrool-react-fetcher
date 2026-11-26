# Acrool React Fetcher

Acrool React Fetcher is a solution for API integration and Auth state management in React projects. It helps you easily manage tokens, make API requests, perform GraphQL queries, and handle authentication flows.

<a href="https://acrool-react-fetcher.pages.dev/" title="Acrool React Fetcher - This is a block function for React development loading block">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-fetcher/main/example/public/og.png" alt="Acrool React Fetcher Logo"/>
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

> `axios`, `@acrool/js-utils` and `@acrool/js-logger` are installed as dependencies, nothing to add on your side. Since 1.0.0 they are no longer bundled into `dist`, so your bundler can dedupe and tree-shake them. There is no stylesheet to import.

## Quick Start

### 1. Provider structure

Wrap your app with `AuthStateProvider` and `FetcherProvider`. It is recommended to use `AppFetcherProvider` to automatically wrap all necessary providers:

```tsx
import AppFetcherProvider from '@/library/react-fetcher';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppFetcherProvider>
    <App />
  </AppFetcherProvider>
);
```

### 2. Create baseApi (GraphQL query)

For Redux Toolkit Query, create `baseApi.ts`:

```ts
import { createGraphQLFetcher } from '@acrool/react-fetcher';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from '@/library/react-fetcher';

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

### 3. Use Auth state and API in your pages

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

### 4. More examples

- The Dashboard page demonstrates how to operate token, API, and locale switching
- The Login page demonstrates login and error handling

---


### 401 handling

When a response is 401 (or `checkErrorIs401` returns `true`), `FetcherProvider` compares the access token the failed request was **sent with** against the current one (`getTokens().accessToken`):

| The failed request was sent with | What happens |
|---|---|
| the current token, or no token | Same as before: refresh the tokens if there is a `refreshToken` (the request is sent again afterwards), otherwise `forceLogout()` and report to `onResponseError` |
| an older token that the last refresh replaced | Sent again once with the current token. No second refresh |
| any other older token (logged out, or signed in again, since it was sent) | Only this request is rejected with the server's error. No refresh, no `forceLogout()`, no `onResponseError` |

Why: requests sent together with the same expired token all come back 401. The first one already logs out and reports it. The later ones belong to a token that is gone. Logging out again would also sign out a session created in between (for example an app that signs in again right after logout), and reporting them again would repeat the global error handling (dialogs, redirects) for the same event.

`onResponseError` keeps its meaning: it reports failures that concern the current session. Late 401s of an old token are part of a session change the package has already handled, the same way requests waiting for a refresh are not reported one by one. The rejected promise still reaches the caller.

---



### Options queryString 

(.net not support)
default: `?statusIds[]=1&statusIds[]=2`

change to: `?statusIds=1&statusIds=2`

```ts
export const baseQueryWithAxios: BaseQueryFn<IQuery> = async (query, BaseQueryApi, extraOptions) => {
    await mutex.waitForUnlock();
    try {
        const {url, method, fetchOptions, ...args} = query;
        const data = await createRestFulFetcher(axiosInstance, {url, method}, getContentTypeWithMethod)({
            ...args,
            fetchOptions: {
                ...fetchOptions,
                paramsSerializer: (params) => {
                    return qs.stringify(params, {indices: false});
                }
            }
        });

        return {
            data,
            meta: {}
        };

    } catch (error: any) {
        dialog.error(error.message, {code: error.code});

        return {
            error: {
                code: error.code || 500,
                message: error.message
            },
        };
    }
};
```


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
