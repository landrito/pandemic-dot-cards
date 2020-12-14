import { Month, SetupPandemicState } from '../model';
import { SetupPandemicActionBase } from '../setup-pandemic-action';

export interface ChooseMonth extends SetupPandemicActionBase<'choose-month'> {
  payload: Month;
}

export function chooseMonth(
  s: SetupPandemicState,
  a: ChooseMonth
): SetupPandemicState {
  return {
    ...s,
    month: a.payload,
  };
}
