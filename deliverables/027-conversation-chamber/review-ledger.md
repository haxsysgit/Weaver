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
