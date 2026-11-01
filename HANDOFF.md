# Weaver handoff

Date: 2026-11-01. Plan 030 is closed: the owner accepted the build and
v2.0.0 is released offline (merged to `main` and tagged, not deployed). The
deploy workflow stays disabled and the EC2 box stays stopped; going public is
Plan 039. Next: the 021-030 checkpoint, then Plan 031 (see the roadmap in
`TODO_future.md`).

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
npx vitest run                                  # 167 frontend tests (repo root)
uv run pytest tests/test_web.py -q              # 80 web tests
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

Approved next steps. Renumbered by priority on 2026-10-29 (owner): the
explicit boundary moved ahead of the dead rune cleanup, and the additions were
re-scoped to fit the product direction (a chat buddy for non-technical
readers, not a harness of settings).

1. **Per-device preferences.** Done (`0b6b108`). Start fresh: the old shared
   row is left unread.
2. **Visible save state.** Done (`a890062`).
3. **Answer depth.** Done (`e103a1a`): removed. Weaver decides depth from the
   conversation: short follow-ups keep the earlier read, pushes ("prove it")
   read deeper, a loaded skill raises thinking and the final reread, and each
   run records its skills, lookups, and thinking.
4. **Explicit boundary.** Done (`5ce8ff2`). No saved chapter now reads
   "No spoiler boundary" in the header and "No boundary saved" in Settings;
   the model is told it does not know the reader's position and asks before a
   major beat; the packet never says "chapter None". Saying "I'm at chapter N"
   in chat offers a one-tap boundary. Also fixed: `GET /api/preferences`
   required an Origin header, which browsers do not send on a same-origin
   GET, so every real read had failed silently since it shipped.
5. **Reader additions, re-scoped.** Done (`114b907`): a save button in
   the thread header downloads the thread as a Markdown file. Dropped
   from the old list: default thread kind (another setting), clear local
   library index (admin work), per-thread boundary (more settings; the chapter
   offer covers moving forward). Deferred: usage and spend for readers with
   their own key, until usage is captured per device.
6. **Dead code cleanup.** Done (slice 6 commit). Removed the rune preference from the live app
   (`LabPreferences`, storage, `data-runes`, the "runes" rail label), delete
   the unmounted legacy `ChatApp`, `SettingsModal`, and `ConversationRail`,
   and fix the stray `}` in the rune styles.

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
- **Dead legacy CSS.** About 100 rules in `styles/app.css` served only the
  deleted `ChatApp`, `ConversationRail`, and `SettingsModal` (`conversation-*`,
  `soul-sphere*`, `settings-button*`, and more). Prune them selector by
  selector with screenshots; `Composer` still uses some `app.css` classes.
- **Live checks.** All twelve Reader Trials passed the evaluator on the
  v2.0.0 candidate (2026-10-31 and 2026-11-01, about $0.72). Harness:
  `.weaver/evaluation/plan030/run_v2_trials.py`; run one trial per process
  (`--only name`), with the server stopped (index lock).
- **Local owner key switch.** `WEAVER_LOCAL_OWNER_KEY=1` in `.env` lets
  chats on this machine use `DEEPSEEK_KEY` with no allowance. Off by default;
  never set it on a shared or tunnelled server.
- **Windows dev setup.** Every `uv` command needs
  `UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python` (MSIX `%APPDATA%`).
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

> Work in the Weaver repo on Windows (every `uv` command needs
> `UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python`). Weaver is a Shadow Slave
> reading companion. Plan 030 is closed and v2.0.0 is released offline. Read
> `HANDOFF.md`, `TODO_future.md` (roadmap 031 to 040), and the Plan 030
> deliverables first. Next: run the standing 021-030 checkpoint (review the
> last ten plans, refresh methods from the web, codify changes, prove on one
> real slice), then draft Plan 031 with the `arinze-plans` skill and wait for
> the owner's admission. Constraints: every commit starts with `Plan NNN: `;
> no Claude attribution in commits or PRs; no deploy, push, or tag without
> the owner; no secrets or private chapters in commits; one server at a time
> because of the Qdrant lock. UI changes need real desktop and mobile
> screenshots (`.weaver/tools/shoot.mjs`). Floors: 167 frontend tests + tsc +
> build; 777 backend tests.
