# Learning: TUI entrypoint

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

## Questions

### 1. Textual integration

How does an async Textual app share the event loop with SessionWeave?
Where does cancellation (Ctrl+C) set the cancel event?

### 2. Streaming

Can run_turn() stream text deltas to the TUI, or does the TUI block
during model calls? What's the user experience for 5--30 second waits?

### 3. Mode selection

How does the CLI decide between fake, live-DeepSeek, and
live-other-provider modes based on available credentials?

## Answers

Pending.

## Confirmation record

- Owner choice: pending
- Date: pending
