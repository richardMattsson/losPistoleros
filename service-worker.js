const CACHE_NAME = 'losPistoleros-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/losPistoleros/',
        '/losPistoleros/index.html',
        '/losPistoleros/style.css',
        '/losPistoleros/index.js',
        '/losPistoleros/los-pistoleros-logo.png',
        '/losPistoleros/mobile-screenshot.png',
        '/losPistoleros/screenshot.png',
        // other assets...
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
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
