self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker error', err));
}
