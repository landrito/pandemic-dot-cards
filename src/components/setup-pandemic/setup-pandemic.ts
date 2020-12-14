import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import { City, cityComparator, LOCATIONS } from '../../model/city';
import { createStoreWithDevTools } from '../../utils/redux-utils';
import { BASE_SETUP_STATE, Month, MONTHS, SetupPandemicState } from './model';
import { reducer } from './reducer';

const INFECTION_BASE = {
  type: 'infection',
  severity: 1,
} as const;

@customElement('setup-pandemic')
export class SetupPandemic extends LitElement {
  static get styles(): CSSResult[] {
    return [
      css`
        .container {
          display: flex;
          flex-wrap: wrap;
        }

        .item {
          height: 4rem;
          width: 10rem;

          background-color: lightgray;
          margin: 0.5rem;
          border-radius: 1rem;

          display: grid;
          place-items: center;
        }
        .item.selected {
          background-color: lightblue;
        }
      `,
    ];
  }

  @property({ attribute: false })
  state!: SetupPandemicState;

  private store = createStoreWithDevTools(reducer, BASE_SETUP_STATE);

  constructor() {
    super();

    this.state = this.store.getState();
    this.store.subscribe(() => {
      this.state = this.store.getState();

      if (this.state.step === 'finish') {
        this.dispatchEvent(new CustomEvent('submit', { detail: this.state }));
      }
    });
  }

  onMonthClick: { [m in Month]: () => void } = MONTHS.reduce((prev, m) => {
    return {
      ...prev,
      [m]: (): void => {
        this.store.dispatch({
          type: 'setup-pandemic/choose-month',
          payload: m,
        });
      },
    };
  }, {} as Partial<{ [m in Month]: () => void }>) as {
    [m in Month]: () => void;
  };

  onMonthPhaseClick = {
    early: (): void => {
      this.store.dispatch({
        type: 'setup-pandemic/choose-month-phase',
        payload: 'early',
      });
    },
    late: (): void => {
      this.store.dispatch({
        type: 'setup-pandemic/choose-month-phase',
        payload: 'late',
      });
    },
  };

  onBack(): void {
    this.store.dispatch({ type: 'setup-pandemic/previous-step' });
  }

  onNext(): void {
    this.store.dispatch({ type: 'setup-pandemic/next-step' });
  }

  onLocationClick(l: City) {
    return (): void => {
      this.store.dispatch({
        type: 'setup-pandemic/choose-infection-card',
        payload: { ...l, ...INFECTION_BASE },
      });
    };
  }

  monthClass(m: Month): 'selected' | '' {
    return this.state.month === m ? 'selected' : '';
  }

  monthPhaseClass(p: 'early' | 'late'): 'selected' | '' {
    return this.state.monthPhase === p ? 'selected' : '';
  }

  locationClass(l: City): 'selected' | '' {
    return this.state.infectionCards.find(c => l.name === c.name)
      ? 'selected'
      : '';
  }

  renderMonthStep(): TemplateResult {
    return html`
      <h1>Choose Month</h1>
      <div class="container">
        ${MONTHS.map(
          m => html`
            <div
              @click=${this.onMonthClick[m]}
              class="item ${this.monthClass(m)}"
            >
              ${m}
            </div>
          `
        )}
      </div>
      <mwc-button
        raised
        label="Next"
        class=""
        @click=${this.onNext}
      ></mwc-button>
    `;
  }

  renderMonthPhaseStep(): TemplateResult {
    return html`
      <h1>Choose Month Phase</h1>
      <div
        @click=${this.onMonthPhaseClick['early']}
        class="item ${this.monthPhaseClass('early')}"
      >
        Early
      </div>
      <div
        @click=${this.onMonthPhaseClick['late']}
        class="item ${this.monthPhaseClass('late')}"
      >
        Late
      </div>
      <mwc-button
        raised
        label="Back"
        class=""
        @click=${this.onBack}
      ></mwc-button>
      <mwc-button
        raised
        label="Next"
        class=""
        @click=${this.onNext}
      ></mwc-button>
    `;
  }

  renderInfectionStep(): TemplateResult {
    return html`
      <h1>Choose Infection Cards</h1>
      <div class="container">
        ${LOCATIONS.sort(cityComparator('name')).map(l => {
          return html`
            <div
              @click=${this.onLocationClick(l)}
              class="item ${this.locationClass(l)}"
            >
              ${l.name}
            </div>
          `;
        })}
      </div>
      <mwc-button
        raised
        label="Back"
        class=""
        @click=${this.onBack}
      ></mwc-button>
      <mwc-button
        raised
        label="Start"
        class=""
        @click=${this.onNext}
      ></mwc-button>
    `;
  }

  render(): TemplateResult {
    switch (this.state.step) {
      case 'month':
        return this.renderMonthStep();
      case 'monthPhase':
        return this.renderMonthPhaseStep();
      case 'infection':
        return this.renderInfectionStep();
      case 'finish':
        return html``;
      default:
        ((_: never) => void _)(this.state.step);
    }
    return html``;
  }
}
