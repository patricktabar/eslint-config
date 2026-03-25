# ESLint Base Configuration

Shareable base ESLint flat config for modern JavaScript projects.

## Requirements

- ESLint `^10.0.0`
- Node `^20.19.0 || ^22.13.0 || >=24.0.0`

## Installation

```shell
npm install --save-dev eslint @patricktabar/eslint-config-base
```

## Usage

Use the package from an `eslint.config.js` file:

```js
import configBase from '@patricktabar/eslint-config-base';

export default [...configBase];
```

## What it includes

- modern language options for ECMAScript modules
- `@stylistic/eslint-plugin` recommended rules
- base JavaScript rule sets from this package's `rules/` modules

## Customizing rules

Add your own config entries after the shared config so your overrides win:

```js
import configBase from '@patricktabar/eslint-config-base';

export default [
  ...configBase,
  {
    rules: {
      semi: ['error', 'always'],
    },
  },
];
```

## Migrating from 1.x

Version `2.x` is a breaking release.

- it targets ESLint `10`
- it exports flat config arrays instead of legacy `.eslintrc` config
- it requires a root `eslint.config.js` file

## Reference

- [ESLint configuration files](https://eslint.org/docs/latest/use/configure/configuration-files)
