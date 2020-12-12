import { expect } from '@esm-bundle/chai';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { escalate } from './escalate';

describePath(['components', 'threat-deck', 'actions', 'escalate'], () => {
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

  describe('escalate()', () => {
    it('does nothing if no cards are selected', () => {
      expect(escalate(state)).to.equal(state);
    });

    it('does nothing if discarded card is selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        deck: {
          discarded: [testCard],
          deck: [[anotherTestCard]],
          removed: [],
        },
        selected: [testCard],
      };
      expect(escalate(input)).to.equal(input);
    });

    it('does nothing if removed card is selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        deck: {
          discarded: [],
          deck: [[anotherTestCard]],
          removed: [testCard],
        },
        selected: [testCard],
      };
      expect(escalate(input)).to.equal(input);
    });

    it('does nothing if top deck card is selected', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        deck: {
          discarded: [],
          deck: [[testCard], [anotherTestCard]],
          removed: [],
        },
        selected: [testCard],
      };
      expect(escalate(input)).to.equal(input);
    });

    it('does nothing if multiple cards are selected', () => {
      const input: ThreatDeckState = {
        ...state,
        selected: [testCard, anotherTestCard],
      };
      expect(escalate(input)).to.equal(input);
    });

    it('escalates selected card', () => {
      const input: ThreatDeckState = {
        ...EMPTY_STATE,
        future: [state.deck],
        deck: {
          discarded: [testCard],
          deck: [[anotherTestCard]],
          removed: [],
        },
        selected: [anotherTestCard],
      };
      expect(escalate(input)).to.deep.equal({
        past: [input.deck],
        future: [],
        deck: {
          discarded: [],
          deck: [[testCard, anotherTestCard]],
          removed: [],
        },
        selected: [],
      });
    });
  });
});
