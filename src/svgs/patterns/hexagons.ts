import { html, TemplateResult } from 'lit-element';

export function hexagons(
  fillColor = 'var(--pattern-hexagons-color, #000)'
): TemplateResult {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="49">
      <path
        fill="${fillColor}"
        d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"
        fill-rule="nonzero"
      />
    </svg>
  `;
}
