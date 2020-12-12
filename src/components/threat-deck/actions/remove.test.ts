import { expect } from '@esm-bundle/chai';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { remove } from './remove';

describePath(['components', 'threat-deck', 'actions', 'remove'], () => {
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

  describe('remove()', () => {
    it('does nothing if no cards are selected', () => {
      expect(remove(state)).to.equal(state);
    });

    it('does nothing if remove cards are selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        deck: {
          discarded: [],
          removed: [testCard],
          deck: [[anotherTestCard]],
        },
        selected: [testCard],
      };
      expect(remove(input)).to.equal(input);
    });

    it('does nothing if multiple cards are selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        ...state,
        selected: [testCard, anotherTestCard],
      };
      expect(remove(input)).to.equal(input);
    });

    it('remove selected cards', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        future: [state.deck],
        deck: {
          discarded: [],
          deck: [[testCard], [anotherTestCard]],
          removed: [],
        },
        selected: [anotherTestCard],
      };
      expect(remove(input)).to.deep.equal({
        past: [input.deck],
        future: [],
        deck: {
          discarded: [],
          deck: [[testCard]],
          removed: [anotherTestCard],
        },
        selected: [],
      });
    });
  });
});
