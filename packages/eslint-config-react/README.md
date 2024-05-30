# ESlint Base Configuration

## Installation

You can install this ESLint configuration using npm:

```shell
npm install @patricktabar/eslint-config-react --save-dev
```

## Using this Shareable Configuration

To use a shareable config, import the package inside of an eslint.config.js file and add it into the exported array, like this:

```js
// eslint.config.js

import configBase from '@patricktabar/eslint-config-react';

export default [...configBase];
```

## Overriding Settings from this Shareable Configuration

You can override settings from the shareable config by adding them directly into your eslint.config.js file after importing the shareable config. For example:

```js
// eslint.config.js

import configBase from '@patricktabar/eslint-config-react';

export default [
  ...configBase,

  rules: {
     semi: [2, "always"]
  }
];

```

[ESlint](https://eslint.org/docs/latest/use/configure/configuration-files)
