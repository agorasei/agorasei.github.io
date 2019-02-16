importScripts('/assets/js/cache-polyfill.js');

const CACHE_NAME = 'as-v1';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/assets/css/style.css',
       '/assets/js/application.js',
       '/assets/js/detail.js',
       '/assets/js/home.js',
       '/assets/js/reading-scroll.js',
       '/assets/js/screenfull.min.js',
       '/assets/js/slider.js',
       '/assets/js/utils.js'
     ]);
   })
 );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
        .then((cached) => {
          let networked = fetch(event.request).then((response) => {
            let cacheCopy = response.clone()
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, cacheCopy))
            return response;
          })
          .catch(() => caches.match(offlinePage));

          return cached || networked;
        }))
  }
  return;
});
