import { Deck } from '../../../model/deck';
import { ThreatCard } from '../../../model/threat-card';
import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';
import { filterFromDeck } from './common';

/**
 * Moves all selected cards to the removed pile unless a cards selected is already in the removed pile.
 */
export type Remove = ThreatDeckActionBase<'remove'>;

/**
 * Returns an updated state such that a single selected card is removed.
 * @param s the threat deck state.
 */
export function remove(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, selected } = s;
  if (removeDisabled(deck, selected)) {
    return s;
  }

  return {
    ...s,
    past: [...past, deck],
    future: [],
    deck: {
      deck: filterFromDeck(deck.deck, selected),
      discarded: deck.discarded.filter(c => !selected.includes(c)),
      removed: [...deck.removed, ...selected],
    },
    selected: [],
  };
}

/**
 * Predicate to determine if removing is disabled for the current state.
 * @param selected the current selected cards.
 */
export function removeDisabled(
  deck: Deck<ThreatCard>,
  selected: ThreatCard[]
): boolean {
  return (
    selected.length !== 1 ||
    selected.reduce<boolean>(
      (b, card) => deck.removed.includes(card) || b,
      false
    )
  );
}
