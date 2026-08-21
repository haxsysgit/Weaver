# Review Ledger

## Status

Independent review completed 2026-08-21. No source-level Plan 026 repair is
required before the owner decision. The rite is ready to close once the
executor records the final verification floor and the owner accepts it.

## Review boundary

- Reviewed the admitted plan, accepted learning record, results record, and
  every committed Plan 026 change from `01df278^` through `7be7a9b`.
- Inspected the four-act component, local key helper boundary, backdrop lazy
  boundary, service worker, static mask route, PWA files, changed tests, and
  committed production bundle.
- Opened the committed rite artwork. It is a self-contained, text-free,
  original mask-and-Spellweave scene; changed source does not import the
  supplied board, cover, private reference path, or novel text.
- Preserved unrelated worktree drift. No source, plan, or staging changes were
  made by this review.

## Findings and rechecks

1. **PASS — key privacy and honest binding.** The rite reads and writes only
   through `getApiKey()` and `setApiKey()`. It makes no request or validation
   call. The key field is masked by default, the visibility control is labelled,
   binding beads derive only from input length, and the storage-error path stays
   on the binding act. No real-looking credential was found in changed frontend
   code or fixtures.

2. **PASS — production cleanup and replay state.** The temporary review-only
   fake appraisal and no-storage action were removed for the owner-approved
   1.1.0 release. Replay remains available and preserves an existing first-run
   decision when the reader exits it.

3. **PASS — accessibility and interaction.** The full-screen rite is a modal
   dialog, makes the hidden chat inert, restores prior focus, traps Tab,
   records Escape as deferral, uses 44px-or-larger actions, 17px key text,
   safe-area padding, and a reduced-motion path that reaches the same outcome.
   Decorative raster art is `aria-hidden`, non-draggable, and pointer
   transparent. The actual chat is mounted once and its distant renderer stays
   unmounted until the reveal begins.

4. **PASS — asset and offline integration.** The original 512px mask mark is
   served by the owner-approved static WebP route, is used by the manifest and
   service worker shell, and has matching source, public, and built hashes.
   `git diff --check 01df278^..HEAD` passed. No imported private reference,
   cover-art URL, novel text, or data-URI asset was found in changed tracked
   source.

5. **PASS — focused regression recheck.**

   ```text
   npm test -- --run \
     src/weaver/web/frontend/lib/firstNightmare.test.ts \
     src/weaver/web/frontend/lib/identity.test.ts \
     src/weaver/web/frontend/components/FirstNightmareSetup.test.tsx \
     src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx \
     src/weaver/web/frontend/components/Composer.test.tsx \
     src/weaver/web/frontend/components/SpellweaveBackdrop.test.tsx
   ```

   initially passed **36/36 tests in 6 files**. After the release cleanup, the
   updated focused suite passed **35/35**; the removed preview test accounts for
   the one-test difference. The final root floor is recorded in `results.md`.

6. **RESOLVED RELEASE CONDITION — temporary review UI removed.** The owner
   selected removal before release. The no-storage preview and its random
   appraisal no longer ship; the retained replay path is covered by the focused
   regression suite.

7. **RESOLVED CLOSEOUT PAPERWORK.** The final floor, owner decision, plan state,
   and plan index are recorded in the closure commit.

## Reproduction commands

```text
npm run build
npm test
uv run pytest
git diff --check
```

For the release-only condition, open Soul Sea settings, choose `Replay First
Nightmare`, move to binding, choose `Preview without storing a key`, and confirm
that the fake appraisal completes without changing `weaver.first-nightmare` or
`weaver_api_key` in local storage.
