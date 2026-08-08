# Streaming, the broken thread, and the context engines (Plan 15, 2026-08-08)

Owner questions this document answers:

1. What actually happened when the "list the 7 daemons" reply broke mid-sentence?
2. How do real web UIs (ChatGPT, hermes-webui) stream replies, and what did we
   adopt from hermes-webui?
3. Why is the app slow, and why does the fix help?
4. How do hermes and pi manage context, and how does weaver hold a conversation?

---

## 1. The broken thread: root cause

### Evidence

The daemons turn (conversation `3c606a57...`, 2026-08-08) ran the locate loop
(16 tool calls, ~100 seconds), then the synthesis answer streamed and **cut
mid-sentence at daemon 5** — "**5. Mirage — Demon of Imagination** (also
translatable as illusion, vision, sight). Left the Great Citadel Bastion" — on
**both** the client and the server. The persisted assistant item is 4002 chars,
truncated at the same point, and the run is marked `interrupted`.

### Root cause

Every model call sends `max_tokens=4096` (`DEEPSEEK_FLASH.default_output_tokens`
in `model_layer/deepseek.py`). The answer call runs with thinking on (effort
high per the tier), and DeepSeek counts **reasoning tokens against max_tokens**.
The long reasoning trace consumed most of the 4096 budget, so the answer
truncated at `finish_reason="length"`. `run_turn`'s LENGTH path persists the
partial answer with status `interrupted`, marks the run interrupted, and the web
layer emits the `failed (incomplete)` SSE event. The client was not at fault —
the server produced a truncated response.

Official docs (api-docs.deepseek.com/api/create-chat-completion): `max_tokens`
is "The maximum number of tokens that can be generated in the chat
completion", and "the message content may be partially cut off if
`finish_reason="length"`, which indicates the generation exceeded max_tokens".

### Fix (committed with this document)

- `ANSWER_MAX_OUTPUT_TOKENS = 16384` (`agent/turn.py`): the synthesis answer
  call and the forced-answer call carry headroom so a long answer plus its
  thinking trace never truncate. Tool-call calls keep the 4096 default —
  their outputs are short, and bounded thinking keeps the locate loop fast.
- Red-first test: `test_synthesis_request_carries_the_answer_token_cap`
  asserts the synthesis request carries the big cap while a locate tool call
  keeps the default.

## 2. Conversation continuity (the owner's correction)

The earlier fix dropped the whole history from the synthesis call. That stopped
the old-Anvil-exchange domination, but it also meant follow-ups ("and what about
the 6th daemon?") had no memory of the previous exchange — the owner was right
to reject it.

The synthesis call now carries the **last three owner/assistant exchanges**
(`SYNTHESIS_HISTORY_EXCHANGES = 3` in `agent/turn.py`, `_recent_exchanges()`),
plus the locate draft and the packet. Tool transcripts are skipped (their
evidence lives in the packet). Red-first test:
`test_synthesis_call_keeps_recent_exchanges_drops_old_ones` — the previous
exchange is present, the exchange beyond the window is absent.

## 3. hermes-webui study (cloned from github.com/nesquena/hermes-webui)

Studied as the reference for "how a good web chat streams" (the owner's
directive, also flagged for HaxJobs reuse).

- Server: plain `ThreadingHTTPServer` (one OS thread per connection, no
  asyncio). The agent runs in a **background thread** per session
  (`api/streaming.py`, `_run_agent_streaming`), cancelled via a
  `threading.Event`.
- Streaming: **one SSE stream per turn**. The browser opens an `EventSource`
  to `api/chat/stream?stream_id=...`; the server keeps a subscriber queue per
  stream plus a replay; tool calls, status lines and text deltas all stream as
  events. Because the stream is addressed by `stream_id`, a dropped connection
  is just a reconnect — the agent keeps working and the client catches up.
- Disconnect semantics: closing the tab never kills the agent turn.
- The frontend (`static/messages.js`) uses the browser-native `EventSource`
  with `Last-Event-ID`, so reconnects resume exactly where they stopped.

### What weaver adopted (same session, new transport)

- `POST /turns` now returns **202** immediately; the reply is streamed over a
  new **`GET /api/conversations/{id}/stream`** SSE route.
- Every SSE frame carries an `id: <seq>` line; the server keeps a bounded
  replay buffer (`TurnStream.history`, 2048 frames) and replays everything
  past the client's `Last-Event-ID` on (re)connect — the hermes pattern.
- A disconnect **no longer cancels the turn**. The turn completes
  server-side, the reply persists to SQLite, and a reload shows it via
  `/messages`; the stream entry lives until the terminal event has been
  served (then a size cap bounds stragglers).
- Cancel is explicit: `POST /cancel` sets the cancel event (cooperative,
  never `task.cancel()`).
- The React transport (`lib/chatApi.ts`) swapped the fetch-reader for an
  `EventSource` wrapper that ends on the terminal event and surfaces a dead
  connection after a few failed reconnects. The server sends **named** SSE
  events (`event: delta` etc.), which EventSource dispatches to
  `addEventListener`, not `onmessage` — the live proof caught this.
- The stream route uses a host-only local check (EventSource does not always
  send an Origin header); mutating routes keep the full origin check.

Live proof: a real fake turn streams through the new transport in headless
Chrome (star background, glass reply box, tier pill, settings panel — 20/20
checks).

## 4. Why the app is slow, and why the fix helps

The perceived lag is the **time before the first reply text appears**, which is
the whole locate phase plus the synthesis thinking:

- The daemons turn: ~100s of locate (10 tool steps, each a full model call with
  thinking on high) then ~30s of synthesis thinking before the first content
  token.
- Every tool step **re-sends the assembled context**. Before this fix the web
  profile had an unbounded context budget, so each step re-sent the entire
  history; now it is bounded at 200K tokens (`web_context_budget` in
  `chat_runtime.py`), which is the single biggest latency win.
- The synthesis call now sends a small curated window instead of the whole
  history — less input to process on the heaviest call.

Done after the owner said yes (same session): locate steps now run at
reasoning effort `low` (thinking still on, per the always-on rule) while the
synthesis answer call keeps the tier effort (`high`/`max`). DeepSeek flash
documents `reasoning_effort` low/high/max, so the lower effort is honored, not
clamped. The remaining lever is fewer locate steps via tighter prompt
discipline (the prompt already caps searches at two per question).

## 5. hermes and pi context engines (documented, per the owner)

### hermes (Hermes Agent, local source at /home/hax/.hermes/hermes-agent)

- **Budget**: `IterationBudget` (thread-safe consume/refund counter); parent
  runs up to 90 tool iterations, each subagent an independent 50; one grace
  call after exhaustion; at exhaustion hermes strips the tools and makes one
  toolless call asking for a summary (`max_iterations_reached`).
- **Tools**: ~90 modules self-register with availability probes (TTL-cached
  30s) so unavailable tools never appear; per-tool `max_result_size_chars`
  caps output; progressive tool disclosure swaps in three bridge tools when
  deferrable tools would eat too much context.
- **Context**: the agent keeps the conversation (messages + tool transcripts)
  and a workspace; compaction happens through summaries of older turns.

### pi (the assistant running this, @earendil-works/pi-agent)

- Holds the **whole session in a 1M-token window** (deepseek-v4-flash) with no
  aggressive truncation and no step budget — the natural ceiling is the window.
- Overflow is compacted into **typed structured memories** (observations and
  reflections with stable ids) keeping durable facts and dropping verbatim
  turns; `recall(<id>)` recovers exact source text when needed.
- Thinking levels are per-session (`--thinking off|minimal|...|max`), mapped
  per provider; they never touch the agent loop (there is none — the loop
  runs until the model stops calling tools).

### weaver's current engine (where it stands)

- `ContextAssembler` bounds the stored-history window (count-only in the web
  profile, 200K cap).
- The two-phase loop curates the synthesis context (recent exchanges + draft +
  packet) and the packet is capped per tier (180K/360K/700K chars).
- Tool evidence persists durably without prose (the Slice 1 split), so replay
  re-opens the novel by handle instead of storing passages.
- What the hermes/pi study says to build next: labeled context (tag items at
  write time, compact the untagged), a story-state note for user takes, and
  graph-anchored compaction into the notebook — the Plan 15 second half.
