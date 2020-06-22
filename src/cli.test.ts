/* eslint-disable jest/prefer-spy-on */
/* eslint-disable jest/no-hooks */

import * as cli from "./cli";
import process from "process";
// eslint-disable-next-line jest/no-disabled-tests
describe("testing cli execution", () => {
  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("tsOrNode should return ts or js", () => {
    expect(cli.tsOrNode("ts-node")).toBe("ts");
    expect(cli.tsOrNode("node")).toBe("js");
  });
  test("tsOrNode should exit with 1", () => {
    const consoleErrSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => "foo");
    const mockExit = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    process.exit = mockExit;

    cli.tsOrNode("foo");
    expect(mockExit).toHaveBeenCalledWith(1);
    expect(consoleErrSpy).toHaveBeenCalledTimes(1);
  });
  test("tsOrNode should also exit with 1", () => {
    const consoleErrSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => "ts-node-foo");
    const mockExit = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    process.exit = mockExit;

    cli.tsOrNode("ts-node-foo");
    expect(mockExit).toHaveBeenCalledWith(1);
    expect(consoleErrSpy).toHaveBeenCalledTimes(1);
  });

  test("main function should log usage and exit with 1", () => {
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementationOnce(() => "foo");
    const mockExit = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    process.exit = mockExit;
    cli.main();
    expect(mockExit).toHaveBeenCalledWith(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
});
