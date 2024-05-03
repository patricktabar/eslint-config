module.exports = {
  rules: {
    /**
     * Enforce getter and setter pairs in objects and classes
     * https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'warn',

    /**
     * Require grouped accessor pairs in object literals and classes
     * https://eslint.org/docs/latest/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': ['error', 'anyOrder'],

    /**
     * Enforce a maximum number of classes per file
     * https://eslint.org/docs/latest/rules/max-classes-per-file
     */
    'max-classes-per-file': 'off',

    /**
     * Disallow unnecessary computed property keys in objects and classes
     * https://eslint.org/docs/latest/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'error',

    /**
     * Disallow calls to the Object constructor without an argument
     * https://eslint.org/docs/latest/rules/no-object-constructor
     */
    'no-object-constructor': 'warn',

    /**
     * Disallow certain properties on certain objects
     * https://eslint.org/docs/latest/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     * https://eslint.org/docs/latest/rules/object-shorthand
     */
    'object-shorthand': ['error', 'always'],

    /**
     * Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
     * https://eslint.org/docs/latest/rules/prefer-object-has-own
     */
    'prefer-object-has-own': 'error',

    /**
     * Disallow using Object.assign with an object literal as the first argument
     * and prefer the use of object spread instead
     * https://eslint.org/docs/latest/rules/prefer-object-spread
     */
    'prefer-object-spread': 'off',

    /**
     * Require object keys to be sorted
     * https://eslint.org/docs/latest/rules/sort-keys
     */
    'sort-keys': 'off',

    /**
     * Enforce that class methods utilize this
     * https://eslint.org/docs/latest/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',
  },
};
