export interface Deck<T> {
  deck: T[][];
  discarded: T[];
  removed: T[];
}
