import { Deck } from '../../../model/deck';
import { ThreatCard } from '../../../model/threat-card';
import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';
import { filterFromDeck } from './common';

/**
 * Moves adds the selected card to the discard pile and places the discards on the top of the deck.
 */
export type Escalate = ThreatDeckActionBase<'escalate'>;

/**
 * Returns an updated state such that a single selected card is escalated.
 * @param s the threat deck state.
 */
export function escalate(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, selected } = s;
  if (escalateDisabled(deck, selected)) {
    return s;
  }

  return {
    ...s,
    past: [...past, deck],
    future: [],
    deck: {
      ...deck,
      deck: [
        [...deck.discarded, ...selected],
        ...filterFromDeck(deck.deck, selected),
      ],
      discarded: [],
    },
    selected: [],
  };
}

/**
 * Predicate to determine if escalation is disabled for the current state.
 * @param selected the current selected cards.
 */
export function escalateDisabled(
  deck: Deck<ThreatCard>,
  selected: ThreatCard[]
): boolean {
  return (
    selected.length !== 1 ||
    deck.discarded.reduce<boolean>(
      (b, card) => selected.includes(card) || b,
      false
    ) ||
    !deck.deck[deck.deck.length - 1].includes(selected[0])
  );
}
