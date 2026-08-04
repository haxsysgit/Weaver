# Plan 013 results

## Status

React repair implemented and the mechanical gate passed. Independent review
found four issues, verified all four repairs, and returned PASS. The owner's
final decision remains pending.

Owner browser inspection then exposed one migration gap: a tab still controlled
by the deleted vanilla worker could render its cached HTML for one visit. Its
requests for the deleted `/static/` files returned 404 while the browser fetched
the new worker and React assets in the background. A red web test captured the
missing client navigation. Worker v4 now detects an older cache, removes it,
claims open tabs, and navigates them once to the React shell.

## Red pass

The first Vitest run failed with three missing-module errors for `ChatApp`,
`Composer`, and the Markdown parser. That proved the new tests described code
that did not exist yet. After implementation, one test run exposed missing
test cleanup between cases. The shared setup now cleans the DOM and browser
storage after every test.

Review-driven tests then produced two more intentional red states: the
HaxJobs-style product test exposed hardcoded Weaver copy and mark usage, and
the web tests rejected fixed asset names plus cache-first navigation. Both
turned green after the controller/product boundary and PWA repair.

## What changed

- Deleted the Textual UI, its CLI command, tests, and Python dependency.
- Deleted the vanilla web components, old template, old theme assets, and
  Node tests.
- Built a React 19 + Vite + TypeScript frontend under
  `src/weaver/web/frontend/`.
- Kept the Plan 011 backend API and SSE event contract unchanged.
- Split product configuration, HTTP adapter, reusable chat controller, safe
  Markdown, presentation components, brand-mark slot, and theme tokens for
  later Weaver and HaxJobs work.
- Replaced generic ChatGPT skeleton rows with actual conversations only.
- Replaced the generic hamburger and close marks with a custom fate-thread
  gate sigil that toggles the rail on desktop and the drawer on mobile.
- Kept the Plan 013 Shadow Slave palette and created a new mask-and-eye mark.
- Restored strict `style-src 'self'`; the React app uses built CSS and no
  inline style exception.
- Rewrote the live browser proof to use temporary state instead of the
  owner's conversation database.
- Included the built React shell in source and wheel packages, with hashed
  JS/CSS filenames.
- Made PWA navigation network-first so fake/live privacy copy cannot go stale,
  while preserving a fully precached first-visit offline shell.

## Browser observations

The built fake-mode app was inspected at 1440 by 900 and 390 by 844. The
desktop view can seal or unseal the conversation rail, centers the reading
column, and pins the composer. The phone view hides the rail behind the same
fate-thread control.

The live proof confirmed:

- React mounted from the production bundle;
- the crimson theme token resolved to `#ba3c35`;
- send disappeared exactly while stop was visible;
- the fake SSE reply completed and returned to send;
- regenerate appeared on the live reply and disappeared after a new weave;
- one active conversation id was the only browser-storage key;
- reload kept the active conversation;
- page height equalled viewport height during a long transcript while the
  transcript itself scrolled;
- the 390px mobile drawer opened;
- Chrome reported zero PWA installability errors.

The installed-worker proofs also confirmed:

- first visit, worker install, server shutdown, and reload still mounted React
  with the exact hashed JS and CSS;
- restarting the same origin from fake to live mode replaced the fake privacy
  line with the live DeepSeek line;
- `/api/` remains outside all service-worker responses.

## Verification

The required commands ran in order on 2026-08-04:

- `npm install && npm run build`: passed; 41 modules transformed, production
  JS 213.51 kB and CSS 18.33 kB before gzip.
- `uv run pytest -q`: 289 passed.
- `npx vitest run`: 9 passed across 3 files.
- `uv run ruff check src/weaver tests`: clean.
- `uv pip check`: 78 packages checked, all compatible.
- `uv run python scripts/web_live_proof.py --port 8790`: passed every browser
  assertion listed above and reported zero installability errors.
- `uv run python scripts/web_live_proof.py --port 8791 --live`: one explicit
  live UI turn passed in temporary state. The proof recorded a 441-character
  reply without printing its text, credentials, receipts, or reasoning.
- `uv run python scripts/web_live_proof.py --offline-shell --port 8792`:
  installed-worker offline reload passed with hashed JS and CSS.
- `uv run python scripts/web_live_proof.py --mode-switch --port 8793`:
  installed-worker fake-to-live privacy copy passed.
- `uv build --out-dir <temporary-directory>` plus a no-dependency temporary
  wheel install: index, manifest, mark, worker, and hashed JS/CSS were present.
  An initial attempt to import `weaver` in that no-dependency environment
  failed because `openai` was intentionally not installed; the corrected
  packaging-only smoke inspected the installed files without importing the
  application and passed.
- Post-inspection migration repair: 289 Python tests, 8 React tests, Ruff,
  dependency compatibility, offline first-install reload, and fake-to-live
  worker switching all passed again. The running server returned
  `weaver-shell-v4`.
- Sidebar follow-up: the new component test and fake browser proof confirmed
  desktop collapse/restore, the custom sigil, the 390px drawer, fixed viewport,
  one browser-storage key, and zero PWA installability errors.
