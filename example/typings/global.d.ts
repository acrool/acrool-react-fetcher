/// <reference types="vite-plugin-pwa/client" />
import {IAuthTokens} from '@acrool/react-fetcher';

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        ActiveXObject: string
        dataLayer: any[]
        pushMessage: (action: string, data: { [key: string]: any }) => void
        mockTokens?: IAuthTokens
    }

}


// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
