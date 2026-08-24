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
