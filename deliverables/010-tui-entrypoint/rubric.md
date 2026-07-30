# Acceptance Rubric: TUI entrypoint

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pending | Confirmation pending |
| Plan 009 is accepted | Pending | Plan 009 owner decision |
| `textual>=2.0.0` added to `pyproject.toml`, `uv.lock` updated | Not built | |
| `src/weaver/tui/app.py` exists with `WeaverChat(App)` class | Not built | |
| `WeaverChat` has `Header`, `RichLog`, and `Input` widgets | Not built | |
| `on_input_submitted` calls `await self._sw.send(self._conv_id, text)` | Not built | |
| `weaver chat` CLI command exists and shows help | Not built | |
| Fake mode works without `DEEPSEEK_KEY` (FakeModelProvider + read_only policy) | Not built | |
| Live mode works with `DEEPSEEK_KEY` (DeepSeekProvider + maintenance policy) | Not built | |
| Echo tool registered and responds in TUI | Not built | |
| Corpus inspection tools registered when `novels/` directory exists | Not built | |
| Corpus mutation tools NOT registered in TUI | Not checked | Scope audit |
| `test_tui_send` passes with fake model and echo tool | Not built | |
| No changes to `agent/`, `model_layer/`, or `conversation/` internals | Not checked | Scope audit |
| Full deterministic floor passes (focused tests + full suite + lint) | Not built | |
| No private content or credentials leak | Not checked | Candidate scans |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
