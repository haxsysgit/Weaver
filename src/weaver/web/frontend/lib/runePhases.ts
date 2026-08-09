import type { ToolActivity } from "../hooks/useChatController";

const LOCATING_LINES = [
  "[Searching the fate tapestry.]",
  "[Following a silver thread through the void.]",
  "[Tracing where this memory touches the chapters.]",
];

const READING_LINES = [
  "[Reading what the Spell remembers.]",
  "[Drawing the found passage into the weave.]",
  "[Listening for the truth between the lines.]",
];

const CONNECTING_LINES = [
  "[Binding the scattered threads.]",
  "[Setting each echo in its proper place.]",
  "[Joining memory to canon.]",
];

const CONSIDERING_LINES = [
  "[The Spell turns the question in the dark.]",
  "[The pattern is beginning to answer.]",
  "[Following the next thread of fate.]",
];

function stableLine(toolName: string, lines: readonly string[]): string {
  let characterTotal = 0;
  for (const character of toolName) {
    characterTotal += character.charCodeAt(0);
  }
  return lines[characterTotal % lines.length];
}

function hasAnyTerm(toolName: string, terms: readonly string[]): boolean {
  return terms.some((term) => toolName.includes(term));
}

export function runeMessageForActivity(activity: ToolActivity): string | null {
  if (activity.status !== "start") {
    return null;
  }

  const toolName = activity.name.toLowerCase();

  if (hasAnyTerm(toolName, ["search", "find", "locate", "browse", "grep", "glob", "who_is"])) {
    return stableLine(toolName, LOCATING_LINES);
  }

  if (hasAnyTerm(toolName, ["read", "chapter", "passage", "inspect"])) {
    return stableLine(toolName, READING_LINES);
  }

  if (hasAnyTerm(toolName, ["connect", "related", "compare", "timeline", "link"])) {
    return stableLine(toolName, CONNECTING_LINES);
  }

  return stableLine(toolName, CONSIDERING_LINES);
}
