"use strict";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coverageReporters: ["lcov", "text"],
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    testMatch: ["<rootDir>/**/?(*.)+(test).[jt]s?(x)"],
    testPathIgnorePatterns: ["node_modules/"],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75,
        },
    },
};
