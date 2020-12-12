import { WORLD } from '../svgs/icons/world';
import { COMPASS_ROSE } from '../svgs/icons/compass-rose';
import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';
import { Affiliation } from '../model/city';
import { HAMMER_AND_SICKLE } from '../svgs/icons/hammer-and-sickle';
import { SVG_SLOT } from '../constants/constants';

@customElement('affiliation-icon')
export class AffiliationIcon extends LitElement {
  static get styles(): CSSResult {
    return css`
      .icon {
        background-color: #fffbee;
        border-radius: 50%;
        box-shadow: 0.05rem 0.1rem #888;
        width: 100%;
        height: 100%;
      }

      ::slotted(svg) {
        margin: 0.25rem;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="icon">
        <slot name="${SVG_SLOT}"></slot>
      </div>
    `;
  }
}

export function affiliationIconOf(affiliation: Affiliation): TemplateResult {
  switch (affiliation) {
    case 'Ally':
      return html`<affiliation-icon>${COMPASS_ROSE}</affiliation-icon>`;
    case 'Neutral':
      return html`<affiliation-icon>${WORLD}</affiliation-icon>`;
    case 'Soviet':
      return html`<affiliation-icon>${HAMMER_AND_SICKLE}</affiliation-icon>`;
  }
}
