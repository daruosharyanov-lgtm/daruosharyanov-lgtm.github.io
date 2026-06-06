const CACHE_NAME = 'da1u03h-site-v1';
const ASSETS = [
  '/',
  '/index.html',// اگر فایل JS داری
  '/Da1u03h_icon_192.png'
  '/Da1u03h_icon_512.png'// آیکون‌ها رو هم کش کن
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
