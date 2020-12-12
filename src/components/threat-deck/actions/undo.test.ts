import { expect } from '@esm-bundle/chai';
import { Deck } from '../../../model/deck';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { undo } from './undo';

describePath(['components', 'threat-deck', 'actions', 'undo'], () => {
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

  const deck: Deck<ThreatCard> = {
    ...EMPTY_STATE.deck,
    deck: [[testCard]],
  };

  const anotherDeck: Deck<ThreatCard> = {
    ...EMPTY_STATE.deck,
    deck: [[anotherTestCard]],
  };

  const oneMoreDeck: Deck<ThreatCard> = {
    ...EMPTY_STATE.deck,
    deck: [[testCard, anotherTestCard]],
  };

  const state: ThreatDeckState = {
    ...EMPTY_STATE,
    past: [anotherDeck],
    deck: deck,
    future: [oneMoreDeck],
    selected: [testCard],
  };

  describe('undo()', () => {
    it('does nothing if nothing is in the future', () => {
      const input = { ...state, past: [] };
      expect(undo(input)).to.equal(input);
    });

    it('undoes', () => {
      const expected: ThreatDeckState = {
        past: [],
        deck: anotherDeck,
        future: [deck, oneMoreDeck],
        selected: [],
      };
      expect(undo(state)).to.deep.equal(expected);
    });
  });
});
