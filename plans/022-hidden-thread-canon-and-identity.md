# Plan 022: Hidden Thread canon and identity

> **Executor instructions:** Read the six bounded Shadow Slave chapters from
> start to finish, separate source-backed facts from Weaver product fiction,
> and put the result through an owner learning gate. This plan writes no code
> and saves no novel prose in tracked files.

## Status

- **Tooling:** local private chapter reads; repo inspection via `rg`; document
  checks via `git diff --check` and explicit staged-file audits.
- **State:** closed 2026-08-18 (owner accepted).
- **Depends on:** Plan v1, Plan 018.5, and Plan 020 closed 2026-08-18. Their
  close records preserve the v1 release and the explicit scope cuts.
- **Priority:** P1. Plans 023-029 use this identity and visual language.
- **Effort:** S.
- **Risk:** Medium. A wrong canon reading would flow into the rite, product
  copy, and visual symbols.
- **Budget:** 50k-90k agent-context tokens across the primary read, writing,
  and fresh independent review. Estimated agent cost is $0.05-$0.30 at the
  measured DeepSeek reading scale, with a hard cap of $1. Agent-context work
  is live and billed. The product harness makes zero model calls, no raw API
  call is allowed, and no DeepSeek key is used by Weaver. Record measured
  usage in `results.md` when the plan closes.

## Owner direction (locked decisions)

1. (2026-08-18) Weaver is the stable reading-companion identity. Shadow Slave
   is its first supported novel, with more novels such as Lord of the
   Mysteries expected later.
2. (2026-08-18) Use these permanent product terms: Weaver is the companion,
   The Loom is its supported library, an Edition is the active novel and its
   presentation, Threads are conversations, and Memories are saved reader
   preferences and important discussions.
   Lord of the Mysteries is the intended second Edition and Kill the Sun is
   the intended third; neither is implemented or advertised by this lane.
3. (2026-08-18) `shadow-slave` is the stable internal Edition id for the first
   supported novel. It is a product identifier, not reader-facing title copy.
4. (2026-08-18) Shadow Slave uses the Hidden Thread product fiction and the
   Spellweave visual setting. Canon and product fiction must remain visibly
   separate.
5. (2026-08-18) Verify the proposed lore against bounded source reading around
   chapters 1285, 1298, 1311, 1337, 2412, and 2589 before later plans copy it.
6. (2026-08-18) The approved board at
   `private/design-references/hidden-thread-mobile-approved.png` is a private,
   reference-only composition target. Production work must make original
   code-native art and must not ship pixels from the supplied mask or cover
   references.
7. (2026-08-18) The approved board does not replace the living Nightmare Spell
   background. Later visuals keep cosmic depth, sharp Spellweave threads,
   rune fragments, silver interaction, old-gold appraisal, and restrained
   crimson for danger or corruption.

## Scope

- Read these exact private source files fully, including each closing scene:
  - `novels/shadow-slave/1201-1300/chapter-1285.txt`
  - `novels/shadow-slave/1201-1300/chapter-1298.txt`
  - `novels/shadow-slave/1301-1400/chapter-1311.txt`
  - `novels/shadow-slave/1301-1400/chapter-1337.txt`
  - `novels/shadow-slave/2401-2500/chapter-2412.txt`
  - `novels/shadow-slave/2501-2600/chapter-2589.txt`
- Check the proposed claims about Weaver's early apostles, Ananke and the
  priesthood, black mantles, the High Priests' masks, and the later scale of
  the Nightmare Spell.
- Record each accepted source-backed claim as a short paraphrase with its
  chapter location and verification state. Record disagreements and gaps too.
- Write the Hidden Thread origin as explicit product fiction built only on
  accepted source scaffolding.
- Define Weaver, The Loom, Edition, Threads, and Memories in plain product
  terms, including the boundary between stable product identity and an
  Edition-specific visual language.
- Lock `shadow-slave` as the stable internal Edition id used by downstream
  persistence and frontend contracts.
- Record the approved Shadow Slave visual rules and the reference-only status
  of the private concept board.
- Create `deliverables/022-hidden-thread-canon-and-identity/canon-and-identity.md`
  after the owner learning gate. It may contain short source paraphrases and
  chapter numbers. It must contain no verbatim novel prose.
- Run a fresh independent source review before the final owner decision.

## Out of scope

- Frontend, backend, database, prompt, retrieval, or deployment changes.
- Reading any chapter outside the six named files without a new owner-approved
  packet.
- Copying WebNovel pages, wiki claims, cover art, mask art, or novel prose into
  the repository.
- Treating the Hidden Thread origin as novel canon.
- Designing the final rite, chat, archive, desktop layout, or motion system.
  Plans 024-029 own that work after this identity record is accepted.
- Adding Lord of the Mysteries support or a fake Edition switcher.

## Deterministic proof / verification floor

1. All six bounded source files exist before reading:

   ```bash
   test -f novels/shadow-slave/1201-1300/chapter-1285.txt
   test -f novels/shadow-slave/1201-1300/chapter-1298.txt
   test -f novels/shadow-slave/1301-1400/chapter-1311.txt
   test -f novels/shadow-slave/1301-1400/chapter-1337.txt
   test -f novels/shadow-slave/2401-2500/chapter-2412.txt
   test -f novels/shadow-slave/2501-2600/chapter-2589.txt
   ```

2. The primary reader records start-to-EOF completion for all six chapters in
   the private session evidence. `results.md` records only chapter numbers,
   completion, decisions, and commands.
3. Every canon row in `canon-and-identity.md` has a chapter location and one of
   `confirmed`, `corrected`, or `unsupported`. Every fiction paragraph is
   labelled `product fiction`.
   The same record names `shadow-slave` as the accepted stable Edition id.
4. The owner sees the bounded supporting quotes privately, confirms or corrects
   the canon reading, and explicitly approves the product-fiction text before
   the public-safe record is finalized.
5. A fresh reviewer rereads the same six files through EOF and records findings
   in `review-ledger.md`. The primary executor verifies every finding against
   the source before repair.
6. The approved concept remains ignored and untracked:

   ```bash
   git check-ignore -q private/design-references/hidden-thread-mobile-approved.png
   ```

7. Document and staging checks pass:

   ```bash
   git diff --check
   git status --short
   git diff --cached --name-only
   ```

   The staged list must contain no file under `novels/`, `.weaver/`,
   `private/`, no environment file, and no private reading receipt.
8. The owner records the final accept or reject decision with date and reason
   before the plan closes.

## STOP conditions

- Any required claim needs a chapter outside the six-file packet. Record the
  gap and ask the owner to approve a revised packet.
- A chapter is missing, truncated, a placeholder, or fails to reach a real
  scene ending.
- The primary read and independent read disagree after one source recheck.
- The proposed lore needs an unsupported canon claim to make sense.
- Any source quote, novel prose, private receipt, credential, or raw reasoning
  appears in a tracked file or staged diff.
- The owner has not approved the canon split and product-fiction copy at the
  learning gate. Later design work stays blocked.
- Another admitted plan still owns the same gate or files.

## Slices

1. **Plan and admit**: review this draft with the owner after its dependencies
   close. On admission, add the 022-029 drafted rows to the shared plan index,
   move the later Reader Trials and durable-memory rows below this lane, and
   update deliverable states. Audit the staged files, then commit only
   admission-owned records with
   `Plan 022: admit hidden thread canon and identity`.
2. **Prepare the bounded packet**: confirm the six exact files exist, record
   their chapter numbers in private session evidence, and refuse any automatic
   expansion. No source content enters a tracked file.
3. **Primary source read**: one primary executor reads all six chapters from
   start to EOF. For each proposed claim, capture the minimum private quote and
   a public-safe paraphrase. Record corrections and missing support instead of
   smoothing them over.
4. **Canon split draft**: draft the claim table with chapter locations and
   status. Keep observation, interpretation, and product fiction in separate
   sections. Do not write the final origin copy yet.
5. **Identity and visual rules draft**: define Weaver, The Loom, Edition,
   Threads, and Memories; lock the `shadow-slave` Edition id; define the Shadow
   Slave Spellweave setting; state
   that the approved image guides composition and mood while the production art
   stays original.
6. **Owner learning gate**: show the owner the minimum bounded source quotes in
   private conversation, then show the canon paraphrases and Hidden Thread
   fiction. STOP until the owner explicitly confirms or corrects both.
7. **Write the accepted record**: create
   `deliverables/022-hidden-thread-canon-and-identity/canon-and-identity.md`
   from the owner's decision. Run `git diff --check`, audit only Plan 022 files,
   and commit with `Plan 022: record hidden thread canon and identity`.
8. **Independent review**: a fresh reviewer reads the same six chapters fully,
   checks every accepted canon row, the canon-fiction labels, terminology, and
   image rule, then writes findings without source prose. The primary executor
   rechecks and repairs each valid finding.
9. **Verify and close**: run the full document floor, record measured agent
   usage, stage only Plan 022 files, audit for private content, and ask for the
   owner's final decision. After acceptance or rejection is recorded, commit
   with `Plan 022: close after owner decision`.
