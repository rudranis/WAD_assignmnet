const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = Number(process.env.PORT) || 5001;
const ROOT = __dirname;

const mimeTypes = {
  ".css": "text/css",
  ".gif": "image/gif",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain"
};

function send(res, status, content, type = "text/plain") {
  res.writeHead(status, { "Content-Type": type });
  res.end(content);
}

function getSafePath(requestUrl) {
  const { pathname } = new URL(requestUrl, "http://localhost");
  const decodedPath = decodeURIComponent(pathname);
  const filePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(ROOT, filePath === "/" ? "" : filePath);
}

async function renderFileList(res) {
  const files = await fs.promises.readdir(ROOT, { withFileTypes: true });
  const links = files
    .filter((file) => file.isFile())
    .map((file) => `<li><a href="/${encodeURIComponent(file.name)}">${file.name}</a></li>`)
    .join("");

  send(res, 200, `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Assignment 3a</title>
        <style>
          body{font-family:Arial,sans-serif;margin:0;background:#f4f8fb;color:#17202a;line-height:1.6}
          main{width:min(760px,calc(100% - 32px));margin:40px auto;background:#fff;border:1px solid #dce7ef;border-radius:8px;padding:28px;box-shadow:0 12px 28px rgba(23,32,42,.08)}
          a{color:#2563eb;font-weight:700}
          .button{display:inline-block;margin:8px 0 16px;padding:10px 14px;background:#2563eb;color:#fff;text-decoration:none;border-radius:8px}
        </style>
      </head>
      <body>
        <main>
          <h1>Static File Server</h1>
          <p>The custom Node.js server is running and serving files from this folder.</p>
          <a class="button" href="/index.html">Open Website</a>
          <h2>Files in this folder</h2>
          <ul>${links}</ul>
        </main>
      </body>
    </html>`, "text/html");
}

async function serveFile(req, res) {
  try {
    const filePath = getSafePath(req.url);

    if (!filePath.startsWith(ROOT)) {
      return send(res, 403, "Access denied");
    }

    if (filePath === ROOT || filePath === `${ROOT}/`) {
      return renderFileList(res);
    }

    const stat = await fs.promises.stat(filePath);
    if (!stat.isFile()) {
      return send(res, 404, "File not found");
    }

    const content = await fs.promises.readFile(filePath);
    const type = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    return send(res, 200, content, type);
  } catch (error) {
    return send(res, error.code === "ENOENT" ? 404 : 400, "File not found");
  }
}

http.createServer(serveFile).listen(PORT, () => {
  console.log(`Static file server running at http://localhost:${PORT}`);
});
