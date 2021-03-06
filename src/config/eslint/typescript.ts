export = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
  plugins: ["@typescript-eslint", "prettier", "jest"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest/all",
    "plugin:prettier/recommended",
  ],
  rules: {
    "jest/prefer-expect-assertions": "off",
    "jest/consistent-test-it": [
      "error",
      { fn: "test", withinDescribe: "test" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        varsIgnorePattern: "_",
        argsIgnorePattern: "_",
      },
    ],
  },
};
