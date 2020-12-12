import { expect } from '@esm-bundle/chai';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { Select, select } from './select';

describePath(['components', 'threat-deck', 'actions', 'select'], () => {
  const testCard: ThreatCard = {
    type: 'threat',
    name: 'Bangkok',
    country: 'Thailand',
    region: 'Asia',
    affiliation: 'Neutral',
  };

  const anotherTestCard: ThreatCard = {
    type: 'threat',
    name: 'Manila',
    country: 'Philippines',
    region: 'Pacific Rim',
    affiliation: 'Neutral',
  };

  const state: ThreatDeckState = {
    ...EMPTY_STATE,
    deck: {
      ...EMPTY_STATE.deck,
      deck: [[testCard, anotherTestCard]],
    },
  };

  const action: Select = { type: 'threat-deck/select', payload: testCard };

  describe('select()', () => {
    it('selects', () => {
      const expected = {
        ...state,
        selected: [testCard],
      };
      expect(select(state, action)).to.deep.equal(expected);
    });

    it('selects multiple', () => {
      const input = {
        ...state,
        selected: [anotherTestCard],
      };
      const expected = {
        ...state,
        selected: [anotherTestCard, testCard],
      };
      expect(select(input, action)).to.deep.equal(expected);
    });

    it('unselects', () => {
      const input = {
        ...state,
        selected: [testCard],
      };
      expect(select(input, action)).to.deep.equal(state);
    });

    it('does not select removed cards', () => {
      const input = {
        ...state,
        deck: {
          ...state.deck,
          removed: [testCard],
        },
      };
      expect(select(input, action)).to.equal(input);
    });

    it('selects a single discarded cards', () => {
      const input = {
        ...state,
        deck: {
          ...state.deck,
          discarded: [testCard, anotherTestCard],
        },
        selected: [anotherTestCard],
      };
      const expected = {
        ...input,
        selected: [testCard],
      };
      expect(select(input, action)).to.deep.equal(expected);
    });
  });
});
