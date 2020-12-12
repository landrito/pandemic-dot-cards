import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';

/**
 * Marks all cards as unselected
 */
export type UnselectAll = ThreatDeckActionBase<'unselect-all'>;

/**
 * Returns an updated state such that no cards are selected.
 * @param s the threat deck
 */
export function unselectAll(s: ThreatDeckState): ThreatDeckState {
  return {
    ...s,
    selected: [],
  };
}
