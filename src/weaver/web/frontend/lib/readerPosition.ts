// The last chapter on the shelf. Keep in step with weaver.prefs.MAX_CHAPTER.
export const MAX_CHAPTER = 3160;

const CHAPTER = String.raw`(?:ch(?:apter)?s?\.?\s*)(\d{1,4})\b`;
const MENTIONS = [
  // "I'm at chapter 742", "im on ch 900", "I am up to chapter 12"
  new RegExp(String.raw`\b(?:i'?m|i am|im)\s+(?:now\s+)?(?:at|on|up to|in)\s+` + CHAPTER, "i"),
  // "just finished chapter 742", "I reached ch. 1200", "read up to chapter 50"
  new RegExp(
    String.raw`\b(?:just\s+)?(?:finished|reached|got to|caught up to|read up to|read to|stopped at)\s+` + CHAPTER,
    "i",
  ),
];

/** The chapter a reader says they have reached, or null.
 *
 * Only first-person position phrases count: "chapter 742 was sad" names a
 * chapter but says nothing about how far the reader is. */
export function mentionedChapter(text: string): number | null {
  for (const pattern of MENTIONS) {
    const match = pattern.exec(text);
    if (!match) {
      continue;
    }
    const chapter = Number(match[1]);
    if (chapter >= 1 && chapter <= MAX_CHAPTER) {
      return chapter;
    }
  }
  return null;
}
