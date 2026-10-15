// Bump VERSION only when icons, manifest or this file change (index.html updates arrive via network-first).
const VERSION = 'metronome-v1.6.8';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/andwhynot-logo.webp'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (!sameOrigin && !FONT_HOSTS.includes(url.hostname)) return;
  // Pages: network first (new versions arrive), cache when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(ch => ch.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Everything else (assets, fonts): cache first, refresh in background.
  e.respondWith(caches.open(VERSION).then(async ch => {
    const hit = await ch.match(req);
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) ch.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
