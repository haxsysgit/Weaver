/* <weaver-chat> — the whole chat surface as one reusable web component.
 *
 * Mounted by Weaver's index.html; HaxJobs can mount the same element and
 * re-theme via CSS custom properties (see theme.css). The component owns
 * conversation state, the transcript, streaming, and cooperative
 * cancellation. It delegates chrome to child components:
 *   <weaver-sidebar>   conversation picker + collapse rail
 *   <weaver-composer>  textarea + send/stop
 *   <weaver-settings>  local settings modal (lazy, on first open)
 *
 * Rendering boundary: model text is always inserted via textContent /
 * renderMarkdown (parse-to-nodes). Never innerHTML with model text.
 *
 * Public surface for reuse:
 *   attributes:  none required (server-provided via API)
 *   events:      weaver-error (detail: {message})
 *   css:         theme tokens in --vars, see theme.css
 */

import "./weaver-sidebar.js";
import "./weaver-composer.js";
import "./weaver-settings.js";
import { renderMarkdown } from "./weaver-markdown.js";

const STORAGE_KEY = "weaver.conversation";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: flex;
      height: 100%;
      width: 100%;
      background: var(--bg-1, #0c0c11);
      color: var(--text, #f2efe6);
      font-family: -apple-system-body, ui-sans-serif, -apple-system,
        "system-ui", "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
    }
    .shell {
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 0;
    }
    .main {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      position: relative;
      background:
        radial-gradient(1200px 500px at 50% -10%, rgba(176, 52, 42, 0.05), transparent 60%),
        radial-gradient(900px 400px at 90% 110%, rgba(168, 168, 184, 0.04), transparent 60%),
        var(--bg-1);
    }
    .transcript {
      flex: 1;
      overflow-y: auto;
      padding: 24px 16px 16px;
      scroll-behavior: smooth;
    }
    .column-inner {
      max-width: 768px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    .msg { margin: 0 0 20px; max-width: 100%; }
    .msg.owner { display: flex; justify-content: flex-end; }
    .msg.owner .bubble {
      background: var(--surface-2);
      border: 1px solid var(--hairline);
      border-radius: 20px;
      padding: 10px 16px;
      max-width: 82%;
      white-space: pre-wrap;
      word-wrap: break-word;
      color: var(--text);
    }
    .msg.weaver .body {
      white-space: pre-wrap;
      word-wrap: break-word;
      color: var(--text);
    }
    .msg.weaver .body :is(h1,h2,h3,h4,h5,h6) {
      color: var(--text);
      margin: 0.6em 0 0.3em;
      line-height: 1.3;
    }
    .msg.weaver .body p { margin: 0 0 0.8em; }
    .msg.weaver .body pre {
      background: var(--bg-0);
      border: 1px solid var(--hairline);
      border-radius: 10px;
      padding: 12px;
      overflow-x: auto;
      font-size: 13px;
    }
    .msg.weaver .body code {
      background: var(--bg-0);
      border: 1px solid var(--hairline);
      border-radius: 4px;
      padding: 0 4px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.9em;
    }
    .msg.weaver .body pre code {
      background: none;
      border: none;
      padding: 0;
    }
    .msg.weaver .body blockquote {
      border-left: 3px solid var(--accent);
      margin: 0.6em 0;
      padding: 2px 12px;
      color: var(--text-2);
    }
    .msg.weaver .body ul, .msg.weaver .body ol {
      margin: 0.4em 0 0.8em;
      padding-left: 1.6em;
    }
    .msg.weaver .body hr {
      border: none;
      border-top: 1px solid var(--hairline);
      margin: 0.8em 0;
    }
    .msg .actions {
      display: flex;
      gap: 4px;
      margin-top: 6px;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .msg:hover .actions, .msg:focus-within .actions { opacity: 1; }
    .msg .actions button {
      background: none;
      border: none;
      color: var(--text-3);
      cursor: pointer;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 6px;
    }
    .msg .actions button:hover {
      color: var(--text);
      background: var(--surface-2);
    }
    .status-line {
      color: var(--text-3);
      font-size: 13px;
      margin: 4px 0 12px;
    }
    .error-line { color: var(--danger); }
    .recovery {
      margin: 16px 0;
      padding: 14px;
      border: 1px solid var(--hairline);
      border-radius: var(--radius-card);
      color: var(--text-2);
      background: var(--surface);
    }
    .recovery p { margin: 0 0 10px; }
    .recovery button {
      margin-right: 8px;
      padding: 6px 12px;
      border: 1px solid var(--hairline);
      border-radius: 8px;
      background: var(--surface-2);
      color: var(--text);
      cursor: pointer;
    }
    .recovery button:focus { outline: 1px solid var(--accent); }
    .empty {
      text-align: center;
      color: var(--text-3);
      margin-top: 18vh;
      font-size: 14px;
    }
    .empty .mark {
      display: inline-block;
      margin-bottom: 12px;
      font-size: 22px;
      color: var(--accent);
    }
    @media (max-width: 768px) {
      .transcript { padding: 16px 10px 10px; }
    }
  </style>
  <div class="shell">
    <weaver-sidebar id="sidebar"></weaver-sidebar>
    <main class="main" part="main">
      <section class="transcript" id="transcript" aria-live="polite"></section>
      <weaver-composer id="composer"></weaver-composer>
    </main>
  </div>
  <weaver-settings id="settings"></weaver-settings>
`;

class WeaverChat extends HTMLElement {
  static get observedAttributes() {
    return ["model-label", "privacy-label"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._conversationId = null;
    this._turnActive = false;
    this._el = {
      sidebar: this.shadowRoot.querySelector("#sidebar"),
      transcript: this.shadowRoot.querySelector("#transcript"),
      composer: this.shadowRoot.querySelector("#composer"),
      settings: this.shadowRoot.querySelector("#settings"),
    };
  }

  connectedCallback() {
    this._el.composer.addEventListener("submit", (e) => this._onSubmit(e.detail.text));
    this._el.composer.addEventListener("stop", () => this._onStop());
    this._el.sidebar.addEventListener("pick", (e) => this._onPick(e.detail.id));
    this._el.sidebar.addEventListener("new-chat", () => this.startNewChat());
    this._el.sidebar.addEventListener("settings", () => this.openSettings());
    this._bindBoot();
  }

  attributeChangedCallback(name, _old, value) {
    if (name === "model-label") {
      this._el.sidebar.setAttribute("model-label", value || "");
      this._el.settings.setAttribute("model-label", value || "");
    }
    if (name === "privacy-label") {
      this._el.composer.setAttribute("privacy-label", value || "");
      this._el.settings.setAttribute("privacy-label", value || "");
    }
  }

  /* --- public API for reuse --- */

  async bootstrap() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (await this._loadConversation(saved))) {
      this._conversationId = saved;
    } else {
      await this._createConversation();
    }
    await this._el.sidebar.refresh(this._conversationId);
  }

  async startNewChat() {
    this._clearRecovery();
    await this._createConversation();
    this._el.transcript.replaceChildren();
    this._el.composer.focusInput();
  }

  openSettings() {
    this._el.settings.open();
  }

  /* --- internals --- */

  _bindBoot() {
    if (this._booted) return;
    this._booted = true;
    this.bootstrap().catch((err) => this._notifyError(err));
  }

  _notifyError(err) {
    this.dispatchEvent(
      new CustomEvent("weaver-error", {
        detail: { message: String((err && err.message) || err) },
      }),
    );
  }

  async _createConversation() {
    const resp = await fetch("/api/conversations", { method: "POST" });
    if (!resp.ok) throw new Error("could not create conversation");
    const body = await resp.json();
    this._conversationId = body.conversation_id;
    localStorage.setItem(STORAGE_KEY, this._conversationId);
  }

  async _loadConversation(id) {
    const resp = await fetch(`/api/conversations/${id}/messages`);
    if (!resp.ok) return false;
    const messages = await resp.json();
    this._el.transcript.replaceChildren();
    for (const m of messages) {
      this._addMessage(m.role === "owner" ? "owner" : "weaver", m.content);
    }
    return true;
  }

  _addMessage(role, content) {
    const wrap = document.createElement("div");
    wrap.className = "msg " + role;
    if (role === "owner") {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.textContent = content;
      wrap.appendChild(bubble);
      wrap.appendChild(this._actionRow(content));
    } else {
      const body = document.createElement("div");
      body.className = "body";
      renderMarkdown(body, content);
      wrap.appendChild(body);
      wrap.appendChild(this._actionRow(content));
    }
    this._el.transcript.appendChild(wrap);
    this._scrollBottom();
    return wrap;
  }

  _actionRow(content) {
    const row = document.createElement("div");
    row.className = "actions";
    const copy = document.createElement("button");
    copy.type = "button";
    copy.textContent = "Copy";
    copy.addEventListener("click", () => navigator.clipboard.writeText(content));
    row.appendChild(copy);
    if (this._lastOwnerText !== null) {
      const regen = document.createElement("button");
      regen.type = "button";
      regen.textContent = "Regenerate";
      regen.addEventListener("click", () => this._regenerate());
      row.appendChild(regen);
    }
    return row;
  }

  _setStatus(text, cls) {
    const line = document.createElement("div");
    line.className = "status-line" + (cls ? " " + cls : "");
    line.textContent = text;
    this._el.transcript.appendChild(line);
    this._scrollBottom();
  }

  _clearRecovery() {
    const r = this._el.transcript.querySelector(".recovery");
    if (r) r.remove();
  }

  _showRecovery(message) {
    this._clearRecovery();
    const recovery = document.createElement("div");
    recovery.className = "recovery";
    const p = document.createElement("p");
    p.textContent = message;
    recovery.appendChild(p);
    const newChat = document.createElement("button");
    newChat.type = "button";
    newChat.textContent = "Start new chat";
    newChat.addEventListener("click", () => this.startNewChat());
    recovery.appendChild(newChat);
    const choose = document.createElement("button");
    choose.type = "button";
    choose.textContent = "Choose another chat";
    choose.addEventListener("click", () => this._el.sidebar.focusPicker());
    recovery.appendChild(choose);
    this._el.transcript.appendChild(recovery);
    recovery.scrollIntoView({ block: "nearest" });
  }

  _scrollBottom() {
    this._el.transcript.scrollTop = this._el.transcript.scrollHeight;
  }

  async _onPick(id) {
    if (!id) return;
    this._el.transcript.replaceChildren();
    this._clearRecovery();
    if (await this._loadConversation(id)) {
      this._conversationId = id;
      localStorage.setItem(STORAGE_KEY, id);
      this._el.composer.focusInput();
    }
  }

  _onStop() {
    if (!this._turnActive || !this._conversationId) return;
    this._el.composer.setStopping(true);
    fetch(`/api/conversations/${this._conversationId}/cancel`, { method: "POST" })
      .then((r) => {
        if (r.status !== 202 && r.status !== 200) {
          this._showRecovery("Weaver could not confirm cancellation. Start a new chat or choose another.");
        }
      })
      .catch(() => {
        this._showRecovery("Weaver could not confirm cancellation. Start a new chat or choose another.");
      })
      .finally(() => this._el.composer.setStopping(false));
  }

  async _onSubmit(text) {
    if (this._turnActive) return;
    this._clearRecovery();
    this._turnActive = true;
    this._el.composer.setBusy(true);
    this._lastOwnerText = text;
    this._addMessage("owner", text);
    this._el.composer.clearInput();
    this._scrollBottom();

    const streamWrap = document.createElement("div");
    streamWrap.className = "msg weaver";
    const body = document.createElement("div");
    body.className = "body";
    body.textContent = "";
    streamWrap.appendChild(body);
    this._el.transcript.appendChild(streamWrap);
    let preview = "";

    try {
      const resp = await fetch(`/api/conversations/${this._conversationId}/turns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (resp.status === 409) {
        this._setStatus("A turn is already running. Start a new chat or choose another.", "error-line");
        return;
      }
      if (!resp.ok) {
        this._setStatus("Request failed (" + resp.status + ").", "error-line");
        return;
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = buffer.indexOf("\n\n")) !== -1) {
          const raw = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 2);
          this._handleEvent(raw, body, (t) => (preview = t));
        }
      }
    } catch {
      this._showRecovery("Connection lost. The interrupted chat cannot resume.");
    } finally {
      this._turnActive = false;
      this._el.composer.setBusy(false);
      body.replaceChildren();
      renderMarkdown(body, preview || body.textContent);
      this._el.composer.focusInput();
    }
  }

  _handleEvent(raw, body, setPreview) {
    const eventLine = raw.split("\n").find((l) => l.startsWith("event:"));
    const dataLine = raw.split("\n").find((l) => l.startsWith("data:"));
    if (!eventLine || !dataLine) return;
    const event = eventLine.slice(7).trim();
    let data;
    try { data = JSON.parse(dataLine.slice(5).trim()); } catch { return; }

    if (event === "delta") {
      body.textContent += data.text;
      setPreview(body.textContent);
      this._scrollBottom();
    } else if (event === "completed") {
      body.textContent = data.text;
      setPreview(data.text);
    } else if (event === "interrupted") {
      this._showRecovery(data.message || "Turn interrupted. The interrupted chat cannot resume.");
    } else if (event === "failed") {
      this._setStatus(data.message || "Turn failed.", "error-line");
    }
  }

  async _regenerate() {
    if (this._turnActive || !this._lastOwnerText) return;
    await this._onSubmit(this._lastOwnerText);
  }
}

if (!customElements.get("weaver-chat")) {
  customElements.define("weaver-chat", WeaverChat);
}

// PWA: register the service worker once the app shell has loaded.
// Keep the CSP script-src 'self' strict: registration lives here, not in
// an inline script.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/sw.js").catch(() => {});
  });
}
