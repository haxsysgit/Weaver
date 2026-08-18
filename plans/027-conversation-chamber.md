# Plan 027: Conversation chamber

> **Executor instructions:** Rebuild the live conversation as a responsive
> Spellweave chamber, using the Plan 024 owner-approved prototype and the Plan
> 025 visual primitives. Keep message text safe, keep the DeepSeek key in the
> browser, and prove each behavior with a failing test before changing the UI.

## Status

- **Tooling:** root `npm` scripts for TypeScript, Vite, and Vitest; repo
  commands through `uv` for the Python regression floor; browser responsive
  mode and owner-held phones for visual evidence.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plans 022, 024, 025, and 026 closed. Plan 024 supplies the accepted
  phone and desktop composition. Plan 025 supplies the sharp Spellweave engine,
  motion events, tokens, and shared visual primitives. Plan 026 must close first
  because it edits the same app shell, composer handoff, and style files.
  Plan 023 is not a dependency; Plan 028 joins its metadata contract to this
  accepted shell.
- **Priority:** P1. This is the surface the reader spends most of their time in.
- **Effort:** L.
- **Risk:** High. Streaming state, readable long answers, safe Markdown, key
  privacy, phone keyboard behavior, and the desktop composition all meet here.
- **Budget:** about 45k to 65k agent-context tokens for one executor and one
  independent reviewer, estimated $0.45 to $2.00 depending on the executor.
  Product execution is fake-only with $0 DeepSeek test spend. No live model
  call, real key, or deployment is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) Weaver replies read like inscriptions woven into the chamber:
   pale editorial text on the dark surface, one thin silver thread, and a small
   woven seal. Large assistant reply cards are removed.
2. (2026-08-18) Owner messages remain compact black-glass shards aligned right.
   They keep conversational orientation without turning the page into two sets
   of chat bubbles.
3. (2026-08-18) The composer is the strongest physical object on the screen:
   polished black wood, a fine silver inner edge, 16px or 17px input text,
   controls at least 48px, and a needle or knot send mark.
4. (2026-08-18) The active Edition and spoiler boundary stay visible above the
   composer. For this plan the only Edition is Shadow Slave.
5. (2026-08-18) The browser-local DeepSeek state is stated honestly as bound or
   unbound. Stored, disabled, and missing states come from `identity.ts`; the UI
   never claims that a key was validated.
6. (2026-08-18) Motion belongs to an event. Composer focus draws threads inward,
   send carries the owner shard into the transcript, streaming extends the
   reply spine, completion seals it, and failure uses restrained corruption
   crimson. Reduced motion settles every event immediately.
7. (2026-08-18) The approved mobile board also needs a real desktop
   composition. Each production surface is reviewed at 320 x 568, 360 x 800,
   390 x 844, 412 x 915, and 1440 x 900, plus the Redmi Note 14 at its measured
   CSS viewport, before it can close.
8. (2026-08-18) Weaver's interface may whisper like the Spell. The assistant
   still talks like a friend who knows the novel, with no forced archaic
   roleplay added by this plan.

## Scope

- Read the accepted Plan 024 conversation scene and Plan 025 component
  contracts before editing production code.
- Rework Weaver and owner message markup in
  `src/weaver/web/frontend/components/Message.tsx` and its styles in
  `src/weaver/web/frontend/styles/app.css` and
  `src/weaver/web/frontend/styles/spell-surface-lab.css`.
- Add `src/weaver/web/frontend/components/Message.test.tsx` for role structure,
  streaming state, actions, chapter knots, and safe text rendering.
- Extend `src/weaver/web/frontend/lib/markdown.ts`,
  `src/weaver/web/frontend/components/Markdown.tsx`, and
  `src/weaver/web/frontend/lib/markdown.test.ts` only as needed to render a
  model-visible `chapter 709` or `ch. 709` label as a compact reference knot.
  The knot repeats the visible claim. It never marks the chapter as verified,
  invents a link, or exposes a private passage handle.
- Rework `src/weaver/web/frontend/components/Composer.tsx` and
  `src/weaver/web/frontend/components/Composer.test.tsx` into the accepted
  black-wood binding point, including the active Edition, reader chapter,
  spoiler mode, and honest key state.
- Derive the key state in
  `src/weaver/web/frontend/components/SpellSurfaceChatApp.tsx` from
  `getApiKey()` and `isApiKeyDisabled()` in
  `src/weaver/web/frontend/lib/identity.ts`. A stored and enabled key is bound;
  a missing or disabled key is unbound. Key material never enters component
  props, DOM text, logs, snapshots, or server state.
- Tie `idle`, `focused`, `sending`, `streaming`, `completed`, and `failed`
  chamber states to the accepted Plan 025 background-event interface. Extend
  `src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx` to prove
  transitions and cleanup.
- Keep copy, quote, regenerate, cancel, retry, selection quoting, transcript
  restoration, auto-scroll, and software-keyboard behavior working.
- Record public-safe visual observations in
  `deliverables/027-conversation-chamber/results.md`. Keep screenshots and
  recordings under `private/design-evidence/027/`.

## Out of scope

- Conversation metadata routes, schemas, or persistence. Plan 023 owns them.
- The full-screen mobile archive and desktop archive controls. Plan 028 owns
  them.
- The first-run rite, its mask, or its key-binding sequence. Plan 026 owns them.
- A second Edition, book switcher, LOTM styling, accounts, billing, pooled keys,
  or server-side key state.
- Changes to model prompts, retrieval, answer behavior, private reading data,
  `novels/`, `.weaver/`, `config.toml`, or `.env`.
- Treating a styled chapter label as proof. Canon confidence still comes from
  Weaver's reading and answer evidence, not decoration.

## Deterministic proof / verification floor

1. `npm test` passes from the repository root. New tests cover reply spine
   markup, owner shards, chapter-knot parsing, composer context, bound and
   unbound key labels, send, stream, complete, failure, retry, and reduced
   motion states.
2. `npm run build` passes and writes the shipping bundle to
   `src/weaver/web/dist/`.
3. `uv run pytest` passes with no backend regression.
4. Markdown safety tests prove raw HTML remains text, unsafe URL schemes remain
   text, and no `dangerouslySetInnerHTML` path is added.
5. Browser evidence covers the four mobile matrix sizes and 1440 x 900 with an empty
   thread, long active thread, streaming reply, failed reply, 200 percent text
   zoom, software keyboard, and reduced motion.
6. Touch controls measure at least 48px on phone. Composer input text is at
   least 16px. Long code blocks, lists, quotes, links, and 2,000-word replies
   remain readable without horizontal page overflow.
7. The owner reviews the phone and desktop chamber. Passing commands cannot
   accept the visual result.

## STOP conditions

- If any of Plans 022, 024, 025, or 026 is not closed, STOP. This plan consumes
  their accepted contracts and shares frontend files with Plans 025 and 026.
  Plan 023 may remain unfinished because Plan 028 owns metadata integration.
- If the accepted Plan 024 conversation scene cannot map to the production
  message and composer boundaries, STOP and show the owner the conflict before
  changing those boundaries.
- If reference knots need hidden source handles, chapter text, or a backend
  response-schema change, STOP. Keep them as decoration of model-visible
  chapter labels or defer them.
- If any approach turns model text into HTML, weakens safe-link checks, exposes
  a private passage, or places a DeepSeek key in rendered state, STOP and
  remove it.
- If the motion needs a second background engine or new timing language outside
  Plan 025, STOP and extend the accepted engine contract first.
- If the Redmi Note 14 usability pass or the 1440 x 900 desktop review is
  unavailable, STOP at the owner visual gate.
- If the cosmic background harms reading contrast, selection, scrolling, or
  phone frame stability, record the failure and reduce foreground motion before
  asking for review.

## Slices

1. **Plan and admit**
   - Review this doc, its dependency chain, budget, and `learning.md` with the
     owner.
   - Admit Plan 027 only after Plan 026 closes and the owner chooses it as the
     next plan.
   - Audit staged paths, then commit the admission records with
     `Plan 027: admit conversation chamber`.

2. **Map the accepted scene to the live component tree**
   - Read the Plan 024 owner decision and the final Plan 025 and 026 results.
   - Inspect `Message.tsx`, `Markdown.tsx`, `markdown.ts`, `Composer.tsx`,
     `SpellSurfaceChatApp.tsx`, `useChatController.ts`, and both production
     style files.
   - Write `deliverables/027-conversation-chamber/conversation-contract.md`
     with the exact DOM roles, visual states, context labels, responsive
     compositions, and background events this plan will implement.
   - STOP and show the owner any mismatch with the accepted prototype.

3. **Prove the inscription and shard structure first**
   - Create failing tests in `Message.test.tsx` for the Weaver seal and spine,
     the owner shard, streaming state, visible actions, and raw-HTML safety.
   - Add failing parser tests for `chapter 709`, `ch. 709`, ordinary numbers,
     and unsafe links in `markdown.test.ts`.
   - Run `npm test` and record the expected failures.
   - Make the smallest changes to `Message.tsx`, `Markdown.tsx`, and
     `markdown.ts` that pass. Keep strings as React text nodes.
   - Run `npm test` again, audit the staged diff, and commit only these files
     with `Plan 027: weave replies into the chamber`.

4. **Prove the binding-point composer**
   - Add failing `Composer.test.tsx` cases for Shadow Slave, reader chapter,
     spoiler protection, bound and unbound labels, 48px action hooks, Enter,
     Shift+Enter, cancel, and a disabled send state during a turn.
   - Add app-level tests proving the component receives status derived from
     browser storage without receiving the key value.
   - Run `npm test` and record the failure.
   - Implement the context strip and black-wood composer markup. Keep key reads
     inside `SpellSurfaceChatApp.tsx`; pass only a status enum into `Composer`.
   - Run `npm test`, audit staged files, and commit with
     `Plan 027: bind the chamber composer`.

5. **Connect conversation events to the Spellweave**
   - Add failing `SpellSurfaceChatApp.test.tsx` cases for focus, send,
     streaming delta, completion, failure, retry, cancellation, and cleanup
     after unmount.
   - Run `npm test` and record the expected failure.
   - Map those states to the Plan 025 event interface. Reuse its tokens and
     primitives. Add no free-running foreground loop.
   - Add reduced-motion assertions that events settle without delayed timers.
   - Run `npm test`, audit staged files, and commit with
     `Plan 027: connect chat events to the Spellweave`.

6. **Compose phone and desktop layouts**
   - Implement the accepted responsive spacing in `app.css` and
     `spell-surface-lab.css`.
   - Serve the app with `uv run weaver web --fake --host 0.0.0.0 --port 8027`.
   - Capture each required viewport under `private/design-evidence/027/` and
     record failed observations before repairs.
   - Check the software keyboard, safe areas, 200 percent text zoom, touch
     sizes, long replies, selection quoting, code blocks, and no horizontal
     page overflow.
   - Ask the owner to review phone and desktop before closure.

7. **Verify, inspect, review, and close**
   - Run the full verification floor and rebuild committed `dist/`.
   - Use an independent reviewer to inspect behavior, Markdown safety, key
     privacy, responsive evidence, and the accepted Plan 024 match. The
     reviewer records findings in `review-ledger.md` and cannot accept the UI.
   - Repair findings with the same test-first cycle. Each repair commit starts
     `Plan 027:`.
   - Audit staged files for keys, private chapters, chats, screenshots, and
     unrelated drift.
   - Record the owner's dated accept or reject reason in `decision.md`, then
     commit closure records with `Plan 027: close conversation chamber`.
