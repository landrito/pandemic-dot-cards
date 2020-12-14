import { InfectionCard } from '../../../model/threat-card';
import { SetupPandemicState } from '../model';
import { SetupPandemicActionBase } from '../setup-pandemic-action';

export interface ChooseInfectionCard
  extends SetupPandemicActionBase<'choose-infection-card'> {
  payload: InfectionCard;
}

export function chooseInfectionCard(
  s: SetupPandemicState,
  a: ChooseInfectionCard
): SetupPandemicState {
  const query = (c: InfectionCard) => a.payload.name === c.name;
  const not = (p: (c: InfectionCard) => boolean) => (c: InfectionCard) => !p(c);

  if (s.infectionCards.find(query)) {
    return {
      ...s,
      infectionCards: s.infectionCards.filter(not(query)),
    };
  }
  return {
    ...s,
    infectionCards: [...s.infectionCards, a.payload],
  };
}
