import { City, Region } from './city';
export interface CityPlayerCard extends City {
  type: 'player';
}

export interface EventCard {
  type: 'event';
  name: string;
}

export interface SatelliteCard {
  type: 'satellite';
  region: Region;
}

export interface EscalationCard {
  type: 'escalation';
}

export type PlayerCard =
  | CityPlayerCard
  | EventCard
  | SatelliteCard
  | EscalationCard;

export const UNKNOWN_EVENT: EventCard = {
  type: 'event',
  name: 'Unknown',
};

export const ESCALATION: EscalationCard = {
  type: 'escalation',
};
