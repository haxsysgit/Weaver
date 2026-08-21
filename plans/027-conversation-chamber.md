# Plan 027: Reader settings, Thread Archive, and integration trial

> **Executor instructions:** Build the reader's daily Shadow Slave experience
> as one continuous full-stack plan. Preserve the completed transparent
> Conversation Chamber, rebuild reader settings as a proper Soul Sea appraisal,
> replace the temporary rail with the persistent Thread Archive, then prove the
> complete fake-mode journey on phones and desktop. Repair the backend paths
> these surfaces require, with focused Python proof before integration. Stop at
> each owner checkpoint. No live model request, real key, or deployment belongs
> here.

## Status

- **Tooling:** root `npm` scripts for TypeScript, Vite, and Vitest; `uv` for
  the Python floor and fake web server; browser developer tools and owner-held
  phones for evidence.
- **State:** admitted 2026-08-21 by owner direction.
- **Depends on:** Plans 022, 023, 025, and 026 closed. Plan 024 is a rejected
  alternate prototype and is reference for lessons only, never a visual source
  of truth.
- **Priority:** P1. This is the reader's everyday conversation and thread
  management surface.
- **Effort:** XL.
- **Risk:** High. Streaming readability, safe Markdown, persistent metadata,
  destructive actions, keyboard behavior, motion, phone use, and desktop all
  meet in one shared app shell.
- **Budget:** about 120k to 175k agent-context tokens for one executor and two
  independent reviews, estimated $1.20 to $5.25. Product execution is
  fake-only, with $0 DeepSeek spend. No live provider call or deployment.

## Owner direction (locked decisions)

1. (2026-08-18) Weaver replies are inscriptions on the living Spellweave:
   pale editorial text, a thin silver response spine, and a small unframed
   Weaver mark. Large assistant cards are removed.
2. (2026-08-21) Reader messages and Weaver replies are transparent rune text
   written directly over the Spellweave. They have no card background, visible
   border, glass panel, or enclosing frame. Reader text stays aligned right;
   Weaver text stays anchored to its thin unframed response thread.
3. (2026-08-18) The composer is a black-wood binding point with a fine silver
   inner edge, at least 16px input text, 48px phone controls, and a knot or
   needle send mark.
4. (2026-08-21) Shadow Slave is the only current Edition. The composer omits
   the redundant Edition and spoiler-boundary label. Honest bound or unbound
   key state remains visible. No book switcher or fake future controls.
5. (2026-08-18) Motion belongs to reader action: focus draws threads inward,
   send carries an owner shard, streaming extends the response spine,
   completion seals it, and failure uses restrained corruption crimson.
   Reduced motion reaches each resulting state immediately.
6. (2026-08-18) The Thread Archive is one component: full-screen and
   one-handed on phones, persistent and collapsible on desktop. It exposes a
   labelled pinned section, active threads, and a clearly distinct archived
   view.
7. (2026-08-18) Rename, pin, archive, restore, and delete use Plan 023's
   server-backed, device-scoped conversation metadata. The browser never keeps
   a competing pin, archive, or title store.
8. (2026-08-21) Phone support is broad. Test 320 x 568, 360 x 800, 390 x 844,
   and 412 x 915 browser viewports plus every owner-held phone available during
   review, in portrait and landscape when supported. No single handset is the
   release gate. Desktop has a 1440 x 900 composition.
9. (2026-08-21) Build from the accepted v1 UI and the Plan 025 Spellweave,
   rather than recreating the rejected prototype. The experience should feel
   alive, clear, and familiar to existing readers.
10. (2026-08-21) Turn failures use distinct safe states and recovery actions.
    The frontend distinguishes connection loss, an unavailable model or key,
    a busy or missing thread, interruption, execution limit, saved-state
    failure, and an unknown failure without exposing raw provider details.
11. (2026-08-21) The completed Conversation Chamber becomes the foundation for
    the remaining plan. Checkpoint one is the Soul Sea Reader Appraisal:
    familiar settings behavior, a mobile index and detail flow, desktop thread
    navigation, reader position joined with spoiler protection, a fixed Hidden
    Thread Edition identity, accurate privacy copy, and First Nightmare replay
    inside its own section.
12. (2026-08-21) The owner accepted the Soul Sea Reader Appraisal after the
    visible Soul Sea, clean-close, and unframed close-control repairs.
13. (2026-08-21) Plan 027 is full-stack. The owner authorized backend and
    frontend changes required to complete its accepted settings, Archive, and
    integration checkpoints. The first dependency repair removes the hidden
    12-conversation listing cap so the Archive can show every device-owned
    thread.

## Scope

- **Checkpoint one, Soul Sea Reader Appraisal:** rebuild the existing settings
  modal as a full-screen phone settings flow and a threaded desktop appraisal.
  Join chapter position and spoiler protection, separate reading tier from
  model choice, keep the Shadow Slave Edition identity fixed, retain useful
  visual controls, correct privacy language, and move First Nightmare replay
  into its own section.
- **Checkpoint two, Thread Archive:** consume Plan 023's
  `updateConversation(conversationId, patch)` contract, add controller-level
  metadata updates, replace `SpellSurfaceRail.tsx` with `ThreadArchive.tsx`,
  and remove local pin/archive/title state. Implement pin, rename, archive,
  restore, delete confirmation, action failure, active-thread recovery, focus,
  safe areas, scroll lock, and desktop collapse. Repair conversation listing
  so every device-owned active, pinned, and archived thread reaches the UI.
- **Checkpoint three, Integration Trial:** add a deterministic fake API journey
  that survives remount. Verify the rite handoff, conversation states, safe
  Markdown, archive actions, reload, browser restart, service worker, motion,
  performance, accessibility, and responsive compositions.
- Record public-safe results in `deliverables/027-conversation-chamber/` and
  private captures, traces, and recordings under `private/design-evidence/027/`.
- Rebuild and commit `src/weaver/web/dist/` whenever the root build changes it.

## Out of scope

- Backend work unrelated to the settings, conversation metadata, Thread
  Archive, or deterministic integration journey owned by this plan.
- New persistence concepts beyond Plan 023's existing title, archive, pin,
  Edition, device ownership, and hard-delete contract.
- A new Edition, LOTM or Kill the Sun presentation, accounts, cloud sync,
  billing, search, folders, tags, or bulk actions.
- Changes to model prompts, retrieval, answer quality, private source material,
  `novels/`, `.weaver/`, `config.toml`, or `.env`.
- Live DeepSeek calls, real key entry, deployment, release, AWS, Tailscale, CI
  secrets, domains, or production state.
- Treating a chapter-reference knot as canonical proof. It decorates a visible
  label; the underlying answer still needs Weaver's reading evidence.

## Deterministic proof / verification floor

1. `npm test` passes from the repository root. It includes settings navigation,
   reader state, dirty-state protection, message structure, Markdown safety,
   bound and unbound status, streaming, failure and retry, archive actions,
   restart persistence, and the full fake integration journey.
2. `npm run build` passes and refreshes committed `src/weaver/web/dist/`.
3. `uv run pytest` passes in full, including Plan 023 device-scope and
   persistence coverage.
4. Markdown stays React text. Raw HTML and unsafe URLs remain text; no
   `dangerouslySetInnerHTML` path is added.
5. Browser evidence covers every stated viewport, available owner phone, and
   1440 x 900 desktop. It includes an empty thread, long reply, streaming,
   failure, keyboard, safe area, zoom, reduced motion, archive actions, reload,
   and browser restart.
6. Phone controls are at least 48px, composer input is at least 16px, and long
   text, code blocks, lists, quotes, and links remain readable without page
   overflow.
7. Default and reduced-motion performance stay within the Plan 025 recorded
   profiles during idle, focus, send, streaming, completion, failure, and
   archive scrolling.
8. Two independent reviews pass: behavior/privacy/persistence, then
   visual/mobile/accessibility. The owner gives the final accept or reject
   decision.

## STOP conditions

- If Plans 022, 023, 025, or 026 are no longer closed, STOP.
- If a requested result needs private source text, key exposure, rendered
  model HTML, a second background engine, or backend work outside this plan's
  settings, conversation, Archive, and integration paths, STOP and bring the
  conflict to the owner.
- If a chamber checkpoint is rejected, repair it before beginning Archive work.
  If Archive is rejected, repair it before the integration trial.
- If motion, depth, or foreground effects harm reading contrast, selection,
  scroll stability, keyboard use, or phone frame stability, record the failure
  and simplify the affected effect.
- If fake mode reaches a live provider, requests a real key, exposes a private
  chat or chapter, loses device scope, or stages unrelated drift, STOP and
  repair the boundary first.
- If no owner phone is available for checkpoint three, complete browser evidence
  and stop at the real-device review gate. A single named device is never a
  substitute for broad phone support.

## Slices

1. **Plan and admit**
   - Review this combined contract, budget, and three checkpoints with the
     owner. Supersede drafted Plans 028 and 029 in the roadmap.
   - Commit admission records with `Plan 027: admit conversation and archive trial`.

2. **Checkpoint one: Soul Sea Reader Appraisal**
   - Write `settings-contract.md` from the accepted Reader Appraisal concept
     and inspect every existing preference and save path.
   - Add failing tests for the mobile index and detail flow, desktop navigation,
     chapter and volume derivation, spoiler protection, dirty-state protection,
     accurate privacy copy, key privacy, and First Nightmare replay.
   - Build from the existing Soul Sea and Hidden Thread materials, capture
     browser evidence, run the focused floor, and ask the owner to review phone
     and desktop.
   - STOP here for owner confirmation before Archive work.

3. **Checkpoint two: Thread Archive**
   - Write `archive-contract.md` from the Plan 023 API shape and current v1
     rail behavior.
   - Repair the hidden 12-conversation listing cap with a greater-than-12
     device-owned backend regression before building the Archive UI.
   - Add failing controller and component tests for pin, rename, archive,
     restore, delete confirmation, failure, ordering, focus, and restart.
   - Build the responsive Archive, remove temporary client metadata stores,
     capture browser evidence, run the focused floor, and ask the owner to
     review phone and desktop.
   - STOP here for owner confirmation before integration work.

4. **Checkpoint three: Integration and owner decision**
   - Add the deterministic full fake-mode journey and repair only proven
     integration defects with regression tests first.
   - Run browser, owner-phone, desktop, performance, accessibility,
     service-worker, reload, and restart trials. Keep evidence private.
   - Run the complete verification floor and two independent reviews.
   - Present results, deviations, and staged-file audit to the owner. Stop for
     the dated accept or reject decision, then record and commit closure with
     `Plan 027: close conversation and archive trial`.
