# Learning Note: Cancellation and side effects

## Gate status

**Pending owner confirmation.**

Plan 004 starts only after Plan 003 is accepted.

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
3. Internal writes and external effects are blocked by default.
4. A blocked tool returns a stable safe error and never starts its handler.
5. The registry will run an async handler as a named task and wait for either
   completion or cancellation.
6. When cancellation wins, Weaver cancels the handler task and waits for it to
   settle. It does not leave an untracked background task running.
7. Tool handlers receive a helper to check cancellation before expensive work,
   after long waits, and before committing a change.
8. Python cancellation is cooperative. CPU-blocking code, swallowed
   `CancelledError`, or an already committed outside action cannot be safely
   undone by this layer.
9. No silent retry is added. `retry_safe` remains metadata until a later plan
   defines attempts, receipts, and idempotency.
10. Tests use `asyncio.Event` coordination, not timing guesses and sleeps.
11. Plan 004 does not rewrite the Plan 002 library algorithms. A later plan must
    audit cancellation checkpoints before enabling mutating library tools in
    conversation.
12. Plan 007 exposes only library inspection, so the first chat stays inside the
    default read policy.

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
- write and outside-effect tools are blocked by default;
- explicitly admitted internal writes can run;
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

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming approves this interpretation and test boundary. It does not accept
the future code.
