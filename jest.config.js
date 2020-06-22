/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./dist/config/jest/typescript");
config.testPathIgnorePatterns.push("src/scripts/test.ts");
config.collectCoverageFrom.push("!src/scripts/test.ts");
// TODO: increase branch coverage
config.coverageThreshold = {
  global: {
    branches: 50,
    functions: 75,
    lines: 75,
    statements: 75,
  },
};
module.exports = config;
