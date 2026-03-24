module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // Code style
        'semi': ['error', 'always'],
        'quotes': ['error', 'double'],
        'indent': ['error', 4],
        'keyword-spacing': ['error', { before: true, after: true }],
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'no-duplicate-imports': 'error',

        // React
        'react/prop-types': 'warn',

        // TypeScript
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
};