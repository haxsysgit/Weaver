# Results: Provider-neutral tool payload contract

## Status

The learning gate is confirmed and Plan 004 is accepted. The deterministic
build is active. Live access has not been admitted.

## Hypothesis

Weaver's neutral message model will serialize through the real SDK into a
correct two-request tool exchange for both `deepseek-v4-flash` and
`deepseek-v4-pro`, without provider-only fields in shared types.

## Deterministic observations

- Baseline on 2026-07-30: 142 tests passed.
- `uv pip check` found 64 compatible packages.
- `openai` 2.49.0 and `httpx` 0.28.1 are installed.
- Full lint found one existing unused `ebooklib` import. The owner approved its
  removal as a narrow Plan 005 scope exception.

## Live observations

None yet. Flash and Pro each get one attempt only after every deterministic
check passes and the owner gives explicit live permission.

## Failures

None recorded.

## Private receipts

Paths and safe metadata will be added after execution. Receipt contents stay
ignored and private.
