/**
 * CDM LibHub — Folio Shift (#08) Logo Component
 * 
 * Modular, accessible, and scalable SVG logo component.
 * Supports full horizontal brand lockup and standalone emblem.
 */

export const PALETTE = {
  forestGreen: '#116B3A',
  darkGreen: '#102F26',
  charcoal: '#202D2B',
  limeAccent: '#B7E467',
  white: '#FFFFFF'
};

/**
 * Returns raw SVG markup for the Folio Shift emblem.
 */
export function getEmblemSvgMarkup() {
  return `
    <g class="folio-shift-emblem" id="folio-shift-emblem">
      <!-- Left Folio Surface (Forest Green) -->
      <polygon points="1.5,9.5 17.5,2.5 17.5,39.5 1.5,39.5" fill="${PALETTE.forestGreen}" />
      <!-- Right Shifted Upper Folio (Forest Green) -->
      <polygon points="21,8.5 37,1.5 37,20.5 21,27.5" fill="${PALETTE.forestGreen}" />
      <!-- Narrow Lime Accent Strip -->
      <polygon points="21,29.5 37,22.5 37,25 21,32" fill="${PALETTE.limeAccent}" />
      <!-- Dark Green Inner Fold -->
      <polygon points="21,34 38.5,26.3 38.5,34.8 21,42.5" fill="${PALETTE.darkGreen}" />
    </g>
  `.trim();
}

/**
 * Returns full horizontal Folio Shift logo markup.
 * 
 * @param {Object} options
 * @param {'light'|'dark'} [options.theme='light']
 * @param {number} [options.height=44]
 * @param {string} [options.className='']
 * @returns {string} SVG HTML string
 */
export function renderFolioShiftLogo({ theme = 'light', height = 44, className = '' } = {}) {
  const isDark = theme === 'dark';
  const cdmColor = isDark ? PALETTE.white : PALETTE.charcoal;
  const libHubColor = isDark ? PALETTE.white : PALETTE.forestGreen;

  return `
<svg class="folio-shift-logo ${className}" viewBox="0 0 174 44" width="174" height="${height}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  ${getEmblemSvgMarkup()}
  <text x="49" y="29.5" font-family="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="19" letter-spacing="-0.025em">
    <tspan fill="${cdmColor}">CDM</tspan>
    <tspan dx="5.5" fill="${libHubColor}">LibHub</tspan>
  </text>
</svg>
  `.trim();
}

/**
 * Returns standalone emblem markup.
 * 
 * @param {Object} options
 * @param {number} [options.height=44]
 * @param {string} [options.className='']
 * @returns {string} SVG HTML string
 */
export function renderFolioShiftEmblem({ height = 44, className = '' } = {}) {
  return `
<svg class="folio-shift-emblem-svg ${className}" viewBox="0 0 40 44" width="40" height="${height}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  ${getEmblemSvgMarkup()}
</svg>
  `.trim();
}

// Custom Element definition (<cdm-logo>)
if (typeof window !== 'undefined' && !window.customElements.get('cdm-logo')) {
  class CdmLogoElement extends HTMLElement {
    connectedCallback() {
      const variant = this.getAttribute('variant') || 'full';
      const theme = this.getAttribute('theme') || 'light';
      const height = parseInt(this.getAttribute('height') || '42', 10);

      if (variant === 'emblem') {
        this.innerHTML = renderFolioShiftEmblem({ height });
      } else {
        this.innerHTML = renderFolioShiftLogo({ theme, height });
      }
    }
  }
  window.customElements.define('cdm-logo', CdmLogoElement);
}
