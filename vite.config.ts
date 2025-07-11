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
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
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
