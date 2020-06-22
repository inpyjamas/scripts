# @inpyjamas/scripts

_⚠️ This is totally Work In Progress. Please ignore ⚠️_ An opinionated toolkit for setting up projects. Inspired (and plugged a lot) from [react-scripts][react-scripts] and [kcd-scripts][kcd-scripts]

## Todos/Ideas

- [ ] How to include scripts? `start` (`node dist/index.js`), `dev`, `build` (`tsc -p .` set `NODE_ENV`), ~~`test` (`jest` should detect ci and generate coverage, set `BABEL_ENV` and `NODE_ENV`)~~
- [ ] Document the existing configs
- [ ] How to update `package.json` with the right scripts? [mrm][mrm]? roll your own?
- [ ] Add plop?
- [ ] Add modules in the root so we don't have to link to `@inpyjamas/scripts/dist/config/eslint/typescript` just `@inpyjamas/scripts/eslint-typescript` or one module that exports all the configs `{eslint-ts:{…}}`
- [ ] ~~Scaffold configs for, prettier, lint-staged, jest, husky, .eslintignore or~~ This should be done by yo generator!

## Installation

Add it to an existing project

```bash
npm install @inpyjamas/scripts --save-dev --save-exact
```

Init a new project._⚠️ Not yet implemented ⚠️_
Most of the templates use `@inpyjamas/scripts` in one way or another

```bash
npm install --global yo
npm install --global @inpyjamas/generator-defaults
yo @inpyjamas/defaults
```

## Usage

## Included configs

## Extending configs

You can import any config and extend it.

```js
// this is jest.config.js
const config = require("@inpyjamas/scripts/jest");
config.testPathIgnorePatterns.push("src/scripts/test.ts");
config.collectCoverageFrom.push("!src/scripts/test.ts");
module.exports = config;
```

The package contains a merge utility for merging more complex scenarios.

```js
// this is jest.config.js
const config = require("@inpyjamas/scripts/jest");
const { merge } = require("@inpyjamas/scripts/utilities");

const localConfig = {
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
module.exports = merge(config, localConfig);
```

---

[kcd-scripts]: https://github.com/kentcdodds/kcd-scripts
[react-scripts]: https://github.com/facebook/create-react-app
[mrm]: https://github.com/sapegin/mrm
