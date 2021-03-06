module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:storybook/recommended', 'prettier'],
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
