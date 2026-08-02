# Acceptance Rubric: Plan 010 developer console

| Requirement | State | Evidence |
| --- | --- | --- |
| Composer starts at 3 rows, grows for explicit and wrapped lines, caps at 8, then scrolls | Passed | `test_composer_grows_wraps_clamps_and_clears_at_both_sizes` |
| Composer returns to 3 rows after send, clear, or idle Ctrl+C | Passed | focused Textual pilot tests |
| Raw terminal bytes prove Ctrl+J, Ctrl+T, Ctrl+R, Ctrl+N, Ctrl+C, Ctrl+Q, and F1 | Passed | `test_raw_terminal_control_bytes_map_to_audited_keys` |
| F1 shows the complete key reference | Passed | help overlay tests at 80 x 24 and 120 x 36 |
| Main transcript is open and overlays use compact titles with no Header | Passed | `app.py`, `screens.py`, both terminal-size tests |
| Owner messages, Weaver replies, and streaming previews have clear role separation | Passed | role-block tests at 80 x 24 and 120 x 36 plus real PTY inspection |
| Long Markdown replies wrap without horizontal scrolling | Passed | wrap test at 80 x 24 and 120 x 36 |
| Markdown headings remain readable on the dark transcript | Passed | explicit true-colour heading test and independent contrast check |
| Status line is contextual for idle and busy states | Passed | pure status tests and busy pilot test |
| `SessionWeave.load_transcript()` exposes only typed owner/Weaver prose | Passed | private protocol canary test |
| `SessionWeave.conversation_exists()` separates empty and unknown chats | Passed | session seam test |
| New chat clears the old transcript | Passed | Ctrl+N and cancellation recovery tests |
| Chat picker replaces the visible transcript and restores focus | Passed | Ctrl+R redraw and terminal-size tests |
| Cooperative cancellation opens safe new-chat, choose-chat, and back routes | Passed | cancellation recovery tests |
| No fake retry or model restart is offered | Passed | recovery copy and route test |
| Ctrl+C only sets the cancellation event; no model `task.cancel()` | Passed | gated send test and independent source review |
| Existing live/fake, tool-profile, and private-state boundaries stay intact | Passed | focused and full command floor |
| Editable Draw.io source and inspected SVG preview are current | Passed | XML/cell validation and visual inspection 2026-08-02 |
| Two independent final-slice reviews have no blocker | Passed | both rechecks PASS in `review-ledger.md` |
| Owner records the final decision | Accepted | `decision.md`, 2026-08-02 |
