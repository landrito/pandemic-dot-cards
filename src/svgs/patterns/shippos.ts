import { html, TemplateResult } from 'lit-element';

export function shippos(
  fillColor = 'var(--pattern-shippos-color, #000)'
): TemplateResult {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
      <path
        fill="${fillColor}"
        d="M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}
