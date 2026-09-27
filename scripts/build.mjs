import { cp, mkdir, access, lstat, realpath, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, resolve, dirname } from "node:path";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const publicFiles = [
  "index.html",
  "404.html",
  "favicon.ico",
  "assets",
  "img",
  "legal-info",
  "privacy-policy",
];

export async function build() {
  const project = await realpath(root);
  const target = resolve(project, "_site");
  if (dirname(target) !== project)
    throw new Error("Build destination must be inside this project.");
  try {
    if ((await lstat(target)).isSymbolicLink())
      throw new Error("Refusing to replace a linked build directory.");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  // Clear only the verified, generated output directory, so removed pages cannot survive a rebuild.
  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  for (const name of publicFiles)
    await cp(join(root, name), join(target, name), { recursive: true });
  try {
    await access(join(root, "CNAME"));
    await cp(join(root, "CNAME"), join(target, "CNAME"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  console.log("Static site built in _site/. Nothing was published.");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
