describe("eslint tests", () => {
  it("should export an object", async () => {
    const module = await import("./typescript");
    expect(module).toBeDefined();
  });
});
