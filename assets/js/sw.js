importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('agorasei').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/assets/css/style.css',
       '/assets/js/application.js',
       '/assets/js/screenfull.min.js',
       '/assets/js/utils.js',
       '/assets/js/reading-scroll.js',
       '/assets/js/{{ page.script }}.js'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});
