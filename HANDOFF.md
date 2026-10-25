# Weaver handoff

Date: 2026-10-25. Branch: `plan-030`. Latest commits: `1509d52`, then the
rail/chooser/settings pass (this commit).

## What Weaver is

A reading companion for the novel *Shadow Slave*. A reader talks to Weaver in a
themed chat; Weaver answers canon questions with cited chapters, respects a
spoiler boundary, and can write fanfic in a storyteller voice. Stack: Python
3.11, FastAPI, SQLite, embedded Qdrant, fastembed/BM25, React 19 + Vite + TS,
PWA. DeepSeek only. Do not push `main`, deploy, or tag without the owner.

## Hard rules from the owner

- Every Plan 030 commit starts with `Plan 030: `.
- Never commit secrets, private chapters, raw transcripts, or generated
  private state. `novels/` is immutable.
- UI work is not done without **real browser screenshots** at desktop and
  mobile. jsdom tests are not evidence for layout.
- One server at a time (embedded Qdrant index lock at
  `.weaver/retrieval/index`). Fake mode is enough for UI work.
- Discuss creative/visual direction before large changes. The owner pushes
  back hard when a design is silently guessed.
- Do not use em dashes in user-facing copy.

## Run it

```bash
uv run weaver web --port 8016 --fake            # UI
npm --prefix src/weaver/web/frontend run build  # rebuild served bundle
npx --prefix src/weaver/web/frontend vitest run # 143 frontend tests
uv run pytest tests/test_web.py -q              # 66 web tests
```

Screenshot harness: `.weaver/tools/shoot.mjs` (Chrome CDP, no deps).
`node .weaver/tools/shoot.mjs http://127.0.0.1:8016 .weaver/visual`.
Env flags: `OPEN_SETTINGS=1`, `OPEN_STAR=1`, `COLLAPSE_RAIL=1`,
`OPEN_NEW_MENU=1`, `SEND_MESSAGE="..."`. It skips the First Nightmare and
writes PNGs to `.weaver/visual/`.

The running fake app is at `http://127.0.0.1:8016` (as of this handoff).

## UI state now

- **Persistent rail on desktop** (>=900px), width 280. Logo is the toggle;
  there is no hamburger or chevron. Clicking the logo collapses to a 62px
  strip with only the logo; clicking the strip reopens. Clicking the
  transcript or pressing Escape collapses it.
- **Mobile** keeps the `+` sheet.
- **New thread/fanfic**: one bordered button in the old fanfic style (gold
  diamond + label). Tapping expands two full-width options, "New thread" and
  "New fanfic"; hover (native title) explains the difference.
- **Rows**: last-message preview (API `preview`), search, title as accessible
  name, actions on hover.
- **Chat header**: solid quiet bar with thread title + reader position.
- **Composer**: 56px rounded field, 32px plus/send, no rune carets.
- **Loader**: one three-crossing-thread loader under WEAVER (reverted component
  in `FateWeavingLoader.tsx`); gold cores, no second rune loader.
- **Settings**: header + index + content + footer; Star web moved to its own
  nav section; rune appearance control removed; chat hidden while settings is
  open. Layout no longer has the grey empty Soul Sea row.

Key files: `SpellSurfaceChatApp.tsx`, `ThreadArchive.tsx`,
`SpellSurfaceSettings.tsx`, `Composer.tsx`, `FateWeavingLoader.tsx`,
`styles/spell-surface-lab.css`, `lib/chatApi.ts`.

## Audit (approved by the owner)

Full detail: `deliverables/030-weaver-v2-qualification-and-rollout/settings-audit.md`.

Findings:

1. **Reader boundary / spoiler prefs are process-global.** `GET/PUT
   /api/preferences` ignore `X-Device-Id`; `runtime.prefs` is one store. A
   privacy/correctness blocker before sponsored launch.
2. **Null boundary reads as set.** Server default `reader_chapter=None`, the
   form shows 1000, and no cap applies until Apply.
3. **Answer depth is stored but unused.** `_turn_profile(question, domain)` in
   `web/app.py` never receives `tier`.
4. **Particles runes setting is dead.** Control removed from the UI; the field
   still exists in `LabPreferences` and localStorage.
5. **Saving is silent.** Modal closes before PUT resolves; failures invisible.

Approved next steps, in order:

1. **Per-device preferences.** Add a preference table keyed by `device_id`;
   move get/set into it; make `/api/preferences` read/write the requesting
   device; make the turn read the boundary of the device that owns the
   conversation (not the global store). Backfill the single existing store to
   the owner's device. Tests: two devices save different chapters, two
   concurrent turns get different caps.
2. **Visible save state.** Disable Apply until dirty; show "Saved" and a retry
   on failure; do not close on a failed write.
3. **Wire or remove Answer depth.** If wired: pass `turn_prefs.tier` into
   `_turn_profile`, scale tool budget and reasoning effort. If not: delete the
   section.
4. **Remove the dead rune preference** from `LabPreferences`, storage, and
   `data-runes` once nothing reads it.
5. **Explicit boundary.** If prefs have no chapter, show "No boundary saved"
   and do not present protect as active. Offer "I am at chapter N" from the
   last asked chapter.
6. Additions: default thread kind for the chooser, export conversations,
   clear local library index, usage/spend for BYOK, per-thread boundary.

Do not implement these silently as one blob. The owner approved the list and
will want screenshots and tests per slice.

## Known gaps and risks

- **Chapter coverage**: the library ends at 3160; r/ShadowSlave discusses 3215.
  A launch blocker recorded in the plan.
- **Desktop rail is verified by screenshots, not unit tests.** jsdom tests
  deliberately report mobile media so they exercise the sheet path.
- **Settings hides the whole chat with `visibility: hidden`.** This fixed chat
  text bleeding through the translucent panel. If you redesign the panel,
  remove that rule and make the panel genuinely opaque.
- **The rail row title truncates early** (84px reserved for hover actions).
  A `...` row menu would be cleaner than four inline icons.
- **Fake mode** replies contain "Development fixture" text. That is expected.
- **Preference store** is still global; see above.
- Live spend is about $5 of a $20 cap, not reconciled to the cent.

## Session log (condensed, latest stretch)

1. Owner showed WhatsApp Web: wants smooth, intuitive chat UX, not a copy.
2. First persistent-shell attempt broke the layout: the chat rendered ~300px
   wide at the left because the main column auto-placed into the 0px rail
   column. Fixed with a single full-width column; screenshots caught it.
3. Composer redesigned twice: big square buttons and rune-carets removed, then
   the send was re-seated inside a 56px field after the owner called the input
   "deformed".
4. Owner rejected the star gathering animation, asked for the old three-dot
   loader, then reverted to the old three-thread animation via
   `git checkout 4514527 -- FateWeavingLoader.tsx`. Gold cores kept.
5. Drawer rewritten: no date buckets, two sections Chats/Fanfic, search, last
   message previews. Settings modal layout rebuilt; audit written.
6. Owner approved the audit and demanded: Star web own section, no hamburger,
   logo toggles the sidebar, outside click closes it, one standard
   "New thread/fanfic" button with a two-option picker and hover details, and
   the old bordered fanfic button style restored.
7. This pass implemented those and added the handoff.

Owner quotes worth keeping: "I need actual smooth and intuitive ui"; "the two
different looking new buttons" are wrong, the New Weave style is the standard;
"fanfic triggers a very different config than new chat" so the picker matters;
screenshots before claims.

## Handoff prompt for the next agent

> Work in `/home/hax/weaver`, branch `plan-030`. Weaver is a Shadow Slave
> reading companion. Read `HANDOFF.md`, `plans/030-...md`, and
> `deliverables/030-.../settings-audit.md` first. Owner-approved work: make
> reader preferences per device (backend), add visible save state, wire or
> remove Answer depth, delete the dead rune preference, and make an unset
> spoiler boundary explicit. Then the additions list (default thread kind,
> export, clear index, usage/spend, per-thread boundary). Constraints: every
> commit starts with `Plan 030: `; no deploy/push/tag without the owner; no
> secrets or private chapters in commits; one server at a time because of the
> Qdrant lock. For every UI change, run the fake server on port 8016, rebuild
> the frontend, and take desktop + mobile screenshots with
> `.weaver/tools/shoot.mjs` before reporting. The frontend floor is 143
> tests + tsc + production build; backend floor is 694 tests.
