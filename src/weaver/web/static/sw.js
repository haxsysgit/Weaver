/* Weaver service worker: local-first cache for static assets.
 * The API is never cached (fetch goes to network); only the app shell
 * and static assets are cached so the PWA opens offline. No external
 * assets are fetched, so the cache list is small and same-origin only.
 */

const CACHE = "weaver-v1";
const SHELL = [
  "/",
  "/static/theme.css",
  "/static/components/weaver-chat.js",
  "/static/components/weaver-sidebar.js",
  "/static/components/weaver-composer.js",
  "/static/components/weaver-settings.js",
  "/static/components/weaver-markdown.js",
  "/static/icon.svg",
  "/static/manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Never cache API calls: conversations, turns (SSE), cancel.
  if (url.pathname.startsWith("/api/")) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetched = fetch(event.request)
        .then((resp) => {
          if (resp.ok && url.origin === location.origin) {
            const copy = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || fetched;
    }),
  );
});
