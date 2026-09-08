# Results

## Status

Accepted and closed 2026-09-08. Released as Weaver v1.2.1 after the full
verification floor and independent review passed.

## Root causes repaired

- The empty-thread guard returned failure, so mobile New Weave left the drawer
  open and gave no feedback. It now returns a successful UI result without
  creating another empty server conversation.
- The mobile surface closed the Archive even when a thread load failed or was
  blocked by an active turn. It now closes only after selection succeeds.
- Thread loads had no safe error boundary. Missing, conflicting, and unexpected
  recall failures now stay inside the Archive with reader-safe copy.
- Startup did not share the controller's load ordering. Startup and later
  selections now use the same operation guard, so stale startup work cannot
  replace a newer choice.
- The app UI painted alongside the backdrop. The existing Spellweave now comes
  first in DOM and visual reveal order, followed by the unchanged approved UI.
- The First Nightmare focus trap restored startup-era `inert` attributes after
  startup had completed. The parent surface now owns those accessibility states,
  so closing the rite reveals the current app state instead of a stale snapshot.
- Settings waited for the server preference read before opening. It now opens
  immediately from local state, then applies the saved reader fields when the
  request returns. Hidden Soul Sea and Spellweave motion pauses while Settings
  covers the conversation.
- The installed PWA now uses the same void color for its manifest, page theme,
  and standalone window. Its full-screen layers size from their containing app
  window instead of stacking another viewport height.

## Red and repair evidence

- The first focused run failed four new regressions: delayed mobile recall,
  failed recall, startup state, and empty New Weave.
- The first build exposed a test-only TypeScript null-narrowing error. An
  explicit guard repaired it.
- The first full frontend run exposed the old empty-thread expectation. The
  owner confirmed the amended contract: reuse the empty thread, close the
  mobile Archive, show rune feedback, and focus the composer.
- The first real-browser pass found that focus ran before the drawer's inert
  state settled. Moving focus to the post-close render boundary repaired it.

## Verification

- `npm run build`: PASS. Vite transformed 475 modules and refreshed committed
  `src/weaver/web/dist/`.
- `npm test`: PASS, 21 files and 123 tests on the final checkout.
- `uv run pytest`: PASS, 544 tests in 428.67 seconds on the final checkout.
- Focused New Weave contract: PASS, 3 tests across the production and legacy
  chat surfaces.
- Production component regression: PASS, 30 tests.
- `git diff --check`: PASS.

## Deferred Star Web and composer repair

- The 519 KB Three.js chunk no longer mounts while conversations are loading.
  The ready conversation chamber appears on the dark void first, then the
  renderer starts.
- The renderer reports readiness only after its first frame. Browsers without
  WebGL reveal the existing SVG fallback instead of holding the background
  hidden.
- The first 480 ms CSS wipe failed owner inspection. Chrome discarded its
  multiplied duration, and renderer setup time consumed part of the shader
  animation before anything was visible.
- The repaired reveal starts its shader clock after compilation and runs for
  eight `--motion-smooth` intervals (1.92 seconds with the current token).
  Stars and thread fragments wake in delayed rings from the central knot while
  the SVG layers open through five visible stages.
- Balanced intensity now lowers the WebGL stars, gold points, silver threads,
  galactic band, flares, and SVG middle weave together. Quiet and Vivid remain
  distinct settings.
- The composer keeps its existing controls and gains a near-black wood surface
  with five decorative rune cuts. The marks are hidden from assistive
  technology and do not accept pointer input.
- Focused frontend verification: PASS, 56 tests across five component files.
- TypeScript check: PASS.
- Production build: PASS before the final intensity adjustment; the refreshed
  build is repeated at the owner review boundary.
- Real Chrome shader inspection: PASS. The phone renderer reported its phone
  profile and no shader compilation error. Forced timeline inspection recorded
  distinct reveal states at 0, 480, 960, 1440, and 1920 ms.

## Fake-mode phone trial

Local `weaver web --fake --fake-speed instant` was exercised through the real
browser surface at 390 x 844 with device scale factor 2.

- Spellweave precedes the chat interface in the document.
- Startup reached `ready` without hiding the app permanently.
- Empty New Weave preserved the same thread, closed the drawer, and focused
  the `Message Weaver` textarea.
- After a fake answer, New Weave created a fresh empty thread.
- Recalling the older thread restored its answer and closed the drawer.
- Chrome app mode reported `(display-mode: standalone)` and the root plus
  Spellweave backdrop both covered the complete 390 x 844 app window.
- With the preference request deliberately delayed by 900 ms, Settings appeared
  in 80.8 ms and the distant renderer was already paused.

No provider call or private chapter read was used.

## Final release gate, 2026-09-08

- The first attempt to run the frontend and Python suites concurrently caused
  five frontend timeouts from local resource contention. The assertions did
  not fail. The failure was retained as evidence, and the suites were repeated
  sequentially.
- `npm run build`: PASS. Vite transformed 475 modules and refreshed the
  committed production bundle.
- `npm test`: PASS. 21 files and 123 tests passed in 60.52 seconds.
- `uv run pytest`: PASS. 544 tests passed in 428.67 seconds.
- The independent behavior review returned PASS.
- The independent visual review found one paused-at-mount renderer lifecycle
  defect. The renderer now reads its live pause state, and the added regression
  proves it resumes when Settings closes. The review recheck returned PASS.
- `git diff --check`: PASS before the release audit.
- Version source updated to `1.2.1`.

The owner accepted the result and directed deployment, tagging, and release.
