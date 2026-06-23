const CACHE = 'client-board-v1';
const SHELL = ['./client_board.html','./manifest-board.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if(e.request.url.includes('firestore')||e.request.url.includes('firebase'))return;
  e.respondWith(
    fetch(e.request).then(res => {
      if(SHELL.some(s => e.request.url.includes(s.replace('./','')))){
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
