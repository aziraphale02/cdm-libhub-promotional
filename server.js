/**
 * CDM LibHub — Standalone Promotional Website Server
 * Serves static assets, downloads, and interactive catalog.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security & caching headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Serve static assets from project root
app.use(express.static(__dirname, {
  maxAge: 0,
  setHeaders: (res, filePath) => {
    res.setHeader('Cache-Control', 'no-cache');
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    }
  }
}));

// Route root to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback for SPA/deep links
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

function startServer(port, maxAttempts = 10) {
  const server = app.listen(port, () => {
    console.log(`\n======================================================`);
    console.log(`  CDM LibHub Promotional Website running at:`);
    console.log(`  Local: http://localhost:${port}`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && maxAttempts > 0) {
      console.warn(`[CDM LibHub] Port ${port} is in use (often macOS AirPlay Receiver). Retrying on port ${port + 1}...`);
      startServer(port + 1, maxAttempts - 1);
    } else {
      console.error('[CDM LibHub] Failed to start server:', err);
      process.exit(1);
    }
  });
}

startServer(Number(PORT));

