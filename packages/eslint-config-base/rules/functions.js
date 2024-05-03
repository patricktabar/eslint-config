module.exports = {
  rules: {
    /**
     * Require braces around arrow function bodies
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    'arrow-body-style': ['warn', 'as-needed'],

    /**
     * Require function names to match the name of the variable or property
     * to which they are assigned
     * https://eslint.org/docs/latest/rules/func-name-matching
     */
    'func-name-matching': 'off',

    /**
     * Require or disallow named function expressions
     * https://eslint.org/docs/latest/rules/func-names
     */
    'func-names': 'off',

    /**
     * Enforce the consistent use of either function declarations or expressions
     * https://eslint.org/docs/latest/rules/func-style
     */
    'func-style': 'off',

    /**
     * Enforce a maximum number of lines of code in a function
     * https://eslint.org/docs/latest/rules/max-lines-per-function
     */
    'max-lines-per-function': 'off',

    /**
     * Enforce a maximum number of parameters in function definitions
     * https://eslint.org/docs/latest/rules/max-params
     */
    'max-params': ['warn', 3],

    /**
     * Enforce a maximum number of statements allowed in function blocks
     * https://eslint.org/docs/latest/rules/max-statements
     */
    'max-statements': ['warn', 10],

    /**
     *  Disallow empty functions
     * https://eslint.org/docs/latest/rules/no-empty-function
     */
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     * https://eslint.org/docs/latest/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * Disallow new operators with the Function object
     * https://eslint.org/docs/latest/rules/no-new-func
     */
    'no-new-func': 'error',

    /**
     * Disallow reassigning function parameters
     * https://eslint.org/docs/latest/rules/no-param-reassign
     */
    'no-param-reassign': 'error',

    /**
     * Enforce variables to be declared either together or separately in functions
     * https://eslint.org/docs/latest/rules/one-var
     */
    'one-var': 'off',

    /**
     * Require using arrow functions for callbacks
     * https://eslint.org/docs/latest/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': 'off',
  },
};
