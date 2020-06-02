/* eslint-disable jest/prefer-expect-assertions */
import { merge } from "./index";
describe("utilities merge tests", () => {
  it("should merge objects", () => {
    const a = { a: "1" };
    const b = { b: "2" };
    expect(merge(a, b)).toStrictEqual({ a: "1", b: "2" });
  });
});
