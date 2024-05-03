module.exports = {
  /**
   *   Enforce return statements in callbacks of array methods
   *   https://eslint.org/docs/rules/array-callback-return
   */
  'array-callback-return': ['error', { allowImplicit: true }], // TODO: move in possible problems group

  /**
   * Enforce camelcase naming convention
   * https://eslint.org/docs/latest/rules/camelcase
   */
  camalcase: ['error', 'always'],

  /**
   * Enforce or disallow capitalization of the first letter of a comment
   * https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments': 'off',

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   * https://eslint.org/docs/latest/rules/complexity
   */
  complexity: ['off', 20],

  /**
   * Require return statements to either always or never specify values
   * https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return': 'error',

  /**
   * Enforce consistent naming when capturing the current execution context
   * https://eslint.org/docs/latest/rules/consistent-this
   */

  'consistent-this': 'off',

  /**
   * Enforce consistent brace style for all control statements
   * https://eslint.org/docs/latest/rules/curly
   */
  curly: ['error', 'multi-line'],

  /**
   * Require default cases in switch statements
   * https://eslint.org/docs/latest/rules/default-case
   */
  'default-case': ['error', { commentPattern: '^no default$' }],

  /**
   * Enforce default clauses in switch statements to be last
   * https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last': 'error',

  /**
   * Enforce default parameters to be last
   * https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last': 'error',

  /**
   * Enforce dot notation whenever possible
   * https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation': ['error', { allowKeywords: true }],

  /**
   * Require the use of === and !==
   * https://eslint.org/docs/latest/rules/eqeqeq
   */
  eqeqeq: ['error', 'smart'],

  /**
   * Require for-in loops to include an if statement
   * https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in': 'warn',

  /**
   * Disallow specified identifiers
   * https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist': 'off',

  /**
   * Require or disallow logical assignment operator shorthand
   * https://eslint.org/docs/latest/rules/logical-assignment-operators
   */
  'logical-assignment-operators': 'off',

  /**
   * Enforce a maximum depth that blocks can be nested
   * https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth': ['error', 4],

  /**
   * Enforce a maximum number of lines per file
   * https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines': [
    'warn',
    {
      max: 400,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  /**
   * Enforce a maximum depth that callbacks can be nested
   * https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks': ['warn', 4],

  /**
   * Enforce a particular style for multiline comments
   * https://eslint.org/docs/latest/rules/multiline-comment-style
   */
  'multiline-comment-style': 'off',

  /**
   * Require constructor names to begin with a capital letter
   * https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap': [
    'warn',
    {
      newIsCap: true,
      capIsNew: true,
      properties: false,
    },
  ],

  /**
   * Disallow the use of alert, confirm, and prompt
   * https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert': 'warn',

  /**
   * Disallow Array constructors
   * https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor': 'error',

  /**
   * Disallow bitwise operators
   * https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise': 'off',

  /**
   * Disallow the use of arguments.caller or arguments.callee
   * https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller': 'warn',

  /**
   * Disallow lexical declarations in case clauses
   * https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations': 'error',

  /**
   * Disallow the use of console
   * https://eslint.org/docs/latest/rules/no-console
   */
  'no-console': 'off',

  /**
   * Disallow continue statements
   * https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue': 'off',

  /**
   * Disallow else blocks after return statements in if statements
   * https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return': 'error',

  /**
   * Disallow empty block statements
   * https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty': 'error',

  /**
   * Disallow empty static blocks
   * https://eslint.org/docs/latest/rules/no-empty-static-block
   */
  'no-empty-static-block': 'off',

  /**
   * Disallow null comparisons without type-checking operators
   * https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null': 'warn',

  /**
   * Disallow the use of eval()
   * https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval': 'error',

  /**
   * Disallow extending native types
   * https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native': 'error',

  /**
   * Disallow unnecessary calls to .bind()
   * https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind': 'warn',

  /**
   * Disallow unnecessary boolean casts
   * https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast': 'error',

  /**
   * Disallow unnecessary labels
   * https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label': 'error',

  /**
   * Disallow assignments to native objects or read-only global variables
   * https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign': 'error',

  /**
   * Disallow shorthand type conversions
   * https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion': 'off',

  /**
   * Disallow declarations in the global scope
   * https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals': 'off',

  /**
   * Disallow the use of eval()-like methods
   * https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval': 'error',

  /**
   * Disallow inline comments after code
   * https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments': 'off',

  /**
   * Disallow use of this in contexts where the value of this is undefined
   * https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this': 'warn',

  /**
   * Disallow the use of the __iterator__ property
   * https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator': 'error',

  /**
   * Disallow labels that share a name with a variable
   * https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var': 'warn',

  /**
   * Disallow labeled statements
   * https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels': 'warn',

  /**
   * Disallow unnecessary nested blocks
   * https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks': 'warn',

  /**
   * Disallow if statements as the only statement in else blocks
   * https://eslint.org/docs/latest/rules/no-lonely-if
   */
  'no-lonely-if': 'warn',

  /**
   * Disallow magic numbers
   * https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers': 'off',

  /**
   * Disallow use of chained assignment expressions
   * https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign': 'warn',

  /**
   * Disallow multiline strings
   * https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str': 'warn',

  /**
   * Disallow negated conditions
   * https://eslint.org/docs/latest/rules/no-negated-condition
   */
  'no-negated-condition': 'warn',

  /**
   * Disallow nested ternary expressions
   * https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary': 'error',

  /**
   * Disallow new operators outside of assignments or comparisons
   * https://eslint.org/docs/latest/rules/no-new
   */
  'no-new': 'warn',

  /**
   * Disallow new operators with the String, Number, and Boolean objects
   * https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers': 'warn',

  /**
   * Disallow \8 and \9 escape sequences in string literals
   * https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape': 'error',

  /**
   * Disallow octal literals
   * https://eslint.org/docs/latest/rules/no-octal
   */
  'no-octal': 'error',

  /**
   * Disallow octal escape sequences in string literals
   * https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape': 'error',

  /**
   * Disallow the unary operators ++ and --
   * https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus': 'off',

  /**
   * Disallow the use of the __proto__ property
   * https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto': 'error',

  /**
   * Disallow specified names in exports
   * https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports': 'off',

  /**
   * Disallow specified modules when loaded by import
   * https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports': 'off',

  /**
   * Disallow specified syntax
   * https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax': 'off',

  /**
   * Disallow assignment operators in return statements
   * https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign': ['error', 'always'],

  /**
   * Disallow javascript: urls
   * https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url': 'warn',

  /**
   * Disallow comma operators
   * https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences': 'error',

  /**
   * Disallow identifiers from shadowing restricted names
   * https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names': 'error',

  /**
   * Disallow ternary operators
   * https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary': 'off',

  /**
   * Disallow throwing literals as exceptions
   * https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal': 'error',

  /**
   * Disallow the use of undefined as an identifier
   * https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined': 'off',

  /**
   * Disallow dangling underscores in identifiers
   * https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle': 'error',

  /**
   * Disallow ternary operators when simpler alternatives exist
   * https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': 'warn',

  /**
   * Disallow unused expressions
   * https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions': 'error',

  /**
   * Disallow unused labels
   * https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels': 'error',

  /**
   * Disallow unnecessary calls to .call() and .apply()
   * https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call': 'warn',

  /**
   * Disallow unnecessary catch clauses
   * https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch': 'warn',

  /**
   * Disallow unnecessary concatenation of literals or template literals
   * https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat': 'error',

  /**
   * Disallow unnecessary constructors
   * https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor': 'warn',

  /**
   * Disallow unnecessary escape characters
   * https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape': 'warn',

  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   * https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename': 'error',

  /**
   * Disallow redundant return statements
   * https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return': 'error',

  /**
   * Require let or const instead of var
   * https://eslint.org/docs/latest/rules/no-var
   */
  'no-var': 'warn',

  /**
   * Disallow void operators
   * https://eslint.org/docs/latest/rules/no-void
   */
  'no-void': 'warn',

  /**
   * Disallow specified warning terms in comments
   * https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments': 'off',

  /**
   * Disallow with statements
   * https://eslint.org/docs/latest/rules/no-with
   */
  'no-with': 'error',

  /**
   * Require or disallow assignment operator shorthand where possible
   * https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment': 'off',

  /**
   * Require destructuring from arrays and/or objects
   * https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring': 'warn',

  /**
   * Disallow the use of Math.pow in favor of the ** operator
   * https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator': 'off',

  /**
   * Enforce using named capture group in regular expression
   * https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group': 'off',

  /**
   * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
   * https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals': 'off',

  /**
   * Require using Error objects as Promise rejection reasons
   * https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': 'off',

  /**
   * Require rest parameters instead of arguments
   * https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params': 'off',

  /**
   * Require spread operators instead of .apply()
   * https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread': 'off',

  /**
   * Require template literals instead of string concatenation
   * https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template': 'off',

  /**
   * Enforce the consistent use of the radix argument when using parseInt()
   * https://eslint.org/docs/latest/rules/radix
   */
  radix: 'warn',

  /**
   * Disallow async functions which have no await expression
   * https://eslint.org/docs/latest/rules/require-await
   */
  'require-await': 'off',

  /**
   * Require generator functions to contain yield
   * https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield': 'warn',

  /**
   * Enforce sorted import declarations within modules
   * https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports': 'off',

  /**
   * Require variables within the same declaration block to be sorted
   * https://eslint.org/docs/latest/rules/sort-vars
   */
  'sort-vars': 'off',

  /**
   * Require or disallow strict mode directives
   * https://eslint.org/docs/latest/rules/strict
   */
  strict: ['error', 'safe'],

  /**
   * Require symbol descriptions
   * https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description': 'off',

  /**
   * Require var declarations be placed at the top of their containing scope
   * https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top': 'off',

  /**
   * Require or disallow "Yoda" conditions
   * https://eslint.org/docs/latest/rules/yoda
   */
  yoda: 'error',

  /**
   * Enforce position of line comments
   * https://eslint.org/docs/latest/rules/line-comment-position
   */
  'line-comment-position': 'off',

  /**
   * Require or disallow Unicode byte order mark (BOM)
   * https://eslint.org/docs/latest/rules/unicode-bom
   */
  'unicode-bom': ['error', 'never'],
};
