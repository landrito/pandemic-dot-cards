import { css } from 'lit-element';

export const AFRICA_COLOR = css`#9ed8a2`;

export const ASIA_COLOR = css`#ddc2a1`;

export const EUROPE_COLOR = css`#edc251`;

export const NORTH_AMERICA_COLOR = css`#b174ad`;

export const PACIFIC_RIM_COLOR = css`#eba083`;

export const SOUTH_AMERICA_COLOR = css`#d3e8f4`;

export const BASE_COLOR_VARIABLES = css`
  :host {
    --mdc-theme-primary: indianred;
    --mdc-theme-secondary: #a93434;

    --soviet-color: #c00;
    --icon-hammer-and-sickle-color: var(--soviet-color);

    --ally-color: #49a8f5;
    --icon-compass-rose-color: var(--ally-color);

    --neutral-color: #cbc4cb;
    --icon-world-color: var(--neutral-color);

    --africa-color: ${AFRICA_COLOR};
    --dark-africa-color: #529d3f;
    --pattern-dots-color: var(--africa-color);

    --asia-color: ${ASIA_COLOR};
    --pattern-hexagons-color: var(--asia-color);

    --europe-color: ${EUROPE_COLOR};
    --dark-europe-color: #dba517;
    --pattern-diamonds-color: var(--europe-color);

    --north-america-color: ${NORTH_AMERICA_COLOR};
    --pattern-stripes-color: var(--north-america-color);

    --pacific-rim-color: ${PACIFIC_RIM_COLOR};
    --pattern-waves-color: var(--pacific-rim-color);

    --south-america-color: ${SOUTH_AMERICA_COLOR};
    --pattern-shippos-color: var(--south-america-color);

    --location-card-background-color: #fff5d6;
  }
`;

export const BASE_FONT_VARIABLES = css`
  :host {
    font-family: 'Teko', sans-serif;

    --city-font-family: 'Teko', sans-serif;
    --city-font-weight: 500;
    --city-font-size: 1.8rem;

    --country-font-family: 'Lato', sans-serif;
    --country-font-weight: 300;
    --country-font-size: 1rem;

    --region-font-family: 'Fira Sans Condensed', sans-serif;
    --region-font-weight: 600;
    --region-font-size: 1.2rem;
  }
`;

export const STYLES = css`
  ${BASE_COLOR_VARIABLES}
  ${BASE_FONT_VARIABLES}

  html {
    font-size: 62.5%;
  }
`;
