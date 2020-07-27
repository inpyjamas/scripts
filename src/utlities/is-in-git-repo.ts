import { execSync } from "child_process";

/**
 * Taken from react-scripts
 * https://github.com/facebook/create-react-app/blob/fdbde1f3c256b43d5386b5ae3a75083dbd8f0aff/packages/react-scripts/scripts/test.js#L39
 *
 */
export function isInGitRepository(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
