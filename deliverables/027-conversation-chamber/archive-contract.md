# Thread Archive contract

## Product frame

The Thread Archive is Weaver's durable conversation navigation. It grows from
the accepted v1 rail and uses the same Spellweave materials as the conversation
surface. It remains familiar: clear labels, direct actions, and visible state
take priority over decorative lore.

Shadow Slave is the only current Edition. The Archive does not show future
novel controls.

## Data boundary

- `GET /api/conversations` supplies title, creation time, archived state,
  pinned state, and the read-only Edition id.
- The listing returns every device-owned summary. It does not silently stop at
  12 threads.
- `PATCH /api/conversations/{id}` accepts a partial title, archived, or pinned
  update and returns the complete updated summary.
- `DELETE /api/conversations/{id}` remains the permanent delete action.
- Every call continues through the existing authenticated wrapper, preserving
  the device id and browser-local BYOK header behavior.
- React state mirrors server responses. It does not keep separate title, pin,
  or archive stores.

## Active view

- New Weave remains the first action.
- Pinned is a labelled section immediately below New Weave and above Chats.
- Pinned threads do not repeat inside Chats.
- Chats retains the existing date grouping and optional flat grouping. Volume
  grouping leaves the UI while only one Edition is supported.
- A successful pin, rename, or archive updates from the returned server
  summary and survives remount.

## Archived view

- Archived opens a distinct view headed `Archived threads`.
- The view names what the reader is looking at and provides a clear return to
  active threads.
- Archived rows expose restore and delete. Pinning and renaming remain
  available because both are durable metadata.
- An empty archived view says that no threads have been archived.

## Delete and failure behavior

- Delete opens a visible side confirmation beside the selected thread.
- The confirmation names the thread and offers Cancel and Delete permanently.
- One click never deletes a thread.
- A failed rename, pin, archive, restore, or delete keeps the thread visible,
  shows safe action copy, and leaves server-backed state unchanged.
- Archiving or deleting the active thread selects another active thread. If
  none exists, Weaver creates a fresh thread.

## Responsive behavior

- Phones use the existing full-screen, scroll-locked Archive drawer with safe
  area padding, a reachable close control, and focus restored to the opener.
- Desktop keeps the Archive persistent and collapsible.
- Thread rows and actions meet the 44px minimum interaction floor. Destructive
  confirmation and failure use restrained crimson; pin and selection use old
  gold and silver.
