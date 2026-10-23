/**
 * CDM LibHub — Promotional Website Runtime Configuration
 *
 * This configuration centralizes all external service URLs, portals, and backend endpoints.
 * When deploying to production or integrating with the CDM OneServe mother system,
 * update the URLs below or define `window.CDM_CONFIG_OVERRIDE` before this script runs.
 */

(function () {
  const DEFAULT_CONFIG = {
    // Mother System: CDM OneServe Student Portal
    ONESERVE_PORTAL_URL: 'https://student.cdmconnect.online',

    // Mother System: Main Website
    MOTHER_SYSTEM_URL: 'https://www.cdmconnect.online',

    // CDM LibHub Mobile PWA (Deployed sub-app or local preview)
    // Update to production URL once deployed by mother system team (e.g. https://student.cdmconnect.online/library/mobile)
    MOBILE_APP_URL: 'http://localhost:5173/mobile',

    // CDM LibHub Desktop Librarian Terminal
    // Update to production URL once deployed (e.g. https://admin.cdmconnect.online/library)
    DESKTOP_APP_URL: 'http://localhost:5173/',

    // Optional: Live Backend Books API endpoint
    // If unavailable or offline, the promotional website automatically falls back to its 48 curated core books.
    API_BOOKS_URL: 'http://localhost:5002/api/books',

    // Downloadable Resources
    CATALOG_PDF_URL: 'downloads/CDM_LibHub_Curated_Books_Catalog.pdf',
    MOBILE_APK_URL: 'downloads/cdm-library-app.apk',
    STUDY_GUIDE_PDF_URL: 'downloads/CAPSTONE_MASTER_TEAM_STUDY_GUIDE.pdf'
  };

  // Merge with any custom window overrides
  window.CDM_LIBHUB_CONFIG = Object.assign(
    {},
    DEFAULT_CONFIG,
    window.CDM_CONFIG_OVERRIDE || {}
  );
})();
