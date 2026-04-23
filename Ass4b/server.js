const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 8080;
const page = path.join(__dirname, "public", "index.html");

http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  fs.readFile(page, (error, html) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Server error");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  });
}).listen(PORT, () => {
  console.log(`AWS deployment sample running at http://localhost:${PORT}`);
});
