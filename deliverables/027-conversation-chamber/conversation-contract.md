# Conversation Chamber contract

## Checkpoint one boundary

The Chamber changes the existing live chat presentation. It keeps the current
message data, turn controller, Markdown parser, browser-local key helper, and
composer actions.

## DOM and visual structure

- A Weaver reply is an `article` with a decorative, unframed mask mark, a
  vertical response spine, a small Weaver label, readable Markdown text, and
  reply actions.
- The reply has no rounded panel, visible border, or glass background behind
  the answer. The Spellweave remains visible around the text.
- A reader message is an `article` aligned right with rune text directly on the
  Spellweave. It keeps copy access and clear text contrast with no card surface,
  border, glass fill, or enclosing frame.
- A visible `chapter 709` or `ch. 709` string can become a compact reference
  knot. The knot repeats its label, has no chapter URL, and makes no canon
  claim.
- The Composer carries an Edition, reader-chapter, spoiler-boundary, and
  bound-or-unbound context strip. It receives key status only, never a key.

## Failure language

- Connection loss says the answering thread lost contact and offers retry.
- Model failure says DeepSeek could not answer and asks the reader to check the
  bound key or account balance before retrying.
- A busy thread asks the reader to wait for the current answer.
- A missing thread offers another thread or a new weave rather than retrying
  the missing one.
- Interrupted, execution-limit, saved-state, and unknown failures each keep
  their own safe copy and suitable actions.
- Raw exception text, provider payloads, keys, and server internals never enter
  the DOM.

## State and motion contract

| Reader event | Chamber state | Spellweave effect |
| --- | --- | --- |
| Composer focus | focused | Quiet edge threads draw toward the composer. |
| Send | sending | The reader shard settles into the transcript. |
| Streaming | streaming | The latest Weaver spine extends with the response. |
| Completion | completed | The response spine settles. |
| Failure | failed | A restrained crimson fault mark appears near recovery. |

Reduced motion changes state immediately and creates no timed foreground loop.

## Safety and preservation

- `Markdown.tsx` continues rendering typed React nodes. It adds no HTML path.
- Unsafe URLs remain text.
- Copy, quote, regenerate, cancel, retry, auto-scroll, and keyboard behavior
  remain existing regression contracts.
- The plan reads bound status from `identity.ts`; keys remain browser-local and
  stay out of props, DOM text, logs, snapshots, and server state.

## Responsive composition

- Phone keeps the response spine at the left of Weaver text and limits reader
  shards to a reachable, readable width.
- Desktop uses the same markup with a wider reading measure.
- Touch actions are at least 48px, input text is at least 16px, and long text
  cannot cause horizontal page overflow.
