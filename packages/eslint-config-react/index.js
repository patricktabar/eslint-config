module.exports = [
  ...require('@patricktabar/eslint-config-base'),
  {
    name: '@patricktabar/eslint-config-react/jsx',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,cjsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  require('./rules/react.js'),
  require('./rules/hooks.js'),
  require('./rules/a11y.js'),
];
