import { Deck } from '../../model/deck';
import { BASE_THREAT_DECK, ThreatCard } from '../../model/threat-card';

/**
 * The state of the threat-deck component.
 */
export interface ThreatDeckState {
  /**
   * The threat deck being tracked.
   */
  deck: Deck<ThreatCard>;

  /**
   * Cards that are selected in the threat deck.
   */
  selected: ThreatCard[];

  /**
   * The state of the deck in the past.
   */
  past: Deck<ThreatCard>[];

  /**
   * The state of the deck in the future.
   */
  future: Deck<ThreatCard>[];
}

/**
 * An empty ThreatDeckStateInstance.
 */
export const EMPTY_STATE: ThreatDeckState = {
  deck: {
    discarded: [],
    deck: [[]],
    removed: [],
  },
  selected: [],
  past: [],
  future: [],
};

/**
 * State of the deck at the start of the game in January.
 */
export const BASE_STATE: ThreatDeckState = {
  ...EMPTY_STATE,
  deck: {
    discarded: [],
    deck: [BASE_THREAT_DECK],
    removed: [],
  },
};
