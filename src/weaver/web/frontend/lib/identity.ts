// Plan v1 slice 3 (BYOK + device scoping): browser-local identity and
// the user's own DeepSeek key. The device id is minted once and never
// leaves the browser except as a header; the key is stored only in this
// browser's localStorage and sent per request, never persisted
// server-side.

const DEVICE_KEY = "weaver_device_id";
const API_KEY_STORAGE = "weaver_api_key";

export function getDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_KEY);
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(DEVICE_KEY, deviceId);
  }
  return deviceId;
}

export function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE) ?? "";
}

export function setApiKey(key: string): void {
  if (key.trim() === "") {
    localStorage.removeItem(API_KEY_STORAGE);
  } else {
    localStorage.setItem(API_KEY_STORAGE, key.trim());
  }
}

export function clearDeviceId(): void {
  localStorage.removeItem(DEVICE_KEY);
}

/** Headers every API call carries: device id always, key when set. */
export function weaverHeaders(extra?: Record<string, string>): Record<string, string> {
  const headers: Record<string, string> = {
    "X-Device-Id": getDeviceId(),
  };
  const key = getApiKey();
  if (key !== "") {
    headers["X-Weaver-Key"] = key;
  }
  return { ...headers, ...extra };
}
