# Cross-checking executed plans

After executing a batch of plans, run a comprehensive cross-check against
every plan's done criteria — not just verification commands. This catches
gaps that pytest/compile/lint alone won't find.

## Why it matters

Verification commands can pass while done criteria are unmet. From the HaxJobs
cleanup wave:

- `python3 -m pytest -q` passed (199 tests)
- But `list_outreach_drafts` SQL was NOT selecting `pack_dir` from the DB
- The response dict had `packDir` (added during plan execution), but the SQL
  query still only selected `j.outreach_status, j.pack_status` — packDir was
  always returning `""`
- This gap only surfaced during explicit cross-check, not from running tests

## Pattern

For each plan:

1. Re-read the plan's done criteria checklist (the `[ ]` items at the bottom)
2. For each criterion, grep or read the actual source to confirm the change
3. Pay special attention to:
   - SQL queries — did all queries get updated, or just one?
   - Both call sites — if a function has two callers, did both get patched?
   - Response shapes — does the API actually return the new field?
   - Edge case paths — missing draft IDs, no-pack states, null values
4. Flag and fix any gap before marking the plan DONE
5. Re-run verification after each fix

## Script template

```bash
#!/usr/bin/env bash
PASS=0; FAIL=0
check() { desc="$1"; cond="$2"
  if eval "$cond"; then echo "  [PASS] $desc"; PASS=$((PASS+1))
  else echo "  [FAIL] $desc"; FAIL=$((FAIL+1)); fi
}

# Plan 001 checks
check "pytest exits 0" 'python3 -m pytest -q >/dev/null 2>&1'
check "README includes pytest" 'grep -q "python3 -m pytest" README.md'
# ... per-plan done criteria as grep checks ...

# Then verify nothing broke
check "full pytest" 'python3 -m pytest -q >/dev/null 2>&1'
echo "$PASS passed, $FAIL failed"
```

## Pitfalls

- **Don't trust `replace_all` blindly.** When patching with `replace_all=true`,
  verify both call sites got the right change, not just one.
- **Don't trust that a test passing means the field is populated.** The test
  might use a monkeypatched DB that doesn't exercise the real query path.
- **Grep checks can have quoting bugs in subshells.** If a check fails, run
  the grep directly before concluding it's a real gap.
