import { expect } from '@esm-bundle/chai';
import { describePath } from '../../../utils/test-utils';
import { BASE_SETUP_STATE, Month, SetupPandemicState } from '../model';
import { nextStep } from './next-step';

describePath(['components', 'setup-pandemic', 'actions', 'next-step'], () => {
  it('goes to monthPhase on month', () => {
    expect(nextStep(BASE_SETUP_STATE)).deep.equal({
      ...BASE_SETUP_STATE,
      step: 'monthPhase',
    });
  });

  it('goes to finish if before infections can be made', () => {
    const state: SetupPandemicState = {
      ...BASE_SETUP_STATE,
      step: 'monthPhase',
    };
    expect(nextStep(state)).deep.equal({ ...BASE_SETUP_STATE, step: 'finish' });
  });

  it('goes to finish if before infections can be made in feb', () => {
    const state: SetupPandemicState = {
      ...BASE_SETUP_STATE,
      step: 'monthPhase',
      month: Month.February,
      monthPhase: 'early',
    };
    expect(nextStep(state)).deep.equal({ ...state, step: 'finish' });
  });

  it('goes to infections if after infections can be made in feb', () => {
    const state: SetupPandemicState = {
      ...BASE_SETUP_STATE,
      step: 'monthPhase',
      month: Month.February,
      monthPhase: 'late',
    };
    expect(nextStep(state)).deep.equal({ ...state, step: 'infection' });
  });

  it('goes to infections if after infections can be made', () => {
    const state: SetupPandemicState = {
      ...BASE_SETUP_STATE,
      step: 'monthPhase',
      month: Month.March,
    };
    expect(nextStep(state)).deep.equal({ ...state, step: 'infection' });
  });

  it('goes to finish if after infections', () => {
    const state: SetupPandemicState = {
      ...BASE_SETUP_STATE,
      step: 'infection',
    };
    expect(nextStep(state)).deep.equal({ ...state, step: 'finish' });
  });
});
