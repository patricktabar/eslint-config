module.exports = {
  extends: [
    './rules/best-practice.js',
    './rules/regex.js',
    './rules/object-classes.js',
    './rules/functions.js',
    './rules/variables.js',
  ].map((path) => require.resolve(path)),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
