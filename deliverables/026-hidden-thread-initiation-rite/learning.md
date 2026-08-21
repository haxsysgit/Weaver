# Plan 026 learning note

## Gate status

**Accepted and admitted 2026-08-19.** Plans 022, 023, and 025 are closed. The
owner approved the full-screen initiation direction and directed implementation
to start.

## Confirmed owner direction

- Keep the accepted setup wording and four-step purpose.
- Replace the floating card with a full-viewport rite that stays inside one
  Spellweave scene.
- The mask appears as a brief original code-native impression during initiation.
- Explanatory copy stays plain when usability matters.
- Key entry is masked and stored through the existing browser-local identity
  helper. Decorative binding never claims validation.
- Enter later stays available and leaves an honest unbound inscription near the
  composer.
- Appraisal replaces Good with Exceptional, then Remarkable, then Glorious.
- The mantle-like darkness parts into the real conversation. The setup does not
  dismiss to a separate-looking app.
- Phone and desktop share the same component and state.

## Current code observations

- `FirstNightmareSetup.tsx` already owns four steps, focus containment, Escape
  deferral, local key storage, storage error, and focus restoration.
- `firstNightmare.ts` already stores `deferred` or `completed` in localStorage.
- `identity.ts` already trims and stores the key in the browser, supports a
  disabled state, and adds the key to request headers only while enabled.
- `SpellSurfaceChatApp.test.tsx` already covers first-run opening, deferral, key
  round-trip, and mobile drawer behavior. Those are regression contracts.
- The current `.first-nightmare-*` CSS creates the card shape and generic panel
  entrance the owner rejected.

## Hypothesis

The existing storage and focus behavior can remain intact while the component is
recomposed as a full-screen rite. A small typed reveal state can connect the
final appraisal to the shared Spellweave and real composer without duplicating
the chat or creating a second mobile implementation.

## Learning gate

Accepted. The four acts use Plan 022's accepted copy and Plan 025's visual
contract. The evidence gate covers a device-neutral phone matrix and desktop;
no named handset represents mobile support.

## Owner amendment, 2026-08-19

- The geometric mask failed owner review. Plan 026 now allows one original
  generated mask image grounded in a bounded reread and the accepted product
  identity. Supplied art remains reference-only.
- That mask becomes the awakening image, appraisal seal, and small Weaver mark.
- The temporary replay-only fake appraisal was removed before the owner-approved
  1.1.0 release. Replay continues to preserve the saved first-run state.
- Pin failure and archived-state distinction are recorded for Plan 028 after a
  read-only reproduction. They stay outside Plan 026 implementation.
- The mask scene fits inside phone and desktop viewports, then recedes behind
  acts two through four instead of disappearing into a blank void.
- Mask identity marks sit directly in the Spellweave without visible circular
  containers. The rite keeps only the step count in its top progress row.

## Reload finding, 2026-08-21

The rite artwork was not the main startup cost. It transfers about 94 KB. The
larger cost was the 913 KB initial JavaScript bundle and eager construction of a
hidden Three.js scene. A lazy renderer boundary removes that work from the
covered rite without changing the live Spellweave. Service-worker activation
also contained an explicit second-navigation path, which is unnecessary after
`clients.claim()` and made updates feel like slow reloads.

## App identity mark, 2026-08-21

The owner selected the original small Weaver mask mark for browser and PWA
identity. The favicon and manifest use the same 512 by 512 WebP, and the web
app serves that public file from a dedicated static route.
