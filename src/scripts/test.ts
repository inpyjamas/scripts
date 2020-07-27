/* eslint-disable jest/no-jest-import */
import path from "path";
import * as jest from "jest";
import isCI from "is-ci";
import process from "process";
import console from "console";
import { isInGitRepository } from "../utlities/is-in-git-repo";
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";

export function testRunner(): void {
  const args = process.argv.slice(2);
  const watchOptions =
    !isCI &&
    !args.includes("--no-watch") &&
    !args.includes("--coverage") &&
    !args.includes("--updateSnapshot")
      ? [isInGitRepository() ? "--watch" : "--watchAll"]
      : [];
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let configPath = require.resolve("../../dist/config/jest/typescript.js");
  try {
    const userConfigPath = path.resolve(process.cwd(), "./jest.config.js");
    require.resolve(userConfigPath);
    configPath = userConfigPath;
  } catch (error) {
    console.error(`Could not find jest.config.js in ${process.cwd()}`);
    console.error("Falling back to default jest config");
  }

  const config: string[] = ["--config", configPath];
  // console.log(config);
  // console.log(watchOptions);
  if (!process.env.SELF_TEST) {
    jest.run([...config, ...watchOptions, ...args]);
  }
}

if (require.main === module) {
  testRunner();
}
