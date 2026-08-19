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
