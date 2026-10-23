# CDM LibHub — Standalone Promotional Website & Curricular Gateway

Official promotional website, public gateway, and curated OPAC textbook catalog for **CDM LibHub** (Colegio de Montalban Integrated Library Management System), aligned with the [CDM OneServe Mother System](https://www.cdmconnect.online).

---

## 🏛️ Project Overview

This repository is an **independent, standalone web project** extracted from the multi-platform capstone monorepo. It serves as:
1. **The Public Gateway**: Introduces students, faculty, and administrators to the CDM LibHub ecosystem.
2. **Interactive OPAC Catalog**: Provides instant search and filtering across all 48 core curricular volumes (ICS, ITE, IBE) with quick-view modal dialogs.
3. **Mother System Bridge**: Direct navigation to [CDM OneServe Student Portal](https://student.cdmconnect.online).
4. **PWA Installation Guides**: Step-by-step interactive instructions with CSS mockups for Android, iOS Safari, and Desktop PWA installations.
5. **Download Center**: Houses official downloads including the 48-book curricular catalog PDF and mobile app installer.

---

## 📂 Standalone Folder Structure

```text
cdm-libhub-promotional-website/
├── index.html                   # Main entry point & semantic landing page
├── styles.css                   # Custom design tokens, glassmorphism, responsive grid
├── app.js                       # Interactive engine (OPAC search, tabs, modals, accordions)
├── config.js                    # Centralized runtime URL configuration (Mother system & apps)
├── curated_books.json           # Canonical dataset of 48 curricular volumes
├── logo.jpg                     # Official Colegio de Montalban seal asset
├── server.js                    # Optional lightweight Express static server
├── package.json                 # Standalone project scripts and dependencies
├── .env.example                 # Environment variables template
├── .gitignore                   # Ignore rules for node_modules, caches, and secrets
├── vercel.json                  # Zero-config deployment for Vercel
├── netlify.toml                 # Zero-config deployment for Netlify
├── downloads/                   # Downloadable resources
│   ├── CDM_LibHub_Curated_Books_Catalog.pdf  # Official 3-page catalog PDF
│   ├── cdm-library-app.apk                   # Android APK binary
│   └── CAPSTONE_MASTER_TEAM_STUDY_GUIDE.pdf  # Capstone documentation PDF
├── icons/                       # Favicons and web app icons
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon-192.png
│   └── icon-512.png
└── scripts/
    └── verify_build.js          # Automated build & asset integrity test script
```

---

## ⚙️ Prerequisites

- **Node.js**: `v18.0.0` or higher (optional, only needed for local dev server or tests).
- **Static Hosting**: Can also be deployed directly as static files on GitHub Pages, Vercel, Netlify, or Apache/Nginx with **zero build step required**.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
# or: npm start
```
The website will be live at:
👉 **`http://localhost:5000`**

### 3. Run Build & Asset Integrity Tests
```bash
npm test
```
Validates that `index.html`, `styles.css`, `app.js`, `curated_books.json` (48 volumes), `config.js`, and catalog downloads exist and are healthy.

---

## 🔗 Mother System Integration & URL Configuration

All external portal and application URLs are centralized in [`config.js`](./config.js). 

When our collaborators deploy the Desktop App and Mobile App within the **CDM OneServe** infrastructure, simply update the URLs in `config.js` or provide a window override:

```javascript
// config.js
window.CDM_LIBHUB_CONFIG = {
  ONESERVE_PORTAL_URL: 'https://student.cdmconnect.online',
  MOTHER_SYSTEM_URL: 'https://www.cdmconnect.online',
  MOBILE_APP_URL: 'https://student.cdmconnect.online/library/mobile',
  DESKTOP_APP_URL: 'https://admin.cdmconnect.online/library',
  API_BOOKS_URL: 'https://api.cdmconnect.online/library/books',
  CATALOG_PDF_URL: 'downloads/CDM_LibHub_Curated_Books_Catalog.pdf'
};
```

> **Note on Offline Resilience:** If `API_BOOKS_URL` is unreachable or offline, the catalog automatically falls back to its embedded 48-book curricular dataset without breaking or showing empty states.

---

## 🌐 Production Deployment Options

### Option A: Vercel (Recommended — Zero Config)
1. Install Vercel CLI: `npm i -g vercel`
2. Run in this directory:
   ```bash
   vercel
   ```
3. Configuration is automatically detected via [`vercel.json`](./vercel.json).

### Option B: Netlify
1. Drag and drop this folder onto the [Netlify App Dashboard](https://app.netlify.com/drop), or connect via Git.
2. Configuration is automatically handled via [`netlify.toml`](./netlify.toml).

### Option C: GitHub Pages
1. Push this folder to a GitHub repository (e.g. `cdm-libhub-promotional`).
2. Go to **Settings** &rarr; **Pages** &rarr; select `main` branch root `/`.
3. Your site is instantly deployed with full HTTPS!

### Option D: Node.js / Docker / Cloud Run / VPS
```bash
# In production environment:
npm install --production
node server.js
```

---

## 📄 License & Attribution
- Institutional project for **Colegio de Montalban**.
- Designed to integrate seamlessly with the **CDM OneServe** Mother System ecosystem.
