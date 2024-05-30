module.exports = {
  extends: [
    '@stylistic/eslint-plugin',
    '@patricktabar/eslint-config-base',
    './rules/react.js',
    './rules/hooks.js',
    './rules/a11y.js',
  ].map((path) => require.resolve(path)),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
