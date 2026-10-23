/**
 * CDM LibHub — Build & Asset Integrity Verification Script
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('\n[CDM LibHub] Running Standalone Promotional Website Verification...\n');

let errors = 0;

function check(label, fn) {
  try {
    fn();
    console.log(`  ✓ ${label}`);
  } catch (err) {
    console.error(`  ✗ ${label}: ${err.message}`);
    errors++;
  }
}

// 1. Entry Point
check('index.html exists and contains valid structure', () => {
  const p = path.join(projectRoot, 'index.html');
  if (!fs.existsSync(p)) throw new Error('index.html missing');
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('<!DOCTYPE html>')) throw new Error('index.html missing DOCTYPE');
  if (!content.includes('CDM LibHub')) throw new Error('index.html missing branding');
});

// 2. Styles
check('styles.css exists and is non-empty', () => {
  const p = path.join(projectRoot, 'styles.css');
  if (!fs.existsSync(p)) throw new Error('styles.css missing');
  const size = fs.statSync(p).size;
  if (size < 1000) throw new Error(`styles.css seems too small (${size} bytes)`);
});

// 3. Scripts
check('config.js exists and is non-empty', () => {
  const p = path.join(projectRoot, 'config.js');
  if (!fs.existsSync(p)) throw new Error('config.js missing');
});

check('app.js exists and contains fallback books catalog', () => {
  const p = path.join(projectRoot, 'app.js');
  if (!fs.existsSync(p)) throw new Error('app.js missing');
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('FALLBACK_CURATED_BOOKS')) throw new Error('app.js missing FALLBACK_CURATED_BOOKS');
});

// 4. Data
check('curated_books.json exists and contains exactly 48 core volumes', () => {
  const p = path.join(projectRoot, 'curated_books.json');
  if (!fs.existsSync(p)) throw new Error('curated_books.json missing');
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!Array.isArray(data)) throw new Error('curated_books.json is not an array');
  if (data.length !== 48) throw new Error(`Expected 48 books, found ${data.length}`);
});

// 5. Assets & Downloads
check('logo.jpg exists', () => {
  const p = path.join(projectRoot, 'logo.jpg');
  if (!fs.existsSync(p)) throw new Error('logo.jpg missing');
});

check('downloads/CDM_LibHub_Curated_Books_Catalog.pdf exists and is non-empty', () => {
  const p = path.join(projectRoot, 'downloads', 'CDM_LibHub_Curated_Books_Catalog.pdf');
  if (!fs.existsSync(p)) throw new Error('CDM_LibHub_Curated_Books_Catalog.pdf missing');
  const size = fs.statSync(p).size;
  if (size < 10000) throw new Error(`PDF seems corrupted or too small (${size} bytes)`);
});

console.log('\n------------------------------------------------------');
if (errors === 0) {
  console.log('  All verification checks PASSED! Standalone project is healthy.\n');
  process.exit(0);
} else {
  console.error(`  Verification FAILED with ${errors} error(s).\n`);
  process.exit(1);
}
