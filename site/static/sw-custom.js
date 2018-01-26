//This is the service worker with the Cache-first network

var CACHE = 'rss-cache-v0.3';
var precacheFiles = [
  /* Add an array of files to precache for your app */
  'app.js',
  'singlePost.js',
  'css/main.css',
  'index.html',
  'https://res.cloudinary.com/raymons/image/upload/w_800,h_800,c_crop,c_lfill,g_north,r_max/w_400/q_auto,f_auto/ray.png',
  'https://res.cloudinary.com/raymons/image/upload/w_10/q_20,f_auto/ray',
  'https://res.cloudinary.com/raymons/image/upload/w_10/q_20,f_auto/rays-frontend-bytes',
  'https://res.cloudinary.com/raymons/image/upload/w_400/q_auto,f_auto/rays-frontend-bytes',
  'https://fonts.gstatic.com/s/deliusunicase/v10/b2sKujV3Q48RV2PQ0k1vqv98_kAUwJGj6teDConhbbU.woff2',
  'https://fonts.gstatic.com/s/deliusunicase/v10/7FTMTITcb4dxUp99FAdTqO0uhk-CS6w391fecjzIklY.woff2'
];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(
    precache().then(function() {
      console.log('[ServiceWorker] Skip waiting on install');
      return self.skipWaiting();
    })
  );
});

//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
	console.log('The service worker is serving the asset.' + event.request.url);

	// var request = event.request;
	// // check if request
	// if (checkCacheUrl(event.request.url)) {
	//   event.respondWith(
	// 	caches.match(event.request).then(function(response) {
	// 	  // return from cache, otherwise fetch from network
	// 	  return response || fetch(request);
	// 	})
	//   );
	// }

	event.respondWith(caches.match(event.request).then(function(response){
		if(response)
		  return response;
		return fetch(event.request).then(function(response){
		  return response;
		});
	}));
});

// self.addEventListener('fetch', function(evt) {
//   console.log('The service worker is serving the asset.' + evt.request.url);
//   evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
//   evt.waitUntil(update(evt.request));
// });

function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the
  //file to use the next time we show view
  return caches.open(CACHE).then(function(cache) {
    return fetch(request).then(function(response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request) {
  //this is the fallback if it is not in the cahche to go to the server and get it
  return fetch(request).then(function(response) {
    return response;
  });
}
