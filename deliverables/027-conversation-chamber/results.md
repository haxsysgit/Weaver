# Results

## Checkpoint one, Conversation Chamber

The first focused red run failed in the intended places: response spine,
reader shard, chapter-reference knot, streaming attachment, and composer
reading boundary were absent. Existing controls remained green.

The implementation replaces the bordered Weaver reply container with an
unframed response body beside a silver spine and mask mark. Reader messages
remain compact dark shards. Visible chapter labels gain decorative knots without
links or canon claims. The Composer now states Shadow Slave and its spoiler
boundary above the binding point.

- Focused Vitest recheck passed 24/24 tests across 11 files.
- `npx tsc --noEmit` passed.
- A preview-only `npm run build` passed so the fake review server could serve
  the changed bundle. It is not the final build verification floor.
- `uv run weaver web --fake --host 0.0.0.0 --port 8027` serves the review
  surface locally and returned HTTP 200.

The full frontend suite, final build verification, and Python suite remain
reserved for checkpoint three by owner direction.

### Owner checkpoint correction

The owner rejected the first visual pass because reader messages still used a
black-glass shard. The stale Plan 027 decision caused that mismatch. Checkpoint
one remains open while both message roles return to transparent rune text on
the Spellweave and the generic failure block becomes distinct safe recovery
states.

The repair added typed, safe recovery for connection loss, model failure,
rate limits, a busy thread, a missing thread, interruption, incomplete output,
execution limit, request rejection, server failure, saved-state failure, and an
unknown failure. Raw exception and provider text no longer reaches recovery
copy.

The owner removed the redundant `Shadow Slave` and spoiler-boundary line above
the Composer during checkpoint review.

### Checkpoint reset

The owner accepted the transparent Conversation Chamber as the plan foundation
and replaced checkpoint one with the Soul Sea Reader Appraisal. The accepted
concept uses a phone settings index and detail flow, threaded desktop
navigation, a combined reader-position and spoiler page, fixed Hidden Thread
identity, accurate privacy copy, and a dedicated First Nightmare section.

- Focused repair Vitest passed 41/41 tests across six files.
- `npx tsc --noEmit` passed.
- The refreshed preview build passed and updated committed `dist/` assets.

### Reader Appraisal implementation

The rebuilt settings surface now uses the Soul Sea as its reader-profile
setting. Desktop navigation follows a vertical silver thread with an old-gold
selected knot. Phone navigation opens as a vertical settings index, then moves
into one focused detail page with a clear Settings back action.

Reader position and spoiler protection now share one page. Chapter is the
editable source of truth, the volume is derived from it, and the four step
controls move by 10 or 1 chapter. Answer depth and model selection have
separate sections. Bound voice keeps the existing browser-local key behavior,
masking, reveal control, disabled state, and model selection.

Appearance keeps the Hidden Thread identity fixed while exposing rune motion,
star-web intensity, reading density, and text size. Privacy now names the three
real boundaries: Weaver's local library, DeepSeek messages, and the
browser-local key. First Nightmare replay has its own section. Dirty settings
open a discard confirmation before the panel closes.

- Focused Vitest passed 20/20 tests across the settings lab and live app.
- `npm exec tsc -- --noEmit` passed.
- `npm run build` passed and refreshed `src/weaver/web/dist/`.
- `git diff --check` passed before the final focused recheck.
- The complete test suites remain reserved for checkpoint three by owner
  direction.

Owner review found that the title header consumed space while the Soul Sea was
too dark to read. The repair removes the repeated Reader Appraisal heading,
moves the close control into the scene, expands the visible Soul Sea crop, and
raises its contrast on phone and desktop. The focused settings recheck passed
3/3 tests, TypeScript passed, and the production bundle was rebuilt.

A second review found that legacy appearance values made an untouched panel
look dirty. Settings now establishes the fixed Hidden Thread identity as its
opening baseline, so navigation alone closes immediately while actual edits
still receive confirmation. The close control is now an unframed X. Both clean
and dirty close regressions passed, TypeScript passed, and the bundle was
rebuilt.

## Status

Checkpoint one was accepted by the owner on 2026-08-21. Thread Archive work
began from the locked Plan 023 metadata contract and the accepted v1 rail.

The first checkpoint-two inspection found that the shipped listing stopped at
12 conversations even though Plan 023 promised every device-owned summary.
The owner expanded Plan 027 to full-stack work on 2026-08-21 so this dependency
can be repaired before the Archive UI relies on it.

The backend red proof returned 12 of 15 device-owned threads. It also exposed
that explicit null archive or pin values escaped validation and raised a
repository error. The repair removes the default listing limit while retaining
an explicit internal limit option, and rejects null booleans with 422. The
focused backend recheck passed 8/8 tests and Ruff passed.

The browser API now carries the full Plan 023 summary and exposes the partial
authenticated PATCH method. Its focused Vitest passed 4/4 tests and TypeScript
passed.

### Thread Archive implementation

The temporary rail has been replaced by a responsive Thread Archive backed by
the server metadata contract. Pinned threads now form a labelled section below
New Weave and above Chats. Archived opens a distinct view with its own heading,
empty state, restore actions, and a clear return to active threads.

Rename, pin, archive, restore, and delete update only after the server confirms
the change. A failed mutation keeps the current row unchanged and shows safe
reader-facing copy. Delete opens an explicit side confirmation before the
request is sent. Archiving or deleting the active thread selects another active
thread, or creates a fresh weave when none remains.

The first focused run exposed that Yesterday and Others were collapsed by
default. Their action buttons existed but were inaccessible until the reader
expanded each group. The Archive now opens every date group by default and
keeps folding as an optional reader action.

- Focused frontend Vitest passed 29/29 tests across `chatApi`, the live app,
  and the theme lab.
- `npm exec tsc -- --noEmit` passed.
- `npm run build` passed and refreshed `src/weaver/web/dist/`.
- The focused backend metadata recheck passed 8/8 tests and Ruff passed before
  the Archive UI was built.
- The full frontend and Python suites remain reserved for checkpoint three by
  owner direction.

### Owner correction: Archive actions and Soul Sea

The owner reported that delete felt inconsistent, pin did not expose a clear
unpin state, icon actions had no visible hover labels, and the accepted Soul
Sea choices and live background had disappeared.

The delete diagnosis found two real interaction defects. The controller
blocked every conversation action while any answer was streaming, including
deleting or pinning a different idle thread. The confirmation also used
`Unmake this thread?` beside a separate Delete action, and its absolute panel
could be clipped by the scrolling rail. The repair lets the server decide
whether the specific thread is busy, uses one inline `Delete thread?` panel,
shows a pending state, and keeps the row until the delete response succeeds.
Pinned rows use a separate unpin icon and selected color. Every row action now
has its plain hover title.

The focused Archive red run failed 3 tests before the repair. Its green recheck
passed 6/6 tests, including deletion of an idle thread while another answer is
streaming. TypeScript passed.

The bounded Soul Sea packet contains chapters 16, 104 through 106, 352, 591,
1661, 2130, 2131, and 1518. It establishes Sunny's still dark water,
transparent lightless cores appearing as black suns, Memory lights, motionless
slain shadows, the black Nameless Temple, and the eventual seven-core sky with
tens of thousands of shadows. Chapter 16 also distinguishes the ordinary Soul
Sea as one warm, bright core. Chapter 1518 establishes Nephis' calm radiant
ocean, golden-cloud light, seven bright suns, and the incandescent white flame
revealed beneath its surface.

The owner accepted the private Sunny concept and locked three production
identities. Settings now presents Sunny's dark Soul Sea, an ordinary Awakened
Soul Sea, and Nephis' radiant Soul Sea as illustrated choices. The selected
realm persists in browser visual preferences, old `still`, `living`, and
`mirror` values migrate to their closest new identity, and the live Chamber
places the Soul Sea between the distant star renderer and the sharp foreground
Spellweave. It never replaces the accepted v1 star web.

Sunny renders seven slowly turning lightless cores, the Nameless Temple,
Memory lights, and the shadow legion. The ordinary sea renders one warm core
over bright living water. Nephis renders seven radiant suns over a golden sea
that responds to active weaving. Reduced motion inherits the existing global
motion cutoff.

- The first live capture exposed an opaque-canvas stacking defect that hid the
  Soul Sea. The repaired order is distant stars, Soul Sea, Spellweave threads,
  then conversation UI.
- Focused Soul Sea, settings, live-app, and Theme Lab Vitest passed 32/32 tests.
- `npm run build` passed and refreshed `src/weaver/web/dist/`.
- Phone captures at 390 x 844 confirmed the selector and live layering for
  Sunny and Nephis.

The owner accepted checkpoint two on 2026-08-24 and directed checkpoint three
to begin.

## Checkpoint three, integration trial

The deterministic browser journey now starts from First Nightmare, defers key
binding without a live request, sends through the fake server, receives tool,
delta, and completion events, renders safe Markdown, renames and pins the
thread, archives it, survives a remount, then restores and deletes it. Raw HTML
and unsafe links remain text. Conversation identity and archived state also
survive a complete browser restart under the same device identity.

Browser evidence is private under `private/design-evidence/027/`. The final
matrix covers 320 x 568, 360 x 800, 390 x 844, 412 x 915, 844 x 390 touch
landscape, and 1440 x 900 desktop. It also covers keyboard resize, 200 percent
zoom, reduced motion, pinned and archived states, offline recovery, service
worker control, restart persistence, and a complete fake streamed answer.
Portrait pages have no horizontal overflow, the composer remains 16px, and
phone controls reach the 48px floor.

Performance evidence uses a 390 x 844, DPR 2, touch-emulated browser with 4x
CPU throttling and SwiftShader. The truthful adaptive profile settled at DPR 1
with 1,200 stars and 600 thread segments. The 60-second idle trace recorded no
long tasks. A direct ten-second answering trace recorded no long tasks or long
frames. The full fake-send trace recorded six long tasks, so the evidence is
kept as a real integration cost rather than relabelled as a clean renderer
trace. The background now keeps one canvas while activity and pause state
change; adaptive level two also stops continuous animation.

The trial found and repaired four integration defects:

- Native `EventSource` could not carry the device header, so streaming failed
  with 404 after a successful turn start. The browser now mirrors the same
  device id into a strict same-origin cookie, and the server accepts the header
  or that cookie.
- Tool SSE frames crossed the browser boundary with private chapter snippets
  and passage handles. Public tool activity now contains only safe name and
  status fields, and the public passage route and its dead frontend reader were
  removed.
- Archiving the actively streaming thread could leave an archived thread open.
  The server now rejects that mutation with 409 until the turn ends.
- Touch-only row actions, modal focus, two 44px settings controls, duplicate
  live regions, and the untested background lifecycle failed accessibility
  review. Narrow repairs preserve the accepted layout while making those paths
  operable.

Final command floor:

- `npm test`: 105/105 tests passed across 50 files.
- `npm run build`: passed; 475 modules transformed and committed `dist/`
  refreshed.
- `uv run pytest`: 533/533 tests passed in 509.01 seconds.
- Focused final accessibility and lifecycle recheck: 24/24 passed.

The independent behavior, privacy, and persistence review passes after repair.
The independent visual, mobile, and accessibility review passes after repair.
Plan 027 remains admitted until the owner gives the final accept or reject
decision.

### Owner extension before the final decision

On 2026-08-25 the owner kept Plan 027 admitted and extended its integration
checkpoint. The fixed fake reply does not support real manual product testing.
The plan now replaces it with a permanent deterministic conversation simulator
before returning to the decision and `v1.2.0` release gates. Earlier design,
browser, test, and review evidence remains valid; the affected fake runtime,
streaming, UI, and review evidence will be repeated after the extension.

## Permanent fake conversation simulator

`weaver web --fake` now runs a deterministic artificial model through Weaver's
real agent loop, synthetic reading tools, conversation store, SSE stream,
controller, Markdown renderer, and accepted Spellweave UI. It supports normal,
Markdown, long, slow, simulated model failure, and incomplete-answer prompts.
Normal conversation keeps multi-turn context. `--fake-speed` controls visible
pacing without affecting live mode.

The simulator opens no private library and constructs no live provider. A
fail-fast startup regression rejects both `DeepSeekProvider` construction and
outbound socket connection. The real browser request log contains only the
local `127.0.0.1` app, assets, and API routes.

The first independent review found that deliberate failures repeated forever,
failed and cancelled turns announced successful completion, fake failure copy
named DeepSeek, and mobile recovery actions were 34px. The repairs make error
and incomplete scenarios fail once and complete through the real retry route,
give fake failures honest artificial-voice copy, announce failure and
interruption through the existing rune live region, and raise phone recovery
controls to 48px.

The behavior review also proved that Stop only worked before answer playback.
The shared delta publisher now checks cancellation before and after each
visible chunk. A direct regression stops after one published chunk, while a
real uvicorn/SSE regression cancels during visible output, ends interrupted,
emits no completion, and keeps the completed long answer out of the public
transcript.

Private browser evidence under `private/design-evidence/027/` covers normal
two-turn continuity, long replies at 320 x 568, 390 x 844, and 1440 x 900,
simulated failure and successful retry, and visible-output cancellation plus
successful retry. The captured interrupted state remains `[The thread was
cut.]` after waiting and never changes to completion. The 320px long-answer
trial exposed an 11px intrinsic grid overflow. A phone-only grid constraint
repairs it: the final transcript is 320px, its content column is 296px, and the
page has no horizontal overflow.

The duplicate Archive footer shortcut named `Model & key` is removed. The
accepted Settings entry, Soul Sea, Archive, transparent messages, response
spine, composer, and Spellweave presentation remain unchanged.

Final extension floor:

- `npm run build`: passed; 475 modules transformed and committed `dist/`
  refreshed.
- `npm test`: 107/107 tests passed across 50 files.
- `uv run pytest`: 543/543 tests passed in 446.04 seconds.
- Focused fake runtime, web server, and no-network recheck: 24/24 passed.
- `git diff --check`: passed.

One parallel full frontend run recorded three suite timeouts while the full
Python floor was saturating the machine. No assertion failed. The same complete
frontend command then ran alone and passed 107/107; the failed JSON report is
preserved in `/tmp/plan027-final-vitest.json` for this session.

Both extension independent code reviews pass after repair. Plan 027 remains
admitted at the owner decision gate.

## Post-review chat surface repair

The owner found a repeatable flash of bright lines whenever a message entered
the send, reading, and completion states. The foreground SVG copied the full
Spellweave geometry and raised its opacity from 0.08 to as high as 0.48 during
those states. The live chat now keeps that decorative layer stable. The distant
star web, middle weave, rune status, and Soul Sea core motion continue to show
activity without drawing a second bright web over the transcript.

The composer now stays focused after submission by using a read-only state
while Weaver replies, then receives focus again when the reply settles. Focus
is not moved while Settings, the Thread Archive, or the First Nightmare is
open. The live Soul Sea keeps its selected core animation and removes its
visible name and description; Settings still carries the labels needed to
choose a Soul Sea.

Focused repair floor:

- `npm test -- SpellSurfaceChatApp.test.tsx --reporter=dot`: 25/25 passed.
- `npm test -- Composer.test.tsx SpellSurfaceSoulSea.test.tsx SpellweaveBackdrop.test.tsx --reporter=dot`: 14/14 passed.
- `npm run build`: passed; 475 modules transformed and `dist/` refreshed.

The full Plan 027 floor remains reserved for the final owner decision. Plan 027
stays admitted.

## First Nightmare icon set

The browser tab previously reduced the full opaque 512px mask artwork into one
16px square, which preserved the black tile and lost most of the mask. The
replacement uses the same approved First Nightmare artwork with a feathered
alpha edge and a tighter favicon crop. No generated sigil replaced the product
identity.

The first background-removal trial selected only the bright horns and forehead
because the black mask merged with the black background. A second model kept
more of the brow but still removed the lower face. The accepted deterministic
pass keeps the original pixels, removes the hard square with a soft alpha mask,
and exports dedicated 16px, 32px, 192px, 512px, and maskable 512px assets.

Focused icon floor:

- `npm run build`: passed; 475 modules transformed and `dist/` refreshed.
- Focused production asset, manifest, and route checks: 3/3 passed.
- The 16px and 32px icons were inspected on dark, light, and neutral tab
  backgrounds.

The full Plan 027 floor remains reserved for the release gate.

## Final release floor, 2026-08-31

The release gate reran the complete floor sequentially after the final focus,
Spellweave, Soul Sea caption, and icon repairs:

- `npm run build`: passed; 475 modules transformed and committed `dist/`
  refreshed.
- `npm test`: 110/110 tests passed across 21 files in 58.56 seconds.
- `uv run pytest`: 544/544 tests passed in 358.95 seconds.
- Final behavior, privacy, persistence, and fake/live isolation review: PASS.
- Final visual, mobile, accessibility, and icon review: PASS.

The first frontend floor attempt recorded one timeout in the four-act key and
appraisal journey after 5.27 seconds. The same path completed with every
assertion intact in 4.58 seconds when isolated. The journey mounts the lazy 3D
background after exercising the complete rite, so its explicit test budget now
matches the neighboring 10-second First Nightmare journey. The full frontend
floor then passed 110/110. No production behavior changed for this repair.

The build retains Vite's existing warning for the lazy 519.36 kB background
chunk. The chunk remains lazy, the build passes, and changing its architecture
is outside this closure repair.

No live provider request, real API-key validation, private chapter read, or
application infrastructure deployment occurred during the release floor.
