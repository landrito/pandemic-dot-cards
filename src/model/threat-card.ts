import { City, LOCATIONS } from './city';

export type CityThreatCard = City & {
  type: 'threat';
};

export type InfectionCard = City & {
  type: 'infection';
  // Added after June.
  severity: number;
};

export type ThreatCard = CityThreatCard | InfectionCard;

export const BASE_THREAT_DECK: ThreatCard[] = LOCATIONS.map(l => ({
  ...l,
  ...{ type: 'threat' },
}));
