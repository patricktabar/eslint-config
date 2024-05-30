module.exports = {
  extends: ['eslint-plugin-jsx-a11y'].map((path) => require.resolve(path)),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
