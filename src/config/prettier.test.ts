describe("prettier tests", () => {
  it("should export an object", async () => {
    const module = await import("./prettier");
    expect(module).toBeDefined();
  });
});
