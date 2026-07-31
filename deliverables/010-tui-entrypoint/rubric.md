# Acceptance Rubric: TUI entrypoint

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Done | Confirmed 2026-07-31; recorded in learning.md |
| Plan 009 is accepted | Done | Plan 009 owner decision 2026-07-31 |
| `textual>=2.0.0` added to `pyproject.toml`, `uv.lock` updated | Built | `textual==8.2.8`; import verified |
| `src/weaver/tui/app.py` exists with `WeaverChat(App)` class | Built | `weaver.tui.WeaverChat` |
| `WeaverChat` has `Header`, `RichLog`, and `Input` widgets | Built | `compose()` in app.py |
| `on_input_submitted` calls `await self._sw.send(self._conv_id, text)` | Built | app.py, with cancel_event + submit guard |
| `weaver chat` CLI command exists and shows help | Built | `chat --help` exit 0, no `corpus` |
| Fake mode works without `DEEPSEEK_KEY` (FakeModelProvider; never constructs DeepSeekProvider) | Built | `test_chat_session_fake_never_constructs_live_client` |
| Live mode requires `DEEPSEEK_KEY`; exit 2 before any call or receipt | Built | `test_chat_live_without_key_exits_2_without_state` |
| Echo tool registered and responds in TUI code path | Built | `_chat_tool_registry`; send test completes |
| Library inspection tools registered; fetch/update NOT registered | Built | `test_chat_tool_registry_excludes_fetch_update` |
| Ctrl+C sets cancel_event; no `task.cancel()` of model calls | Built | `test_send_cancel_event_settles_interrupted` (deterministic, gated provider) |
| `test_tui_send` passes with fake model and echo tool | Built | 7 new tests in `tests/test_tui.py` |
| No changes to `agent/` or `model_layer/`; `conversation/` only the sanctioned `send(cancel_event=...)` seam | Passed | Scope audit; diff reviewed in commit |
| Full deterministic floor passes (focused tests + full suite + lint) | Passed | 11 focused; 185 full; ruff clean; `uv pip check` clean |
| No private content or credentials leak | Pending | Candidate scans before commit |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
