export const FIRST_NIGHTMARE_STORAGE_KEY = "weaver_first_nightmare";

export type FirstNightmareState = "completed" | "deferred";

export function getFirstNightmareState(): FirstNightmareState | null {
  const storedState = localStorage.getItem(FIRST_NIGHTMARE_STORAGE_KEY);
  if (storedState === "completed" || storedState === "deferred") {
    return storedState;
  }
  return null;
}

export function setFirstNightmareState(state: FirstNightmareState): void {
  localStorage.setItem(FIRST_NIGHTMARE_STORAGE_KEY, state);
}

export function shouldOpenFirstNightmare(): boolean {
  return getFirstNightmareState() === null;
}
