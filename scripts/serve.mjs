import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, relative, isAbsolute, sep } from "node:path";
import { root, publicFiles } from "./build.mjs";

const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};
const server = createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end();
  }
  try {
    const url = new URL(req.url, "http://127.0.0.1");
    const pathname = decodeURIComponent(url.pathname);
    let file = join(root, pathname === "/" ? "index.html" : pathname);
    const rel = relative(root, file);
    if (
      isAbsolute(rel) ||
      rel.startsWith("..") ||
      !publicFiles.includes(rel.split(sep)[0])
    )
      throw Object.assign(new Error("Not public"), { code: "ENOENT" });
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        res.writeHead(301, { Location: pathname + "/" + url.search });
        return res.end();
      }
      file = join(file, "index.html");
    }
    const content = await readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch (error) {
    const status = error instanceof URIError ? 400 : 404;
    res.writeHead(status, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    });
    res.end(
      req.method === "HEAD"
        ? undefined
        : await readFile(join(root, "404.html")),
    );
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(
    `Local draft: http://127.0.0.1:${port} (loopback only; not published)`,
  ),
);
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
