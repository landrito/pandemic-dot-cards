import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';

/**
 * Returns to past deck state.
 */
export type Undo = ThreatDeckActionBase<'undo'>;

/**
 * Returns a state with the deck at a past state and the future at current deck state.
 * @param s the threat deck state
 */
export function undo(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, future } = s;
  if (!past.length) {
    return s;
  }

  return {
    ...s,
    past: past.slice(0, past.length - 1),
    deck: past[past.length - 1],
    future: [deck, ...future],
    selected: [],
  };
}
