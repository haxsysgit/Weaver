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

- Focused repair Vitest passed 41/41 tests across six files.
- `npx tsc --noEmit` passed.
- The refreshed preview build passed and updated committed `dist/` assets.

## Status

Not started.
