# Review Ledger

## Behavior, privacy, and persistence review

**Status:** Pass after repair, 2026-08-24.

The first review found two blockers. Public SSE tool frames contained private
chapter previews and passage handles even though React kept them out of the
visible page. Archiving the currently streaming thread also succeeded on the
server before the client could switch away, leaving an archived thread active.

The repair reduces public tool activity to safe name and status fields, removes
the public passage endpoint and its dead frontend component, and adds a byte-
level SSE canary regression. The archive PATCH now returns 409 for the active
weaving thread and preserves its metadata. A stale passage-route test and type
were removed with the retired endpoint.

The focused backend recheck passed 2/2 tests. The complete Python floor later
passed 533/533 tests. No behavior, privacy, or persistence blocker remains.

## Visual, mobile, and accessibility review

**Status:** Pass after repair, 2026-08-24.

The first review found five blockers: touch-only thread actions were hidden on
inactive rows; the mobile Archive and settings flows lost or escaped keyboard
focus; two phone icon controls remained 44px wide; streaming answer text and
rune status used competing live regions; and the renderer lifecycle change had
no direct DOM regression.

The recheck confirmed the narrow repairs:

- Every touch thread row now has a visible 48px actions trigger that exposes
  the existing pin, rename, archive or restore, and delete controls.
- The mobile Archive traps forward and reverse Tab movement, its scrim is
  removed from the tab order, and closing returns focus to the opener.
- Mobile settings moves focus to the detail Back control, returns it to the
  chosen index row, and returns focus to the settings opener when closed.
- The settings close and key-reveal controls reach 48px on phone and short
  touch-landscape layouts. Composer text remains 16px.
- The transcript is no longer a second live region. Spell rune status remains
  the single polite announcement path.
- The Spell background keeps one canvas while activity mode and pause state
  change, covered by a focused lifecycle regression.

The focused frontend recheck passed 24/24 tests and the production build
passed. No visual, mobile, or accessibility blocker remains from this review.

## Permanent fake simulator extension review

**Status:** Pass after repair, 2026-08-28.

The extension review checked fake and live isolation, private-library access,
the real turn and persistence path, SSE privacy, deterministic tool-call IDs,
multi-turn continuity, restart behavior, cancellation, and safe failure
recovery. The fake web runtime selects the synthetic provider and reading tools,
keeps the private library closed, publishes only validated answer deltas, and
keeps tool activity frames to name and status. Live mode retains its separate
DeepSeek provider path and receives none of the fake pacing or retry controls.

The first focused recheck passed 13/13 selected tests, including real-socket SSE
cancellation after visible output, direct cancellation after the first delta,
failure retry, and restart-safe public transcripts. It still found one closure
blocker: the plan required a direct proof that `weaver web --fake` made no
outbound network call, while the startup test only replaced the web server and
checked its host, mode, and pacing.

The repair added a fake-web startup regression that fails if
`DeepSeekProvider` is constructed or `socket.connect` is called. The final
recheck ran:

```text
uv run pytest -q tests/test_web_server.py::test_web_fake_never_constructs_a_live_provider_or_opens_network tests/test_chat_runtime.py::test_fake_web_runtime_never_opens_the_private_library tests/test_fake_chat.py
```

It passed 7/7 tests. No behavior, privacy, persistence, cancellation, restart,
or fake/live isolation blocker remains from the simulator extension review.

## Permanent fake simulator visual and accessibility review

**Status:** Pass after repair, 2026-08-28.

The initial review found five defects: error and incomplete retries repeated
their failure forever, failed and interrupted turns announced completion,
phone recovery controls were 34px, fake model copy incorrectly named DeepSeek,
and only the Markdown journey had browser evidence.

The code recheck passed after the real retry route completed both deliberate
failure scenarios, the existing rune live region announced recovery truth,
phone actions reached 48px, and fake copy named the artificial voice. It also
confirmed that the accepted transparent messages, response spine, Settings,
Archive, Soul Sea, composer, and Spellweave presentation did not drift.

The remaining manual evidence was then captured through the production browser
surface: normal continuity, long answers, simulated failure and successful
retry, and visible-output Stop plus successful retry. The 320px check found and
repaired intrinsic grid overflow before the final capture. No visual, mobile,
or accessibility blocker remains from the simulator extension review.

## Final release reviews

**Status:** Pass, 2026-08-31.

The final behavior, privacy, persistence, and release-readiness review found no
production blocker. Its focused suite passed 22/22 tests covering fake/live
isolation, outbound-network rejection, private SSE canaries, device ownership,
restart persistence, retry, active-thread mutation guards, and cancellation
after visible output. Package version resolution returns `1.2.0`, and the Plan
027 commit range contains no credential or private-library path.

The final visual, mobile, and accessibility review found no blocker. Its
focused frontend suite passed 48/48 tests and its production icon/static route
checks passed 3/3. It confirmed transparent messages, stable Spellweave
foreground, caption-free live Soul Sea cores, composer focus restoration,
Archive states and actions, phone touch and input floors, reduced motion, and
the complete favicon and PWA icon set.

The behavior reviewer found one closure wording defect: the roadmap called
Plan 027 frontend-only after the owner had admitted it as full-stack. The
closure record corrects that description.
