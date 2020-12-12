import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';

/**
 * Back to the future state.
 */
export type Redo = ThreatDeckActionBase<'redo'>;

/**
 * Returns a state with the deck in the nearest future state and the past at current deck state.
 * @param s the threat deck state
 */
export function redo(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, future } = s;
  if (!future.length) {
    return s;
  }

  return {
    ...s,
    past: [...past, deck],
    deck: future[0],
    future: future.slice(1),
    selected: [],
  };
}
