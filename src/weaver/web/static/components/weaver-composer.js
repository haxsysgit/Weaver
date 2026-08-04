/* <weaver-composer> — the capsule composer: textarea + send/stop.
 * Emits: submit {text} on send, stop on stop-press.
 * Shift+Enter inserts a newline; Enter submits.
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      flex: none;
      padding: 0 16px 14px;
    }
    .wrap { max-width: 768px; margin: 0 auto; }
    .composer {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      background: var(--surface, #171720);
      border: 1px solid var(--hairline, rgba(220,215,200,0.08));
      border-radius: var(--radius-composer, 28px);
      padding: 6px 8px;
      transition: border-color 0.15s;
    }
    .composer:focus-within {
      border-color: var(--accent-dim, rgba(176,52,42,0.5));
    }
    textarea {
      flex: 1;
      background: none;
      border: none;
      color: var(--text);
      font: inherit;
      resize: none;
      outline: none;
      padding: 8px 6px;
      max-height: 160px;
      line-height: 1.5;
    }
    textarea::placeholder { color: var(--text-4); }
    .btn {
      width: 38px;
      height: 38px;
      flex: none;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    #send {
      background: var(--accent, #b0342a);
      color: #fff;
      font-weight: 700;
    }
    #send:hover:not(:disabled) { background: var(--accent-hover, #c8453a); }
    #stop {
      background: var(--surface-2);
      color: var(--text);
    }
    .btn:disabled { opacity: 0.4; cursor: default; }
    .hint {
      margin: 6px 0 0;
      text-align: center;
      font-size: 11px;
      color: var(--text-4);
    }
    @media (max-width: 768px) {
      :host { padding: 0 8px 10px; }
    }
  </style>
  <div class="wrap">
    <div class="composer">
      <textarea id="input" rows="1" placeholder="Ask Weaver..." aria-label="Message Weaver"></textarea>
      <button class="btn" id="send" type="button" aria-label="Send" title="Send (Enter)">&#8593;</button>
      <button class="btn" id="stop" type="button" aria-label="Stop" title="Stop" hidden>&#9632;</button>
    </div>
    <p class="hint" id="hint"></p>
  </div>
`;

class WeaverComposer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._el = {
      input: this.shadowRoot.querySelector("#input"),
      send: this.shadowRoot.querySelector("#send"),
      stop: this.shadowRoot.querySelector("#stop"),
      hint: this.shadowRoot.querySelector("#hint"),
    };
  }

  connectedCallback() {
    this._el.input.addEventListener("input", () => this._autosize());
    this._el.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this._submit();
      }
    });
    this._el.send.addEventListener("click", () => this._submit());
    this._el.stop.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("stop"));
    });
  }

  static get observedAttributes() { return ["privacy-label"]; }

  attributeChangedCallback(name, _old, value) {
    if (name === "privacy-label") this._el.hint.textContent = value || "";
  }

  _autosize() {
    const el = this._el.input;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }

  _submit() {
    const text = this._el.input.value.trim();
    if (!text) return;
    this.dispatchEvent(new CustomEvent("submit", { detail: { text } }));
  }

  clearInput() {
    this._el.input.value = "";
    this._autosize();
  }

  focusInput() {
    this._el.input.focus();
  }

  setBusy(busy) {
    this._el.send.hidden = busy;
    this._el.stop.hidden = !busy;
  }

  setStopping(stopping) {
    this._el.stop.disabled = stopping;
  }
}

if (!customElements.get("weaver-composer")) {
  customElements.define("weaver-composer", WeaverComposer);
}
