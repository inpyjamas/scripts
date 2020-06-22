const commands = [
  "npm run build",
  "cross-env NODE_ENV=test npm test -- --coverage=false --no-watch",
  "lint-staged",
];

export = {
  hooks: {
    "pre-commit": commands.join(" && "),
  },
};
// module.exports = {
//   hooks: {
//     "pre-commit": commands.join(" && "),
//   },
// };
