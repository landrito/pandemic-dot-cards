import { InfectionCard } from '../../model/threat-card';

export enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}
export const MONTHS: Month[] = [
  Month.January,
  Month.February,
  Month.March,
  Month.April,
  Month.May,
  Month.June,
  Month.July,
  Month.August,
  Month.September,
  Month.October,
  Month.November,
  Month.December,
];

export type SetupPandemicStep = 'month' | 'monthPhase' | 'infection' | 'finish';

export interface SetupPandemicState {
  step: SetupPandemicStep;
  month: Month;
  monthPhase: 'early' | 'late';
  infectionCards: InfectionCard[];
}

export const BASE_SETUP_STATE: SetupPandemicState = {
  step: 'month',
  month: Month.January,
  monthPhase: 'early',
  infectionCards: [],
};
