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
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react',
    'react-hooks',
    'import',
    'emotion',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    // Basic Rules
    indent: ['error', 2],
    eqeqeq: ['error'],
    camelcase: 'error',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^jsx$',
      },
    ],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-empty': 'error',
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'no-useless-concat': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'default-case': 'off',
    'no-useless-constructor': ['error'],
    // typescript rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^jsx$',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    // import rules
    'import/order': 'error',
    // react rules
    'react/prop-types': 'error',
    'react/sort-prop-types': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-key': 'error',
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-filename-extension': ['error'],
    // react hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // react jsx a11y rules
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/alt-text': 'error',
    // emotion rules
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
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
