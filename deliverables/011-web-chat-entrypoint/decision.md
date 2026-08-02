# Owner Decisions: Local browser chat entrypoint

## Appraisal gate

- Owner choice: accepted (behaviour decisions confirmed)
- Date: 2026-08-02
- Accepted Weaver behaviours: the design language of the ChatGPT UI
  reference (768 px centered column on black, capsule composer with a send
  arrow, user bubble right / bare assistant text left, hairline
  separators, the dark palette verbatim) within Plan 011's scope. Copy as
  a local browser action is admitted. The sidebar and its chrome are not
  part of Plan 011; the plan's one-column proof has no sidebar.
- Plan 013 deferrals: the sidebar (250 px and its chrome), regenerate and
  settings behaviours, voice, the intelligence selector, hosted-service
  settings rows, Markdown rendering, PWA installation, and any framework
  decision.
- Rejected behaviours: everything implying a hosted multi-owner service;
  CDN, CORS, or third-party assets; pretending an interrupted turn can
  resume.
- Unproven states: sub-768 px responsive collapse beyond the confirmed
  52 px rail was not dev-measured; the fixed-state probe list was
  superseded by the owner's captures and the extractor pass (recorded in
  learning.md).

## Final experiment gate

- Owner choice: pending
- Date: pending
- Reason: pending

Passing code does not accept Plan 011. Both decisions must be recorded at
their proper gates.
