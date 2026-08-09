"""Reading-packet assembly for Plan 15's final reading phase.

After the open reading loop produces a validated answer candidate, this
module assembles one ephemeral reading packet from the turn's evidence:

- every passage the model opened via read_chapters, re-opened with an
  expanded window (the dominant retrieval miss was the answer landing
  just below the cutoff, so each passage grows by EXPAND_LINES)
- the top notebook statements the searches surfaced (they often carry
  the answer text)
- the spoiler judge's verdict for the answer framing, from the user's
  position and knob (never a model argument)

The packet is plain text appended to the final toolless reading call and
is never persisted. Tier picks the size cap.
"""

from __future__ import annotations

from dataclasses import dataclass

from weaver.spoilers.judge import Citation, SpoilerJudge, Verdict

# Lines added above and below each opened passage when re-reading it.
EXPAND_LINES = 20

# Char caps per tier; rough 3.5 chars/token. Packet assembly trims the
# oldest passages first when over cap.
PACKET_CHAR_CAPS = {"awakened": 180_000, "ascended": 360_000, "transcendent": 700_000}

MAX_NOTEBOOK_STATEMENTS = 5
MAX_OPENED_PASSAGES = 12

VERDICT_FRAMING = {
    "full": (
        "The reader is at chapter {chapter}; all cited material is at or "
        "before it, so answer completely."
    ),
    "guarded": (
        "The reader is at chapter {chapter}, and parts of this material "
        "come from later in the story. Answer the question but protect "
        "the story beats: hint, do not state the payoff, and close with "
        "an offer to give the full spoil if they ask."
    ),
    "ask_first": (
        "The reader is at chapter {chapter}, and answering would spoil a "
        "major story beat (a death, reveal, twist, or arc payoff). Warn "
        "them and ask whether they want the spoil before answering."
    ),
}


@dataclass(frozen=True)
class Packet:
    text: str
    verdict: Verdict


def _beat_lines(judge: SpoilerJudge | None, chapter: int) -> str:
    """One 'beat: <title>' line per story beat covering the chapter."""
    if judge is None:
        return ""
    lines = [f"beat: {beat['title']}" for beat in judge.beats_for(chapter)]
    return "\n".join(lines) + ("\n" if lines else "")


def _collect_evidence(tool_results: list) -> tuple[list[tuple[int, int, int]], list[dict]]:
    """Handles the model opened plus notebook hits it surfaced."""
    handles: list[tuple[int, int, int]] = []
    notebook_hits: list[dict] = []
    seen: set[str] = set()
    for tr in tool_results:
        result = tr.result or {}
        if tr.error_code is not None:
            continue
        evidence = result.get("durable_evidence")
        if isinstance(evidence, dict):
            if evidence.get("source_kind") == "novel" and evidence.get("passage_handle"):
                key = str(evidence["passage_handle"])
                if key not in seen:
                    seen.add(key)
                    # durable evidence carries chapter/line_start/line_end
                    handles.append(
                        (
                            int(evidence["chapter"]),
                            int(evidence["line_start"]),
                            int(evidence["line_end"]),
                        )
                    )
        hits = result.get("notebook_hits") or result.get("hits") or []
        if result.get("notebook_hits") is not None:
            for h in hits:
                if h.get("statement_id") and h["statement_id"] not in seen:
                    seen.add(h["statement_id"])
                    notebook_hits.append(h)
    return handles, notebook_hits


def build_packet(
    service,
    tool_results: list,
    *,
    user_chapter: int | None = None,
    spoiler_mode: str = "protect",
    tier: str = "ascended",
    judge: SpoilerJudge | None = None,
    cap_override: int | None = None,
) -> Packet | None:
    """Assemble the reading packet from the turn's evidence.

    Returns None when the turn produced no evidence (the candidate stands
    as the answer). Deterministic: same evidence, same packet.
    """
    handles, notebook_hits = _collect_evidence(tool_results)
    if not handles and not notebook_hits:
        return None

    cap = cap_override or PACKET_CHAR_CAPS.get(tier, PACKET_CHAR_CAPS["ascended"])
    parts: list[str] = []
    citations: list[Citation] = []

    # 1. Opened passages, expanded windows, oldest first so trimming
    # drops the earliest reads. Beat lines give the final reading call the
    # semantic shape of the story around the passage.
    opened = []
    for chapter, start, end in handles[:MAX_OPENED_PASSAGES]:
        passage = service.index.open_lines(
            chapter,
            max(2, start - EXPAND_LINES),
            end + EXPAND_LINES,
        )
        opened.append(
            f"--- chapter {chapter}, lines {passage.line_start}-{passage.line_end} ---\n"
            f"{_beat_lines(judge, chapter)}{passage.text}"
        )
        citations.append(Citation(chapter=chapter))
    parts.extend(opened)

    # 2. Top notebook statements surfaced by the searches.
    statements = []
    for h in notebook_hits[:MAX_NOTEBOOK_STATEMENTS]:
        st = service.notebook.by_id.get(h.get("statement_id", ""), {})
        text = st.get("statement", "") or h.get("text", "")
        if not text:
            continue
        statements.append(
            f"--- notebook statement {h.get('statement_id')} "
            f"[{h.get('kind') or st.get('kind', '')}] ch {h.get('chapter')} ---\n"
            f"{_beat_lines(judge, int(h['chapter']))}{text}"
        )
        citations.append(
            Citation(chapter=int(h["chapter"]), statement_id=h.get("statement_id"))
        )
    parts.extend(statements)

    # 3. Judge verdict + framing.
    if judge is None:
        judge = SpoilerJudge()
    verdict = judge.decide(
        citations,
        user_chapter=user_chapter,
        no_spoilers=spoiler_mode == "none",
    )
    framing = VERDICT_FRAMING[verdict.mode].format(chapter=user_chapter)
    parts.append(f"--- spoiler framing ---\n{framing}")

    # 4. Size cap: keep the framing and statements, trim old passages.
    text = "\n\n".join(parts)
    if len(text) > cap:
        kept = [parts[-1]]  # framing
        kept.extend(statements)
        for p in reversed(opened):
            if len("\n\n".join(kept)) + len(p) + 2 > cap:
                break
            kept.append(p)
        kept.reverse()
        text = "\n\n".join(kept)
    return Packet(text=text, verdict=verdict)
