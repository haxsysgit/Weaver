# Plan 037: The room

> **Executor instructions:** Build the new chat room from the approved
> Plan 036 design (`deliverables/036-into-the-spell/design.md`, sections
> 7.1, 7.3, 8, 10, 11, 12): the void and its silk threads, Weaver's woven
> presence, citation threads, scrolling back, and three quality levels,
> drawn with the React scene kit behind the existing chat. The new face is
> built behind a switch and only becomes the default in slice 9. Every
> slice is marked **flash** (DeepSeek Flash in DSH) or **claude** (Claude
> Code); run only the slices marked for your harness, and every flash
> slice is reviewed by Claude before the next slice starts.

## Status

- **Tooling:** Node and npm at the repo root (`npx vitest run`,
  `npm run build`), `uv run --frozen` for Python, Google Chrome at
  `/usr/bin/google-chrome-stable` for screenshots
  (`.weaver/tools/shoot.mjs`). No Blender in this plan. Fake mode only:
  `uv run weaver web --port 8016 --fake`.
  Flash slices run in DSH's desktop profile (smoke-tested 2026-11-18:
  node, npm, uv, `read_image`, `AGENTS.md`, repo skills; no HaxJobs tools).
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plan 036 closed (it holds the approved design this plan
  builds).
- **Lane:** single.
- **Priority:** P1. Every later face plan (037.1, 037.2) builds on it.
- **Effort:** L.
- **Risk:** Medium. Visual work can be rejected after it is built; each
  claude slice shows the owner a small sample first. Phone performance is
  the main technical risk; slice 8 measures it.
- **Budget:** agent-context work only; no live model calls (fake mode).
  Build estimate 1.5M to 2.5M working tokens: flash slices (2, 6, 8, 9)
  about 0.6M to 1M on DeepSeek Flash, estimated under $2 (re-check the
  dated price table before running; measured at close); claude slices
  (1, 3, 4, 5, 7, 10) about 0.9M to 1.5M against the Claude allowance;
  Claude's reviews of flash slices about 50k to 150k each. The drafting
  session (Plan 036 slice 6) is counted in Plan 036.
- **Release:** none.
- **Verified at:** `66ea0ae` (drafting; re-vet before admission).
- **Drafted in / executed in:** Claude Code (Opus 5.5) / split: DSH
  (deepseek-flash) for flash slices, Claude Code for claude slices.

## Owner direction (locked decisions)

1. 2026-11-18: the approved design is
   `deliverables/036-into-the-spell/design.md`. Where this plan and the
   design disagree, the design wins and the executor stops (STOP list).
2. 2026-11-18: a new face on the same chat engine. How Weaver answers
   does not change: server, retrieval, prompts, streaming, recovery and
   reader memory are untouched. This plan changes no Python file.
3. 2026-11-18: the scene kit is React Three Fiber, drei and postprocessing
   over three.js, with our own GLSL shaders for the threads. WebGL, not
   WebGPU.
4. 2026-11-18: motion animates the interface (messages, panels, layout);
   GSAP animates the story moments (citation threads, the scroll-back
   choreography). The two never animate the same element. Every GSAP
   animation lives inside `useGSAP` and honours reduced motion through
   `gsap.matchMedia`.
5. 2026-11-18: two layers. Weaver's layer (threads, presence, citation
   threads, scroll-back, quality levels) never imports from a world
   folder; the Shadow Slave world supplies the room's ground, palette,
   fonts and status-line copy.
6. 2026-11-18: three quality levels: Full (laptops and PCs), Light
   (phones: fewer threads, softer bloom, motion only on events, no frames
   rendered while idle), Still (reduce motion or a struggling device: one
   frame rendered once, then nothing).
7. 2026-11-18: the thinking status shows phases only (locating, reading,
   connecting, considering, from `lib/runePhases.ts`). Chapter numbers
   are never sent to the browser while Weaver works, and this plan does
   not change that.
8. 2026-11-18: a citation thread draws from a chapter knot to a star,
   holds briefly, then fades. Knots get no tap action.
9. 2026-11-18: scrolling up through older messages runs the weave
   backwards; scrolling down runs it forward. Older stretches are marked
   by when they were said ("last tuesday"), never by chapter. A "back to
   now" pill returns to the latest message.
10. 2026-11-18: the novel is inspiration, not a blueprint; no text on
    screen spoils the novel or explains how the Spell was made; no em
    dashes in reader-facing copy.
11. 2026-11-18: performance is measured per device during the build;
    phones get as much optimisation as they need. Starting budgets are
    in the design, section 10, and below.
12. Standing (AGENTS.md): UI work is not done without real browser
    screenshots at 1440x900 and 390x844; jsdom is not layout evidence;
    one server at a time; commits start with `Plan 037 - Slice K: ` or
    `Plan 037: `; no Claude or AI attribution in commits.

## Scope

- New dependencies, exact versions: `@react-three/fiber` 9.8.2,
  `@react-three/drei` 10.7.9, `@react-three/postprocessing` 3.2.2,
  `postprocessing` 6.39.6, `gsap` 3.15.1, `@gsap/react` 2.1.2.
- Two new folders under `src/weaver/web/frontend/`: `weaver/` (Weaver's
  layer) and `worlds/shadow-slave/` (the world layer), plus a small
  `worlds/index.ts` registry with one world.
- The new room: the void scene, Weaver's presence and status line, the
  room layout around the existing transcript and composer, citation
  threads, scrolling back with day dividers and the "back to now" pill.
- One change below the face, frontend only: `DisplayMessage` keeps the
  message time (`created_at`) so day dividers have data.
- Quality levels, a bundle-size report with budgets, a phone frame-rate
  check, and screenshot states for every scene state.
- Switching the new room on as the default and deleting the old
  background code and its tests (slice 9).

## Out of scope

- The Soul Sea home, opening on the sea, the fragments drawer, the "all
  fragments" list, the first visit, Settings, the rail's retirement, and
  the server's last-activity field: Plan 037.1
  (`plans/discussion/037.1-home-and-the-first-visit.md`). Until 037.1,
  the existing rail (desktop) and thread sheet (phone) stay as they are,
  restyled only as far as slice 4 needs to fit the room.
- The weave (fanfic) room, sound, and Blender stills: Plan 037.2
  (`plans/discussion/037.2-the-weave-room-and-sound.md`). In 037, a
  fanfic thread uses the same room.
- Any Python, API, prompt, retrieval or model change.
- Deployment, merging to `main`, tags.

## Starting facts (checked at `66ea0ae`)

Paths are under `src/weaver/web/frontend/` unless they start with a repo
folder.

- `main.tsx` mounts `SpellSurfaceChatApp` with `createHttpChatApi()`;
  `#theme-lab` mounts `ThemeLab` instead.
- `components/SpellSurfaceChatApp.tsx` (1052 lines) owns the room today:
  `spellState` (type `SpellweaveActivityState` from
  `components/SpellweaveBackdrop.tsx`: `idle`, `reaching`, `reading`,
  `answering`, `complete`, `failed`) is set around lines 377 to 426 and
  670 to 678; the background mounts as `<SpellweaveBackdrop>` near line
  751 and `<SpellSurfaceSoulSea>` near line 760; the transcript is the
  `lab-transcript` div with `transcriptRef` near lines 899 to 916, and it
  auto-scrolls to the bottom near line 368.
- `components/SpellweaveBackdrop.tsx` lazy-loads
  `components/SpellBackground.tsx` (781 lines of hand-written three.js)
  and draws `components/SpellweaveField.tsx` in front of it.
- `lib/spellRenderProfile.ts` already picks a profile (`desktop`,
  `phone`, `compact`, `static`) from width, height, pixel ratio and
  reduced motion, with an adaptive downgrade
  (`getAdaptiveSpellRenderProfile`).
- `lib/runePhases.ts` maps a tool name to a status line
  (`runeMessageForActivity`).
- `hooks/useChatController.ts` turns `StoredMessage` (which has
  `created_at`) into `DisplayMessage` (`lib/chatModel.ts`: `id`, `role`,
  `content`, `streaming`) in `toDisplayMessage`, which drops the time.
  `chat.activity` holds the turn's tool events (`{ name, status }`).
- `lib/markdown.ts` finds "ch. N" and "chapter N" (`CHAPTER_REFERENCE`);
  `components/Markdown.tsx` renders each as a span with class
  `chapter-reference-knot` and `data-testid="chapter-reference-knot"`.
- `components/SpellMotionProvider.tsx` wraps the app in motion's
  `LazyMotion` with `reducedMotion="user"`.
- Today's built bundle (`src/weaver/web/dist/assets/`, gzip -9): main
  `weaver-*.js` 125 KB, `SpellBackground-*.js` 131 KB (lazy),
  `spellMotionFeatures-*.js` 16 KB (lazy), `weaver-*.css` 32 KB.
- Floors at `66ea0ae`: frontend tests 185 pass (`npx vitest run`), build
  passes (`npm run build`), backend 1143 pass (`uv run --frozen pytest
  -q`).
- Reference images of the approved look (private, never committed):
  `private/design-labs/036/e-room.html` (open with
  `python3 -m http.server 8799 --bind 127.0.0.1` from that folder) and
  `private/design-labs/036/shots/e1-*.jpg`, `e2-*.jpg`. The canvas code
  there (`weave.js`) is a throwaway sketch, not code to port.

## Budgets (checked in slices 2, 8 and 9)

| Measure | Budget |
| --- | --- |
| JS loaded before the chat is usable (gzip) | 200 KB |
| Scene chunk, loaded after the chat (gzip) | 350 KB |
| GSAP chunk, loaded after the chat (gzip) | 45 KB |
| Frame rate, Full, desktop | 60 fps |
| Frame rate, Light, phone profile (390x844, Chrome 4x CPU slowdown) | steady 30 fps or better while animating |
| Frames rendered while idle on Light and Still | 0 |

## Deterministic proof / verification floor

1. `npx vitest run`: every test passes. Results record the count before
   and after, and list every deleted test with the behaviour it pinned.
2. `npm run build` passes (`tsc --noEmit` and `vite build`).
3. `uv run --frozen pytest -q`: 1143 pass, unchanged (no Python changes).
4. `node scripts/bundle_report.mjs` (slice 2) exits 0 against the budgets.
5. `node scripts/scene_fps.mjs` (slice 8) reports within budget for Full
   on desktop and Light on the phone profile, and 0 idle frames on Light
   and Still.
6. Screenshots at 1440x900 and 390x844 of every scene state (idle,
   reaching, reading, answering, failed, a citation drawing, scrolled
   back, Still), made with `.weaver/tools/shoot.mjs` against the fake
   server, saved under `.weaver/visual/037/` (not committed) and listed
   in results.
7. `git diff --stat 66ea0ae -- '*.py'` is empty.
8. Staged files audited for secrets and private text before each commit;
   nothing under `novels/` or `private/` is committed.

## STOP conditions

- The owner's uncommitted `package.json` and `package-lock.json` changes
  (at drafting time: vitest 3.2.4 to 5.0.1, line endings) are still
  uncommitted when slice 2 starts. Ask the owner to settle them first;
  never commit, revert or fold them into a slice.
- A pinned library refuses to install with React 19.2 or three 0.185
  (peer range), or needs a different major version.
- Any step needs a Python, API, prompt or server change.
- A budget is missed by more than 20 percent after the slice's own
  tuning.
- The owner rejects a slice's sample. Do not build the full slice.
- A test of behaviour that is meant to stay fails and the only fix
  changes that behaviour.
- The plan and the approved design disagree.
- A flash slice needs a visual judgement the flash executor cannot make
  from tests, numbers and the reference images: stop and hand to Claude.
- Anything would need reading `novels/` (this plan reads no chapters).

## Slices

Each slice ends with the floor items it can run, a results entry, and one
commit `Plan 037 - Slice K: <what>`. A flash slice ends with "ready for
Claude's review" in results; the next slice starts only after the review
is recorded in `review-ledger.md`.

1. **Plan and admit. (claude)** Re-vet this plan against HEAD, set
   `Verified at`, fill `learning.md` with the locked decisions, update
   the index row, admission commit `Plan 037: admit the room` on the
   owner's word.

2. **Foundations. (flash)**
   - Install the six pinned dependencies (`npm install --save-exact`).
   - Create `weaver/` and `worlds/shadow-slave/`. Define a `World` type in
     `worlds/types.ts` (id, name, palette tokens, font stacks, a
     `RoomGround` React component slot, status-line copy) and register
     the one world in `worlds/index.ts`. Weaver's layer imports only the
     `World` type, never `worlds/shadow-slave/`.
   - `weaver/quality.ts`: `QualityLevel = "full" | "light" | "still"`,
     derived from `getSpellRenderProfile` (`desktop` to full; `phone` and
     `compact` to light; `static` to still), with an override read from
     localStorage key `weaver.quality` (no UI in this plan; 037.1 adds
     it). Unit tests for every mapping and the override.
   - `weaver/sceneState.ts`: one type for what the scene needs (activity
     state, count of tool events this turn, quality level, scroll-back
     amount 0 to 1, citation events), filled from the chat in later
     slices. Unit tests.
   - The switch: `?face=room` on the URL stores `weaver.face=room` in
     localStorage; `?face=old` clears it. With the switch on,
     `SpellSurfaceChatApp` mounts `weaver/RoomScene.tsx` (an empty,
     lazy-loaded React Three Fiber `<Canvas>` with a black ground) in
     place of `<SpellweaveBackdrop>` and `<SpellSurfaceSoulSea>`. With it
     off, nothing changes. Tests for both paths.
   - A dev-only scene override: with the fake server, `?scene=<state>`
     forces a scene state (idle, reaching, reading, answering, failed,
     citation, older, still) so screenshots can be made without timing.
     It must not exist in a production build (guard on
     `import.meta.env.DEV` or on the fake-mode meta tag the server sets;
     check which exists and record the choice).
   - `scripts/bundle_report.mjs`: build output sizes (gzip) per chunk,
     grouped into "before chat usable" and the lazy chunks by name,
     compared with the budgets table; exit 1 when over.
   - Extend `.weaver/tools/shoot.mjs` (or add a sibling script) to take a
     list of `?scene=` states and save desktop and phone PNGs for each
     into a given folder.
   - Floor 1, 2, 4. Results: dependency sizes, the bundle report, the
     switch screenshots (old face unchanged, new face black).

3. **The void. (claude)** Show the owner one desktop and one phone still
   of the void before building it out. Then: `worlds/shadow-slave/`
   supplies the ground (deep blue-black to black); `weaver/threads/`
   draws the silk threads with a GLSL flow-field shader (thin, faint,
   many; never straight lines between points), plus a star field and a
   few gold stars; postprocessing adds bloom, vignette and fine grain.
   Full animates continuously; Light uses fewer threads and draws only
   on events (`frameloop="demand"`); Still renders one frame. Messages
   stay fully readable: the scene darkens behind the transcript column.
   Screenshots of idle at both sizes and Still.

4. **The room's layout. (claude)** Show a sample first. The transcript and
   composer live inside the void rather than on a panel: message type,
   spacing, the reader's and Weaver's messages, the composer, a minimal
   header with the Weaver mark and thread title, and space at the top
   for the presence. The existing rail and thread sheet keep working and
   are restyled only enough to sit beside the room (they are replaced in
   037.1). Use the Shadow Slave world's palette and fonts through the
   `World` type. Existing behaviour tests keep passing.

5. **Weaver's presence and the status line. (claude)** Show a sample
   first. `weaver/presence/`: a woven oval of fine threads holding seven
   embers, never a face, at the top of the room. States from
   `sceneState`: idle breathes slowly (Light and Still hold still);
   reaching tightens; each new tool event flares one ember; answering
   loosens as text streams; complete settles; failed slackens and dims
   while the existing recovery panel shows. The status line under it
   uses `runeMessageForActivity` and the world's status copy; phases
   only. Screenshots of every state at both sizes.

6. **Scene events from the chat. (flash)** Wiring with tests, no drawing.
   - `hooks/useChatController.ts`: `toDisplayMessage` keeps
     `created_at`; `DisplayMessage` gains `createdAt?: string`; local
     messages get the current time. Tests.
   - Fill `sceneState` from `SpellSurfaceChatApp`: activity state,
     tool-event count (`chat.activity.length`), quality level.
   - Citation events: when a `chapter-reference-knot` appears in a
     Weaver message (streaming or completed), emit one event with the
     knot's screen position and a stable id; never twice for the same
     knot; none for messages loaded from history. Tests with jsdom
     positions mocked.
   - Scroll-back: a scroll-back amount from 0 (at the latest message) to
     1 (far up), from the transcript's scroll position, smoothed;
     auto-scroll to the bottom only when the reader is already at the
     bottom. Tests.
   - Day dividers between messages from different days, with
     reader-friendly labels ("today", "yesterday", the weekday within a
     week as "last tuesday", then a date); no chapter numbers. Tests,
     including messages without a time.
   - The "back to now" pill: shows when the scroll-back amount passes a
     threshold, scrolls to the latest message on tap, hides at the
     bottom. Plain styling only; Claude styles it in slice 7. Tests.
   - Floor 1, 2. Ready for Claude's review.

7. **Citation threads and scrolling back. (claude)** Show a sample
   first. Citation: a gold thread draws from the knot to a gold star,
   holds, then fades (GSAP timeline inside `useGSAP`); at most three at
   once; on Still none draws and the knot only glows. Scroll-back: the
   thread shader runs backwards with the scroll-back amount, with faint
   silver streaks, and forward again on the way down; the pill and day
   dividers styled to the room. Screenshots of a citation and of
   scrolled back, both sizes.

8. **Phone pass and budgets. (flash)**
   - `scripts/scene_fps.mjs`: drives Chrome over CDP against the fake
     server, measures frames per second for Full at 1440x900 and Light at
     390x844 with 4x CPU slowdown (a reaching-then-answering turn and a
     scroll-back), and counts frames rendered over 5 idle seconds on
     Light and Still. Prints a table; exits 1 when over budget.
   - Run floor 4 and 5. If over budget, tune only numeric knobs
     (thread count, pixel-ratio cap, bloom resolution, star count) and
     record each change and its effect. If the fix would change how it
     looks beyond those knobs, stop and hand to Claude.
   - Run the full screenshot set (floor 6) and record it.
   - Ready for Claude's review.

9. **Switch over. (flash)**
   - Make the new room the default; remove the `?face` switch.
   - Delete `components/SpellBackground.tsx`,
     `components/SpellweaveBackdrop.tsx`, `components/SpellweaveField.tsx`,
     `components/SpellSurfaceSoulSea.tsx`, `lib/spellGeometry.ts`,
     `styles/spellweave.css`, and every test that only pinned them; keep
     `lib/spellRenderProfile.ts` (used by `weaver/quality.ts`). Before
     deleting a file, grep for its imports (`ThemeLab.tsx` and the
     Settings Soul Sea control may use some); if anything other than the
     deleted set imports it, stop and hand to Claude.
   - `npm run build` to refresh `src/weaver/web/dist/`.
   - Full floor 1 to 8. Ready for Claude's review.

10. **Close. (claude)** Review the whole plan's diff, run the floor,
    record measured budget (tokens per slice from each harness, DeepSeek
    cost), screenshots for the owner, the owner's decision in
    `decision.md`. Update `HANDOFF.md`, `TODO_future.md` and the index.
    Next: Plan 037.1 is drafted from its discussion doc.
