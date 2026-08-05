const CACHE_NAME = "weaver-shell-v5";
const SHELL_FILES = ["/manifest.webmanifest", "/weaver-mark.svg"];

async function cacheShell() {
  const cache = await caches.open(CACHE_NAME);
  const shellResponse = await fetch("/", { cache: "no-store" });
  const shellHtml = await shellResponse.clone().text();
  const versionedAssets = Array.from(
    shellHtml.matchAll(/["'](\/assets\/weaver-[A-Za-z0-9_-]+\.(?:js|css))["']/g),
    (match) => match[1],
  );
  if (versionedAssets.length < 2) {
    throw new Error("Weaver shell did not declare its versioned assets.");
  }
  await cache.put("/", shellResponse);
  await cache.addAll([...SHELL_FILES, ...versionedAssets]);
  await self.skipWaiting();
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheShell());
});

async function removeOldCaches() {
  const cacheNames = await caches.keys();
  const oldCacheNames = cacheNames.filter((cacheName) => cacheName !== CACHE_NAME);
  await Promise.all(oldCacheNames.map((cacheName) => caches.delete(cacheName)));
  return oldCacheNames.length > 0;
}

async function reloadLegacyClients() {
  const openClients = await self.clients.matchAll({
    type: "window",
    includeUncontrolled: true,
  });
  await Promise.all(openClients.map((client) => client.navigate(client.url)));
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const replacedLegacyCache = await removeOldCaches();
      await self.clients.claim();
      if (replacedLegacyCache) {
        await reloadLegacyClients();
      }
    })(),
  );
});

async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put("/", response.clone());
    }
    return response;
  } catch {
    return (await cache.match("/")) ?? Response.error();
  }
}

async function cacheVersionedAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  if (requestUrl.pathname.startsWith("/api/") || request.method !== "GET") {
    return;
  }
  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }
  if (requestUrl.pathname.startsWith("/assets/")) {
    event.respondWith(cacheVersionedAsset(request));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
});
