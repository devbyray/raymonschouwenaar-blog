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
    "revision": "68fc708f84fa07f28830d42fe8e07d63"
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
    "url": "singlePost.js",
    "revision": "bef9fefa35c8903c9674910d3b226f82"
  },
  {
    "url": "sw.js",
    "revision": "ad17f1db33e5de1a799c5992e10c26bb"
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
workboxSW.router.registerRoute(/https:\/\/res.cloudinary.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/ajax.googleapis.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/www.google-analytics.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/www.googletagmanager.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.gstatic.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
