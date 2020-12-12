import { html, TemplateResult } from 'lit-element';

export function dots(
  fillColor = 'var(--pattern-dots-color, #000)'
): TemplateResult {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <g fill="${fillColor}" fill-rule="evenodd">
        <circle cx="3" cy="3" r="3" />
        <circle cx="13" cy="13" r="3" />
      </g>
    </svg>
  `;
}
