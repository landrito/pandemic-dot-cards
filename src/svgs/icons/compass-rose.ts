import { svg } from 'lit-element';
import { SVG_SLOT } from '../../constants/constants';

export const COMPASS_ROSE = svg`
    <svg slot="${SVG_SLOT}" xmlns="http://www.w3.org/2000/svg" viewBox="34 34 232 232">
        <path d="M52 150l75.799 22.889L150 248l22.861-75.163L248 150l-75.139-22.224L150 52l-22.2 75.776z" fill="none" stroke-width="10" stroke="var(--icon-compass-rose-color, black)"/>
        <g fill="var(--icon-compass-rose-color, black)">
            <path d="M52 150h98l-22.201 22.889zm98 0h98l-75.298-22.172zm0 0v98l22.702-75.111zm0 0V52l-22.201 75.828z"/>
        </g>
    </svg>
`;
