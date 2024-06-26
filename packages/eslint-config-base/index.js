module.exports = {
  extends: [
    '@stylistic/eslint-plugin',
    './rules/best-practice.js',
    './rules/regex.js',
    './rules/object-classes.js',
    './rules/functions.js',
    './rules/variables.js',
  ].map((path) => require.resolve(path)),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
