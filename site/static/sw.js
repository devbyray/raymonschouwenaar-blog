importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.js",
    "revision": "135aca91e47880fd7d59331dc4047475"
  },
  {
    "url": "css/critical.css",
    "revision": "51bccdb0ea62534b59f1ea88bf934cad"
  },
  {
    "url": "css/main.css",
    "revision": "1ac01992b466d943aaa8c2f2a50ef7c8"
  },
  {
    "url": "css/style.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "sw.js",
    "revision": "b0898929afcc20da36208bbc7e324610"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/fonts.googleapis.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.gstatic.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
