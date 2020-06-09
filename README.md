# @inpyjamas/scripts

_⚠️ This is totally Work In Progress. Please ignore ⚠️_

An opinionated toolkit for setting up projects. Inspired (and plugged a lot) from react-scripts and [kcd-scripts][kcd-scripts]

## Todos

- [ ] How to include scripts? `start` (`tsc -p . --watch`), `build` (`tsc -p .` set `NODE_ENV`), `test` (`jest` should detect ci and generate coverage, set `BABEL_ENV` and `NODE_ENV`)
- [ ] Document the existing configs
- [ ] How to update `package.json` with the right scripts? [mrm][mrm]? roll your own?
- [ ] Add plop?
- [ ] Add renovate config
- [ ] Add modules in the root so we don't have to link to `@inpyjamas/scripts/dist/config/eslint/typescript` just `@inpyjamas/scripts/eslint-typescript` or one module that exports all the configs `{eslint-ts:{…}}`
- [ ] ~~Scaffold configs for, prettier, lint-staged, jest, husky, .eslintignore or~~ This should be done by yo generator!

## Installation

## Usage

## Included configs

## Extending configs

[kcd-scripts]: https://github.com/kentcdodds/kcd-scripts
[react-scripts]: https://github.com/facebook/create-react-app
[mrm]: https://github.com/sapegin/mrm
