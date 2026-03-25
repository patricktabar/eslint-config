# ESLint React Configuration

Shareable React ESLint flat config built on top of `@patricktabar/eslint-config-base`.

## Requirements

- ESLint `^10.0.0`
- Node `^20.19.0 || ^22.13.0 || >=24.0.0`

## Installation

```shell
npm install --save-dev eslint @patricktabar/eslint-config-react
```

## Usage

Use the package from an `eslint.config.js` file:

```js
import configReact from '@patricktabar/eslint-config-react';

export default [...configReact];
```

## What it includes

- everything from `@patricktabar/eslint-config-base`
- JSX language support for `*.js`, `*.mjs`, `*.cjs`, and `*.jsx` files
- `eslint-plugin-react-hooks` recommended flat config
- `eslint-plugin-jsx-a11y` recommended flat config
- React version detection settings

## Customizing rules

Add overrides after the shared config:

```js
import configReact from '@patricktabar/eslint-config-react';

export default [
  ...configReact,
  {
    rules: {
      'jsx-a11y/no-noninteractive-tabindex': 'off',
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
