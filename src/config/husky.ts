const commands = [
  "npm run build",
  "cross-env NODE_ENV=test npm run test:ci -- --coverage=false",
  "lint-staged",
];
module.exports = {
  hooks: {
    "pre-commit": commands.join(" && "),
  },
};
