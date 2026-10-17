const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const types = {'.html':'text/html; charset=utf-8', '.webp':'image/webp',
  '.png':'image/png', '.svg':'image/svg+xml', '.css':'text/css',
  '.js':'text/javascript', '.mp4':'video/mp4'};

function createServer(root = __dirname) {
  root = path.resolve(root);
  return http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, {Allow:'GET, HEAD'}).end(); return;
    }
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
    catch { res.writeHead(400).end(); return; }
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    fs.stat(file, (err, stat) => {
      if (err || !stat.isFile()) { res.writeHead(404).end('Not found'); return; }
      const headers = {'Content-Type':types[path.extname(file)] || 'application/octet-stream',
        'Accept-Ranges':'bytes', 'Content-Length':stat.size};
      let start = 0, end = stat.size - 1, status = 200;
      if (req.headers.range && req.method === 'GET') {
        const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        let valid = !!match && !!(match[1] || match[2]);
        if (valid) {
          if (match[1]) {
            start = Number(match[1]);
            end = match[2] ? Number(match[2]) : end;
          } else {
            const suffix = Number(match[2]);
            valid = Number.isSafeInteger(suffix) && suffix > 0;
            start = Math.max(0, stat.size - suffix);
          }
          valid = valid && Number.isSafeInteger(start) && Number.isSafeInteger(end)
            && start >= 0 && start < stat.size && end >= start;
        }
        if (!valid) {
          res.writeHead(416, {'Content-Range':`bytes */${stat.size}`, 'Accept-Ranges':'bytes'}).end(); return;
        }
        end = Math.min(end, stat.size - 1);
        status = 206;
        headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
        headers['Content-Length'] = end - start + 1;
      }
      res.writeHead(status, headers);
      if (req.method === 'HEAD' || stat.size === 0) { res.end(); return; }
      const stream = fs.createReadStream(file, {start, end});
      stream.on('error', () => res.destroy());
      res.on('close', () => stream.destroy());
      stream.pipe(res);
    });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 4173);
  createServer().listen(port, '127.0.0.1', () => console.log(`Portfolio: http://localhost:${port}`));
}
module.exports = {createServer};
