# Plan 027.5 learning note

## Gate status

**Admitted 2026-08-31 by owner direction.**

## Confirmed observations

- The controller exposes the interface while its startup list and transcript
  requests are still running.
- Startup does not participate in the controller's active-load ordering, so it
  can overwrite a newer thread selection.
- the mobile surface closes the Archive and announces recall without checking
  whether `selectConversation` succeeded.
- `createConversation` intentionally returns false whenever the visible
  transcript is empty, which makes the released New Weave control appear
  broken and compounds the startup race.
- The current Spellweave already renders independently of conversation data.
  It can be the immediate visual surface while interactive UI waits for startup.

## Root-cause hypothesis

One explicit startup boundary fixes all three reports: order startup and recall
loads through the same controller guard, keep thread controls unavailable until
startup settles, make New Weave truthful when idle, and reveal the existing
interface over the already-painted Spellweave.
