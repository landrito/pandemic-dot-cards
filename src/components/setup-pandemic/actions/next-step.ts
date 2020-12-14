import { Month, SetupPandemicState } from '../model';
import { SetupPandemicActionBase } from '../setup-pandemic-action';

export type NextStep = SetupPandemicActionBase<'next-step'>;

export function nextStep(s: SetupPandemicState): SetupPandemicState {
  switch (s.step) {
    case 'month':
      return {
        ...s,
        step: 'monthPhase',
      };
    case 'monthPhase': {
      const next =
        s.month === Month.January ||
        (s.month === Month.February && s.monthPhase === 'early')
          ? 'finish'
          : 'infection';
      return {
        ...s,
        step: next,
      };
    }
    case 'infection':
    case 'finish':
      return {
        ...s,
        step: 'finish',
      };
    default:
      ((_: never) => void _)(s.step);
  }
  return s;
}
