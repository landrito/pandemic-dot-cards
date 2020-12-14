import { expect } from '@esm-bundle/chai';
import { InfectionCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { BASE_SETUP_STATE } from '../model';
import { chooseInfectionCard } from './choose-infection-cards';

describePath(
  ['components', 'setup-pandemic', 'actions', 'choose-infection-card'],
  () => {
    it('sets the infection cards', () => {
      const card: InfectionCard = {
        type: 'infection',
        name: 'Bangkok',
        country: 'Thailand',
        region: 'Asia',
        affiliation: 'Neutral',
        severity: 1,
      };
      expect(
        chooseInfectionCard(BASE_SETUP_STATE, {
          type: 'setup-pandemic/choose-infection-card',
          payload: card,
        })
      ).deep.equal({ ...BASE_SETUP_STATE, infectionCards: [card] });
    });

    it('removes cards', () => {
      const card: InfectionCard = {
        type: 'infection',
        name: 'Bangkok',
        country: 'Thailand',
        region: 'Asia',
        affiliation: 'Neutral',
        severity: 1,
      };
      const state = {
        ...BASE_SETUP_STATE,
        infectionCards: [card],
      };
      expect(
        chooseInfectionCard(state, {
          type: 'setup-pandemic/choose-infection-card',
          payload: card,
        })
      ).deep.equal({ ...state, infectionCards: [] });
    });
  }
);
