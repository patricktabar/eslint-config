module.exports = {
  rules: {
    /**
     * Disallow equal signs explicitly at the beginning of regular expressions
     * https://eslint.org/docs/latest/rules/no-div-regex
     */
    'no-div-regex': 'warn',

    /**
     * Disallow multiple spaces in regular expressions
     * https://eslint.org/docs/latest/rules/no-regex-spaces
     */
    'no-regex-spaces': 'off',

    /**
     * Disallow use of the RegExp constructor in favor of regular expression literals
     * https://eslint.org/docs/latest/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'off',

    /**
     * Enforce the use of u or v flag on RegExp
     * https://eslint.org/docs/latest/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',
  },
};
