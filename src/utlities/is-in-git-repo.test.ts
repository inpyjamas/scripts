import { isInGitRepository } from "./is-in-git-repo";
import * as child_process from "child_process";
jest.mock("child_process", () => {
  return {
    execSync: jest.fn().mockImplementation(() => true),
  };
});
describe("git repo test for jest", () => {
  test("should test if we are in a git repo and return true", () => {
    // const mockExecSync = jest.fn().mockImplementation(() => true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // child_process.execSync = mockExecSync;
    expect(isInGitRepository()).toBe(true);
    // eslint-disable-next-line jest/prefer-called-with
    expect(child_process.execSync).toHaveBeenCalled();
  });
});
