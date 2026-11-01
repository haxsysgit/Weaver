"""Skill definitions and the combined plan for one reader turn.

A skill is a small, loadable set of instructions: when to use it, what the
answer must do, how long it may run, and two or three worked examples. The
model sees only the catalogue line until it calls ``load_skill``.
"""

from __future__ import annotations

from dataclasses import dataclass


CANON = "canon"
FANFIC = "fanfic"

CARRY_SHAPE = (
    "Two to four sentences that answer only what the reader just asked. Do "
    "not restate or repeat the previous answer."
)

# Higher rank wins when several skills are loaded together.
REASONING_RANKS = {
    None: 0,
    "ascended": 1,
    "transcendent": 2,
}


@dataclass(frozen=True, slots=True)
class SkillExample:
    """One worked exchange the model can copy the shape of."""

    reader: str
    weaver: str


@dataclass(frozen=True, slots=True)
class Skill:
    """One loadable reading skill."""

    id: str
    title: str
    domain: str
    scope: str
    description: str
    instructions: tuple[str, ...]
    shape: str
    quote_rule: str
    examples: tuple[SkillExample, ...]
    tool_budget: int
    reasoning_tier: str | None
    packet_cap: int
    final_pass: bool = True
    needs_evidence: bool = True


@dataclass(frozen=True, slots=True)
class SkillPlan:
    """The merged profile of one or more loaded skills.

    Merge rules are deliberately generous. The biggest read wins the budget,
    the cap, the reasoning tier, and the answer shape, because a quick recall
    added to an arc summary must not shrink the arc summary.
    """

    skills: tuple[Skill, ...]
    # Set when the turn is a short follow-up to the previous answer:
    # "carry" ("why", "huh", "tldr") or "push" ("prove it", "you're wrong").
    follow_up: str | None = None

    @property
    def ids(self) -> tuple[str, ...]:
        return tuple(skill.id for skill in self.skills)

    def _widest(self) -> Skill:
        return max(self.skills, key=lambda skill: skill.tool_budget)

    @property
    def tool_budget(self) -> int:
        return self._widest().tool_budget

    @property
    def packet_cap(self) -> int:
        return self._widest().packet_cap

    @property
    def reasoning_tier(self) -> str | None:
        widest = self._widest()
        for skill in self.skills:
            if REASONING_RANKS[skill.reasoning_tier] > REASONING_RANKS[
                widest.reasoning_tier
            ]:
                widest = skill
        return widest.reasoning_tier

    @property
    def final_pass(self) -> bool:
        return any(skill.final_pass for skill in self.skills)

    @property
    def needs_evidence(self) -> bool:
        return any(skill.needs_evidence for skill in self.skills)

    @property
    def shape(self) -> str:
        # A carried follow-up keeps the earlier read's budget and thinking,
        # but not its long answer shape: "why" after a verdict is not a
        # second verdict.
        if self.follow_up == "carry":
            return CARRY_SHAPE
        return self._widest().shape

    @property
    def quote_rule(self) -> str:
        return self._widest().quote_rule

    @property
    def obligations(self) -> tuple[str, ...]:
        merged: list[str] = []
        for skill in self.skills:
            for instruction in skill.instructions:
                if instruction not in merged:
                    merged.append(instruction)
        return tuple(merged)
