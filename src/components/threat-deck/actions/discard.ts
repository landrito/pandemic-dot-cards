import { Deck } from '../../../model/deck';
import { ThreatCard } from '../../../model/threat-card';
import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';
import { filterFromDeck } from './common';

/**
 * Moves all selected cards to the discard pile unless a cards selected is already in the discard.
 */
export type Discard = ThreatDeckActionBase<'discard'>;

/**
 * Returns an updated state such that all selected cards are in the discard unless a cards selected is already in the discard.
 * @param s the threat deck state.
 */
export function discard(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, selected } = s;
  if (discardDisabled(deck, selected)) {
    return s;
  }

  return {
    ...s,
    past: [...past, deck],
    future: [],
    deck: {
      ...deck,
      deck: filterFromDeck(deck.deck, selected),
      discarded: [...deck.discarded, ...selected],
    },
    selected: [],
  };
}

/**
 * Predicate to determine if discarding is disabled for the current state.
 * @param state the current threat deck state.
 */
export function discardDisabled(
  deck: Deck<ThreatCard>,
  selected: ThreatCard[]
): boolean {
  return (
    selected.length === 0 ||
    !!selected.find(card => deck.discarded.includes(card))
  );
}
