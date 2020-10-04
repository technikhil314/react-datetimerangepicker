module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks', 'import'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-empty': 'error',
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'react/prop-types': 'error',
    'react/sort-prop-types': 'error',
    'import/order': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-children-prop': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-key': 'error',
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-filename-extension': ['error'],
    'no-useless-constructor': ['error'],
    eqeqeq: ['error'],
    'default-case': 'off',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/alt-text': 'error',
    'no-useless-concat': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    camelcase: 'error',
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/*'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    'node_modules/**/*',
    'dist/**/*',
    'public/**/*',
    'webpack.config.js',
  ],
};
