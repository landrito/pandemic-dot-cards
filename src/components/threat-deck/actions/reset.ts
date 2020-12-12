import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';

/**
 * Returns to farthest past deck state
 */
export type Reset = ThreatDeckActionBase<'reset'>;

/**
 * Returns a state with the deck deck furthest in the past.
 * @param s the threat deck state
 */
export function reset(s: ThreatDeckState): ThreatDeckState {
  const { past, deck, future } = s;
  if (!past.length) {
    return s;
  }

  return {
    ...s,
    past: [],
    deck: past[0],
    future: [...past.slice(1), deck, ...future],
    selected: [],
  };
}
