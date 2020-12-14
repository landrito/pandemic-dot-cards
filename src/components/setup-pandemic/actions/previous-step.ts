import { SetupPandemicState } from '../model';
import { SetupPandemicActionBase } from '../setup-pandemic-action';

export type PreviousStep = SetupPandemicActionBase<'previous-step'>;

export function previousStep(s: SetupPandemicState): SetupPandemicState {
  switch (s.step) {
    case 'month':
    case 'monthPhase':
      return {
        ...s,
        step: 'month',
      };
    case 'infection':
      return {
        ...s,
        step: 'monthPhase',
      };
    case 'finish':
      return s;
    default:
      ((_: never) => void _)(s.step);
  }
  return s;
}
