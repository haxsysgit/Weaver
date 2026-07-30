# Learning Note: Cancellation and side effects

## Gate status

**Confirmed by the owner on 2026-07-30.**

Plan 003 is accepted. This confirmation admits Plan 004 implementation. It
does not accept the future implementation.

## Tiny model

Cancellation is a stop request, not a time machine.

If Weaver is waiting on a cooperative async tool, it can cancel the task and
wait for cleanup. If the tool already sent an email or replaced a file,
cancellation cannot pretend that action never happened.

Side-effect policy is the second lock. A model may know a tool exists and the
tool may be active, but the current turn still needs permission for the kind of
change that tool makes.

## Three effect classes

- `READ`: inspect state without changing novel files, Weaver domain records, or
  another system. An owner-only operational receipt is still allowed.
- `INTERNAL_WRITE`: change Weaver-owned state, such as library files, packets,
  exports, accepted memory, or durable conversation records.
- `EXTERNAL_EFFECT`: change another system or contact someone outside Weaver.

The default conversation gets `READ` only.

## What I understood

1. Plan 004 does not add an approval UI. It creates the policy boundary an
   approval UI can use later.
2. Active capability and allowed effect are separate decisions. Both must pass.
3. Normal sessions allow `READ` only. Maintenance sessions allow `READ` and
   `INTERNAL_WRITE` for the whole session.
4. `EXTERNAL_EFFECT` is blocked under both policies. Plan 004 rejects any
   policy that tries to admit it.
5. A blocked tool returns a stable safe error before argument parsing and
   never starts its handler.
6. The registry will run an async handler as a named task and wait for either
   completion or cancellation.
7. When cancellation wins, Weaver cancels the handler task and waits for it to
   settle. It does not leave an untracked background task running.
8. Tool handlers receive a helper to check cancellation before expensive work,
   after long waits, and before committing a change.
9. If completion and cancellation appear together, the completed handler wins.
10. If cancellation wins and the handler catches cancellation and returns, the
    tool result still says `cancelled`.
11. Python cancellation is cooperative. CPU-blocking code, swallowed
   `CancelledError`, or an already committed outside action cannot be safely
   undone by this layer.
12. No silent retry is added. `retry_safe` remains metadata until a later plan
   defines attempts, receipts, and idempotency.
13. Tests use `asyncio.Event` coordination, not timing guesses and sleeps.
14. Plan 004 does not rewrite the Plan 002 library algorithms. A later plan must
    audit cancellation checkpoints before enabling mutating library tools in
    conversation.
15. Plan 007 exposes only library inspection, so the first chat stays inside the
    default read policy.
16. After cancellation, later calls in the same grouped batch receive linked
    cancelled results without starting, and no later model request runs.

## Cancellation sequence

```text
model requests active tool
        |
        v
effect policy allows it?
        |
        v
handler task starts
        |
        +---- handler finishes ----> record result
        |
        +---- cancel event --------> cancel task
                                     wait for cleanup
                                     record cancelled
```

The turn does not answer "cancelled" while the handler is still running.

## Side-effect sequence

```text
registered
  -> active
  -> effect allowed
  -> arguments parsed
  -> cancellation checked
  -> handler runs
  -> cancellation checked before commit
```

Ordering matters. A blocked effect should not even start argument or handler
work it has no permission to perform.

## What this plan will prove

- read tools work under the default policy;
- maintenance sessions can run Weaver-owned writes;
- outside-effect tools stay blocked under both policies;
- cancellation reaches a cooperative running handler;
- cleanup settles before the turn returns;
- no retry occurs;
- receipts and results distinguish cancelled from failed.

## What it will not prove

- rollback of an already completed effect;
- safe termination of blocking sync code;
- a human approval experience;
- mutating library tools called from chat;
- durable job recovery after process death.

## Confirmation record

- Owner choice: confirm Plan 004 with the locked execution boundary
- Date: 2026-07-30
- Corrections or added constraints: completed handler wins a tie, cancellation
  waits for cleanup, cancellation never claims rollback, and remaining calls
  in a cancelled batch must receive linked cancelled results

Confirming approves this interpretation and test boundary. It does not accept
the future code.
