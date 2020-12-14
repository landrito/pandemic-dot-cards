import { expect } from '@esm-bundle/chai';
import { describePath } from '../../../utils/test-utils';
import { BASE_SETUP_STATE, SetupPandemicState } from '../model';
import { previousStep } from './previous-step';

describePath(
  ['components', 'setup-pandemic', 'actions', 'previous-step'],
  () => {
    it('goes to month on month', () => {
      expect(previousStep(BASE_SETUP_STATE)).deep.equal({
        ...BASE_SETUP_STATE,
        step: 'month',
      });
    });

    it('month on monthPhase', () => {
      const state: SetupPandemicState = {
        ...BASE_SETUP_STATE,
        step: 'monthPhase',
      };
      expect(previousStep(state)).deep.equal({
        ...BASE_SETUP_STATE,
        step: 'month',
      });
    });

    it('goes to monthPhase on infections', () => {
      const state: SetupPandemicState = {
        ...BASE_SETUP_STATE,
        step: 'infection',
      };
      expect(previousStep(state)).deep.equal({ ...state, step: 'monthPhase' });
    });

    it('does nothing on finish', () => {
      const state: SetupPandemicState = {
        ...BASE_SETUP_STATE,
        step: 'finish',
      };
      expect(previousStep(state)).equal(state);
    });
  }
);
