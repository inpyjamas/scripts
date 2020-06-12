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
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest/all",
  ],
  rules: {
    "jest/prefer-expect-assertions": "off",
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
