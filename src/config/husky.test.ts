describe("husky tests", () => {
  it("should export an object", async () => {
    const module = await import("./husky");
    expect(module).toBeDefined();
  });
});
