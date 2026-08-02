# Hypotheses: Local browser chat entrypoint

These are hypotheses, not observations or accepted decisions.

1. One centred responsive column is enough for the proof.
2. Streaming and stop behaviour should be consistent at desktop and phone
   widths.
3. SQLite should remain canonical, with only the active conversation ID in
   local storage.
4. Plain text via `textContent` is the correct rendering boundary for this
   slice.
5. The web profile should expose no library tools or library claims.
6. Recovery after cancellation should offer new-chat and choose-chat routes,
   not fake continuation.

The appraisal may confirm, correct, or reject each item. Record the evidence
before changing the canonical plan.
