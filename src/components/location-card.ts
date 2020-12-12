import { Region, City, Affiliation } from '../model/city';
import {
  css,
  html,
  LitElement,
  property,
  customElement,
  TemplateResult,
  CSSResult,
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { affiliationIconOf } from './affiliation-icon';
import { regionPatternOf, toSvgUrl } from '../utils/css-utils';

function regionClassName(region: Region): string {
  switch (region) {
    case 'Africa':
      return 'africa';
    case 'Asia':
      return 'asia';
    case 'Europe':
      return 'europe';
    case 'North America':
      return 'north-america';
    case 'Pacific Rim':
      return 'pacific-rim';
    case 'South America':
      return 'south-america';
  }
}

function affiliationClassName(affiliation: Affiliation) {
  switch (affiliation) {
    case 'Ally':
      return 'ally';
    case 'Neutral':
      return 'neutral';
    case 'Soviet':
      return 'soviet';
  }
}

@customElement('location-card')
export class LocationCard extends LitElement {
  @property({ attribute: false })
  city?: City;

  @property({ type: Boolean })
  selected = false;

  static get styles(): CSSResult {
    return css`
      :host {
        --width-to-height: calc(20 / 8);
        --base-card-length: 21vw;
        --base-max-card-length: 18rem;
        --base-min-card-length: 13rem;
      }

      .card-container {
        display: inline-grid;
        grid-template-columns: [start] 12.5% 12.5% 12.5% 12.5% [middle] 12.5% 12.5% 12.5% 12.5% [end];
        grid-template-rows: [start] 25% 25% [middle] 25% 25% [end];
        width: 20rem;
        height: 9rem;
        margin: 0.3rem;

        border-radius: 1rem;
        border: 0.5rem solid #efeac2;
        box-shadow: 0.15rem 0.15rem #888;

        background-color: var(--location-card-background-color);

        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      .card-container:hover {
        cursor: pointer;
        box-shadow: 0.15rem 0.15rem #000;
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
      }

      .card-container.selected {
        border: 0.5rem solid var(--africa-color);
      }

      .top-container {
        grid-column: start / end;
        grid-row: start / middle;

        display: grid;

        grid-template-columns: [start] 12.5% 12.5% [icon-end] 12.5% 12.5% [middle] 12.5% 12.5% 12.5% 12.5% [end];
        grid-template-rows: [start] 50% [middle] 50% [end];
      }

      .top-container > affiliation-icon {
        grid-column: start / icon-end;
        grid-row: start / end;
        padding: 4px 8px;
      }

      .city-country-container {
        grid-column: icon-end / end;
        grid-row: start / end;
        margin-left: 0.25rem;
      }

      .city {
        font-family: var(--city-font-family);
        font-weight: var(--city-font-weight);
        font-size: var(--city-font-size);
      }

      hr {
        margin: -0.3rem 0 0 0;
        border-style: solid;
      }

      hr.ally {
        border-color: var(--ally-color);
      }

      hr.neutral {
        border-color: var(--neutral-color);
      }

      hr.soviet {
        border-color: var(--soviet-color);
      }

      .country {
        font-family: var(--country-font-family);
        font-weight: var(--country-font-weight);
        font-size: var(--country-font-size);
      }

      .bottom-container {
        grid-column: start / end;
        grid-row: middle / end;

        display: grid;

        grid-template-columns: [start] 12.5% 12.5% 12.5% 12.5% [middle] 12.5% 12.5% 12.5% 12.5% [end];
        grid-template-rows: [start] 50% [middle] 50% [end];

        margin-top: 0.25rem;
        border-radius: 0rem 0rem 0.5rem 0.5rem;
      }

      .region {
        grid-column: start / end;
        grid-row: start / end;

        font-family: var(--region-font-family);
        font-weight: var(--region-font-weight);
        font-size: var(--region-font-size);
        text-shadow: VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem,
          VAR(--location-card-background-color) 0rem 0rem 0.2rem;

        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .bottom-container.africa {
        background-image: ${toSvgUrl(regionPatternOf('Africa'))};
      }
      .bottom-container.asia {
        background-image: ${toSvgUrl(regionPatternOf('Asia'))};
      }
      .bottom-container.europe {
        background-image: ${toSvgUrl(regionPatternOf('Europe'))};
      }
      .bottom-container.north-america {
        background-image: ${toSvgUrl(regionPatternOf('North America'))};
      }
      .bottom-container.pacific-rim {
        background-image: ${toSvgUrl(regionPatternOf('Pacific Rim'))};
      }
      .bottom-container.south-america {
        background-image: ${toSvgUrl(regionPatternOf('South America'))};
      }
    `;
  }

  render(): TemplateResult | null {
    if (!this.city) return null;

    return html`
      <div
        class=${classMap({ 'card-container': true, selected: this.selected })}
      >
        <div class="top-container">
          ${affiliationIconOf(this.city.affiliation)}
          <div class="city-country-container">
            <div class="city">${this.city.name}</div>
            <hr class="${affiliationClassName(this.city.affiliation)}" />
            <div class="country">${this.city.country}</div>
          </div>
        </div>
        <div class="bottom-container ${regionClassName(this.city.region)}">
          <div class="region">${this.city.region}</div>
        </div>
      </div>
    `;
  }
}
