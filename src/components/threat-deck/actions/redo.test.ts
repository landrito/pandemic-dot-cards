import { expect } from '@esm-bundle/chai';
import { Deck } from '../../../model/deck';
import { ThreatCard } from '../../../model/threat-card';
import { describePath } from '../../../utils/test-utils';
import { EMPTY_STATE, ThreatDeckState } from '../model';
import { redo } from './redo';

describePath(['components', 'threat-deck', 'actions', 'redo'], () => {
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

  describe('redo()', () => {
    it('does nothing if nothing is in the future', () => {
      const input = { ...state, future: [] };
      expect(redo(input)).to.equal(input);
    });

    it('redoes', () => {
      const expected: ThreatDeckState = {
        past: [anotherDeck, deck],
        deck: oneMoreDeck,
        future: [],
        selected: [],
      };
      expect(redo(state)).to.deep.equal(expected);
    });
  });
});
