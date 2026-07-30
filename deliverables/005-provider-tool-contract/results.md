# Results: Provider-neutral tool payload contract

## Status

The learning gate is confirmed, Plan 004 is accepted, and the deterministic
floor passes. Live access has not been admitted.

## Hypothesis

Weaver's neutral message model will serialize through the real SDK into a
correct two-request tool exchange for both `deepseek-v4-flash` and
`deepseek-v4-pro`, without provider-only fields in shared types.

## Deterministic observations

- Baseline before Plan 005: 142 tests passed.
- Focused floor after implementation: 33 tests passed.
- Full floor after implementation: 156 tests passed.
- `uv run ruff check src/weaver tests`: passed.
- `uv pip check`: all 64 packages compatible.
- `git diff --check`: passed.
- `openai` 2.49.0 and `httpx` 0.28.1 are installed.
- The owner-approved unused `ebooklib` import was removed.
- The real SDK test passed for `deepseek-v4-flash` and `deepseek-v4-pro`.
- Each model emitted one tool call through split SSE argument deltas, then
  accepted the linked tool result and emitted a final stop.
- Both HTTP request bodies keep thinking disabled. Request two keeps the tool
  schema, removes forced choice, preserves the call ID and raw argument text,
  and contains no reasoning replay field.
- Missing IDs, malformed arguments, partial length responses, provider errors,
  and non-final second responses stop without an extra request.
- The SDK provider-error test made one HTTP attempt with no retry.
- `weaver experiment provider-tool-contract --fake` passed the stable
  four-request Flash/Pro sequence without credentials or network access.
- The fake receipt directory is mode `700`; every receipt file is mode `600`.
  It contains hashes and lengths, not raw arguments, call IDs, prompts, final
  prose, credentials, provider bodies, or reasoning text.
- After the repair, `env -u DEEPSEEK_KEY ... --live` exits 2 before client or
  receipt creation. The existing fake receipt count stayed unchanged.

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

The inspected fake receipt is:

```text
.weaver/runs/provider-tool-contract-20260730T090327-334b5d7956fe
```

It is ignored owner-only state. The accidental unadmitted live receipt also
stays ignored and is not acceptance evidence.
