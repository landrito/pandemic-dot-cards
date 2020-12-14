import { expect } from '@esm-bundle/chai';
import { describePath } from '../../../utils/test-utils';
import { BASE_SETUP_STATE } from '../model';
import { chooseMonthPhase } from './choose-month-phase';

describePath(
  ['components', 'setup-pandemic', 'actions', 'choose-month-phase'],
  () => {
    it('sets the month phase', () => {
      expect(
        chooseMonthPhase(BASE_SETUP_STATE, {
          type: 'setup-pandemic/choose-month-phase',
          payload: 'late',
        })
      ).deep.equal({ ...BASE_SETUP_STATE, monthPhase: 'late' });
    });
  }
);
