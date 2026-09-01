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
- `createConversation` intentionally returned false whenever the visible
  transcript was empty. The owner confirmed that preserving the empty thread
  is correct, but the tap still needs visible feedback, mobile Archive closure,
  and composer focus.
- The current Spellweave already renders independently of conversation data.
  It can be the immediate visual surface while interactive UI waits for startup.
- The Chrome install prompt launches Weaver as a standalone PWA window. Android
  keeps its status and navigation bars outside that content window.
- Settings waited for `getPreferences()` before rendering, so network latency
  looked like a frozen settings button. The full-screen settings surface also
  left decorative Soul Sea motion running behind it.

## Root-cause hypothesis

One explicit startup boundary fixes all three reports: order startup and recall
loads through the same controller guard, keep thread controls unavailable until
startup settles, make New Weave truthful when idle, and reveal the existing
interface over the already-painted Spellweave.

The installed-app repair keeps Android system controls visible, matches their
surrounding color to Weaver's void, opens local settings immediately, and pauses
visual work that is hidden by the settings surface.
