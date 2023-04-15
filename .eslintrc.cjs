module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always']
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
