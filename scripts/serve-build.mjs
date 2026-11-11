// Serves the finished build in dist/ at http://127.0.0.1:4321 for local review (this computer only).
// Usage: node scripts/serve-build.mjs   (or double-click START_PREVIEW.cmd). Run npm run build first.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// dist/ sits next to this scripts/ folder, so the server works from any starting folder.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
// Port: first argument, then the PORT variable, then 4321. Example: node scripts/serve-build.mjs 4322
const PORT = Number(process.argv[2] || process.env.PORT || 4321);
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.pdf': 'application/pdf', '.zip': 'application/zip', '.mp4': 'video/mp4',
};

if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error('No build found in dist/. Run "npm run build" first.');
  process.exit(1);
}

http.createServer((req, res) => {
  let file;
  try {
    file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  } catch {
    res.writeHead(400); res.end('Bad request'); return;
  }
  // Never serve anything outside dist/.
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(path.join(root, '404.html')));
    return;
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, '127.0.0.1', () => console.log(`Open http://127.0.0.1:${PORT} in your browser. Press Ctrl+C to stop.`));
