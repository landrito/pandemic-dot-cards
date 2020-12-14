import { chooseInfectionCard } from './actions/choose-infection-cards';
import { chooseMonth } from './actions/choose-month';
import { chooseMonthPhase } from './actions/choose-month-phase';
import { nextStep } from './actions/next-step';
import { previousStep } from './actions/previous-step';
import { BASE_SETUP_STATE, SetupPandemicState } from './model';
import { SetupPandemicAction } from './setup-pandemic-action';

export function reducer(
  s: SetupPandemicState | undefined,
  a: SetupPandemicAction
): SetupPandemicState {
  s = s || BASE_SETUP_STATE;
  switch (a.type) {
    case 'setup-pandemic/choose-infection-card':
      return chooseInfectionCard(s, a);
    case 'setup-pandemic/choose-month-phase':
      return chooseMonthPhase(s, a);
    case 'setup-pandemic/choose-month':
      return chooseMonth(s, a);
    case 'setup-pandemic/next-step':
      return nextStep(s);
    case 'setup-pandemic/previous-step':
      return previousStep(s);
    default:
      ((_: never) => void _)(a);
  }
  return s;
}
