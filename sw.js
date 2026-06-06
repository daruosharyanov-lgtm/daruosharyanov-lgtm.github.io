const CACHE_NAME = 'da1u03h-site-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Da1u03h_icon_192.png',
  '/Da1u03h_icon_512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
