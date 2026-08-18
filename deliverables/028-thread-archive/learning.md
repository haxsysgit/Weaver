# Plan 028 learning note

## Gate status

**Unadmitted.** The owner approved the Thread Archive direction and requested
this drafted plan on 2026-08-18. Plan-specific admission waits for Plan 023 and
Plan 027 to close. No archive implementation is authorized by this draft.

## Confirmed owner direction

- Mobile uses a full-screen Thread Archive with reachable rows and actions.
- Desktop uses the same component as a persistent, collapsible archive.
- Rename, archive, restore, and pin use server-backed device-scoped metadata.
  Delete keeps the existing server action.
- The accepted client write is
  `updateConversation(conversationId, patch)`. The writable patch fields are
  title, archived, and pinned.
- `edition_id` is returned by the server and stays read-only in the browser.
- Shadow Slave is the only current Edition. No fake novel buttons ship.
- Browser evidence covers 320 x 568, 360 x 800, 390 x 844, 412 x 915, and
  1440 x 900. The Redmi Note 14 receives the real-device usability pass at its
  measured CSS viewport.

## Current observations

- `SpellSurfaceChatApp.tsx` stores renamed titles, archived ids, and pinned ids
  in component state. Those values disappear on reload.
- `SpellSurfaceRail.tsx` contains local grouping and action UI plus three novel
  buttons. Two of those buttons advertise unsupported books.
- The current mobile component is a narrow rail with a scrim. It locks body
  scroll and restores opener focus, but it does not provide a full-screen
  archive or a complete focus trap.
- `useChatController.ts` already owns conversation selection, deletion, and
  refresh. Metadata updates belong there so app and archive share one state
  path.

## Hypothesis

One Thread Archive component can feel native at phone and desktop sizes while
keeping one server-backed action path. Persistence becomes boring and reliable,
and the future Edition seam remains in data until a second book actually
exists.

## Learning gate

Pending. After admission, the executor records the accepted Plan 023 fields,
fallback behavior, and focus contract here before production changes begin.
The owner reviews phone and desktop evidence before closure.
