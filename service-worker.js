self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll(['/', '/index.html', '/icon.png']);
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker error', err));
}
