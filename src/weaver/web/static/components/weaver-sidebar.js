/* <weaver-sidebar> — conversation chrome: 260px sidebar, 52px collapsed
 * rail, <768px overlay drawer. Emits:
 *   pick     {id}   when a conversation is chosen
 *   new-chat        when the new-chat button is pressed
 *   settings        when the settings row is pressed
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      height: 100%;
      flex: none;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      width: var(--sidebar-w, 260px);
      height: 100%;
      background: var(--surface, #171720);
      border-right: 1px solid var(--hairline, rgba(220,215,200,0.08));
      transition: width 0.18s ease;
      overflow: hidden;
    }
    :host([collapsed]) .sidebar {
      width: var(--rail-w, 52px);
    }
    .rail-toggle {
      align-self: flex-end;
      margin: 10px 8px;
      width: 36px;
      height: 36px;
      flex: none;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--text-3);
      cursor: pointer;
      font-size: 15px;
    }
    .rail-toggle:hover {
      color: var(--text);
      background: var(--surface-2);
    }
    .chrome {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 4px 8px 12px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--text-2);
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
    }
    .row:hover { background: var(--surface-2); color: var(--text); }
    .row.active {
      background: var(--accent-dim);
      color: var(--text);
    }
    .row .ico { width: 20px; flex: none; text-align: center; font-size: 15px; }
    .row .label { overflow: hidden; text-overflow: ellipsis; }
    .section {
      margin: 10px 6px 4px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-4);
    }
    .model-line {
      margin: 10px 6px 2px;
      font-size: 11px;
      color: var(--text-4);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .footer {
      border-top: 1px solid var(--hairline);
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .hide-rail { display: none; }
    /* Collapsed rail shows icons only, chrome hidden. */
    :host([collapsed]) .chrome, :host([collapsed]) .footer, :host([collapsed]) .model-line {
      display: none;
    }
    /* Under 768px: the sidebar becomes an overlay drawer. */
    @media (max-width: 768px) {
      .sidebar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: var(--sidebar-w);
        z-index: 40;
        box-shadow: 0 0 40px rgba(0,0,0,0.6);
      }
      :host([open]) .sidebar { display: flex; }
      :host(:not([open])) .sidebar { display: none; }
      .rail-toggle { display: none; }
      .hide-rail { display: none; }
    }
  </style>
  <nav class="sidebar" aria-label="Conversations">
    <button class="rail-toggle" id="toggle" title="Collapse sidebar" aria-label="Toggle sidebar">&#9776;</button>
    <div class="chrome" id="chrome">
      <button class="row" data-action="new" title="New chat"><span class="ico">&#9998;</span><span class="label">New chat</span></button>
      <button class="row" data-action="settings" title="Settings"><span class="ico">&#9881;</span><span class="label">Settings</span></button>
      <div class="section">Chats</div>
      <div id="picker"></div>
    </div>
    <div class="model-line" id="model"></div>
    <div class="footer" id="footer">
      <button class="row" data-action="collapse" title="Collapse to rail"><span class="ico">&#9660;</span><span class="label">Collapse</span></button>
    </div>
  </nav>
`;

class WeaverSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._el = {
      toggle: this.shadowRoot.querySelector("#toggle"),
      chrome: this.shadowRoot.querySelector("#chrome"),
      picker: this.shadowRoot.querySelector("#picker"),
      model: this.shadowRoot.querySelector("#model"),
      footer: this.shadowRoot.querySelector("#footer"),
      sidebar: this.shadowRoot.querySelector(".sidebar"),
    };
  }

  connectedCallback() {
    this._el.toggle.addEventListener("click", () => this._toggle());
    this.shadowRoot.querySelector('[data-action="new"]').addEventListener("click", () => this._emit("new-chat"));
    this.shadowRoot.querySelector('[data-action="settings"]').addEventListener("click", () => this._emit("settings"));
    this.shadowRoot.querySelector('[data-action="collapse"]').addEventListener("click", () => this._toggle());
  }

  static get observedAttributes() { return ["model-label"]; }

  attributeChangedCallback(name, _old, value) {
    if (name === "model-label") this._el.model.textContent = value ? "Model: " + value : "";
  }

  _toggle() {
    if (this.hasAttribute("collapsed")) {
      this.removeAttribute("collapsed");
      this.setAttribute("title", "Collapse sidebar");
    } else {
      this.setAttribute("collapsed", "");
    }
  }

  _emit(name, detail) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }

  async refresh(selectedId) {
    const resp = await fetch("/api/conversations");
    if (!resp.ok) return;
    const rows = await resp.json();
    this._el.picker.replaceChildren();
    if (rows.length === 0) {
      const empty = document.createElement("div");
      empty.className = "row";
      empty.style.cursor = "default";
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = "No chats yet";
      empty.appendChild(label);
      this._el.picker.appendChild(empty);
    }
    for (const row of rows) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "row" + (row.conversation_id === selectedId ? " active" : "");
      btn.dataset.id = row.conversation_id;
      const ico = document.createElement("span");
      ico.className = "ico";
      ico.textContent = "\u2726";
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = row.title;
      btn.appendChild(ico);
      btn.appendChild(label);
      btn.addEventListener("click", () => this._emit("pick", { id: row.conversation_id }));
      this._el.picker.appendChild(btn);
    }
  }

  focusPicker() {
    const first = this._el.picker.querySelector(".row");
    if (first) first.focus();
  }
}

if (!customElements.get("weaver-sidebar")) {
  customElements.define("weaver-sidebar", WeaverSidebar);
}
