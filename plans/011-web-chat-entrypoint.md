# Plan 011: Local browser chat entrypoint

> **Executor instructions:** Plan 010 must be accepted and closed. Follow the
> standing checkpoint in `docs/process/`, then stop at the appraisal owner gate
> before writing browser runtime or API code.

## Status

- **State:** Accepted 2026-08-03
- **Admitted implementation:** Yes (Gate 1 behaviour decisions confirmed)
- **Depends on:** Plan 010 accepted and closed; checkpoint 001 to 010 complete
- **Priority:** P2
- **Effort:** L
- **Risk:** Medium, first browser surface and long-lived streamed requests
- **Learning gate:** `deliverables/011-web-chat-entrypoint/learning.md`
- **Final decision:** accepted 2026-08-03

## Outcome

Prove one local browser conversation with streaming, cooperative cancellation,
SQLite persistence, reload, and strict privacy boundaries.

This is a local single-owner proof. It is not a hosted product and it does not
replace the Plan 013 responsive interface and PWA work.

## Roadmap position

1. Plan 011: local browser chat proof.
2. Plan 012: direct-reading baseline.
3. Plan 013: polished responsive interface and installable PWA.
4. Plan 014 and later: compiled-memory experiments.

Native Android and iOS remain deferred until Plan 013 proves a concrete PWA
limitation.

## Gate 1: appraise before building

The first Plan 011 slice is research, not implementation.

### Completed appraisal path

- The appraisal tooling was retired 2026-08-02 after the design reference
  was produced (see learning.md): the staged probe checklist guessed the
  wrong roles, and the owner's screenshots plus a live dev-style
  extraction from the signed-in profile were more reliable. The Playwright
  dev dependency and the `chatgpt_appraisal` / `chatgpt_extract` modules,
  their tests, and `playwright-contracts.md` were deleted. Raw captures
  stay owner-only under `.weaver/research/chatgpt-ui/`. Gate 1's
  deliverable is the design reference
  (`deliverables/011-web-chat-entrypoint/chatgpt-ui-design-reference.md`)
  and the owner's adopt/skip decision on it.
- The owner signed in personally through a visible browser. Cookies and
  credentials were never exported, printed, logged, or committed.
- The attempted role-based probe failed visibly because its assumed roles did
  not match the live page. That failure is recorded in `learning.md` and the
  retired tooling is not an executor command.

### Appraisal evidence used

The accepted design reference came from six owner-captured signed-in states
plus a live style and layout extraction. The original fixed probe list was
superseded at the owner gate. Unproven responsive behaviour is recorded in
`learning.md`; Weaver's own 1440 x 900 and 390 x 844 implementation states are
recorded in `results.md`.

### Private and committed evidence

Authenticated screenshots and raw captures stay owner-only under:

```text
.weaver/research/chatgpt-ui/<timestamp>/
```

Committed Gate 1 evidence contains:

- a sanitized observation matrix;
- an adopt-now, Plan-013, or reject decision table;
- original Weaver wireframes and state diagrams;
- checked date, viewport, account tier, and any unproven states.

Owner clarification, 2026-08-03: the research reference may name ChatGPT and
record observed layout, ordinary interface text, spacing, and palette values.
Weaver itself must not ship OpenAI trademarks, logos, icons, or brand assets.
Never commit personal sidebar titles, credentials, authenticated screenshots,
or raw model reasoning.

### Learning output

Observations, hypotheses, and accepted Weaver decisions are separated in the
deliverables. The owner accepted Gate 1 on 2026-08-02 before browser code began.

After approval, show the exact private profile and capture locations and offer
cleanup. Do not delete either automatically.

## Gate 1 hypotheses tested

The outcomes are recorded in `hypothesis.md` and accepted in `decision.md`.

1. A single centred conversation column is enough for the proof.
2. The composer should grow, send, stop, and recover in the same basic states
   on desktop and phone widths.
3. Reload should rebuild from SQLite, with local storage holding only the
   active conversation ID.
4. Plain text rendering is safer than adding Markdown in this slice.
5. A web surface needs no library tools until a later owner-approved plan.

## Gate 2: browser implementation contract

This section becomes executable only after Gate 1 is accepted.

### Shared chat runtime

Extract provider, prompt, model, tool profile, and `SessionWeave`
construction from `src/weaver/cli.py` into a shared runtime.

Public boundary:

```python
open_chat_runtime(state_dir, *, live, surface) -> ChatRuntime
```

- `surface` is `"developer"` or `"web"`.
- Opening the runtime does not create a conversation.
- `ChatRuntime` owns the open session, mode label, surface profile, and close
  lifecycle.
- The developer profile preserves the Plan 010 tool set and maintenance
  policy.
- The web profile has an empty tool registry, no active tools, a read-only
  policy, and a prompt that does not claim library access.
- `weaver chat` and `weaver web` remain thin adapters over this runtime.

### Local command and server

Add:

```text
weaver web [--fake] [--port PORT]
```

- Live is the default. `--fake` is explicit.
- Bind only to `127.0.0.1`.
- Missing live credentials exit 2 before state is opened or a socket binds.
- Use FastAPI, Uvicorn, and local plain HTML, CSS, and JavaScript.
- Do not add Node, React, a frontend framework, a service worker, or a CDN.

### HTTP and SSE contract

| Route | Required result |
| --- | --- |
| `GET /api/conversations` | `200 [{"conversation_id":"...","title":"..."}]`, newest first |
| `POST /api/conversations` | `201 {"conversation_id":"..."}` |
| `GET /api/conversations/{id}/messages` | filtered persisted transcript |
| `POST /api/conversations/{id}/turns` | SSE stream for `{"message":"..."}` |
| `POST /api/conversations/{id}/cancel` | `202 cancelling`, `200 idle`, or `404 unknown` |

SSE events:

- `delta`: `{"text":"..."}`
- `completed`: final text, token count, and budget
- `interrupted`: safe code and recovery message
- `failed`: safe code and message, never a stack trace

Reject empty or whitespace-only messages and messages over 32,000 characters
with 422. Unknown conversations return 404. A second active turn in the same
conversation returns 409.

### Streaming and cancellation ownership

- Each send runs in one owned background task with an SSE queue.
- Keep one active-turn record per conversation with its cooperative
  `asyncio.Event`.
- Cancellation and client disconnect set the event. They never call
  `task.cancel()` on model work.
- On disconnect, let the turn settle and consume its result or exception
  before removing it from the active registry.
- On shutdown, set every active cancellation event and await settlement.
- Store only the active conversation ID in `localStorage`.
- On reload, read the canonical transcript from SQLite. If the ID is unknown,
  create a new conversation.
- After cancellation, offer Start new chat and Choose another chat. Do not
  pretend the interrupted chat can resume.

### First-page boundary

Build one responsive conversation column with Weaver identity and mode,
persisted transcript, streaming preview, auto-growing composer, send or stop
control, new chat, and clear error or interruption states.

- Render transcript content with `textContent`.
- Use separate same-origin CSS and JavaScript.
- Set a same-origin content security policy.
- Add host and origin checks for mutating routes.
- Do not enable CORS or load third-party assets.
- Add no library routes.
- Never expose tool calls, tool results, novel paths, reading packets,
  receipts, credentials, raw reasoning, or private chapter text.

## Expected files after Gate 1

- Create: `src/weaver/chat_runtime.py`
- Create: `src/weaver/web/__init__.py`
- Create: `src/weaver/web/app.py`
- Create: `src/weaver/web/templates/index.html`
- Create: `src/weaver/web/static/weaver.css`
- Create: `src/weaver/web/static/weaver.js`
- Create: `tests/test_chat_runtime.py`
- Create: `tests/test_web.py`
- Create: `tests/test_web_server.py`
- Modify: `src/weaver/cli.py`
- Modify: `pyproject.toml` and `uv.lock`
- Update: `deliverables/011-web-chat-entrypoint/`

Exact paths may change at the learning gate if the appraisal proves a simpler
boundary. Record the correction before code.

## Build order after Gate 1

1. Write failing runtime-profile tests.
2. Extract the shared runtime without changing TUI behaviour.
3. Prove missing credentials open no state and no socket.
4. Write failing API validation and unknown-ID tests.
5. Add conversation create and filtered transcript routes.
6. Write a failing SSE delta-before-completion test.
7. Add owned turn tasks and SSE queues.
8. Write failing cancel, disconnect, and shutdown settlement tests.
9. Add cooperative cancellation and active-turn cleanup.
10. Add the plain responsive page with text-only rendering.
11. Add origin, host, CSP, and private-canary tests.
12. Run an ephemeral Uvicorn HTTP and SSE integration proof.
13. Inspect desktop and phone widths.
14. Update and inspect both editable diagrams and previews.
15. Run runtime/privacy and browser/UX independent reviews.
16. Stop for the final owner decision.

## Acceptance floor

Deterministic tests run before any live model or authenticated browser call.
Plan 011 must prove:

- developer and web profiles have the correct tool sets;
- missing credentials create no state and bind no socket;
- a delta arrives before completion;
- cancellation settles as interrupted without `task.cancel()`;
- disconnect and shutdown leave no orphan task;
- a fresh runtime reloads the same owner and Weaver transcript without
  duplicates;
- concurrent turns, invalid input, unknown IDs, and idle cancellation return
  their specified responses;
- internal private canaries never appear in HTML, JSON, SSE, JavaScript, logs,
  or errors;
- an ephemeral Uvicorn server passes the real HTTP and SSE flow;
- the page remains usable at desktop and phone widths.

Run focused tests, full pytest, Ruff, `uv pip check`, `uv lock --check`, a
dependency audit, staged credential and private-text scans, and the documented
manual use proof.

The final deliverables require:

- editable `architecture.drawio` plus inspected `architecture.svg`;
- a separate editable and rendered ChatGPT-to-Weaver UI state map;
- runtime, API, model, SQLite, browser, and cancellation paths;
- two independent reviews with no blocker;
- the owner's final decision.

## Excluded

Authentication, accounts, hosted access, sync, sharing, dashboards, a full
sidebar, server-backed message actions such as regenerate, Markdown rendering,
PWA installation, native apps, and library access are outside Plan 011. Local
Copy is admitted as a browser-only action.

## Executor corrections (Gate 1 accepted 2026-08-02)

- The appraisal tooling was retired after the design reference was produced
  (see learning.md): `chatgpt_appraisal.py`, `chatgpt_extract.py`, their
  tests, `playwright-contracts.md`, and the Playwright dev dependency were
  deleted. The design reference
  (`deliverables/011-web-chat-entrypoint/chatgpt-ui-design-reference.md`)
  is the Gate 1 deliverable, built from owner-captured screenshots plus a
  dev-style extraction of the signed-in profile (measured values).
- The owner confirmed the adopt/skip list and the plain HTML/CSS/JS
  boundary (no framework, no build step). A framework decision, if any, is
  deferred to Plan 013.
- Gate 1's fixed-scope probe list (signed-out entry, sidebar states,
  settings, offline state) was superseded: the owner's real captures and
  the extraction pass covered the states that matter, and the unproven
  sub-768 px collapse is recorded as a known gap in learning.md.
- Scope correction (2026-08-02, independent review): the design
  reference's adopt list is narrowed to Plan 011's boundaries. The
  sidebar and its chrome, regenerate, and settings behaviours are not in
  Plan 011 (plan Excluded list); copy is admitted only as a local browser
  action. "Choose another chat" after cancellation needs the conversation
  list, so the API contract gains `GET /api/conversations`. All deferred
  UI behaviours move to Plan 013. Recorded in decision.md.
- Owner clarification (2026-08-03): ChatGPT-inspired layout, ordinary UI
  wording, spacing, and palette values are allowed. Weaver must not present
  OpenAI trademarks, logos, icons, or brand assets as its own. The research
  reference remains valid evidence under this boundary.

## Current stop

**Resolved.** The owner accepted Plan 011 on 2026-08-03 after Gate 2, the
follow-up repairs, the full verification floor, and the independent recheck.
Plan 012 may enter its learning gate. Do not admit Plan 012 implementation
until its owner confirmation is recorded.
