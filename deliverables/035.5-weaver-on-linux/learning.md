# Learning Note

## Gate status

**Admitted 2026-11-18** on the owner's word in session: "Fix them, starting
with the refresh timer, using `pathlib` and `sys.platform` branches rather
than new hardcoded paths ... Commit the Linux work on its own, in the way
this repo does (a short plan if it's big enough)."

## Locked decisions

See the plan's Owner direction. Open owner questions are listed at the end
of `results.md`.

## Observations versus hypotheses

- **Observed:** the 49 whitespace-only diffs are whole-file CRLF; removing
  every CR makes each byte-identical to `HEAD`. Their timestamps (2026-10-29
  to 2026-11-07) predate the move, and the Windows checkout already had
  `core.autocrlf=false`, so git showed them there too.
- **Observed:** 12 committed files are CRLF in the index, all scaffolded
  plan deliverables; `scripts/scaffold_plan.py` uses `Path.write_text`
  without `newline=`, which writes CRLF on Windows and LF on Linux.
- **Hypothesis (not tested):** the other CRLF working copies came from
  Windows-side tools the same way (Python text-mode writes or an editor
  setting). It does not change the proposal.
