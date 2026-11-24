import * as path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        react(),
        svgr(),
        dts({
            insertTypesEntry: true,
        }),
        visualizer() as Plugin,
    ],
    css: {
        modules: {
            localsConvention: 'camelCase',
            scopeBehaviour: 'local',
            generateScopedName: 'acrool-react-fetcher__[local]',
        }
    },
    build: {
        minify: 'terser',
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `acrool-react-fetcher.${format}.js`,
        },
        cssTarget: 'chrome61',
        rollupOptions: {
            // 相依一律不打包進 dist：
            // - react/jsx-runtime：內嵌的話會帶進一份 React 自己的 runtime，在 Preact（別名到 preact/compat）下渲染不出來
            // - axios、@acrool/js-*：交給使用端的打包工具處理，才能去重、壓縮，沒用到的部分也能被剔除
            external: ['react', 'react-dom', 'react/jsx-runtime', 'axios', /^@acrool\/js-(utils|logger)(\/|$)/],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'ReactJsxRuntime',
                    axios: 'axios',
                },
                generatedCode: {
                    constBindings: true,
                },
            },
        },
        terserOptions: {
            compress: {
                keep_classnames: true,
                keep_fnames: true,
            },
            mangle: {
                keep_classnames: true,
                keep_fnames: true,
            },
        },
    },
});
