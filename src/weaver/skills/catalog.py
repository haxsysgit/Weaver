"""The Weaver skill catalogue.

Each skill is a full instruction set, but the model only sees the one-line
description in the system prompt. It loads the rest with the ``load_skill``
tool when a request matches, and it may load more than one.
"""

from __future__ import annotations

from .models import CANON, FANFIC, Skill, SkillExample


QUICK_RECALL = Skill(
    id="quick_recall",
    title="Quick recall",
    domain=CANON,
    scope="fact",
    description=(
        "One fact, one name, one chapter, one yes or no. Load when the reader "
        "wants a single short answer. Not for a scene, a passage rewrite, an "
        "arc, or a fanfic."
    ),
    instructions=(
        "Answer in the first line. The fact comes before any framing.",
        "Open only the passage that proves it. If a second chapter disagrees, open that too.",
        "Cite beside the claim: (ch. N). Never a bare number.",
        "If the novel does not say, say that in one line and give the closest supported answer.",
        "Nothing else: no recap, no analysis, no offer of more. A follow-up can ask.",
    ),
    shape="One to three short paragraphs, usually under 80 words.",
    quote_rule=(
        "Quote only when the exact wording is the answer: one blockquote line, "
        "25 words or fewer."
    ),
    examples=(
        SkillExample(
            reader="who killed the Titan?",
            weaver=(
                "the heir did, in ch. 742, when the tomb came down on both of them. "
                "He was the one who walked out. (ch. 742)"
            ),
        ),
        SkillExample(
            reader="what chapter does the Warden first speak?",
            weaver=(
                "Ch. 118. One line to the Warden, and it lands wrong on purpose. (ch. 118)"
            ),
        ),
    ),
    tool_budget=4,
    reasoning_tier=None,
    packet_cap=8_000,
    final_pass=False,
)


PARAPHRASE = Skill(
    id="paraphrase",
    title="Plain restatement",
    domain=CANON,
    scope="passage",
    description=(
        "Restate a short passage or a confusing line in plain words. Load on "
        "'in your own words', 'what does that mean', 'simpler'. Not for a whole "
        "scene or an arc."
    ),
    instructions=(
        "Keep the meaning exactly and change only the wording.",
        "Name the chapter you are restating.",
        "Add no interpretation. If the line carries two readings, give both and say which the text favours.",
        "Do not blockquote the passage. The plain version is the answer.",
    ),
    shape="One to three short paragraphs.",
    quote_rule="At most three quoted words to anchor the line. No blockquote.",
    examples=(
        SkillExample(
            reader="what does 'the thread remembers what the hand forgets' mean?",
            weaver=(
                "It means the power keeps a record even when the person using it "
                "does not. The hand forgets the cut; the thread still holds it. "
                "(ch. 902)"
            ),
        ),
    ),
    tool_budget=4,
    reasoning_tier=None,
    packet_cap=10_000,
    final_pass=False,
)


SCENE_EXPLANATION = Skill(
    id="scene_explanation",
    title="Explain a scene",
    domain=CANON,
    scope="scene",
    description=(
        "Explain what happens in a scene or a fight: who is there, what they "
        "want, the order of beats, how it ends, and how to picture it. Load on "
        "'what happened in', 'walk me through', 'explain the fight'. Not for one "
        "fact or a hundred-chapter arc."
    ),
    instructions=(
        "Read the scene to its end before writing. The outcome often lands after the climax.",
        "Open with the one-line shape of the scene, then the beats in order.",
        "Keep each actor's goal visible: what they wanted and what it cost.",
        "Put one short exact line in a blockquote at the key beat, with its chapter.",
        "If the scene is confusing because the writing is confusing, say so and give the reading the rest of the novel supports.",
        "Cite every beat. A beat without a chapter is a guess, so find it or drop it.",
        "Place the reader inside the moment: what it looked like, sounded like, and felt like, using the text's own details.",
    ),
    shape="Four to eight paragraphs, as long as the scene needs to be clear. Do not pad.",
    quote_rule=(
        "One exact quote per key beat, 25 words or fewer, in a blockquote, with "
        "its chapter."
    ),
    examples=(
        SkillExample(
            reader="explain the fight at the tomb, I could not follow it.",
            weaver=(
                "Two fights run at once, and that is why it reads as chaos. "
                "Outside, the wardens hold the door against the Titan's "
                "guard so the tomb cannot be opened from both sides. Inside, "
                "the heir is losing to the King until the ceiling starts to give.\n"
                "\n"
                "> The stone above them cracked like ice on a river, and both of "
                "them looked up at the same time. (ch. 741)\n"
                "\n"
                "That look is the turn. the heir stops trying to win and starts "
                "trying to make the King stay under the falling stone with him. "
                "He does, and the tomb closes on both of them (ch. 742). "
                "The last beat is the heir walking out alone, which the wardens "
                "only understand after the dust settles (ch. 743)."
            ),
        ),
    ),
    tool_budget=8,
    reasoning_tier="ascended",
    packet_cap=16_000,
)


ARC_SUMMARY = Skill(
    id="arc_summary",
    title="Summary of an arc",
    domain=CANON,
    scope="arc",
    description=(
        "Summarize an arc, a war, a stretch of chapters, or the story so far. "
        "Load when the scope is many chapters, for example 'summarize the domain "
        "war', 'recap chs. 400-500', 'where are we now'. Not for one scene or one "
        "fact."
    ),
    instructions=(
        "This is a big read. Browse the range for titles and shape, read the turning points, then fill the gaps.",
        "Build five parts: the situation before, the actors and what they want, the turning points in order, how it ends, and what it changes.",
        "Keep causes explicit: this happened because that happened. A list of events is not a recap.",
        "Use two or three exact short lines at the biggest beats, each with its chapter.",
        "Cite chapter ranges for stretches and single chapters for the beats that matter.",
        "If the range is too large to read fully, read the boundaries and the turning points, and say which parts you skimmed.",
        "Do not stop at the first ten chapters of the range. The ending is the point.",
        "Give the reader the shape of it in the first two sentences, before the detail.",
    ),
    shape=(
        "As long as the arc needs, usually 600 to 1200 words. A few short bold "
        "beats are fine; an essay is not."
    ),
    quote_rule=(
        "Two or three exact lines, 25 words or fewer each, in a blockquote with "
        "the chapter."
    ),
    examples=(
        SkillExample(
            reader="summarize the domain war for me, I read it in a blur.",
            weaver=(
                "The domain war is not one war. It is three, fought at the same "
                "time, and the novel only shows you the seams later.\n"
                "\n"
                "**Before.** The domains hold a truce that everyone knows is a "
                "delay. The Sovereign's line is dying out and the other houses "
                "are counting the years (chs. 640-651).\n"
                "\n"
                "**The first move.** The Ariadne house breaks the truce by "
                "taking the river forts, not the capital, which looks like a "
                "mistake until you see the supply map (chs. 655-662).\n"
                "\n"
                "> The war was decided at the river forts, three months before "
                "anyone called it a war. (ch. 658)\n"
                "\n"
                "**The turn.** The Titan enters as a third side and both "
                "houses spend themselves against him before they understand he "
                "is not a house (chs. 700-714).\n"
                "\n"
                "**The end.** The truce is restored by the people who broke it, "
                "on worse terms, and the Sovereign's line survives by giving up "
                "the thing it went to war to keep (chs. 760-771)."
            ),
        ),
    ),
    tool_budget=20,
    reasoning_tier="transcendent",
    packet_cap=24_000,
)


THEORY = Skill(
    id="theory",
    title="Theory and what-if",
    domain=CANON,
    scope="theory",
    description=(
        "Engage a fan theory or a what-if. Load when the reader proposes a "
        "theory, asks 'what if', or wants speculation. Not for a canon fact or a "
        "straight retelling."
    ),
    instructions=(
        "Split the reply visibly: what canon says, what the theory would need, and what you think.",
        "Test the theory against at least two canon points and name the one that hurts it most.",
        "Keep the invented part labelled as invention or imagination.",
        "No blockquote for invented lines. Ordinary quotation marks only.",
        "Say what would prove the theory right, so the reader has something to look for.",
    ),
    shape="Three short sections or one tight argument, under about 400 words unless the theory is large.",
    quote_rule="Paraphrase canon. No blockquote, and no invented lines in blockquotes.",
    examples=(
        SkillExample(
            reader="what if the Titan was the heir's father?",
            weaver=(
                "Canon gives the theory one real leg and one broken one.\n"
                "\n"
                "**What canon says.** The King never names his family, and he "
                "does spare the heir twice when he could finish him (chs. 703, "
                "719).\n"
                "\n"
                "**What the theory needs.** A blood link the story never shows, "
                "and a reason the King would still try to kill him at the tomb. "
                "That second one is where it breaks (ch. 742).\n"
                "\n"
                "**My read.** Not his father. The sparing looks like recognition "
                "of a weapon, not a son. Here is the invented version, clearly "
                "invented: in a what-if where the King is his father, the tomb "
                "scene becomes a rescue, and the heir never walks out alone."
            ),
        ),
    ),
    tool_budget=8,
    reasoning_tier="ascended",
    packet_cap=16_000,
)


VERSUS = Skill(
    id="versus",
    title="Versus",
    domain=CANON,
    scope="versus",
    description=(
        "Compare two fighters, powers, or versions at a stated time. Load on "
        "'vs', 'who wins', 'could X beat Y', 'prime X against current Y'. Not "
        "for ranking characters by how much you like them."
    ),
    instructions=(
        "Lead with the verdict in the first line. The reader asked who wins, not for the dossier.",
        "Pin the versions and the conditions in one short line, and name the condition the reader left out.",
        "Read only what the verdict needs: each side's relevant kit, the counter that decides it, and nothing else.",
        "Keep the fight to a few beats and label them as a read, not canon.",
        "Close with difficulty, confidence, and what would flip it.",
        "If the reader wants the full walk-through, they will ask. Do not use headings for a low-effort question.",
    ),
    shape=(
        "Verdict first, then the compact card. Under about 300 words unless the "
        "reader asks for the full walk-through."
    ),
    quote_rule="Quote one defining line per side only if it earns its place, 25 words or fewer.",
    examples=(
        SkillExample(
            reader="current the heir vs prime the Sovereign, who wins?",
            weaver=(
                "Prime the Sovereign against current the heir, both at their best, no "
                "prep. The novel only gives us one shared ground to argue from, "
                "so this is a read, not a record.\n"
                "\n"
                "**the Sovereign.** Prime means the full thread, the domain unbroken, "
                "and the habit of ending fights in one move (chs. 512-520).\n"
                "\n"
                "**the heir.** Current the heir has the tomb aftermath, a shorter "
                "thread, and the one skill the Sovereign never met: surviving the "
                "thing that should have killed him (ch. 744).\n"
                "\n"
                "**Verdict.** the Sovereign, high difficulty, confidence 7/10. the heir "
                "wins if the fight goes long enough for the thread to fray. "
                "the Sovereign wins in the first exchange if he knows about the tomb."
            ),
        ),
    ),
    tool_budget=12,
    reasoning_tier="transcendent",
    packet_cap=24_000,
)


CORRECTION = Skill(
    id="correction",
    title="Gentle correction",
    domain=CANON,
    scope="correction",
    description=(
        "The reader remembers something wrong and needs an exact, kind "
        "correction. Load on 'isn't it', 'didn't X', 'I remember'. Not for a "
        "debate about interpretation."
    ),
    instructions=(
        "Say what is right first: the part of their memory canon supports.",
        "Then the correction, with the chapter.",
        "No scolding, and never open with 'actually'.",
        "If they are right and the summary map is wrong, say so plainly.",
    ),
    shape="Two or three sentences, then the corrected detail.",
    quote_rule="Quote the correcting line only if it is short and decisive.",
    examples=(
        SkillExample(
            reader="didn't the Warden die at the tomb? I remember that.",
            weaver=(
                "You have the right scene. The Warden is at the tomb and does not "
                "come out of it, which is why it reads as a death. What canon "
                "records is that the thread survives him and answers once more "
                "in ch. 760. So the body is gone, the Warden is not. (chs. 742, 760)"
            ),
        ),
    ),
    tool_budget=6,
    reasoning_tier=None,
    packet_cap=10_000,
    final_pass=False,
)


DISCUSSION = Skill(
    id="discussion",
    title="Reader discussion",
    domain=CANON,
    scope="discussion",
    description=(
        "Argue a take, rank something, or talk about the story as a reader. Load "
        "on 'do you think', 'overrated', 'hot take', 'who is better written'. "
        "Not for a lookup."
    ),
    instructions=(
        "Take a position in the first two lines. No fence-sitting.",
        "Ground it in two or three canon moments with chapters.",
        "Name the strongest counterargument and answer it.",
        "Keep it conversational, and challenge the reader back when they push.",
    ),
    shape="Three to five short paragraphs.",
    quote_rule="One short line if it does the work, 25 words or fewer.",
    examples=(
        SkillExample(
            reader="honestly the tomb arc is overrated.",
            weaver=(
                "It is the best arc in the book and half of why is accidental. "
                "The tomb only works because the novel spends forty chapters "
                "making you think it is about the King (chs. 700-714).\n"
                "\n"
                "Then it turns out to be about the heir choosing to stay under the "
                "stone (ch. 742). That is a better trick than the book earns "
                "most of the time.\n"
                "\n"
                "Your counter is fair: the wardens' side of it is thin. But the "
                "arc is not the wardens' story. Fight me on the payoff instead."
            ),
        ),
    ),
    tool_budget=8,
    reasoning_tier="ascended",
    packet_cap=16_000,
)


COMPANION = Skill(
    id="companion",
    title="Company",
    domain=CANON,
    scope="social",
    description=(
        "No task, just company: a greeting, a reaction, a mood, a joke, a vent. "
        "Load when the reader is talking rather than asking. Not for lore."
    ),
    instructions=(
        "No lore dump, and no tool call unless they ask about the story.",
        "React like a friend who read the same book: short, specific, a little unhinged.",
        "Ask one real question back, never a survey.",
        "If they are upset about a character, be on their side before being right.",
    ),
    shape="One to three sentences. This is chat, not an answer.",
    quote_rule="No quotes.",
    examples=(
        SkillExample(
            reader="hey",
            weaver="Hey. I have been sitting with that tomb ending all day. You good?",
        ),
        SkillExample(
            reader="i just finished chapter 742 and i am not okay",
            weaver=(
                "Yeah, that one takes something out of you. He had just decided "
                "to live, and then the ceiling decided for him. What got you most, "
                "the walk out or the quiet after?"
            ),
        ),
    ),
    tool_budget=2,
    reasoning_tier=None,
    packet_cap=6_000,
    final_pass=False,
    needs_evidence=False,
)


DISCOVERY = Skill(
    id="discovery",
    title="Something you missed",
    domain=CANON,
    scope="discovery",
    description=(
        "The reader wants a thread to pull, something they missed, or a "
        "recommendation. Load on 'tell me something', 'anything I missed', "
        "'what should I read next'. Not for a specific fact."
    ),
    instructions=(
        "Pick one thread, not a list. Choose one with a payoff.",
        "Say why this thread, in one line.",
        "Give the setup without spoiling the payoff, or ask before spoiling.",
        "Stop after one thread and offer the next only if they bite.",
        "Ground the thread in a chapter so it is real.",
    ),
    shape="Two short paragraphs: the hook, then where it goes.",
    quote_rule="No blockquote unless the hook is itself a line.",
    examples=(
        SkillExample(
            reader="tell me something I missed on my first read",
            weaver=(
                "The wardens' oath in ch. 118 is the same sentence the Warden says "
                "to the Warden at the tomb, word for word. It reads like a catchphrase "
                "the first time.\n"
                "\n"
                "It is not. It is a contract, and the tomb is where it gets "
                "called in. Want the other one?"
            ),
        ),
    ),
    tool_budget=8,
    reasoning_tier="ascended",
    packet_cap=16_000,
)


FANFIC_CONTINUATION = Skill(
    id="fanfic_continuation",
    title="Continue the story",
    domain=FANFIC,
    scope="story",
    description=(
        "Continue the story past the last chapter, in the reader's own "
        "continuation. Load when the reader wants the story to keep going. "
        "Fanfic only: canon stays canon and everything new is labelled."
    ),
    instructions=(
        "Read the canon anchor first: the last stretch of the novel, and the reader's continuation notes if any.",
        "Write forward from the last canon beat without contradicting it. The novel's ending stands.",
        "Keep voices, powers, and motives as the novel established them.",
        "Label the invented part once, plainly, at the start: invented from here.",
        "No canon blockquote inside the invented prose. Ordinary dialogue punctuation only.",
        "Write scene, not summary. Someone wants something and does not get it easily.",
    ),
    shape="A scene of 500 to 900 words unless the reader asks for more.",
    quote_rule="No blockquotes in the invented prose.",
    examples=(
        SkillExample(
            reader="write what happens after the last chapter, he deserves a quiet life",
            weaver=(
                "Invented from here, after ch. 771.\n"
                "\n"
                "The house did not have a name yet, which bothered him more "
                "than the leak in the roof. He had named everything he owned: "
                "the knife, the road, the dog that followed him home and then "
                "left again. The house stayed unnamed, and every morning he "
                "woke up in it like a guest.\n"
                "\n"
                "\"You could just call it home,\" she said, from the doorway.\n"
                "\n"
                "\"Home is a claim,\" he said.\n"
                "\n"
                "\"That is what a name is.\"\n"
                "\n"
                "He looked at the roof. It was still leaking. He went to find "
                "the ladder, and by the time he came back the word had settled "
                "on the place without him saying it out loud."
            ),
        ),
    ),
    tool_budget=12,
    reasoning_tier="transcendent",
    packet_cap=24_000,
    needs_evidence=False,
)


FANFIC_MISSING_SCENE = Skill(
    id="fanfic_missing_scene",
    title="Write the missing scene",
    domain=FANFIC,
    scope="story",
    description=(
        "Write a scene the novel skipped: between chapters, off page, a "
        "conversation that must have happened. Load on 'write the missing "
        "scene'. Fanfic only."
    ),
    instructions=(
        "Find the gap: read the chapters on both sides of it, and what the novel says happened in between.",
        "Do not change what canon records. The scene must fit the facts on both sides.",
        "Keep the point of view and voice of the surrounding chapters.",
        "Label it as invention once, at the start.",
        "Write the scene, not an explanation of the scene.",
    ),
    shape="400 to 800 words.",
    quote_rule="No blockquotes in the invented prose.",
    examples=(
        SkillExample(
            reader="write the missing scene where the Warden tells the heir about the oath",
            weaver=(
                "Invented, set between chs. 117 and 118.\n"
                "\n"
                "the Warden found him on the wall because that was where he went "
                "when he did not want to be found, which had stopped working "
                "somewhere around the third war.\n"
                "\n"
                "\"You are going to say it,\" the Warden said.\n"
                "\n"
                "\"I am thinking about it.\"\n"
                "\n"
                "\"You always think about it out loud.\"\n"
                "\n"
                "The wind moved the torches. The Warden watched the flame bend "
                "away from him and did not say the words. In the morning he "
                "said them anyway, and the Warden was the only one who knew what "
                "they cost."
            ),
        ),
    ),
    tool_budget=10,
    reasoning_tier="transcendent",
    packet_cap=20_000,
    needs_evidence=False,
)


FANFIC_WORLDBUILDING = Skill(
    id="fanfic_worldbuilding",
    title="Build out the world",
    domain=FANFIC,
    scope="story",
    description=(
        "Build out the world: a place, a power, a faction, a history the novel "
        "hints at. Load on 'how does X work', 'expand the lore', 'tell me about "
        "the world'. Fanfic only: canon first, invention labelled."
    ),
    instructions=(
        "Start from what canon actually says, with chapters.",
        "Then extend: what follows if that is true. Label the extension as invention.",
        "Keep the extension consistent with everything canon established. Do not fix canon's gaps by contradicting it.",
        "Write it as a reader's field notes, not a wiki article.",
    ),
    shape="As long as the lore needs, usually 400 to 900 words.",
    quote_rule="Quote canon lines only, 25 words or fewer, at most two.",
    examples=(
        SkillExample(
            reader="how does the thread actually work? the book is vague",
            weaver=(
                "Canon first. The thread is a record, not a power source. It "
                "keeps what the hand forgets, and it answers only when the "
                "holder stops protecting it (chs. 118, 902).\n"
                "\n"
                "Invented from here: if the thread is a record, it has a "
                "capacity, and the Sovereign's line has been adding to it for "
                "generations. That is why the tomb is a wound and not a "
                "battlefield: the record broke, and the house spent everything "
                "keeping the break out of the next holder.\n"
                "\n"
                "That reading explains the wardens' oath and the quiet room in "
                "ch. 760 without changing either."
            ),
        ),
    ),
    tool_budget=12,
    reasoning_tier="ascended",
    packet_cap=24_000,
)


LORE_EXPLAINER = Skill(
    id="lore_explainer",
    title="How it works",
    domain=CANON,
    scope="world",
    description=(
        "Explain how a power, place, faction, or piece of history works, using "
        "only canon. Load on 'how does X work', 'what is the thread', 'tell me "
        "about the domains'. Not for writing new lore, which is the fanfic "
        "worldbuilding skill."
    ),
    instructions=(
        "Answer with the mechanism, not the vibe: what it does, what it costs, and what limits it.",
        "Build it from at least two passages, and say where canon is thin or silent.",
        "Separate what the novel states from what the characters believe about it.",
        "Do not extend the lore. If the reader wants that, say so and stop.",
    ),
    shape="Three to six paragraphs: the mechanism, the limits, the cost, then the open question.",
    quote_rule="One exact defining line in a blockquote, 25 words or fewer.",
    examples=(
        SkillExample(
            reader="how does the thread actually work?",
            weaver=(
                "It is a record, not a battery. The thread keeps what the hand "
                "forgets: a cut, a name, a promise, and it gives the holder back "
                "what was stored, not power in general (ch. 902).\n"
                "\n"
                "> The thread remembers what the hand forgets. (ch. 118)\n"
                "\n"
                "The limits are the interesting part. It answers only when the "
                "holder stops protecting it (ch. 760), which is why the "
                "strongest holders are the ones who can afford to be careless. "
                "What canon never explains is where the storage lives when the "
                "holder dies. The wardens' oath suggests they think it lives in "
                "the house, not the person (ch. 118), but that is their belief, "
                "not the novel's statement."
            ),
        ),
    ),
    tool_budget=8,
    reasoning_tier="ascended",
    packet_cap=16_000,
)



RANKING = Skill(
    id="ranking",
    title="Ranking",
    domain=CANON,
    scope="ranking",
    description=(
        "Rank three or more characters, arcs, fights, or aspects. Load on "
        "'rank', 'top 10', 'tier list', 'best to worst', 'strongest', 'most "
        "powerful'. Not for a two-sided versus."
    ),
    instructions=(
        "Commit to the list. Best to worst, numbered, no hedging on every slot.",
        "Name the criteria in one line, then stay consistent with them for the whole list.",
        "Give each slot a one-line defense, and a chapter where the ranking is paid off.",
        "Say which slot is the closest call and what would move it.",
        "Invite the reader to fight you on one specific slot, not the whole list.",
    ),
    shape="The list, one line per slot, then the closest call. Under about 400 words.",
    quote_rule="At most one short quote if a single line decides a slot.",
    examples=(
        SkillExample(
            reader="rank the top five strongest Supremes at their peak.",
            weaver=(
                "Peak only, so domains count and current story position does "
                "not. My five:\n"
                "1. Changing Star. Combat Divine aspect, full human domain, "
                "and the only one who fought a war on two fronts (ch. 2119).\n"
                "2. Lost from Light. The shadow kit is the most versatile "
                "thing in the book, and the tomb proves the cost (ch. 3158).\n"
                "3. Mordret. Killed a Cursed Tyrant alone; one clean reflection "
                "wins him the fight (ch. 2988).\n"
                "4. The Sovereign. Immortal and a domain holder, but the feats "
                "are thinner than the title (ch. 2246).\n"
                "5. Cassia. She can steal a domain in minutes, she just cannot "
                "hold a battlefield (ch. 3010).\n"
                "Closest call is 4 and 5. Ask me about peak Mordret vs peak "
                "Cassia and I might flip it."
            ),
        ),
    ),
    tool_budget=10,
    reasoning_tier="ascended",
    packet_cap=18_000,
)


ALL_SKILLS: tuple[Skill, ...] = (
    QUICK_RECALL,
    PARAPHRASE,
    SCENE_EXPLANATION,
    ARC_SUMMARY,
    THEORY,
    VERSUS,
    CORRECTION,
    DISCUSSION,
    COMPANION,
    DISCOVERY,
    LORE_EXPLAINER,
    RANKING,
    FANFIC_CONTINUATION,
    FANFIC_MISSING_SCENE,
    FANFIC_WORLDBUILDING,
)
