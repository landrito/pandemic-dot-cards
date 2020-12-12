import { html, TemplateResult } from 'lit-element';

export function stripes(
  fillColor = 'var(--pattern-stripes-color, #000)'
): TemplateResult {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path
        fill="${fillColor}"
        d="M0 40L40 0H20L0 20zm40 0V20L20 40z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}
