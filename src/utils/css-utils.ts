import { CSSResult } from 'lit-element';
import { css, unsafeCSS } from 'lit-element/lib/css-tag';
import { render, SVGTemplateResult } from 'lit-html';
import {
  AFRICA_COLOR,
  ASIA_COLOR,
  EUROPE_COLOR,
  NORTH_AMERICA_COLOR,
  PACIFIC_RIM_COLOR,
  SOUTH_AMERICA_COLOR,
} from '../css/styles';
import { Region } from '../model/city';
import { diamonds } from '../svgs/patterns/diamonds';
import { dots } from '../svgs/patterns/dots';
import { hexagons } from '../svgs/patterns/hexagons';
import { shippos } from '../svgs/patterns/shippos';
import { stripes } from '../svgs/patterns/stripes';
import { waves } from '../svgs/patterns/waves';

export function toCssClassName(s: string): string {
  return s.toLowerCase().split(' ').join('-');
}

export function encodeSvg(svg: SVGTemplateResult): string {
  const div = document.createElement('div');
  render(svg, div);
  return div.innerHTML
    .replace(/\r?\n|\r/g, '')
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
}

export function toSvgUrl(svg: SVGTemplateResult): CSSResult {
  return css`url("data:image/svg+xml,${unsafeCSS(encodeSvg(svg))}")`;
}

export function regionPatternOf(region: Region): SVGTemplateResult {
  switch (region) {
    case 'Africa':
      return dots(AFRICA_COLOR.cssText);
    case 'Asia':
      return hexagons(ASIA_COLOR.cssText);
    case 'Europe':
      return diamonds(EUROPE_COLOR.cssText);
    case 'North America':
      return stripes(NORTH_AMERICA_COLOR.cssText);
    case 'Pacific Rim':
      return waves(PACIFIC_RIM_COLOR.cssText);
    case 'South America':
      return shippos(SOUTH_AMERICA_COLOR.cssText);
  }
}
