import { expect } from '@esm-bundle/chai';
import { describePath } from './test-utils';

describePath(['src', 'utils', 'test-utils'], () => {
  it('throws on empty path list', () => {
    expect(() => describePath([], () => void true)).to.throw();
  });
});
