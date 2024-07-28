/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true, // Add Jest environment
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Add Prettier to extends
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'], // Add Prettier plugin
  rules: {
    'react-refresh/only-export-components': 'warn',
    semi: ['error', 'always'], // Ensure semicolons are required
    'prettier/prettier': ['error'], // Add Prettier rule
  },
};
