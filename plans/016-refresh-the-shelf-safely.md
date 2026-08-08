# Plan 016: Refresh the shelf safely

> **Executor instructions:** This plan wires the existing Plan 002
> library operations (inspect, fetch, update, build reading packets,
> export editions) into the web Weaver behind safe gates. The operations
> already exist (`src/weaver/corpus/tools.py`); this plan adds
> preview-first, owner confirmation, network and write classification,
> progress, and cancellation. No automatic updating during ordinary
> conversation.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check).
- **State:** Drafted 2026-08-04. Learning gate required. Unadmitted.
- **Depends on:** Plan 014 accepted (the reading tools define the tool
  surface this plan extends; the refresh operations live beside them).
- **Priority:** P2
- **Effort:** S
- **Risk:** Medium (network access and private-library writes; must never
  fire during ordinary chat)

## Owner direction (locked decisions)

1. **Preview first.** Any fetch/update operation shows what will change
   (chapters to add, placeholders to replace, hash changes) before any
   network call or write.
2. **Explicit owner confirmation.** No update runs from a normal
   conversation message. The owner confirms each operation explicitly.
3. **Clear classification.** Network calls are `EXTERNAL_EFFECT`;
   library writes are `INTERNAL_WRITE`. The existing effect-policy
   machinery applies unchanged.
4. **Progress and cancellation.** Long fetches show progress and can be
   cancelled cooperatively; cancelled operations leave the shelf
   unchanged.
5. **No auto-update.** Ordinary conversation never triggers a refresh,
   even implicitly.

## Product shape

- The web UI gains a confirmation-gated library update flow reusing the
  Plan 002 internals. It is **not a model tool**: the LLM never triggers,
  previews, or confirms a refresh. It is deterministic automation with a
  human gate, exactly like the machinery rule in Plan 014.
  - `preview_library_update` — reports missing chapters, placeholder
    chapters, and hash changes without touching anything.
  - `confirm_library_update` — runs the previewed update after explicit
    owner confirmation, with progress events and cooperative
    cancellation.
- The two-step split (preview then confirm) is the enforced gate: the
  confirm operation requires a preview token it can only get from a real
  preview, and the owner's confirmation in the UI.
- Operation records and receipts store what changed (chapter numbers,
  hashes, counts) and never novel prose or fetched raw text.
- The web UI shows a clear "update shelf" flow only when the owner
  opens it; nothing appears during normal chat.

## Backend boundary

- Plan 002 corpus tools and the Plan 011 HTTP/SSE contract stay
  unchanged.
- The new operations are UI endpoints that call the existing
  `corpus/tools.py` internals directly; the web profile's tool registry
  stays exactly as Plan 014 leaves it (the two reading tools only).
- Effect classification: network `EXTERNAL_EFFECT`, writes
  `INTERNAL_WRITE`, previews read-only.

## Out of scope

- Automatic update scheduling or watching.
- Updating during ordinary conversation.
- Changing how the library is stored or validated.
- Any write to `novels/` outside the Plan 002 rules.

## Deterministic proof

One scripted turn proving:

1. preview reports exactly what would change, without network or writes;
2. confirm without a preview token is refused;
3. confirm with the token but without owner confirmation is refused;
4. a confirmed update applies, records hashes and counts, and stores no
   novel prose in receipts;
5. cancellation mid-fetch leaves the shelf byte-identical to before.

## Verification floor

```sh
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
```

plus the deterministic proof script, plus a staged-diff audit for
credentials, private story text, chats, and generated private state.

## STOP conditions

- An update fires during ordinary conversation, from a model tool call,
  or without the two-step gate.
- Network or write happens before preview and confirmation.
- Novel prose or fetched raw text enters durable records.
- The private notebook or `novels/` is modified outside the plan rules.
