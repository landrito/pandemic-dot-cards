import { SetupPandemicState } from '../model';
import { SetupPandemicActionBase } from '../setup-pandemic-action';

export interface ChooseMonthPhase
  extends SetupPandemicActionBase<'choose-month-phase'> {
  payload: 'early' | 'late';
}

export function chooseMonthPhase(
  s: SetupPandemicState,
  a: ChooseMonthPhase
): SetupPandemicState {
  return {
    ...s,
    monthPhase: a.payload,
  };
}
