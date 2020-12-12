import { discard } from './actions/discard';
import { escalate } from './actions/escalate';
import { redo } from './actions/redo';
import { remove } from './actions/remove';
import { reset } from './actions/reset';
import { select } from './actions/select';
import { undo } from './actions/undo';
import { unselectAll } from './actions/unselect-all';
import { EMPTY_STATE, ThreatDeckState } from './model';
import { ThreatDeckAction } from './threat-deck-action';

export function reducer(
  state: ThreatDeckState | undefined,
  action: ThreatDeckAction
): ThreatDeckState {
  state = state || EMPTY_STATE;
  switch (action.type) {
    case 'threat-deck/discard':
      return discard(state);
    case 'threat-deck/remove':
      return remove(state);
    case 'threat-deck/escalate':
      return escalate(state);
    case 'threat-deck/select':
      return select(state, action);
    case 'threat-deck/unselect-all':
      return unselectAll(state);
    case 'threat-deck/undo':
      return undo(state);
    case 'threat-deck/redo':
      return redo(state);
    case 'threat-deck/reset':
      return reset(state);
    default:
      ((_: never) => void _)(action);
  }
  return state;
}
