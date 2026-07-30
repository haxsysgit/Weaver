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

### Unadmitted live call during the missing-key check

On 2026-07-30, the deterministic command
`env -u DEEPSEEK_KEY uv run weaver experiment provider-tool-contract --live`
unexpectedly made four live API requests. The CLI loaded `.env` before checking
the process environment, which restored the key that `env -u` had removed.

Both provider round trips returned successfully, but this run was not admitted
at the live gate and is not Plan 005 acceptance evidence. The runner stored only
its private metadata receipt. It did not store prompts, final prose, provider
bodies, credentials, or reasoning text.

The repair removes automatic `.env` loading from the CLI. Live access now
requires `DEEPSEEK_KEY` to be present in the process environment. The
missing-key test includes a local `.env` value to prove the CLI does not
silently restore it.

## Private receipts

Paths and safe metadata will be added after execution. Receipt contents stay
ignored and private.
