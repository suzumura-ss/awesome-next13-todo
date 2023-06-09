module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'next/core-web-vitals',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['jest'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_|^React$', argsIgnorePattern: '^_' }],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off', // allow: 'false-ish object' || 'default object'
    '@typescript-eslint/triple-slash-reference': 0, // for next-env.d.ts
    'no-extra-semi': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    quotes: ['error', 'single'],
    camelcase: 'off',
    semi: ['error', 'always'],
  },
};
