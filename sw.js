self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

/*
  Não interceptamos fetch para não quebrar:
  - WebSockets (wss://)
  - relays Nostr
  - requisições dinâmicas
*/
self.addEventListener('fetch', event => {
  // Pass-through
});
