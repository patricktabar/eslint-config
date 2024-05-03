module.exports = {
  rules: {
    /**
     * Enforce the use of variables within the scope they are defined
     * https://eslint.org/docs/latest/rules/block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * Require or disallow initialization in variable declarations
     * https://eslint.org/docs/latest/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * Disallow deleting variables
     * https://eslint.org/docs/latest/rules/no-delete-var
     */
    'no-delete-var': 'warn',

    /**
     * Disallow variable redeclaration
     * https://eslint.org/docs/latest/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * Disallow specified global variables
     * https://eslint.org/docs/latest/rules/no-restricted-globals
     */
    'no-restricted-globals': 'off',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * https://eslint.org/docs/latest/rules/no-shadow
     */
    'no-shadow': 'error',

    /**
     * Disallow initializing variables to undefined
     * https://eslint.org/docs/latest/rules/no-undef-init
     */
    'no-undef-init': 'error',

    /**
     * Require const declarations for variables that are never reassigned after declared
     * https://eslint.org/docs/latest/rules/prefer-const
     */
    'prefer-const': 'error',
  },
};
