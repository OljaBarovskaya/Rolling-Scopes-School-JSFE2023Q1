module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'airbnb-typescript/base'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      'import/extensions': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  };
