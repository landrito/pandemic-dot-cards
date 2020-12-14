import { expect } from '@esm-bundle/chai';
import { describePath } from '../../../utils/test-utils';
import { BASE_SETUP_STATE, Month } from '../model';
import { chooseMonth } from './choose-month';

describePath(
  ['components', 'setup-pandemic', 'actions', 'choose-month'],
  () => {
    it('sets the month', () => {
      expect(
        chooseMonth(BASE_SETUP_STATE, {
          type: 'setup-pandemic/choose-month',
          payload: Month.April,
        })
      ).deep.equal({ ...BASE_SETUP_STATE, month: Month.April });
    });
  }
);
