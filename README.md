esm-cjs-compat-package
====

A sample package compatible with both ES Modules and CommonJS Modules

## How to build

```console
$ npm run build
```

## How to use

`npm install` this package into your local and

```js
// from ESM
import foo from 'esm-cjs-compat-pacakge';
console.log(foo); // foo!
```

or

```js
// from CJS
const foo = require('esm-cjs-compat-pacakge');
console.log(foo); // foo!
```
