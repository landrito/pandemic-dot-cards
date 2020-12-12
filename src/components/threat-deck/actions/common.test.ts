import { expect } from '@esm-bundle/chai';
import { filterFromDeck } from './common';
import { describePath } from '../../../utils/test-utils';

describePath(['components', 'threat-deck', 'actions', 'common'], () => {
  it('filters specified items', () => {
    expect(filterFromDeck([[1, 2, 3]], [1, 2])).to.deep.equal([[3]]);
  });

  it(`removes empty groups`, () => {
    expect(filterFromDeck([[1]], [1])).to.deep.equal([]);
  });
});
