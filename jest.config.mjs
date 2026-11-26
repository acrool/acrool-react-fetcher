export default {
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/**/*.(spec|test).ts?(x)'],
    // @acrool/js-logger 等套件在 browser 條件下給的是 ESM（.mjs），要交給 swc 轉譯
    transformIgnorePatterns: ['/node_modules/(?!@acrool/)'],
    transform: {
        '^.+\\.(t|m?j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy',
        "\\.svg\\?(react|url)$": "<rootDir>/src/__mocks__/svgMock.tsx"

    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

