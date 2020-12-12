import { Action } from '@reduxjs/toolkit';
import { Discard } from './actions/discard';
import { Escalate } from './actions/escalate';
import { Redo } from './actions/redo';
import { Remove } from './actions/remove';
import { Reset } from './actions/reset';
import { Select } from './actions/select';
import { Undo } from './actions/undo';
import { UnselectAll } from './actions/unselect-all';

/**
 * Template literal type for threat deck action types.
 */
export type ThreatDeckActionType<T extends string> = `threat-deck/${T}`;

/**
 * Base interface for threat deck actions
 */
export interface ThreatDeckActionBase<T extends string> extends Action {
  type: ThreatDeckActionType<T>;
}

/**
 * Actions that can be taken wrt a threat deck component.
 */
export type ThreatDeckAction =
  | Discard
  | Remove
  | Escalate
  | Select
  | UnselectAll
  | Undo
  | Redo
  | Reset;
