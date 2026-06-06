self.addEventListener("install", () => {
  console.log("Da1u03h app installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
