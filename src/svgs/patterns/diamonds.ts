import { html, TemplateResult } from 'lit-element';

export function diamonds(
  fillColor = 'var(--pattern-diamonds-color, #000)'
): TemplateResult {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64">
      <path
        fill="${fillColor}"
        d="M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}
