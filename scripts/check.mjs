import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import assert from "node:assert/strict";
import { root } from "./build.mjs";
import { checkSeo } from "./check-seo.mjs";

// Validate the static site's link graph without relying on a server or network.
const pages = [
  "index.html",
  "legal-info/index.html",
  "privacy-policy/index.html",
  "404.html",
];
const contents = new Map(
  await Promise.all(
    pages.map(async (path) => [path, await readFile(join(root, path), "utf8")]),
  ),
);
let links = 0;
for (const [path, html] of contents) {
  assert.match(html, /<!doctype html>/i, `${path}: missing HTML doctype`);
  assert.match(html, /<html lang="en">/, `${path}: missing document language`);
  assert.match(html, /<meta name="viewport"/, `${path}: missing viewport`);
  assert.equal(
    [...html.matchAll(/<h1(?:\s|>)/g)].length,
    1,
    `${path}: expected one h1`,
  );
  assert.equal(
    [...html.matchAll(/<main(?:\s|>)/g)].length,
    1,
    `${path}: expected one main landmark`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${path}: duplicate IDs`);
  assert.ok(
    !/Security review process|Get a quote|tally\.so|cdn\.jsdelivr/i.test(html),
    `${path}: obsolete content`,
  );
  assert.ok(
    !/<(?:img|script)\b[^>]*src="https?:/i.test(html),
    `${path}: unexpected external embed`,
  );
  for (const match of html.matchAll(
    /<(?:a|link|script|img)\b[^>]*\b(?:href|src)="([^"]+)"/g,
  )) {
    const url = new URL(
      match[1].replaceAll("&amp;", "&"),
      `http://local/${path}`,
    );
    if (url.origin !== "http://local") continue;
    links++;
    let destination = decodeURIComponent(url.pathname).slice(1) || "index.html";
    if ((await stat(join(root, destination))).isDirectory())
      destination += (destination.endsWith("/") ? "" : "/") + "index.html";
    if (url.hash) {
      const target =
        contents.get(destination) ||
        (await readFile(join(root, destination), "utf8"));
      assert.ok(
        target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `${path}: broken anchor ${match[1]}`,
      );
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(
      match[0],
      /\balt="[^"]*"/,
      `${path}: image missing alternative text`,
    );
    assert.match(
      match[0],
      /\bwidth="\d+"/,
      `${path}: image missing dimensions`,
    );
  }
}
const css = await readFile(join(root, "assets/site.css"), "utf8");
await checkSeo(contents);
for (const match of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g))
  await stat(join(root, match[1]));
console.log(
  `Passed: ${pages.length} pages, ${links} local links/assets, all anchors, image metadata and external-embed checks.`,
);
