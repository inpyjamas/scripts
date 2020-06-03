describe("lint staged tests", () => {
  it("should export an object", async () => {
    const module = await import("./lint-staged");
    expect(module).toBeDefined();
  });
});
