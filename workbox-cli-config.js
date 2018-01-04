module.exports = {
  "globDirectory": "./dist/",
  "globPatterns": [
    "**\/*.{html,js,jpg,gif,png,ico,css}",
  ],
  "swDest": "dist/sw.js",
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