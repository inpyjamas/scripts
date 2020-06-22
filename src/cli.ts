#!/usr/bin/env node

// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/bin/react-scripts.js#L11
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will

import spawn from "cross-spawn";
import path from "path";
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

type extension = "ts" | "js";

export function tsOrNode(executor: string): extension {
  const binary = executor.split("/")[executor.split("/").length - 1];
  if (binary.startsWith("ts-node")) {
    // using ts-node lets execute typescript directly
    if (binary !== "ts-node" && binary !== "ts-node-dev") {
      console.error("What are you executing me with? It is not ts-node");
      process.exit(1);
    }
    return "ts";
  } else {
    // lets assume that we are using node
    if (binary !== "node") {
      console.error("What are you executing me with? It is not node");
      process.exit(1);
    }
    return "js";
  }
}

export function usage(): void {
  const message = `
  Usage:
  inpyjamas-scripts [scripts]

  Script:

    test    runs the jest test runner. If not on CI defaults to
            --watch disable by passing --no-watch

  A lot of functionality is directly plugged from the awesome

  kcd-scripts and react-scripts

  [kcd-scripts]: https://github.com/kentcdodds/kcd-scripts
  [react-scripts]: https://github.com/facebook/create-react-app

  Thanks
  `;
  console.log(message);
}
export function main(): void {
  const scripts = ["test"];

  const [executor, _thisScript, command] = process.argv;

  if (scripts.includes(command)) {
    const args = process.argv.slice(3);

    const res = spawn.sync(
      executor,
      [
        path.resolve(__dirname, `./scripts/${command}.${tsOrNode(executor)}`),
        ...args,
      ],
      {
        stdio: "inherit",
      },
    );
    process.exit(res.status ?? 0);
  } else {
    usage();
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
