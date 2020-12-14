import { Action } from '@reduxjs/toolkit';
import { ChooseInfectionCard } from './actions/choose-infection-cards';
import { ChooseMonth } from './actions/choose-month';
import { ChooseMonthPhase } from './actions/choose-month-phase';
import { NextStep } from './actions/next-step';
import { PreviousStep } from './actions/previous-step';

/**
 * Template literal type for threat deck action types.
 */
export type SetupPandemicActionType<T extends string> = `setup-pandemic/${T}`;

/**
 * Base interface for threat deck actions
 */
export interface SetupPandemicActionBase<T extends string> extends Action {
  type: SetupPandemicActionType<T>;
}

/**
 * Actions that can be taken wrt a threat deck component.
 */
export type SetupPandemicAction =
  | ChooseInfectionCard
  | ChooseMonthPhase
  | ChooseMonth
  | NextStep
  | PreviousStep;
