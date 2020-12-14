import { Menu } from '@material/mwc-menu';
import { TopAppBarFixed } from '@material/mwc-top-app-bar-fixed';
import {
  html,
  css,
  LitElement,
  property,
  query,
  customElement,
  TemplateResult,
} from 'lit-element';
import { STYLES } from './css/styles';
import { ThreatDeck } from './components/threat-deck/threat-deck';

@customElement('pandemic-tracker')
export class PandemicTracker extends LitElement {
  @query('#menu')
  menu?: Menu;

  @query('#nav-bar')
  navBar?: TopAppBarFixed;

  @query('#threat-deck')
  threatDeck?: ThreatDeck;

  @property({ attribute: false })
  private disableDiscard = true;

  @property({ attribute: false })
  private disableEscalate = true;

  @property({ attribute: false })
  private disableRemove = true;

  constructor() {
    super();
  }

  static styles = [
    STYLES,
    css`
      :host {
        --threat-card-border-width: 3px;
        --mdc-dialog-max-width: 50vw;
        --mdc-dialog-min-width: 50vw;
        --mdc-theme-primary: black;
        --mdc-linear-progress-buffer-color: indianred;
      }

      .app-border {
        padding: 1rem;
      }

      .redo-button {
        transform: scaleX(-1);
      }

      .actions {
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
      }

      .actions mwc-icon-button {
        margin: 0.5rem;
      }

      .player-deck-progress-container {
        position: fixed;
        top: 1rem;
        width: 100%;
        height: 100%;
      }

      .nav-button {
        --mdc-button-disabled-fill-color: #ffffffbb;
        --mdc-button-disabled-ink-color: #444444bb;
        margin: 0.2rem;
      }

      .draw-threat-button {
        --mdc-theme-primary: var(--dark-africa-color);
        --mdc-theme-on-primary: white;
      }

      .escalate-button {
        --mdc-theme-primary: var(--dark-europe-color);
        --mdc-theme-on-primary: white;
      }

      .remove-threat-button {
        --mdc-theme-primary: var(--soviet-color);
        --mdc-theme-on-primary: white;
      }

      #nav-bar {
        --mdc-typography-headline6-font-family: 'Teko', sans-serif;
        --mdc-typography-headline6-font-size: 2rem;
      }
    `,
  ];

  private onThreatDeckUpdated() {
    this.disableDiscard =
      this.threatDeck === undefined ? true : this.threatDeck?.discardDisabled();
    this.disableEscalate =
      this.threatDeck === undefined
        ? true
        : this.threatDeck?.escalateDisabled();
    this.disableRemove =
      this.threatDeck === undefined ? true : this.threatDeck?.removeDisabled();
  }

  render(): TemplateResult[] {
    // return [html`<setup-pandemic></setup-pandemic>`]
    return [
      html` <mwc-top-app-bar-fixed id="nav-bar">
          <mwc-icon-button
            icon="menu"
            slot="navigationIcon"
            @click=${() => this.menu?.show()}
          ></mwc-icon-button>
          <div slot="title">Pandemic Tracker - Legacy Season 0</div>
          <mwc-button
            icon="no_sim"
            slot="actionItems"
            raised
            label="Draw"
            class="draw-threat-button nav-button"
            ?disabled=${this.disableDiscard}
            @click=${() => this.threatDeck?.discard()}
          ></mwc-button>
          <mwc-button
            icon="trending_up"
            slot="actionItems"
            raised
            label="Escalate"
            class="escalate-button nav-button"
            ?disabled=${this.disableEscalate}
            @click=${() => this.threatDeck?.escalate()}
          ></mwc-button>
          <mwc-button
            icon="delete"
            slot="actionItems"
            raised
            label="Remove"
            class="remove-threat-button nav-button"
            ?disabled=${this.disableRemove}
            @click=${() => this.threatDeck?.remove()}
          ></mwc-button>
          <div class="app-border">
            <div class="app-content">
              <threat-deck
                id="threat-deck"
                @updated=${this.onThreatDeckUpdated}
              ></threat-deck>
            </div>
          </div>
        </mwc-top-app-bar-fixed>
        <mwc-menu .anchor=${this.navBar} fixed y="32" x="0" id="menu">
          <mwc-list-item graphic="icon" @click=${() => this.threatDeck?.undo()}>
            <span>Undo</span>
            <mwc-icon slot="graphic">undo</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon" @click=${() => this.threatDeck?.redo()}>
            <span>Redo</span>
            <mwc-icon slot="graphic" class="redo-button">undo</mwc-icon>
          </mwc-list-item>
          <mwc-list-item
            graphic="icon"
            @click=${() => this.threatDeck?.reset()}
          >
            <span>Reset</span>
            <mwc-icon slot="graphic">replay</mwc-icon>
          </mwc-list-item>
        </mwc-menu>`,
    ];
  }
}
