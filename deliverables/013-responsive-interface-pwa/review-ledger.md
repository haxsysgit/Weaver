# Plan 013 review ledger

## Status

All independent findings repaired. Fresh-context reviewer verdict: **PASS**.

## Findings and repairs

### Built frontend missing from packaged installs

**Finding:** the backend served only `src/weaver/web/dist/`, but the directory
was ignored and absent from built wheels.

**Repair:** the production build is tracked, Hatch includes it as a wheel
artifact, Python asserts that the production assets exist, and a temporary
wheel build/install confirmed index, manifest, mark, worker, and hashed JS/CSS.

### Service worker could show the wrong privacy mode

**Finding:** cache-first `/` could retain fake-mode copy after the same origin
restarted in live mode. Fixed JS/CSS names could also pin an old bundle.

**Repair:** Vite emits hashed assets. The worker discovers and precaches the
exact hashes during first install, treats navigation as network-first with an
offline fallback, and never responds to `/api/`. Browser proofs cover both a
server-off reload and fake-to-live restart under an installed worker.

### Reuse boundary still mixed behavior and Weaver presentation

**Finding:** `ChatApp` owned transport/state behavior and hardcoded Weaver copy
and marks despite the documented HaxJobs reuse claim.

**Repair:** `useChatController` owns conversation and streaming behavior.
`ChatApp` composes the presentation. Product configuration supplies visible
words, the brand mark is an injected component, and a Career Guide product
test proves the boundary without Weaver or Shadow Slave copy.

### Browser proof cleanup race

**Finding:** a process could exit between `poll()` and `killpg()`, and one
cleanup exception could skip server shutdown.

**Repair:** `ProcessLookupError` is handled and nested `finally` blocks always
attempt page, browser, and server cleanup independently.

## Verification evidence

- Required build, Python, React, lint, and package compatibility floor passed.
- Fake and explicit live browser conversations passed in temporary state.
- Offline shell and fake-to-live privacy proofs passed under a controlling
  service worker.
- The staged privacy and credential audit remains the last pre-commit gate.

## Verdict

PASS. The reviewer reran the 41-module build, 289 Python tests, 8 React tests,
Ruff, dependency compatibility, packaging inspection, offline shell, privacy
mode switch, diff check, and private-data scan. No unresolved finding remains.

## Owner inspection after review

**Observation:** the owner still saw the deleted shell. Server logs showed the
legacy document requesting deleted `/static/` modules, followed by the new
worker fetching `/`, the manifest, mark, and hashed React assets.

**Cause:** worker v3 replaced the legacy cache and claimed the open tab, but a
claim does not replace HTML that has already rendered. The React shell would
appear on the next navigation.

**Repair:** worker v4 records whether it removed an older cache. When it did,
it claims and navigates every open same-scope window once. A fresh install has
no older cache and does not reload. The web test went red before this behavior
was added, then passed after the production bundle was rebuilt.

## Final identity repair

**Owner feedback:** the React shell worked but remained crude and too close to
a normal chat. The custom fate-thread control had no clear meaning, and the
mask-style mark did not fit Weaver.

**Repair:** the bounded repair instruction was rewritten around that feedback.
The custom control and hand-drawn icon set were removed. Locally bundled Font
Awesome Free icons now provide the functional language, with staggered bars to
open the rail, a left chevron to close it, and a spider used consistently in
the brand seal, message avatar, favicon, and PWA mark. The rail, empty state,
message hierarchy, composer, depth, and restrained web geometry were sharpened.
No chapter evidence, canon labels, source locations, or search activity were
invented before the real reading tools exist.

**Inspection:** the built app was visually inspected at 1440 by 900 and 390 by
844 in empty, drawer-open, and populated-transcript states. The browser proof
also exercised the desktop toggle, mobile drawer, long transcript, stream,
send/stop control state, regeneration scope, persistence, and installability.

**Evidence:** the production build, 9 React tests, 289 Python tests, Ruff,
dependency compatibility, fake browser proof, and offline-shell proof passed
on 2026-08-05.

**Independent review finding:** the browser proof still required the deleted
custom sigil and the previous crimson token, so its otherwise-correct printed
observations ended in a nonzero exit. The assertions now require Font Awesome's
staggered-bars icon, reject the legacy sigil, and check the current token. The
same proof now confirms that no runtime style tag is injected under the strict
content security policy. The corrected proof passed.

**Independent review accessibility finding:** the closed desktop and mobile
rails remained keyboard-focusable off screen. The rail is now inert and hidden
from assistive technology whenever closed, the opener exposes
`aria-controls`/`aria-expanded`, the mobile drawer receives dialog semantics
and focus, and focus returns to the opener after closing. Component and live
browser checks cover the repaired behavior.

**Independent review attribution finding:** the packaged Font Awesome notice
was initially copied to an unserved root path. It now builds under the existing
`/assets/` mount, the SVG points to that served location, and a backend asset
test verifies both the response and attribution text without adding a route.

**Independent review PWA finding:** the identity repair initially left the
worker and cache at v4, which would let an installed client retain the old
cache-first mark. The worker now uses `weaver-shell-v5`. A browser upgrade
proof starts with a seeded v4 cache and verifies that v5 removes it, controls
the page, and caches the new spider mark.

**Gate:** implementation and inspection are complete, independent review
returned PASS after the four repairs, and the owner accepted and closed
Plan 013 on 2026-08-05.
