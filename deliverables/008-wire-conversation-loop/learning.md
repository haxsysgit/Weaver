# Learning: Wire the conversation loop

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

## Questions

### 1. ItemRecord to ConversationMessage mapping

Which fields map where? What are the edge cases?

### 2. Persist callback design

Where in the coordinator phase lifecycle does each message kind land?
How does the callback get the conversation_id, run_id, and turn_id?

### 3. End-to-end test shape

What does the fake model's response sequence look like? What assertions
prove tool dispatch went through the real ToolRegistry?

## Answers

Pending.

## Confirmation record

- Owner choice: pending
- Date: pending
