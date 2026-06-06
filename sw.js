const CACHE_NAME = 'da1u03h-site-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Da1u03h_icon_192.png',
  '/Da1u03h_icon_512.png'
]; // اینجا حتماً باید این پرانتز بسته باشه و کاماها رعایت شده باشن

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
