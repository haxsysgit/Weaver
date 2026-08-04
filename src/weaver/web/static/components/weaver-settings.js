/* <weaver-settings> — local-only settings modal. Rows are General,
 * Appearance, Personalization, Storage, Safety. Hosted-service rows
 * (Plugins, Billing, Usage, Cloud browser, Parental controls, Trusted
 * contact) are explicitly never shown — this is a local single-owner app.
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
    :host([open]) .backdrop { display: flex; }
    .modal {
      width: min(560px, calc(100vw - 32px));
      max-height: min(70vh, 600px);
      display: flex;
      flex-direction: column;
      background: var(--bg-1, #0c0c11);
      border: 1px solid var(--hairline);
      border-radius: var(--radius-modal, 16px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
      overflow: hidden;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      border-bottom: 1px solid var(--hairline);
    }
    .head h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--text);
    }
    .head button {
      border: none;
      background: transparent;
      color: var(--text-3);
      font-size: 18px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
    }
    .head button:hover { color: var(--text); background: var(--surface-2); }
    .body {
      overflow-y: auto;
      padding: 8px 0;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 12px 18px;
      border-bottom: 1px solid var(--hairline);
    }
    .row:last-child { border-bottom: none; }
    .row .label { font-size: 14px; color: var(--text); }
    .row .desc { font-size: 12px; color: var(--text-3); margin-top: 2px; }
    .row .value { font-size: 13px; color: var(--text-2); }
    .note {
      padding: 12px 18px;
      font-size: 12px;
      color: var(--text-4);
      line-height: 1.5;
    }
  </style>
  <div class="backdrop" id="backdrop">
    <div class="modal" role="dialog" aria-modal="true" aria-label="Settings">
      <div class="head">
        <h2>Settings</h2>
        <button id="close" type="button" aria-label="Close settings">&times;</button>
      </div>
      <div class="body">
        <div class="row">
          <div><div class="label">Model</div><div class="desc">The model Weaver uses for replies</div></div>
          <div class="value" id="model"></div>
        </div>
        <div class="row">
          <div><div class="label">Theme</div><div class="desc">Shadow Slave dark-fantasy palette</div></div>
          <div class="value">Shadows</div>
        </div>
        <div class="row">
          <div><div class="label">Storage</div><div class="desc">Conversations persist locally in the Weaver SQLite notebook</div></div>
          <div class="value">Local only</div>
        </div>
        <div class="row">
          <div><div class="label">Safety</div><div class="desc">Messages may leave this machine only to the configured model provider</div></div>
          <div class="value" id="privacy"></div>
        </div>
        <div class="note">Weaver runs on this computer only. No cloud, no account, no hosted services.</div>
      </div>
    </div>
  </div>
`;

class WeaverSettings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._el = {
      backdrop: this.shadowRoot.querySelector("#backdrop"),
      close: this.shadowRoot.querySelector("#close"),
      model: this.shadowRoot.querySelector("#model"),
      privacy: this.shadowRoot.querySelector("#privacy"),
    };
  }

  connectedCallback() {
    this._el.close.addEventListener("click", () => this.close());
    this._el.backdrop.addEventListener("click", (e) => {
      if (e.target === this._el.backdrop) this.close();
    });
  }

  static get observedAttributes() { return ["model-label", "privacy-label"]; }

  attributeChangedCallback(name, _old, value) {
    if (name === "model-label") this._el.model.textContent = value || "";
    if (name === "privacy-label") this._el.privacy.textContent = value || "";
  }

  open() {
    this.setAttribute("open", "");
  }

  close() {
    this.removeAttribute("open");
  }
}

if (!customElements.get("weaver-settings")) {
  customElements.define("weaver-settings", WeaverSettings);
}
