/* Weaver local chat. Vanilla JS, textContent rendering, no CDN, no libs. */

const els = {
  transcript: document.getElementById("transcript"),
  input: document.getElementById("input"),
  send: document.getElementById("send"),
  stop: document.getElementById("stop"),
  hint: document.getElementById("hint"),
  mode: document.getElementById("mode-label"),
  picker: document.getElementById("chat-picker"),
  newChat: document.getElementById("new-chat"),
};

let conversationId = null;
let turnActive = false;

/* --- rendering: textContent only, never innerHTML with model text --- */

function addMessage(role, content) {
  const wrap = document.createElement("div");
  wrap.className = "msg " + role;
  if (role === "owner") {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = content;
    wrap.appendChild(bubble);
  } else {
    wrap.textContent = content;
    wrap.appendChild(copyButton(content));
  }
  els.transcript.appendChild(wrap);
  els.transcript.scrollTop = els.transcript.scrollHeight;
  return wrap;
}

function copyButton(content) {
  const row = document.createElement("div");
  row.className = "actions";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Copy";
  btn.addEventListener("click", () => navigator.clipboard.writeText(content));
  row.appendChild(btn);
  return row;
}

function setStatus(text, cls) {
  const line = document.createElement("div");
  line.className = "status-line" + (cls ? " " + cls : "");
  line.textContent = text;
  els.transcript.appendChild(line);
  els.transcript.scrollTop = els.transcript.scrollHeight;
}

function clearRecovery() {
  const recovery = document.getElementById("recovery");
  if (recovery) recovery.remove();
}

function showRecovery(message) {
  clearRecovery();

  const recovery = document.createElement("div");
  recovery.id = "recovery";
  recovery.className = "recovery";

  const explanation = document.createElement("p");
  explanation.textContent = message;
  recovery.appendChild(explanation);

  const newChat = document.createElement("button");
  newChat.type = "button";
  newChat.textContent = "Start new chat";
  newChat.addEventListener("click", startNewChat);
  recovery.appendChild(newChat);

  const chooseChat = document.createElement("button");
  chooseChat.type = "button";
  chooseChat.textContent = "Choose another chat";
  chooseChat.addEventListener("click", () => els.picker.focus());
  recovery.appendChild(chooseChat);

  els.transcript.appendChild(recovery);
  recovery.scrollIntoView({ block: "nearest" });
}

/* --- conversation lifecycle --- */

async function createConversation() {
  const resp = await fetch("/api/conversations", { method: "POST" });
  const body = await resp.json();
  conversationId = body.conversation_id;
  localStorage.setItem("weaver.conversation", conversationId);
}

async function startNewChat() {
  clearRecovery();
  await createConversation();
  els.transcript.replaceChildren();
  els.input.focus();
}

async function refreshPicker(selectedId) {
  const resp = await fetch("/api/conversations");
  if (!resp.ok) return;
  const rows = await resp.json();
  els.picker.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose a chat…";
  els.picker.appendChild(placeholder);
  for (const row of rows) {
    const option = document.createElement("option");
    option.value = row.conversation_id;
    option.textContent = row.title;
    if (row.conversation_id === selectedId) option.selected = true;
    els.picker.appendChild(option);
  }
}

els.picker.addEventListener("change", async () => {
  const id = els.picker.value;
  if (!id) return;
  els.transcript.replaceChildren();
  clearRecovery();
  if (await loadConversation(id)) {
    conversationId = id;
    localStorage.setItem("weaver.conversation", id);
    els.input.focus();
  }
});

els.newChat.addEventListener("click", () => startNewChat());

async function loadConversation(id) {
  const resp = await fetch(`/api/conversations/${id}/messages`);
  if (!resp.ok) return false;
  const messages = await resp.json();
  els.transcript.replaceChildren();
  for (const m of messages) addMessage(m.role === "owner" ? "owner" : "weaver", m.content);
  return true;
}

async function bootstrap() {
  const saved = localStorage.getItem("weaver.conversation");
  if (saved && (await loadConversation(saved))) {
    conversationId = saved;
  } else {
    await createConversation();
  }
  await refreshPicker(conversationId);
}

/* --- streaming a turn --- */

async function sendTurn(text) {
  clearRecovery();
  turnActive = true;
  els.send.hidden = true;
  els.stop.hidden = false;

  addMessage("owner", text);
  els.input.value = "";
  autosize();

  const streamWrap = document.createElement("div");
  streamWrap.className = "msg weaver";
  els.transcript.appendChild(streamWrap);
  let preview = "";

  try {
    const resp = await fetch(`/api/conversations/${conversationId}/turns`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    if (resp.status === 409) {
      setStatus("A turn is already running. Start a new chat or choose another below.", "error-line");
      return;
    }
    if (!resp.ok) {
      setStatus("Request failed (" + resp.status + ").", "error-line");
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
        handleEvent(raw, streamWrap, (t) => (preview = t));
      }
    }
  } catch {
    showRecovery("Connection lost. The interrupted chat cannot resume.");
  } finally {
    turnActive = false;
    els.send.hidden = false;
    els.stop.hidden = true;
    streamWrap.textContent = preview || streamWrap.textContent;
    els.input.focus();
  }
}

function handleEvent(raw, streamWrap, setPreview) {
  const eventLine = raw.split("\n").find((l) => l.startsWith("event:"));
  const dataLine = raw.split("\n").find((l) => l.startsWith("data:"));
  if (!eventLine || !dataLine) return;
  const event = eventLine.slice(7).trim();
  let data;
  try { data = JSON.parse(dataLine.slice(5).trim()); } catch { return; }

  if (event === "delta") {
    streamWrap.textContent += data.text;
    setPreview(streamWrap.textContent);
    els.transcript.scrollTop = els.transcript.scrollHeight;
  } else if (event === "completed") {
    streamWrap.textContent = data.text;
    setPreview(data.text);
  } else if (event === "interrupted") {
    showRecovery(data.message || "Turn interrupted. The interrupted chat cannot resume.");
  } else if (event === "failed") {
    setStatus(data.message || "Turn failed.", "error-line");
  }
}

/* --- composer --- */

function autosize() {
  els.input.style.height = "auto";
  els.input.style.height = Math.min(els.input.scrollHeight, 160) + "px";
}

els.input.addEventListener("input", autosize);
els.input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submit();
  }
});

els.send.addEventListener("click", submit);
els.stop.addEventListener("click", requestStop);

async function requestStop() {
  if (!turnActive || !conversationId) return;

  els.stop.disabled = true;
  try {
    const response = await fetch(
      `/api/conversations/${conversationId}/cancel`,
      { method: "POST" },
    );
    if (response.status !== 202 && response.status !== 200) {
      showRecovery("Weaver could not confirm cancellation. Start a new chat or choose another.");
    }
  } catch {
    showRecovery("Weaver could not confirm cancellation. Start a new chat or choose another.");
  } finally {
    els.stop.disabled = false;
  }
}

function submit() {
  const text = els.input.value.trim();
  if (!text || turnActive) return;
  sendTurn(text);
}

/* --- boot --- */

bootstrap();
