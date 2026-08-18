# Plan 028: Thread Archive

> **Executor instructions:** Replace the temporary chat drawer with the real
> Thread Archive across phone and desktop. Consume Plan 023's server metadata
> contract exactly, remove browser-only rename/archive/pin state, and write a
> failing test for each action and focus rule before changing the component.

## Status

- **Tooling:** root `npm` scripts for TypeScript, Vite, and Vitest; repo
  commands through `uv` for backend regressions; browser responsive mode and
  owner-held phones for interaction evidence.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plan 023 closed with the accepted PATCH route and
  `ConversationSummary` shape, and Plan 027 closed with the final conversation
  shell. Plans 024 and 025 also supply the owner-approved archive composition
  and Spellweave primitives. Plan 028 adds the typed browser client method.
- **Priority:** P1. Rename, archive, and pin currently disappear after reload,
  and the phone drawer is still a narrow desktop rail.
- **Effort:** L.
- **Risk:** High. This plan changes persistent thread actions, active-thread
  recovery, destructive confirmation, phone focus, and desktop navigation in
  one shared component.
- **Budget:** about 40k to 60k agent-context tokens for one executor and one
  independent reviewer, estimated $0.40 to $1.80 depending on the executor.
  Product execution is fake-only with $0 DeepSeek test spend. No real key,
  live model call, or deployment is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) Mobile conversations open as a full-screen Thread Archive.
   Rows are large, reachable, and designed for one-handed use. The old narrow
   drawer and blur-scrim model are removed.
2. (2026-08-18) Desktop gets the same archive component as a persistent,
   collapsible rail with a wide-screen composition. Desktop cannot wait for a
   later cleanup plan.
3. (2026-08-18) Rename, archive, restore, and pin are server-backed metadata
   scoped by device. Delete remains the existing server-backed destructive
   action.
4. (2026-08-18) Plan 028 adds one typed client method over Plan 023's accepted
   server contract:
   `updateConversation(conversationId, patch)`, where the patch may contain
   `title`, `archived`, or `pinned`. It returns the updated conversation.
5. (2026-08-18) `edition_id` is returned in each conversation summary and is
   read-only in the client. New conversations use `shadow-slave` on the server.
6. (2026-08-18) Shadow Slave is the only usable Edition. The component keeps a
   future Edition seam in its data shape. Lord of the Mysteries is the planned
   second Edition and Kill the Sun the planned third, but neither appears as a
   disabled or fake switcher control.
7. (2026-08-18) Browser evidence covers 320 x 568, 360 x 800, 390 x 844,
   412 x 915, and 1440 x 900. The Redmi Note 14 usability pass records its
   actual CSS viewport and covers touch, safe areas, keyboard rename, focus
   return, and archive scrolling.

## Scope

- Consume the Plan 023 shape in
  `src/weaver/web/frontend/lib/chatApi.ts`: `ConversationSummary` includes
  `archived`, `pinned`, and read-only `edition_id`; `ChatApi` includes
  `updateConversation(conversationId, patch)`; delete stays unchanged.
- Add controller-level metadata updates and active-thread recovery in
  `src/weaver/web/frontend/hooks/useChatController.ts` with tests in a new
  `src/weaver/web/frontend/hooks/useChatController.test.tsx`.
- Replace `src/weaver/web/frontend/components/SpellSurfaceRail.tsx` with
  `src/weaver/web/frontend/components/ThreadArchive.tsx` and create
  `src/weaver/web/frontend/components/ThreadArchive.test.tsx`. Update imports
  in `SpellSurfaceChatApp.tsx` and `ThemeLab.tsx`.
- Remove `archivedIds`, `pinnedIds`, and `threadNames` from
  `SpellSurfaceChatApp.tsx`. Every rendered state comes from the server-returned
  `ConversationSummary` list.
- Implement active and archived views, pinned ordering, date grouping, rename,
  archive, restore, pin, unpin, delete confirmation, new thread, thread select,
  empty states, pending states, and visible failure states.
- When the active thread is archived or deleted, move to the newest active
  thread. If none remains, create one new Shadow Slave thread through the
  existing API. Never leave the transcript pointing at a hidden thread.
- On mobile, render the archive as a full-viewport modal surface with safe-area
  padding, body scroll lock, trapped focus, Escape close, close-button focus on
  entry, and opener focus restoration on exit. The chat surface stays inert
  while the archive is open.
- On desktop, keep the archive persistent and collapsible. Collapse moves focus
  to the open control; reopening returns focus inside the archive.
- Update `src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx` and
  `src/weaver/web/frontend/components/ThemeLab.test.tsx` for the new component
  and the removal of fake novel controls.
- Implement the accepted archive composition in
  `src/weaver/web/frontend/styles/app.css` and
  `src/weaver/web/frontend/styles/spell-surface-lab.css`, using Plan 025 tokens
  and background primitives.
- Record public-safe observations in
  `deliverables/028-thread-archive/results.md`. Keep captures under
  `private/design-evidence/028/`.

## Out of scope

- Any new backend route, schema, migration, or metadata field. Plan 023 owns the
  server contract. Plan 028 only consumes it.
- Client writes to `edition_id`, a book switcher, a second Edition, LOTM visual
  work, Lord of the Mysteries or Kill the Sun visual work, or placeholder novel
  controls.
- Accounts, cross-device sync, cloud identity, import/export, search, folders,
  tags, or bulk actions.
- Undo after permanent delete. Archive and restore are the recoverable path;
  delete keeps an explicit confirmation.
- Changes to the initiation rite, reply composition, composer, model prompts,
  retrieval, private reading data, `novels/`, `.weaver/`, configuration, or
  secrets.

## Deterministic proof / verification floor

1. `npm test` passes from the repository root. New tests cover server-returned
   rename, archive, restore, pin, unpin, delete, pending and failure states,
   ordering, active-thread recovery, and reload persistence.
2. `npm run build` passes and writes the shipping bundle to
   `src/weaver/web/dist/`.
3. `uv run pytest` passes, including Plan 023's route, device-scope, and restart
   persistence tests.
4. A component test proves no unsupported-novel label, disabled Edition button,
   or client-side metadata store remains in the archive.
5. Mobile tests prove full-viewport mode, main-content inert state, focus trap,
   Escape close, opener focus restoration, and body scroll restoration.
6. Browser evidence covers the four mobile matrix sizes and 1440 x 900. It includes
   rename with the software keyboard, archive then restore, pin ordering,
   delete confirmation, a failed patch, long archive scrolling, safe areas,
   200 percent text zoom, and reduced motion.
7. A full browser restart proves rename, archived state, pin, active thread,
   and Shadow Slave `edition_id` return from the server instead of temporary
   React state.
8. The owner reviews the phone and desktop archive. Passing commands cannot
   accept the visual result.

## STOP conditions

- If Plan 023 or Plan 027 is open, STOP. This plan depends on their accepted
  API and app-shell contracts and edits the same frontend lane.
- If the Plan 023 client method or fields differ from the locked contract in
  this draft, STOP and reconcile the plans before writing archive code.
- If an archive behavior needs a new route, schema field, or client-written
  `edition_id`, STOP and return the need to Plan 023 or a later backend plan.
- If phone and desktop require separate data or action implementations, STOP.
  Both compositions must use one component and one metadata path.
- If archiving or deleting the active thread can strand the transcript, erase
  a second thread, or create more than one replacement, STOP and keep the
  failing test as evidence.
- If rename fires twice through Enter plus blur, a failed patch changes local
  state, or an action error disappears silently, STOP and repair before visual
  review.
- If the Redmi Note 14 usability pass or the desktop review is unavailable,
  STOP at the owner gate.
- If any private chat, key, chapter text, or screenshot enters a staged public
  file, STOP and remove it before continuing.

## Slices

1. **Plan and admit**
   - Review this doc, budget, Plan 023 contract, and `learning.md` with the
     owner.
   - Admit Plan 028 only after Plan 027 closes and the owner chooses it as the
     next plan.
   - Audit staged paths, then commit admission records with
     `Plan 028: admit Thread Archive`.

2. **Inspect the accepted contracts and remove guesswork**
   - Read Plan 023 results and route tests, Plan 024's accepted archive scene,
     Plan 025 primitives, and Plan 027's final app shell.
   - Inspect `chatApi.ts`, `useChatController.ts`, `SpellSurfaceRail.tsx`,
     `SpellSurfaceChatApp.tsx`, `ThemeLab.tsx`, and current tests.
   - Write `deliverables/028-thread-archive/archive-contract.md` with the exact
     server fields, action state machine, active-thread fallback, focus order,
     phone composition, and desktop composition.
   - STOP and show the owner any conflict before changing production code.

3. **Prove controller metadata behavior first**
   - Create failing tests in `useChatController.test.tsx` for a successful
     patch, failed patch, active archive, active delete, one replacement thread,
     and refresh after browser remount.
   - Run `npm test` and record the expected failures.
   - Add the smallest controller methods that call
     `api.updateConversation(conversationId, patch)`, replace the returned
     summary, and recover the active thread safely.
   - Run `npm test`, audit staged paths, and commit with
     `Plan 028: connect thread metadata to the archive`.

4. **Build the Thread Archive component test-first**
   - Create failing `ThreadArchive.test.tsx` cases for active and archived
     lists, pinned ordering, rename once, archive, restore, pin, unpin, delete
     confirmation, pending disable, inline error, and Shadow Slave-only Edition
     context.
   - Add failing mobile tests for focus entry, focus wrap, Escape, and focus
     return. Add desktop tests for collapse and reopen.
   - Run `npm test` and record the expected failures.
   - Create `ThreadArchive.tsx`, migrate imports, and remove
     `SpellSurfaceRail.tsx` only after every caller compiles.
   - Run `npm test`, audit staged paths, and commit with
     `Plan 028: build the responsive Thread Archive`.

5. **Replace temporary app state with server truth**
   - Add failing `SpellSurfaceChatApp.test.tsx` cases proving each control calls
     one patch, applies the server-returned summary, survives remount, and shows
     a failed action without changing the row.
   - Remove the local `Set` and `Map` metadata stores from
     `SpellSurfaceChatApp.tsx`.
   - Update Theme Lab fixtures to use the accepted conversation shape and
     remove every fake novel button and assertion.
   - Run `npm test`, audit staged paths, and commit with
     `Plan 028: make the server the source of thread state`.

6. **Compose full-screen phone and persistent desktop modes**
   - Implement the accepted layout in both production style files.
   - Reuse Plan 025 motion tokens for mantle-pull open and close states. Reduced
     motion switches state immediately.
   - Serve the app with `uv run weaver web --fake --host 0.0.0.0 --port 8028`.
   - Capture each required viewport under `private/design-evidence/028/` and
     record failed observations before repairs.
   - Run rename, archive, restore, pin, failure, delete, scroll, keyboard, safe
     area, zoom, focus, and browser-restart checks.
   - Ask the owner to review both phone and desktop modes.

7. **Verify, inspect, review, and close**
   - Run the full verification floor and rebuild committed `dist/`.
   - Use an independent reviewer to inspect API fidelity, device scope,
     destructive behavior, focus, responsive evidence, and fake-control
     removal. The reviewer records findings in `review-ledger.md` and cannot
     accept the UI.
   - Repair findings with failing tests first. Every repair commit starts
     `Plan 028:`.
   - Audit staged files for credentials, private chapters, chats, screenshots,
     unrelated drift, and client-side metadata remnants.
   - Record the owner's dated accept or reject reason in `decision.md`, then
     commit closure records with `Plan 028: close Thread Archive`.
