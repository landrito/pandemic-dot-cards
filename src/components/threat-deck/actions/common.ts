/**
 * Filters out all specified items from a deck comparing using Array.includes.
 * @param deck The grouped deck to filter from.
 * @param filtered the items to filter out.
 */
export function filterFromDeck<T>(deck: T[][], filtered: T[]): T[][] {
  return deck
    .map(group => group.filter(l => !filtered.includes(l)))
    .filter(group => group.length > 0);
}
