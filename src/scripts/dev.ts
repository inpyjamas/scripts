import spawn from "cross-spawn";

export function devRunner(): void {
  const args = process.argv.slice(2);
  const script = args[0];
  const res = spawn.sync(
    "ts-node-dev",
    ["--respawn", "--transpile-only", script],
    { stdio: "inherit" },
  );
}

if (require.main === module) {
  devRunner();
}
