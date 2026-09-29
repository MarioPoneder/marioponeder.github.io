import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = "https://decentra.vision";

export async function checkSeo(contents) {
  const canonicalPages = new Set();
  const entities = new Map();
  const references = [];
  for (const [path, html] of contents) {
    const head = html.split("</head>")[0];
    const tags = [...head.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(([tag]) =>
      Object.fromEntries(
        [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [
          key,
          value,
        ]),
      ),
    );
    const meta = (key) =>
      tags.find((tag) => tag.name === key || tag.property === key)?.content;
    const canonical = tags.filter((tag) => tag.rel === "canonical");
    const title = head.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(title && meta("description"), `${path}: missing search metadata`);
    assert.equal(meta("og:title"), title, `${path}: inconsistent share title`);
    assert.equal(meta("twitter:title"), title, `${path}: inconsistent X title`);
    assert.equal(
      meta("og:description"),
      meta("description"),
      `${path}: inconsistent share description`,
    );
    assert.equal(
      meta("twitter:description"),
      meta("description"),
      `${path}: inconsistent X description`,
    );
    assert.equal(
      meta("twitter:image"),
      meta("og:image"),
      `${path}: inconsistent share image`,
    );
    assert.ok(
      meta("twitter:image:alt") && meta("og:image:alt"),
      `${path}: missing share image text`,
    );
    const robots = meta("robots") || "";
    if (path === "404.html") {
      assert.match(robots, /\bnoindex\b/, "Error page must not be indexed");
      assert.equal(
        canonical.length,
        0,
        "Error page must not canonicalize to a valid page",
      );
      continue;
    }
    assert.doesNotMatch(
      robots,
      /noindex|nofollow|nosnippet|none/,
      `${path}: blocked discovery`,
    );
    assert.equal(canonical.length, 1, `${path}: expected one canonical URL`);
    const expected = origin + "/" + path.replace(/index\.html$/, "");
    assert.equal(
      canonical[0].href,
      expected,
      `${path}: canonical must match final HTTPS host and path`,
    );
    assert.equal(meta("og:url"), expected, `${path}: inconsistent social URL`);
    canonicalPages.add(expected);
    const blocks = [
      ...head.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ];
    assert.equal(
      blocks.length,
      1,
      `${path}: expected one structured data graph`,
    );
    const data = JSON.parse(blocks[0][1]);
    assert.equal(data["@context"], "https://schema.org");
    for (const entity of data["@graph"]) {
      assert.ok(entity["@id"] && entity["@type"], `${path}: incomplete entity`);
      assert.ok(!entities.has(entity["@id"]), "Duplicate entity definition");
      entities.set(entity["@id"], entity);
    }
    const page = data["@graph"].find((entity) => entity["@type"] === "WebPage");
    assert.equal(
      page?.url,
      expected,
      `${path}: schema page URL must match canonical`,
    );
    JSON.stringify(data, (key, value) => {
      if (value && typeof value === "object" && value["@id"] && !value["@type"])
        references.push(value["@id"]);
      return value;
    });
  }
  for (const reference of references)
    assert.ok(
      entities.has(reference),
      `Undefined structured data entity: ${reference}`,
    );
  const sitemap = await readFile(
    new URL("../sitemap.xml", import.meta.url),
    "utf8",
  );
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, url]) => url,
  );
  assert.equal(urls.length, new Set(urls).size, "Duplicate sitemap URL");
  assert.deepEqual(
    new Set(urls),
    canonicalPages,
    "Sitemap must contain exactly the indexable canonical pages",
  );
  const robots = await readFile(
    new URL("../robots.txt", import.meta.url),
    "utf8",
  );
  assert.match(robots, /^User-agent: \*$/m, "Missing general crawler policy");
  assert.match(
    robots,
    /^Allow: \/$/m,
    "Public pages and assets must remain crawlable",
  );
  assert.doesNotMatch(
    robots,
    /^Disallow:\s*\S/m,
    "Unexpected crawler restriction",
  );
  assert.ok(
    robots.includes(`Sitemap: ${origin}/sitemap.xml`),
    "Missing canonical sitemap discovery",
  );
  console.log(
    "Passed: canonical URLs, share metadata, structured data graph, sitemap and crawler policy.",
  );
}
