import { cityComparator } from '../../model/city';
import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import { STYLES } from '../../css/styles';
import { createStoreWithDevTools } from '../../utils/redux-utils';
import { ThreatCard } from '../../model/threat-card';
import { BASE_STATE, ThreatDeckState } from './model';
import { Store } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { ThreatDeckAction } from './threat-deck-action';
import { removeDisabled } from './actions/remove';
import { escalateDisabled } from './actions/escalate';
import { discardDisabled } from './actions/discard';

@customElement('threat-deck')
export class ThreatDeck extends LitElement {
  static styles = [
    STYLES,
    css`
      .separator {
        display: flex;
        align-items: center;
        text-align: center;
      }

      .separator::before,
      .separator::after {
        content: '';
        border-bottom: 1px solid #000;
      }

      .separator::before {
        margin-right: 0.25em;
        flex: 1;
      }

      .separator::after {
        margin-left: 0.25em;
        flex: 1;
      }
    `,
  ];

  @property({ attribute: false })
  private state: ThreatDeckState = BASE_STATE;
  private store: Store<
    ThreatDeckState,
    ThreatDeckAction
  > = createStoreWithDevTools(reducer, BASE_STATE);
  constructor() {
    super();
    this.state = this.store.getState();
    this.emitState();
    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.emitState();
    });
  }

  undo(): void {
    this.store.dispatch({ type: 'threat-deck/undo' });
  }

  redo(): void {
    this.store.dispatch({ type: 'threat-deck/redo' });
  }

  reset(): void {
    this.store.dispatch({ type: 'threat-deck/reset' });
  }

  discard(): void {
    this.store.dispatch({ type: 'threat-deck/discard' });
  }

  discardDisabled(): boolean {
    const { deck, selected } = this.state;
    return discardDisabled(deck, selected);
  }

  escalate(): void {
    this.store.dispatch({ type: 'threat-deck/escalate' });
  }

  escalateDisabled(): boolean {
    const { deck, selected } = this.state;
    return escalateDisabled(deck, selected);
  }

  remove(): void {
    this.store.dispatch({ type: 'threat-deck/remove' });
  }

  removeDisabled(): boolean {
    const { deck, selected } = this.state;
    return removeDisabled(deck, selected);
  }

  private emitState(): void {
    this.dispatchEvent(
      new CustomEvent<ThreatDeckState>('updated', { detail: this.state })
    );
  }

  private renderCards(cities: ThreatCard[]): TemplateResult {
    return cities.length
      ? html`<div class="card-container">
          ${cities.map(
            c =>
              html`<location-card
                @click=${this.onCardClick(c)}
                ?selected=${this.state?.selected.includes(c)}
                .city=${c}
              >
              </location-card>`
          )}
        </div>`
      : html`<div>None</div>`;
  }

  // TODO(landrito): make this grab the target element.
  private onCardClick(c: ThreatCard): () => void {
    return () => {
      this.store.dispatch({ type: 'threat-deck/select', payload: c });
    };
  }

  private onSurfaceClick({ path: elements }: { path: HTMLElement[] }): void {
    if (!elements.find(el => el.localName === 'location-card')) {
      this.store.dispatch({ type: 'threat-deck/unselect-all' });
    }
  }

  protected render(): TemplateResult {
    if (!this.state) {
      return html``;
    }

    const deck = [...this.state.deck.deck].map(group =>
      [...group].sort(cityComparator('name'))
    );
    const removed = [...this.state.deck.removed].sort(cityComparator('name'));
    const discarded = [...this.state.deck.discarded].sort(
      cityComparator('name')
    );

    return html`
      <div @click=${this.onSurfaceClick}>
        <h1>Discarded</h1>
        ${this.renderCards(discarded)}
        <h1>Deck</h1>
        ${deck.map((group, index) => {
          return html`
            <div class="separator">
              <h2>
                ${index === 0
                  ? html`Top Deck`
                  : index === deck.length - 1
                  ? html`Bottom Deck`
                  : deck.length === 3
                  ? html`Middle Deck`
                  : html`Middle Group ${index}`}
              </h2>
            </div>
            ${this.renderCards(group)}
          `;
        })}
        <h1>Removed</h1>
        ${this.renderCards(removed)}
      </div>
    `;
  }
}
