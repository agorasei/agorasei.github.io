importScripts('/assets/js/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('agorasei').then(function(cache) {
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


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});
