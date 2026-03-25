const stylistic = /** @type {any} */ (require('@stylistic/eslint-plugin'));

module.exports = [
  {
    name: '@patricktabar/eslint-config-base/language-options',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  stylistic.configs.recommended,
  require('./rules/best-practice.js'),
  require('./rules/regex.js'),
  require('./rules/object-classes.js'),
  require('./rules/functions.js'),
  require('./rules/variables.js'),
];
