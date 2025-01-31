const CACHE_NAME = 'losPistoleros-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/index.js',
        '/los-pistoleros-logo.png',
        '/mobile-screenshot.png',
        '/screenshot.png',
        // other assets...
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
