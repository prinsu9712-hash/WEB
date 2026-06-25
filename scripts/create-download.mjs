import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

const archive = "jrk-electrician-website.zip";
if (existsSync(archive)) rmSync(archive);

const result = spawnSync(
  "zip",
  [
    "-r",
    archive,
    ".",
    "-x",
    "node_modules/*",
    "dist/*",
    ".git/*",
    "*.log",
    archive,
  ],
  { stdio: "inherit" },
);

if (result.error) {
  console.error(
    "Unable to create zip. Please install the `zip` command or compress the project folder manually.",
  );
  process.exit(1);
}
process.exit(result.status ?? 0);
