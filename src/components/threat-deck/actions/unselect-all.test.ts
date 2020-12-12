import { expect } from '@esm-bundle/chai';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { unselectAll } from './unselect-all';

describePath(['components', 'threat-deck', 'actions', 'unselect-all'], () => {
  const testCard: ThreatCard = {
    type: 'threat',
    name: 'Bangkok',
    country: 'Thailand',
    region: 'Asia',
    affiliation: 'Neutral',
  };

  const state: ThreatDeckState = {
    ...EMPTY_STATE,
    selected: [testCard],
  };

  describe('unselectAll()', () => {
    it('unselects', () => {
      const expected = {
        ...state,
        selected: [],
      };
      expect(unselectAll(state)).to.deep.equal(expected);
    });
  });
});
