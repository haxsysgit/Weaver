# Hypotheses: Local browser chat entrypoint

## Status

Tested. Gate 1 decisions were accepted on 2026-08-02 and the implementation
evidence confirmed the admitted outcomes.

1. **Confirmed:** one centred responsive column is enough for the proof.
2. **Confirmed:** streaming, Stop, and recovery use the same controls at
   desktop and phone widths.
3. **Confirmed:** SQLite remains canonical and local storage holds only the
   active conversation ID.
4. **Confirmed:** plain text via `textContent` is the rendering boundary for
   this slice.
5. **Confirmed:** the web profile exposes no library tools or library claims.
6. **Confirmed after repair:** cancellation shows Start new chat and Choose
   another chat. It does not offer fake continuation.

Evidence lives in `results.md`; accepted choices live in `decision.md`.
