import { ThreatCard } from '../../../model/threat-card';
import { ThreatDeckState } from '../model';
import { ThreatDeckActionBase } from '../threat-deck-action';

/**
 * Marks a card as selected
 */
export interface Select extends ThreatDeckActionBase<'select'> {
  payload: ThreatCard;
}

/**
 * Returns an updated state such that the card selected is marked in the
 * @param s the threat deck
 */
export function select(s: ThreatDeckState, a: Select): ThreatDeckState {
  const {
    deck: { removed, discarded },
    selected,
  } = s;

  // Unselect
  if (selected.includes(a.payload)) {
    return {
      ...s,
      selected: selected.filter(c => c !== a.payload),
    };
  }

  // Cannot select a removed card.
  if (removed.includes(a.payload)) {
    return s;
  }

  // Can only select on discarded
  const multi = [...selected, a.payload];
  if (multi.filter(c => discarded.includes(c)).length) {
    return {
      ...s,
      selected: [a.payload],
    };
  }

  return {
    ...s,
    selected: multi,
  };
}
