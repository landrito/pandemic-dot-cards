import { expect } from '@esm-bundle/chai';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { discard } from './discard';

describePath(['components', 'threat-deck', 'actions', 'discard'], () => {
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

  describe('discard()', () => {
    it('does nothing if no cards are selected', () => {
      expect(discard(state)).to.equal(state);
    });

    it('does nothing if discarded cards are selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        deck: {
          discarded: [testCard],
          removed: [],
          deck: [[anotherTestCard]],
        },
        selected: [testCard],
      };
      expect(discard(input)).to.equal(input);
    });

    it('discards selected cards', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        future: [state.deck],
        deck: {
          discarded: [],
          removed: [],
          deck: [[testCard], [anotherTestCard]],
        },
        selected: [anotherTestCard],
      };
      expect(discard(input)).to.deep.equal({
        ...EMPTY_STATE,
        past: [input.deck],
        future: [],
        deck: {
          discarded: [anotherTestCard],
          removed: [],
          deck: [[testCard]],
        },
        selected: [],
      });
    });
  });
});
