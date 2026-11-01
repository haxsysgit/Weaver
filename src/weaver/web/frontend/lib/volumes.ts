// Ends of the finished volumes, from the novel (matches
// weaver.spoilers.judge.VOLUME_ENDS). The current volume, 13, is
// open-ended: the shelf edge is not a volume end (Plan 031). Add its end
// here only when the owner confirms where the next volume starts.
export const FINISHED_VOLUME_ENDS = [95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127];

export function volumeForChapter(chapter: number): number {
  const index = FINISHED_VOLUME_ENDS.findIndex((end) => chapter <= end);
  return index === -1 ? FINISHED_VOLUME_ENDS.length + 1 : index + 1;
}
