module.exports = {
  extends: ['eslint-plugin-react-hooks'].map((path) => require.resolve(path)),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
