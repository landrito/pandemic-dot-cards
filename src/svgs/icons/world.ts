import { svg } from 'lit-element';
import { SVG_SLOT } from '../../constants/constants';

export const WORLD = svg`
<svg slot="${SVG_SLOT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" stroke="var(--icon-world-color, black)" fill="none">
  <path stroke-width="26" d="M209 15a195 195 0 102 0z"/>
  <path stroke-width="18" d="M210 15v390m195-195H15M59 90a260 260 0 00302 0m0 240a260 260 0 00-302 0M195 20a250 250 0 000 382m30 0a250 250 0 000-382"/>
</svg>
`;
