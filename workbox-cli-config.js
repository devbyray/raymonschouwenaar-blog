module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "dist/**/*.html",
    "dist/**/*.js",
    "dist/**/*.jpg",
    "dist/**/*.png",
    "dist/**/*.gif",
    "dist/**/*.css",
    "dist/**/*.ico"
  ],
  "swDest": "./dist/sw.js",
  "clientsClaim": true,
  "skipWaiting": true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://fonts.googleapis.com/(.*)"),
      handler: "staleWhileRevalidate"
    },
    {
      urlPattern: new RegExp("https://fonts.gstatic.com/(.*)"),
      handler: "staleWhileRevalidate"
    }
  ]
};