importScripts('workbox-sw.prod.v2.1.3.js');

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
    "revision": "51bb034cd418b1d003f51c1618227587"
  },
  {
    "url": "css/main.css",
    "revision": "3a35dc4098a4b471dac3e00d9910c740"
  },
  {
    "url": "css/style.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "singlePost.js",
    "revision": "215bb825ae4db8ad2c3b41f57708c206"
  },
  {
    "url": "sw-custom.js",
    "revision": "9b7b063a614d33188809ba842512f2d5"
  },
  {
    "url": "sw-register.js",
    "revision": "95c8ad6bfaae93ef0e22b1d15aa2dd15"
  },
  {
    "url": "sw.js",
    "revision": "67968f92fb9fa6fa95a67800a5c981fd"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "10-jquery-plugins-to-enhance-your-web-typography/index.html",
    "revision": "d7dfbffe94a5b1d02b8836317b871ab2"
  },
  {
    "url": "10-must-read-css3-tutorials/index.html",
    "revision": "0287953f833d01ad60fbb1b3eedbed81"
  },
  {
    "url": "10-tips-loading-images-instantly-with-intersection-observer/index.html",
    "revision": "d600c597e2cce505849c277c94799c51"
  },
  {
    "url": "10-wordpress-security-tips-guidelines-plugins-settings/index.html",
    "revision": "a9defbc54f7b09c0492a9c3f9ddd2c0a"
  },
  {
    "url": "11-awesome-codepens-with-html-css-and-javascript-for-your-inspiration/index.html",
    "revision": "cc164b646eb22f6f461a9b7cd8a1cbd2"
  },
  {
    "url": "12-best-wordpress-image-galleries-and-sliders/index.html",
    "revision": "7123267a17ebfc673ab12b319c6e6c44"
  },
  {
    "url": "12-eye-popping-examples-of-parallax-scrolling-websites-2/index.html",
    "revision": "dfe84fc66873d6264c67fa9c42406c57"
  },
  {
    "url": "12-eye-popping-examples-of-parallax-scrolling-websites/index.html",
    "revision": "a424d8f6278589cafdba426eede1cd4f"
  },
  {
    "url": "15-cool-wordpress-video-pluginsndash-want-to-show-off-videos/index.html",
    "revision": "a5f117b6548655c045b65fb0d183354a"
  },
  {
    "url": "15-really-useful-wordpress-dashboard-plugins/index.html",
    "revision": "f1d9430df3fd7a458106d50b380adca5"
  },
  {
    "url": "2-solutions-for-empty-spaces-below-an-img-html-element-no-margins-used/index.html",
    "revision": "76e1f7a41caa2d53edb7b8eb9af1c174"
  },
  {
    "url": "2-steps-to-improve-the-loading-time-of-your-website/index.html",
    "revision": "134e420c164819748c68e47408407ba7"
  },
  {
    "url": "20-best-wordpress-plugins-want-a-cool-website/index.html",
    "revision": "e6e7077d3fc3d179eff6914754a8b248"
  },
  {
    "url": "20-bold-and-beautiful-websites/index.html",
    "revision": "bc25d6b902cb0d0a4ae9b4737569fa0d"
  },
  {
    "url": "20-neat-sleek-sports-web-designs/index.html",
    "revision": "c058a28f0935a1cab77c66a348815ea5"
  },
  {
    "url": "20-powerful-jquery-flipbook-plugins/index.html",
    "revision": "820ec80395a21d2837065a41ba48bade"
  },
  {
    "url": "20-rocking-wordpress-music-themes-want-more-fans/index.html",
    "revision": "4221bd9ea3334cee3146d033ff45e4a5"
  },
  {
    "url": "20-websites-with-original-non-standard-geometry/index.html",
    "revision": "a0d000e14093ba6744bc5f463717b8d2"
  },
  {
    "url": "2012-into-2013-web-standards-in-perspective/index.html",
    "revision": "85c38deb15a874aba1da4fe66a547255"
  },
  {
    "url": "25-best-wordpress-themes-for-freelancers/index.html",
    "revision": "ba08f473ff017dd611c885642678987d"
  },
  {
    "url": "25-inspirational-examples-of-css/index.html",
    "revision": "c0b2eb2990d5b8108b0912b596bf9c15"
  },
  {
    "url": "25-inspiring-design-agency-websites/index.html",
    "revision": "225692970a6e41720db63edb3c68696b"
  },
  {
    "url": "25-interactive-html5-websites/index.html",
    "revision": "d1a723b4f2d7f3fef75e0e6d38bccaaf"
  },
  {
    "url": "25-kickass-responsive-web-designs-for-inspiration/index.html",
    "revision": "f49bdcfcfa12f94842f15faca4458dcb"
  },
  {
    "url": "25-web-designs-with-clever-fixed-header-effects/index.html",
    "revision": "f2614ad086337becace3bd02ff869aac"
  },
  {
    "url": "3-ways-to-loop-over-object-properties-with-vanilla-javascript/index.html",
    "revision": "70e36e7ce9ce93d1b0e0b19ef4e15186"
  },
  {
    "url": "30-cool-web-apps-made-entirely-in-html5/index.html",
    "revision": "0e2eee24a49cc582cb2c183868b3c584"
  },
  {
    "url": "30-phenomenal-non-profit-website-designs/index.html",
    "revision": "e8f4290e0eacfa81f15fb5a1ddcf31d8"
  },
  {
    "url": "35-fresh-examples-of-modern-web-design/index.html",
    "revision": "0fd1883f28827e8180751b28200dd39f"
  },
  {
    "url": "35-html5-and-css3-tutorials-for-designers/index.html",
    "revision": "288dd2d4eaffb2198075d81744714004"
  },
  {
    "url": "35-new-tools-and-services-for-web-developers-2/index.html",
    "revision": "2072ffaa4e80420bee8f6d7b462d9a54"
  },
  {
    "url": "40-interesting-websites-with-wicked-designs/index.html",
    "revision": "bda534b8583ed4c5510db672a9f4d44c"
  },
  {
    "url": "40-light-and-white-wordpress-themes-for-minimalistic-websites/index.html",
    "revision": "7c69a7d23f6eab4825b0b3c1bb9e9a96"
  },
  {
    "url": "45-inspiring-examples-of-html5-web-design-2/index.html",
    "revision": "a2e3e906078008a3dc75067b09737d84"
  },
  {
    "url": "45-inspiring-examples-of-html5-web-design/index.html",
    "revision": "aaf10e99146ab1bd4c27c015e16662de"
  },
  {
    "url": "450-beautiful-vector-icons-for-website-ui-design/index.html",
    "revision": "f8afd1ee2ddc8401217fe1fa450ad488"
  },
  {
    "url": "5-css-tips-junior-frontend-developers/index.html",
    "revision": "be842f94d08767ff9543c8a3760869ba"
  },
  {
    "url": "5-great-examples-of-simple-web-animations/index.html",
    "revision": "6b3436f6425ab4bba48e7ca0f513d170"
  },
  {
    "url": "50-popular-gaming-websites-for-inspiration/index.html",
    "revision": "bf639c5f6c710f66bcca8ae01cb8de5f"
  },
  {
    "url": "a-round-up-of-clean-wordpress-themes/index.html",
    "revision": "ec305872ba0fe20f55eede5bc1d70804"
  },
  {
    "url": "aankondiging-contentcafe-6-responsive-design/index.html",
    "revision": "fcfe368e29d40df7f1ad449ff789bff4"
  },
  {
    "url": "about/index.html",
    "revision": "970e6dc434fc39e579da46bbe95fb0b8"
  },
  {
    "url": "admin-dashboard-design-inspiration-23-examples/index.html",
    "revision": "e73cc7320c23e19a07437515c92a4962"
  },
  {
    "url": "announcement-plan-to-build-an-invoice-wordpress-plugin/index.html",
    "revision": "fac129e9c446c465ada6afece394d092"
  },
  {
    "url": "awesome-web-mobile-development-tools-themes-scripts-and-resources-of-june-2013/index.html",
    "revision": "fd7676a62ba2d54f790bbe5e7ce4010e"
  },
  {
    "url": "awesome-web-mobile-ui-design-tools-inspiration-and-resources-of-june-2013/index.html",
    "revision": "ef9636b42b84438ddb28965ff3c75a69"
  },
  {
    "url": "best-browser-ever-not-ie10-doesnt-give-an-html-conditional-class/index.html",
    "revision": "17c2e7775007cce9fb9bb4375d3a5412"
  },
  {
    "url": "best-infographics-for-modern-web-designers-and-developers/index.html",
    "revision": "1128b60153336ee60acd16b108440dfb"
  },
  {
    "url": "best-top-30-trance-progressive-house-dance-times/index.html",
    "revision": "94d070f231b55f2682b90a842e0004d6"
  },
  {
    "url": "best-webdesign-from-behance-flat-webdesign/index.html",
    "revision": "eea3d8c3f5071bb85e369477da7ab59c"
  },
  {
    "url": "best-webdesign-from-dribbble-flat-webdesign/index.html",
    "revision": "3fd7a1ea773ce922b9c67979ddbcab85"
  },
  {
    "url": "best-webdesign-of-the-week-1/index.html",
    "revision": "15242876c4a29ac3a755a2ffc1606949"
  },
  {
    "url": "best-webdesign-of-the-week-2/index.html",
    "revision": "3bb9c950bd45e3af37d832b66d94e96e"
  },
  {
    "url": "best-webdesign-of-the-week-3/index.html",
    "revision": "3fc03f5701f929a7365265d14a8ae7d8"
  },
  {
    "url": "bestsellers-woocommerce-product-loop/index.html",
    "revision": "fe7ce0bf1761a2de24069ee04026af12"
  },
  {
    "url": "bootbox-js-a-small-javascript-library-to-create-programmatic-dialog-boxes-using-bootstraps-modals/index.html",
    "revision": "219a771f15cdeab239565be429265ed5"
  },
  {
    "url": "breadcrumbs-in-your-wordpress-website-or-blog/index.html",
    "revision": "9bed210bfb269a98764e8c385cd8ed63"
  },
  {
    "url": "build-a-fun-true-or-false-quiz-with-css/index.html",
    "revision": "b5562eb82aae2b76bbe0a03b1b7a09a3"
  },
  {
    "url": "building-responsive-table-with-only-css/index.html",
    "revision": "9c311f1e0006538d59d4f2e90b5c3d55"
  },
  {
    "url": "categories/angularjs/index.html",
    "revision": "1bd4bcc75722462e15b3cf188ed10bd7"
  },
  {
    "url": "categories/angularjs/page/1/index.html",
    "revision": "404805230615673747323ac37711d658"
  },
  {
    "url": "categories/css/index.html",
    "revision": "dd76e5dda90008fdccc6f2296f7af8f9"
  },
  {
    "url": "categories/css/page/1/index.html",
    "revision": "5cc3f25ac2a6a4054b391bb14d6bacc3"
  },
  {
    "url": "categories/css/page/2/index.html",
    "revision": "c3bc0167cf438b2f8f35800881bb32ad"
  },
  {
    "url": "categories/css/page/3/index.html",
    "revision": "5f5446c24b2432b30df41852b9caf288"
  },
  {
    "url": "categories/css/page/4/index.html",
    "revision": "9e5311801dda3f3aee2636d14197a8f1"
  },
  {
    "url": "categories/frontend-development/index.html",
    "revision": "a320d115c2b666f79346ba905abd0330"
  },
  {
    "url": "categories/frontend-development/page/1/index.html",
    "revision": "8a8844b8c81e44b1a5d45afac57d5aea"
  },
  {
    "url": "categories/frontend-development/page/2/index.html",
    "revision": "15b1da51c94ffcd15c675cb721f392fc"
  },
  {
    "url": "categories/frontend-development/page/3/index.html",
    "revision": "2467ce2cea201e403ebb21003cbf399a"
  },
  {
    "url": "categories/frontend-development/page/4/index.html",
    "revision": "b1ea743f97cef44d3c41dae4cda450c7"
  },
  {
    "url": "categories/git/index.html",
    "revision": "72b69e34a5a37be79c6ff3eb36bded35"
  },
  {
    "url": "categories/git/page/1/index.html",
    "revision": "0197c217f944e440481794841c62f11b"
  },
  {
    "url": "categories/github/index.html",
    "revision": "5ea98e161c50e887feee02574653a533"
  },
  {
    "url": "categories/github/page/1/index.html",
    "revision": "5d4034a9f96c2fc75623d6ddc0b6d954"
  },
  {
    "url": "categories/html/index.html",
    "revision": "b0a38d266c8a7833025896823413ac90"
  },
  {
    "url": "categories/html/page/1/index.html",
    "revision": "01b8b7bc4d4f40c357e55245b10f52a5"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "a42e2d80457b2366915cda0578634deb"
  },
  {
    "url": "categories/javascript/page/1/index.html",
    "revision": "e84a66e5ea1ab6f68fc42a33723fa9cd"
  },
  {
    "url": "categories/javascript/page/2/index.html",
    "revision": "8387f4b2be64bae340305e8ba65930c1"
  },
  {
    "url": "categories/javascript/page/3/index.html",
    "revision": "a4e2bec41eab9910631f14e59c46dd60"
  },
  {
    "url": "categories/javascript/page/4/index.html",
    "revision": "56987eb2aa3148acffdd6f29956903d2"
  },
  {
    "url": "categories/javascript/page/5/index.html",
    "revision": "c8313f04fd24e329114865772bc1ce91"
  },
  {
    "url": "categories/javascript/page/6/index.html",
    "revision": "97055cbedf31a596aa99ed9c913b2bcc"
  },
  {
    "url": "categories/mighty-deals/index.html",
    "revision": "d15ca502346ac58ceb443911f93ac9cd"
  },
  {
    "url": "categories/mighty-deals/page/1/index.html",
    "revision": "3ad150b1c4236ba746d08bf0c3ad73b9"
  },
  {
    "url": "categories/music/index.html",
    "revision": "287be3f6e956983349b819480e44e9a3"
  },
  {
    "url": "categories/music/page/1/index.html",
    "revision": "dc563ab2e8d9b2726165b5abe4557407"
  },
  {
    "url": "categories/news-of-the-web/index.html",
    "revision": "4d50136b8b3eaa32b74344ec0d905260"
  },
  {
    "url": "categories/news-of-the-web/page/1/index.html",
    "revision": "50293f125d41d352aace4a3e8c0f520e"
  },
  {
    "url": "categories/news-of-the-web/page/10/index.html",
    "revision": "3e384782bdc6b8c13a731f40fa4bba1b"
  },
  {
    "url": "categories/news-of-the-web/page/11/index.html",
    "revision": "5789322db5666c292790765c81bf8f54"
  },
  {
    "url": "categories/news-of-the-web/page/12/index.html",
    "revision": "293c4f13b68cfd49ecc9fbfbe092ebfc"
  },
  {
    "url": "categories/news-of-the-web/page/13/index.html",
    "revision": "6082bd560e98ac6b0bd4518d37d6cb7c"
  },
  {
    "url": "categories/news-of-the-web/page/14/index.html",
    "revision": "3d76f80ef507b1fe943b3196070ca0db"
  },
  {
    "url": "categories/news-of-the-web/page/15/index.html",
    "revision": "07551a32f0a376693b8d1c42bb3bfc16"
  },
  {
    "url": "categories/news-of-the-web/page/16/index.html",
    "revision": "40d7815390f7ccbc50bc1e531c732f9c"
  },
  {
    "url": "categories/news-of-the-web/page/17/index.html",
    "revision": "26a9fae39c48818980600a3e346f8ed6"
  },
  {
    "url": "categories/news-of-the-web/page/18/index.html",
    "revision": "2b6719373f99fdc09314b10efda63baa"
  },
  {
    "url": "categories/news-of-the-web/page/19/index.html",
    "revision": "9b00e693d59696055086b4b67e5ee00e"
  },
  {
    "url": "categories/news-of-the-web/page/2/index.html",
    "revision": "cffb48528c3bdb1963003e9083423fd6"
  },
  {
    "url": "categories/news-of-the-web/page/20/index.html",
    "revision": "ae85d32a2c5e40339933d6e883db427d"
  },
  {
    "url": "categories/news-of-the-web/page/21/index.html",
    "revision": "230e098cf4b6763cfd0da6ec19039b33"
  },
  {
    "url": "categories/news-of-the-web/page/22/index.html",
    "revision": "491d7b4f78d9205178691cf3c3359aa7"
  },
  {
    "url": "categories/news-of-the-web/page/23/index.html",
    "revision": "3c94df5ed438728a546092b5c6236324"
  },
  {
    "url": "categories/news-of-the-web/page/24/index.html",
    "revision": "307b42d346013d5253aab5290a85fbe2"
  },
  {
    "url": "categories/news-of-the-web/page/25/index.html",
    "revision": "83b24c15255a9fd3f52fc1e9de4b64c4"
  },
  {
    "url": "categories/news-of-the-web/page/26/index.html",
    "revision": "add812462c683474a1ef2aa58b0da7a9"
  },
  {
    "url": "categories/news-of-the-web/page/27/index.html",
    "revision": "2c33f25ec3562290952523fb8517ac81"
  },
  {
    "url": "categories/news-of-the-web/page/3/index.html",
    "revision": "4bbf2aa9adff2d72f04f44ce176b0fca"
  },
  {
    "url": "categories/news-of-the-web/page/4/index.html",
    "revision": "d0d6a5ee4750417539fb3a6493232f99"
  },
  {
    "url": "categories/news-of-the-web/page/5/index.html",
    "revision": "c46e181d5c82f237946057e6c8824aa2"
  },
  {
    "url": "categories/news-of-the-web/page/6/index.html",
    "revision": "a8dd7492ad2a4f0c066ff2d16c9d50bb"
  },
  {
    "url": "categories/news-of-the-web/page/7/index.html",
    "revision": "dca13e47fbaf963753f701d148848384"
  },
  {
    "url": "categories/news-of-the-web/page/8/index.html",
    "revision": "dbfdfd3fa51c3f4279b53a8958bd3768"
  },
  {
    "url": "categories/news-of-the-web/page/9/index.html",
    "revision": "765638cb48673bf7eed7145a9f21b9a5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b863ef8a13485d7bff4387d948fd523c"
  },
  {
    "url": "categories/php/page/1/index.html",
    "revision": "95046d2f6b32f39690ba201e4f0e0efc"
  },
  {
    "url": "categories/sass/index.html",
    "revision": "989c2f133a0fd8fc728ec63345df6462"
  },
  {
    "url": "categories/sass/page/1/index.html",
    "revision": "e99605705b8efa2c91d745a69fd3a83f"
  },
  {
    "url": "categories/sass/page/2/index.html",
    "revision": "14e2ea9bd72d18e1042b496d83a09a75"
  },
  {
    "url": "categories/skills/index.html",
    "revision": "df18cf9a81b81676f178fd6441a61d11"
  },
  {
    "url": "categories/skills/page/1/index.html",
    "revision": "21dbe4bec77ab4e3b2bee3c527b6ec85"
  },
  {
    "url": "categories/snippets-of-vanilla-javascript/index.html",
    "revision": "c2b144dbe9f08f1947a08c6743120979"
  },
  {
    "url": "categories/snippets-of-vanilla-javascript/page/1/index.html",
    "revision": "81f843e8dca272d4616334abfa817eac"
  },
  {
    "url": "categories/snippets/index.html",
    "revision": "aede8a0be6bd72a9de0c2a98c3471672"
  },
  {
    "url": "categories/snippets/page/1/index.html",
    "revision": "318b4ab46044fd416e0d42efdc0afb07"
  },
  {
    "url": "categories/snippets/page/2/index.html",
    "revision": "093be8ce15adc6edc44d69498395cb9f"
  },
  {
    "url": "categories/snippets/page/3/index.html",
    "revision": "7ac856efb22e0e56a1500fa3dbf6ec6f"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "09cbac039472f2d2bdead731f093728c"
  },
  {
    "url": "categories/webdesign/page/1/index.html",
    "revision": "717c55f29e227c3bc9657d199000fe4e"
  },
  {
    "url": "categories/webdesign/page/2/index.html",
    "revision": "10bca84a38eebc68ea90568356468017"
  },
  {
    "url": "categories/webdevelopment/index.html",
    "revision": "2c98dd891b6b1aec81e126805c769ab5"
  },
  {
    "url": "categories/webdevelopment/page/1/index.html",
    "revision": "075f2149d2705d945da7f5714e840863"
  },
  {
    "url": "categories/webdevelopment/page/2/index.html",
    "revision": "6edb63776fcac65b1c440ac0d436eb63"
  },
  {
    "url": "categories/webdevelopment/page/3/index.html",
    "revision": "72a59c5a30c3de319c4724a1b6e5e8fc"
  },
  {
    "url": "categories/webdevelopment/page/4/index.html",
    "revision": "d941e0e267450958e24ecb1119a452ca"
  },
  {
    "url": "categories/webdevelopment/page/5/index.html",
    "revision": "d5f86238b475ea38ffc5707d2bb32ac7"
  },
  {
    "url": "categories/webdevelopment/page/6/index.html",
    "revision": "94310430d6c81f3e0a915da2104516db"
  },
  {
    "url": "categories/webdevelopment/page/7/index.html",
    "revision": "a7634f90210ba3529df46f27c5309dd6"
  },
  {
    "url": "categories/webdevelopment/page/8/index.html",
    "revision": "bd5204bc99bb5b7d64538f642489d6f3"
  },
  {
    "url": "categories/windows/index.html",
    "revision": "f9a4aa62cd1eb5386e4f774f329b1cf5"
  },
  {
    "url": "categories/windows/page/1/index.html",
    "revision": "582d33e7f19b4686de090e83109b8bbc"
  },
  {
    "url": "categories/woocommerce/index.html",
    "revision": "86a524c97e53600eb88f4a05dd5c8ff1"
  },
  {
    "url": "categories/woocommerce/page/1/index.html",
    "revision": "04f3a55027ddaf314138df3d75ecdeb8"
  },
  {
    "url": "categories/wordpress-multisite/index.html",
    "revision": "d9aae21706dd9abcc22d97ef37f8b2f8"
  },
  {
    "url": "categories/wordpress-multisite/page/1/index.html",
    "revision": "6b8f941f2cfdee43cf5c0af26c3329a8"
  },
  {
    "url": "categories/wordpress-plugins/index.html",
    "revision": "80ba14af650f5f60ec695f5f10db7fa0"
  },
  {
    "url": "categories/wordpress-plugins/page/1/index.html",
    "revision": "6be90e7b39cdccb5f5a164d7e306a008"
  },
  {
    "url": "categories/wordpress-plugins/page/2/index.html",
    "revision": "1c7d5fad15e45ef49029582db7d77fcb"
  },
  {
    "url": "categories/wordpress/index.html",
    "revision": "4e2eccd8d5b1250e35092150aae940c9"
  },
  {
    "url": "categories/wordpress/page/1/index.html",
    "revision": "ed500e63f938d1a551551eb057def249"
  },
  {
    "url": "categories/wordpress/page/2/index.html",
    "revision": "1a4315de0ee60efc43becae55428625d"
  },
  {
    "url": "categories/wordpress/page/3/index.html",
    "revision": "a1720fc1e3571556b0338378a4ed885e"
  },
  {
    "url": "categories/wordpress/page/4/index.html",
    "revision": "199b9c923ea76d9d0b5f855d08deba09"
  },
  {
    "url": "change-your-wordpress-page-post-extension/index.html",
    "revision": "a3b1c9c44f743f5042a68eea6a31ac66"
  },
  {
    "url": "characters-and-mascots-in-web-design-and-their-role-2/index.html",
    "revision": "e92c28f4e17ffe111295867e50b4e569"
  },
  {
    "url": "characters-and-mascots-in-web-design-and-their-role/index.html",
    "revision": "66aa4fd74b42c09a916eea05c9e4b08e"
  },
  {
    "url": "check-equality-values-javascript/index.html",
    "revision": "6f4abe737475cd169e0842631860e480"
  },
  {
    "url": "check-mobile-devices-vanilla-javascript/index.html",
    "revision": "5ea56a523f306cc4902e704f4719cc36"
  },
  {
    "url": "check-object-empty-vanilla-javascript/index.html",
    "revision": "6f3af461e345837dc321c8544a36c9ba"
  },
  {
    "url": "cody-landefeld-wordpress-design-for-the-real-world/index.html",
    "revision": "e06dd2dc4b67857f8a11e4e3d6181c34"
  },
  {
    "url": "combine-multiple-gulp-tasks-add-multiple-destination-locations/index.html",
    "revision": "e43542573828062a09200d00bf2adf24"
  },
  {
    "url": "create-crossbrowser-css-prefixes-with-an-sass-mixin/index.html",
    "revision": "ec15a6f55629c5ece8cdb19182002404"
  },
  {
    "url": "create-css-responsive-image-grid-ratio-scaling/index.html",
    "revision": "7c0ccfd4b8263af52772b891b4dd3cef"
  },
  {
    "url": "create-launch-screen-react-native-app-xcode/index.html",
    "revision": "ca4919e990e5995eefabf72b572fd682"
  },
  {
    "url": "creating-an-html5-based-document-editor-2/index.html",
    "revision": "9a1f72a2e5719f7e58ca6897dbacc3cf"
  },
  {
    "url": "creative-css-tutorials-collection/index.html",
    "revision": "ad90f32c7fb9f1c9de36bf16dad1f6ab"
  },
  {
    "url": "creative-new-web-design-and-development-tools/index.html",
    "revision": "8af28b0b7aa841aeac92d3621ed3ab98"
  },
  {
    "url": "cross-browser-document-ready-with-vanilla-javascript-ie8-included/index.html",
    "revision": "a409f2482dfb2b9a359dd7750a99dea9"
  },
  {
    "url": "css-flexbox-essentials/index.html",
    "revision": "1a3437732338c75f788676162bdaa67a"
  },
  {
    "url": "css-grid-layout-metro-design-blocks/index.html",
    "revision": "93af9e23b6f0556ec5fa47fbde0b596c"
  },
  {
    "url": "css-performance-we-write-css-selectors-wrong/index.html",
    "revision": "cacd411ff2904e888520e796287716a6"
  },
  {
    "url": "custom-woocommerce-email-notification-for-dealer-or-supplier/index.html",
    "revision": "3f7183883f7cbe47bff1f5b058847a37"
  },
  {
    "url": "customise-terminal-html-css-javascript-hyper/index.html",
    "revision": "20f9fefe8ed21a9a34f1a391a6c8ed25"
  },
  {
    "url": "delete-node_modules-folder-windows-nodejs/index.html",
    "revision": "a2737bcbc02ef7a393fec6191fd4fd8f"
  },
  {
    "url": "deploy-dist-folder-gh-pages-branch-github-pages/index.html",
    "revision": "c120b755667454809f7e3a10c918818c"
  },
  {
    "url": "deploy-website-git-webhosting-webfaction-github-bitbucket/index.html",
    "revision": "1dbb36a38783a2381ad74305870500e5"
  },
  {
    "url": "display-comments-on-custom-post-type-page-by-genesis-framework/index.html",
    "revision": "2337320dac559dff5392ccff7405625a"
  },
  {
    "url": "easy-wordpress-functions-php-hacks/index.html",
    "revision": "7979f31621edf64c03e225ce68af5214"
  },
  {
    "url": "effectively-planning-ux-design-projects/index.html",
    "revision": "5ba61488ad4a8087a3eb9e4afaecf68e"
  },
  {
    "url": "error-spawn-cpython27-enoent-npm/index.html",
    "revision": "ffd2294d09c718254e9f6f5ff27399d4"
  },
  {
    "url": "es6-var-let-and-const-explained/index.html",
    "revision": "11f645a85a509c69f187cc5fa43769d7"
  },
  {
    "url": "find-duplicate-property-values-in-an-array-of-objects-in-javascript/index.html",
    "revision": "d85dae17d4b3c600c8f405d362394399"
  },
  {
    "url": "five-killer-ways-to-use-parallax/index.html",
    "revision": "efdde44ea7f3f29732db72191711a060"
  },
  {
    "url": "flat-design-can-you-benefit-from-the-trend/index.html",
    "revision": "98dfc4f4848950d7a668ddc6a03e4305"
  },
  {
    "url": "flat-design-websites-a-new-trend/index.html",
    "revision": "482916c36fdcef3b4546d30f9b5f4082"
  },
  {
    "url": "focused-learning-agile-inspired-way/index.html",
    "revision": "9caf93da46248becf3b55dfd7386ba6a"
  },
  {
    "url": "foodily-brand-identity-and-web-design-by-six/index.html",
    "revision": "0ce2d12ba7dfa0e5ed28024f04f30ed9"
  },
  {
    "url": "free-desktop-user-interface-kits/index.html",
    "revision": "092e2458f4344df9a77703cd85458437"
  },
  {
    "url": "free-psd-ui-kit-for-your-web-applications/index.html",
    "revision": "2bb881ebb3936cd9d769ee0b261e4e76"
  },
  {
    "url": "free-retweet-wordpress-shortcode-plugin/index.html",
    "revision": "d3f0967b4d12bff3978fbdb5a376d132"
  },
  {
    "url": "free-wordpress-themes/index.html",
    "revision": "e622f1cccc5ff84418dca778e0895d48"
  },
  {
    "url": "frontend-developers-15-nice-tools-libraries-resource-october/index.html",
    "revision": "46913ee8e2f20735899ef48123d8f054"
  },
  {
    "url": "frontend-developers-25-tools-libraries-resource-december/index.html",
    "revision": "163f22d75ff3659380e51bc1f6856168"
  },
  {
    "url": "frontend-developers-35-tools-libraries-resource-november/index.html",
    "revision": "3eaea4a6dbec30bafb9ac04db592acef"
  },
  {
    "url": "frontend-speed-performance-testing/index.html",
    "revision": "15cc322b71385fc476d39a159df5382b"
  },
  {
    "url": "frontend-workflow-1-npm-nodejs-gulpjs-bower-git-video/index.html",
    "revision": "18bb91846de29e52e42a42b053d99bdc"
  },
  {
    "url": "frontend-workflow-2-css-automation-gulpjs/index.html",
    "revision": "ba7cb3baa69f0bfb9d9bc973cd7536ad"
  },
  {
    "url": "getting-started-with-twitter-bootstrap/index.html",
    "revision": "362a7200fb251588d2ade5b5e92ac6ca"
  },
  {
    "url": "git-error-updates-rejected-tag-already-exists-remote-sourcetree/index.html",
    "revision": "eab756b6dcdd95d4d88f2515fa3f97df"
  },
  {
    "url": "git-feature-branch-workflow/index.html",
    "revision": "7faf67abb0fde3a91329aa955465bf83"
  },
  {
    "url": "github-beginners-push-files-local-project-new-github-repository-console/index.html",
    "revision": "a19be01c964564e2070c6f518c9b5098"
  },
  {
    "url": "gloople-responsive-design-review/index.html",
    "revision": "6a654977f8a20aa590174d26a8c631e1"
  },
  {
    "url": "google-webfont-issue-xmlhttprequest-cannot-load/index.html",
    "revision": "478aba8ef5fca8c385c13e104d2f6577"
  },
  {
    "url": "gradual-engagement-to-increase-your-conversion-rate/index.html",
    "revision": "e16330b437aad5eb0cd145e4647a30cd"
  },
  {
    "url": "handle-postcss-with-npm-scripts/index.html",
    "revision": "5e87287fac63024bdc7f2f4dce472633"
  },
  {
    "url": "helped-junior-frontend-developer-get-better/index.html",
    "revision": "cd78c46bc0268873bb346bc3a06830ba"
  },
  {
    "url": "helping-people-best-skill-can/index.html",
    "revision": "894707f8e6f5c06676ed8ccef486f1cb"
  },
  {
    "url": "how-does-auto-positioning-work-in-css/index.html",
    "revision": "0f30d8831c4ae3393f8dbb9f526d3313"
  },
  {
    "url": "how-much-css-should-you-have/index.html",
    "revision": "ff0ccc7f3eb5acf34ec4bab4a2dabe16"
  },
  {
    "url": "how-to-build-user-confidence-in-your-ui/index.html",
    "revision": "6936d70dbc22fb83898ad636f0b02cee"
  },
  {
    "url": "how-to-create-a-membership-site-on-wordpress-best-plugins-2/index.html",
    "revision": "4d892baa8e675037b20d048a2cddcafa"
  },
  {
    "url": "how-to-create-an-option-for-your-wordpress-theme/index.html",
    "revision": "9771eb25430f5fe82352852dfecb56f9"
  },
  {
    "url": "how-to-create-cross-browser-gradient-background-sass-mixin/index.html",
    "revision": "4d5816a4dba4f87a797f8bf975aedbf0"
  },
  {
    "url": "how-to-easily-build-meta-boxes-wordpress-website-theme-plugin/index.html",
    "revision": "02a79cb0bed794d1da13d1a1cd39c160"
  },
  {
    "url": "how-to-efficiently-manage-multiple-wordpress-sites-using-managewp/index.html",
    "revision": "fb3518aedef6f31a4cc0fc13db21ffee"
  },
  {
    "url": "how-to-find-enough-work-to-keep-an-entire-agency-busy/index.html",
    "revision": "2a8e65ff3946c79832a0f3f8eee28419"
  },
  {
    "url": "how-to-get-height-width-of-element-with-vanilla-javascript/index.html",
    "revision": "2b9c9c0808819811be48267c1dfc9711"
  },
  {
    "url": "how-to-stop-your-client-ruining-your-design/index.html",
    "revision": "551aff0fb8f4d47045ab7eeaa051b25b"
  },
  {
    "url": "how-to-update-the-scope-with-an-eventlistener-in-angularjs/index.html",
    "revision": "3a510643daa4241639b159c700dc9112"
  },
  {
    "url": "how-to-upsell-your-clients/index.html",
    "revision": "f36d3b231963ecd5366559a1d27bb929"
  },
  {
    "url": "how-to-use-custom-fonts-with-font-face-on-wordpress/index.html",
    "revision": "fbc02f355f91a270be6311ef86372e08"
  },
  {
    "url": "how-to-use-icon-fonts-in-your-next-webdevelopment-project/index.html",
    "revision": "d36ffb69caa2a4ce52bfcf47bf240862"
  },
  {
    "url": "how-to-use-javascript-module-pattern-inside-wordpress/index.html",
    "revision": "79c0e98603e3c0ff04cc6ac825f624ee"
  },
  {
    "url": "how-to-use-the-es2015-spread-syntax-in-javascript/index.html",
    "revision": "8db74e3186def6beafabe3396275cff2"
  },
  {
    "url": "html5-apps-will-be-faster-than-native-apps/index.html",
    "revision": "9a4c55ed8a85f6621254308e5912b4bb"
  },
  {
    "url": "if-a-webdeveloper-cant-have-access-to-internet-just-like-a-carpenter-without-an-hammer/index.html",
    "revision": "cda814d0de25fa886cac3ce3d173b674"
  },
  {
    "url": "image-markup-or-srcset-alternative-solution-with-css-for-responsive-image/index.html",
    "revision": "77735360b046c47b86ff304f0efb77e9"
  },
  {
    "url": "index.html",
    "revision": "603e627b4c8f585e31be450058611274"
  },
  {
    "url": "interaction-design-lessons-from-sci-fi-visual-interfaces/index.html",
    "revision": "2c6101f8f22ce1fce1f2c944bfe59f7a"
  },
  {
    "url": "interactive-guide-to-blog-typography/index.html",
    "revision": "942b915a585513c82404a46e340b1a19"
  },
  {
    "url": "interesting-square-fonts-for-designers-2/index.html",
    "revision": "4f2bf093f2a80ed6aa35235890e2de71"
  },
  {
    "url": "invoice-plugin-sneakpeak/index.html",
    "revision": "acac5a336c14687166944bb2e2753278"
  },
  {
    "url": "itunes-fix-window-8-1/index.html",
    "revision": "514c036a33fd987075f5ff6e295b5c9f"
  },
  {
    "url": "javascript-addeventlistener-onblur-doesnt-work-firefox-fix/index.html",
    "revision": "bf37f6399720d9ed069e1bd32f27e1cd"
  },
  {
    "url": "javascript-array-foreach-method-doesnt-return-anything/index.html",
    "revision": "32e20bfc3666800309ce50ff8388c670"
  },
  {
    "url": "javascript-basics-add-something-beginning-array-javascript/index.html",
    "revision": "20718b1b9ed2dc5ada20e43090989832"
  },
  {
    "url": "javascript-pdfs-css-transitions-and-web-design-trends-the-treehouse-show-ep-24/index.html",
    "revision": "f22439f27895a383628c95f4eb4a9321"
  },
  {
    "url": "jquery-custom-scrollbar-plugin/index.html",
    "revision": "be190c7275d6b0c41957af2dd8ada7ce"
  },
  {
    "url": "junior-frontend-developer-needed-mentor-coach/index.html",
    "revision": "b77ddc5c2704295981237c1435ee8cf9"
  },
  {
    "url": "launching-a-saas-product-using-wordpress-with-brian-casel-2/index.html",
    "revision": "512bc4f5762d66a96cf0bc9f91531946"
  },
  {
    "url": "launching-a-saas-product-using-wordpress-with-brian-casel/index.html",
    "revision": "3a48dbdcdbef2ade5f9e48390d248516"
  },
  {
    "url": "lazy-loading-images-intersection-observer/index.html",
    "revision": "894d091195401f71d5efd852230997d8"
  },
  {
    "url": "lessons-learned-building-a-saas-with-wordpress/index.html",
    "revision": "881aa42b8977579377308e78223a2dc6"
  },
  {
    "url": "let-jasmine-loop-array-data-validate-email-validation-javascript-example/index.html",
    "revision": "727bb9b95a76ce26dcaa515b14d38178"
  },
  {
    "url": "love-javascript-shorthand-else-statement/index.html",
    "revision": "3276ed8aeca6cc4c6ae94d2e9c2f5bde"
  },
  {
    "url": "make-real-copy-javascript-array-objects-without-reference/index.html",
    "revision": "e22d068045c16d0f59ade3ef97356ecb"
  },
  {
    "url": "matthew-moore-design/index.html",
    "revision": "303b5fb92e33cec06e38ee0f166c2151"
  },
  {
    "url": "maxmertkit-front-end-framework-with-lots-of-features-2/index.html",
    "revision": "19c7b81dcfdcffdc90224ee37d00af92"
  },
  {
    "url": "microsofts-latest-innovation-modern-ie-ie-testing-become-easier/index.html",
    "revision": "95689e859171da312c73cfd9684a44a1"
  },
  {
    "url": "mincss-clears-the-junk-out-of-your-css-finds-and-removes-selectors-youre-not-using/index.html",
    "revision": "87a3d257dbc0db01fe3ccb7ccc1d9bb9"
  },
  {
    "url": "my-frontend-toolbox-review-of-2015/index.html",
    "revision": "31bdc0edd563e504b9d9319dbedfd193"
  },
  {
    "url": "never-use-the-google-analytics-option-in-an-wordpress-theme/index.html",
    "revision": "65422f326ad06797721200c746b07f13"
  },
  {
    "url": "page-template-dashboard-for-wordpress/index.html",
    "revision": "da752898930f1b0ccbe32f4f6813e7c8"
  },
  {
    "url": "page/1/index.html",
    "revision": "ed575420bfc9eedbceb79df2a976fd5a"
  },
  {
    "url": "page/10/index.html",
    "revision": "0e35d0e61e33171a8eca44b6fd3d5d7b"
  },
  {
    "url": "page/11/index.html",
    "revision": "7c966c3054636142736aedf1753495c8"
  },
  {
    "url": "page/12/index.html",
    "revision": "86d51f139ceb555fe84c11587ffcb6dd"
  },
  {
    "url": "page/13/index.html",
    "revision": "605aad079e6a9a2bd8a71eb3acb52d7f"
  },
  {
    "url": "page/14/index.html",
    "revision": "d1034b0ab17d38457fbd19540408d56a"
  },
  {
    "url": "page/15/index.html",
    "revision": "885ee7c905fae7c6fe1d927d21185fee"
  },
  {
    "url": "page/16/index.html",
    "revision": "ace12752c303513ad34ae917fc857522"
  },
  {
    "url": "page/17/index.html",
    "revision": "7af423a6fc405624ee311b4c2c2213e5"
  },
  {
    "url": "page/18/index.html",
    "revision": "490e7ef72e7b774dd883df5f6963b703"
  },
  {
    "url": "page/19/index.html",
    "revision": "5439f14dae629b6c55d923873922a77b"
  },
  {
    "url": "page/2/index.html",
    "revision": "568cbef4517b28fbbf23be726d4e4676"
  },
  {
    "url": "page/20/index.html",
    "revision": "56849e2bc956893697610c787468e001"
  },
  {
    "url": "page/21/index.html",
    "revision": "2b28dd7fe2d6db4a9045059e93066297"
  },
  {
    "url": "page/22/index.html",
    "revision": "03abc9c6f5f3c29054697e9e8171972d"
  },
  {
    "url": "page/23/index.html",
    "revision": "a3f90005c4845b0b22449a17219166be"
  },
  {
    "url": "page/24/index.html",
    "revision": "0b1a4ec667596ea65c36404c861bd584"
  },
  {
    "url": "page/25/index.html",
    "revision": "27c039091a827c3a30c6bff962654309"
  },
  {
    "url": "page/26/index.html",
    "revision": "2f355d4e129ec04f1feca27f36070105"
  },
  {
    "url": "page/27/index.html",
    "revision": "bbe0476bbf1a6a6d285ce3ba4da15bde"
  },
  {
    "url": "page/28/index.html",
    "revision": "bcca0c5a7775dfd4f37265a2cee7c284"
  },
  {
    "url": "page/29/index.html",
    "revision": "91d1100fa8b9094142eec805aefa9adb"
  },
  {
    "url": "page/3/index.html",
    "revision": "060437f29bece09a3bff2e4587e01e0b"
  },
  {
    "url": "page/30/index.html",
    "revision": "25c2afe7b718f9c10b11df4b0db55394"
  },
  {
    "url": "page/31/index.html",
    "revision": "4a96367f5687c794da70e965365e2454"
  },
  {
    "url": "page/32/index.html",
    "revision": "6aa286fbc440b7454b31517863326dfc"
  },
  {
    "url": "page/33/index.html",
    "revision": "7bfe31ef3bddd41609fc526690c2a6a7"
  },
  {
    "url": "page/34/index.html",
    "revision": "2c36736950d00531653d6217ee221481"
  },
  {
    "url": "page/35/index.html",
    "revision": "3716f377fe5f84efc64e327463dcb274"
  },
  {
    "url": "page/36/index.html",
    "revision": "9988a852c9d812fbfc1e3d57f6453b07"
  },
  {
    "url": "page/37/index.html",
    "revision": "2ca52d2ded027045d0d9cd27cc8781a5"
  },
  {
    "url": "page/38/index.html",
    "revision": "a5d26a4c7bbb0ddd9571d65ca9a7552e"
  },
  {
    "url": "page/39/index.html",
    "revision": "a99aa5ce18a15b199cf4636dc411e410"
  },
  {
    "url": "page/4/index.html",
    "revision": "76698ede39a57d970c744fba83eb683b"
  },
  {
    "url": "page/40/index.html",
    "revision": "572244ed0fb1fdc99ab4b27b28926f04"
  },
  {
    "url": "page/41/index.html",
    "revision": "766b697bc80b60ba5e13c1a004eea99a"
  },
  {
    "url": "page/42/index.html",
    "revision": "0b5ab75da12bde458da2aecfab390352"
  },
  {
    "url": "page/43/index.html",
    "revision": "8ea976d463c8132abaccb20eaca8f112"
  },
  {
    "url": "page/44/index.html",
    "revision": "33712a7e958828266103bb61c110d68e"
  },
  {
    "url": "page/45/index.html",
    "revision": "8dc18f8ab105589e6ca65bc3cf2864b5"
  },
  {
    "url": "page/46/index.html",
    "revision": "7eef96eaa89d676b58e9cba30856fd7b"
  },
  {
    "url": "page/5/index.html",
    "revision": "f3cd2d1b9846cb1ab8d9cc4171a5ddf2"
  },
  {
    "url": "page/6/index.html",
    "revision": "35f09bbeaecd4bd485b39cefa3bcbeb1"
  },
  {
    "url": "page/7/index.html",
    "revision": "df846dc5f5e4f6039ef14664e29ca8ca"
  },
  {
    "url": "page/8/index.html",
    "revision": "3f0eccd7df256bbbbb0d476232e3f701"
  },
  {
    "url": "page/9/index.html",
    "revision": "fac1168138c1d6ba98a50cdeaf5cdb76"
  },
  {
    "url": "perfect-multi-column-css-liquid-layouts-iphone-compatible/index.html",
    "revision": "f4f8da650aa15f4ec149eecc42d4f941"
  },
  {
    "url": "photoshop-tutorials-30-photo-text-effect-tutorials/index.html",
    "revision": "841cb0b21017481c854714e5552c7af2"
  },
  {
    "url": "planning-your-web-design-with-sketches/index.html",
    "revision": "469a13d090ecc2616327824268a48495"
  },
  {
    "url": "post/index.html",
    "revision": "f4088c4ad5783af1ae84fb99bf55bc41"
  },
  {
    "url": "post/page/1/index.html",
    "revision": "96e5e0da7925ad10f47c546df01006ea"
  },
  {
    "url": "post/page/10/index.html",
    "revision": "0eee646dce77bb262460529c78b7abb4"
  },
  {
    "url": "post/page/11/index.html",
    "revision": "e632fc03102b36a9dbdc27b4e8c8d144"
  },
  {
    "url": "post/page/12/index.html",
    "revision": "4be0d3fcdb78084b09eca3df5697355a"
  },
  {
    "url": "post/page/13/index.html",
    "revision": "248edce626bc794c6964af15499254dd"
  },
  {
    "url": "post/page/14/index.html",
    "revision": "dc5b1435f654d251b454db0f4c0526e8"
  },
  {
    "url": "post/page/15/index.html",
    "revision": "1503292500e06a45d9eab40b18f7c2e3"
  },
  {
    "url": "post/page/16/index.html",
    "revision": "b51e5b5ef39d89ef530c5fb4bf1b4a61"
  },
  {
    "url": "post/page/17/index.html",
    "revision": "54253a0674e56617a65d8d77119c1884"
  },
  {
    "url": "post/page/18/index.html",
    "revision": "58b9498553371a54b34bb020e0aacf3f"
  },
  {
    "url": "post/page/19/index.html",
    "revision": "68d42c1134ccbe86ec0b4a7243ce4ce4"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "db8002f15eb417b007c1cd930411949b"
  },
  {
    "url": "post/page/20/index.html",
    "revision": "c85c7a98fd1ee38687867df850c07a10"
  },
  {
    "url": "post/page/21/index.html",
    "revision": "90ce540f7f8dc3ce735791ee8abcac5d"
  },
  {
    "url": "post/page/22/index.html",
    "revision": "f85f7380ad806bf985045742c797d71e"
  },
  {
    "url": "post/page/23/index.html",
    "revision": "a2db7f34e3c7960cbe5b3513a68b97ee"
  },
  {
    "url": "post/page/24/index.html",
    "revision": "413f6f040c52d951dd13c49b59569e05"
  },
  {
    "url": "post/page/25/index.html",
    "revision": "b3c4460526cd7e27ec28b8794a4be384"
  },
  {
    "url": "post/page/26/index.html",
    "revision": "8bc65a718af23ed03ed843308e0558ab"
  },
  {
    "url": "post/page/27/index.html",
    "revision": "ce4175cac7ddf6d58e5355db3064b1e8"
  },
  {
    "url": "post/page/28/index.html",
    "revision": "5170a2e4dc28af54bdc0558cc168d0c3"
  },
  {
    "url": "post/page/29/index.html",
    "revision": "94f2cdb304d7224714323af649e9bdcf"
  },
  {
    "url": "post/page/3/index.html",
    "revision": "d7b745e6417720d5c6f73994c1ee5155"
  },
  {
    "url": "post/page/30/index.html",
    "revision": "6073c5e49e8ec6dd2562b2e10ab9f225"
  },
  {
    "url": "post/page/31/index.html",
    "revision": "f27470ef40ff390f74620a33a0ba8526"
  },
  {
    "url": "post/page/32/index.html",
    "revision": "3b4a932c2800208f125c100fc0d10838"
  },
  {
    "url": "post/page/33/index.html",
    "revision": "b474237d5f592004ee83df40dbc38469"
  },
  {
    "url": "post/page/34/index.html",
    "revision": "af753d4f1a59ca7c01af3f8ce1d98a97"
  },
  {
    "url": "post/page/35/index.html",
    "revision": "8eb55a1f4240b35e8062e2c7833d6263"
  },
  {
    "url": "post/page/36/index.html",
    "revision": "9c9d9351232bfe731fa2020b7a91d24b"
  },
  {
    "url": "post/page/37/index.html",
    "revision": "d4c280ba327fcf66e6f8a6947e7ac6a3"
  },
  {
    "url": "post/page/38/index.html",
    "revision": "394d35c3fd6cf75d86300396c7a48c6f"
  },
  {
    "url": "post/page/39/index.html",
    "revision": "79fcf5451314da8e99a791b237d4d124"
  },
  {
    "url": "post/page/4/index.html",
    "revision": "8bc6931dceecad7c2f791030e08f0296"
  },
  {
    "url": "post/page/40/index.html",
    "revision": "5cf623325ecb68de08498a7664b198f1"
  },
  {
    "url": "post/page/41/index.html",
    "revision": "56fa6c6bed4119051a63cb232bab86a4"
  },
  {
    "url": "post/page/42/index.html",
    "revision": "13df12d97905a18288ab2c219a07c48d"
  },
  {
    "url": "post/page/43/index.html",
    "revision": "83e5a06f682941d2387d2c4ad6670c55"
  },
  {
    "url": "post/page/44/index.html",
    "revision": "7d0b62cc92b6f6b35f383a39ef0a0a53"
  },
  {
    "url": "post/page/45/index.html",
    "revision": "f65407ca565844bc371c2c91482ac8cc"
  },
  {
    "url": "post/page/46/index.html",
    "revision": "7e014582d35c241293d603cab65327dc"
  },
  {
    "url": "post/page/5/index.html",
    "revision": "018be5a77b66fdb220d295dcc0f9af50"
  },
  {
    "url": "post/page/6/index.html",
    "revision": "3983151af6d37a10df870b4b211393a9"
  },
  {
    "url": "post/page/7/index.html",
    "revision": "e1fd04c6eb49c4663a366577e1ca942a"
  },
  {
    "url": "post/page/8/index.html",
    "revision": "b1df94e1934bf1bc3f61205c4575b877"
  },
  {
    "url": "post/page/9/index.html",
    "revision": "3008e4754d8d2ea90a46dd72531b1c66"
  },
  {
    "url": "practical-example-of-how-to-use-bem-with-sass/index.html",
    "revision": "7563c1569768ea792b171bb46ee3b42d"
  },
  {
    "url": "prevent-git-merge-conflicts-by-tabs-or-spaces-with-editorconfig/index.html",
    "revision": "dc39521eba0de07cd3820ca7eefc245b"
  },
  {
    "url": "prototype-iphone-apps-with-javascript-and-html/index.html",
    "revision": "830cd2d77a5f68923f4487a64857e3bf"
  },
  {
    "url": "publish-post-accross-multiple-site-wordpress-multisite-network/index.html",
    "revision": "2f7623357df63bafcd4331facf6ed97d"
  },
  {
    "url": "push-php-data-to-an-wordpress-external-js-script-with-wp_localize_script/index.html",
    "revision": "8adde3051539dc95a54b0d39de55935c"
  },
  {
    "url": "re-think-your-wordpress-development-process/index.html",
    "revision": "ae38dae776b6c8d94f74a3df7d73fd07"
  },
  {
    "url": "react-native-ios-network-request-failed/index.html",
    "revision": "5ac72801e4b5184ad0893fdaf7e46a25"
  },
  {
    "url": "remotely-debug-your-responsive-website-with-chrome/index.html",
    "revision": "94adef7e9b1980d6b2c968d28ef3924b"
  },
  {
    "url": "responsive-sass-mixins/index.html",
    "revision": "06fb8625f16c013c22170062f2226bb1"
  },
  {
    "url": "selectik-a-cross-browser-and-completely-customizable-alternative-to-the-standard-select-form-2/index.html",
    "revision": "738ccfe93d75cb7d7e4c8f0901546db1"
  },
  {
    "url": "selectik-a-cross-browser-and-completely-customizable-alternative-to-the-standard-select-form/index.html",
    "revision": "6c1c906e2069347cf6f6df6ec096a220"
  },
  {
    "url": "short-history-of-web-typography/index.html",
    "revision": "72e3addc7c0b5270b56adc18b0810688"
  },
  {
    "url": "simple-name-filter-angularjs/index.html",
    "revision": "456fa759d7d0ed404dbf3a7c7e7f3c43"
  },
  {
    "url": "smooth-sass-image-hover-effect/index.html",
    "revision": "ef1cbf52679e545d054f5546b2433e45"
  },
  {
    "url": "sort-custom-post-type-events-by-future-date/index.html",
    "revision": "e14865c651f0274fdb97cc031ded93e2"
  },
  {
    "url": "structure-css-sass-large-application/index.html",
    "revision": "5be2d34496a7afaa440ce0e1cb44d13b"
  },
  {
    "url": "successful-web-design-comes-down-to-the-details/index.html",
    "revision": "84b34a7dd119177de672ea062fae9aee"
  },
  {
    "url": "tags/2015/index.html",
    "revision": "08bf6c7507d76c4103829d12f72e4036"
  },
  {
    "url": "tags/2015/page/1/index.html",
    "revision": "f3fa332c8e0167e9db3eff3afef06161"
  },
  {
    "url": "tags/add_menu_page/index.html",
    "revision": "a0ce02e303acc38c25456589aa3724dc"
  },
  {
    "url": "tags/add_menu_page/page/1/index.html",
    "revision": "94d73f0808fb5400e5ec2c59da60b7e0"
  },
  {
    "url": "tags/admin/index.html",
    "revision": "2e8a946f197081c127656fde8461592d"
  },
  {
    "url": "tags/admin/page/1/index.html",
    "revision": "e346eac939005eae6a255a18020bdef8"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "858abb81a8aae02cb27e6cbfe377350c"
  },
  {
    "url": "tags/agile/page/1/index.html",
    "revision": "5daf599fb81fac84b9e6adc4c725685a"
  },
  {
    "url": "tags/android/index.html",
    "revision": "15d41666b919372f5aa173eed957782b"
  },
  {
    "url": "tags/android/page/1/index.html",
    "revision": "7ccb6c5a016609997a15149f40f4c4ce"
  },
  {
    "url": "tags/angular2/index.html",
    "revision": "ed5c19aee6a4e93d3c53f130f9435945"
  },
  {
    "url": "tags/angular2/page/1/index.html",
    "revision": "b37c1822492d92e215d453903a6e7b4a"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "764c9b496f976c1bad2c98873b3c7a20"
  },
  {
    "url": "tags/angularjs/page/1/index.html",
    "revision": "ab249eb90a01224067342afd91dcb960"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "8fc60ebc992d393a79863d2982641045"
  },
  {
    "url": "tags/automation/page/1/index.html",
    "revision": "cfa0b18d7457ce232cdb4ea5b94c5ab4"
  },
  {
    "url": "tags/basics/index.html",
    "revision": "18c57117d7a93eaf7dbca579ca0eb618"
  },
  {
    "url": "tags/basics/page/1/index.html",
    "revision": "4786652193f87ef679c247a785ad3f90"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "200479c497b481887c32322825070a75"
  },
  {
    "url": "tags/behance/page/1/index.html",
    "revision": "eda9a22f935997ad5884dbc1444d23c1"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "446dc4f6afd88fbec5c53aa1c2663fdd"
  },
  {
    "url": "tags/bem/page/1/index.html",
    "revision": "fd1d9b8d0a62b3e684b091ad385a4caf"
  },
  {
    "url": "tags/best-of/index.html",
    "revision": "36e25e96ab8ee3611226ae92a146c2fd"
  },
  {
    "url": "tags/best-of/page/1/index.html",
    "revision": "74ccbaaece2ddb0f2c3ee3eb1f1ee86e"
  },
  {
    "url": "tags/bitbucket/index.html",
    "revision": "89b9327831eb8d9a43a1e9f3456045bd"
  },
  {
    "url": "tags/bitbucket/page/1/index.html",
    "revision": "ed7e7618fd32e998bd7404c8e6547489"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "3860707a52df7f3c4327f947a17a306d"
  },
  {
    "url": "tags/breadcrumb/page/1/index.html",
    "revision": "5e6ef72d28c4aae1e9cd51643b8a4eb7"
  },
  {
    "url": "tags/button/index.html",
    "revision": "98399e4a6ada7e4e3ecf49fc0e2ff228"
  },
  {
    "url": "tags/button/page/1/index.html",
    "revision": "23dabbdce6c33984bea7214ba498653f"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "cde219b485995bc0129d74125196ec60"
  },
  {
    "url": "tags/chrome/page/1/index.html",
    "revision": "532cbe5568e8a13f3b1b0f5701fa8ec7"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "5d8fd15f7d3a8f9dee535a757915baf9"
  },
  {
    "url": "tags/classes/page/1/index.html",
    "revision": "86f80495364154be358bc112c596885c"
  },
  {
    "url": "tags/clone/index.html",
    "revision": "b0a6d80e3d7ae9fd29ec35dddc9084a9"
  },
  {
    "url": "tags/clone/page/1/index.html",
    "revision": "d9a7bc6d49cec3c6ea8ef1ef21bbfd1c"
  },
  {
    "url": "tags/coaching/index.html",
    "revision": "185ee0b6a65dec64547e0ccfc6efc032"
  },
  {
    "url": "tags/coaching/page/1/index.html",
    "revision": "f9a72be80c7d6de453400b8e9ce6cc69"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "481270bec461a581f6d4001ca0fc06d2"
  },
  {
    "url": "tags/codepen/page/1/index.html",
    "revision": "25b3aceae14f56318b664f6d7a0838b4"
  },
  {
    "url": "tags/conditional-tag/index.html",
    "revision": "304c0d49e3d6418f7ed08bcc932a70e6"
  },
  {
    "url": "tags/conditional-tag/page/1/index.html",
    "revision": "bdbef0bdea8535374a080c3c83febc4f"
  },
  {
    "url": "tags/crossbrowser/index.html",
    "revision": "13b72f150049e1f53d8dea7b593ed5e1"
  },
  {
    "url": "tags/crossbrowser/page/1/index.html",
    "revision": "6dffb65b47c4c2131a70b9a96dea7ede"
  },
  {
    "url": "tags/css/index.html",
    "revision": "f63fb2a31c744074497eed04988b73f2"
  },
  {
    "url": "tags/css/page/1/index.html",
    "revision": "34f68632aa48843e56b3ce103f7cc0a3"
  },
  {
    "url": "tags/css/page/2/index.html",
    "revision": "3ed088987b3d1346d44538ae3c7e11fe"
  },
  {
    "url": "tags/css/page/3/index.html",
    "revision": "d0448c25fb887909dfcae57505205ac3"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "25acb1b601ac56cf6b9e68ea2fa3b372"
  },
  {
    "url": "tags/css3/page/1/index.html",
    "revision": "1ed8a7967fa18b59f0afc484553859f1"
  },
  {
    "url": "tags/css3/page/2/index.html",
    "revision": "568f0b557c3d50a64b409af2d74fc037"
  },
  {
    "url": "tags/custom-post-type/index.html",
    "revision": "0599c50f1ad0bc97d5e60e097aca1dc0"
  },
  {
    "url": "tags/custom-post-type/page/1/index.html",
    "revision": "01c488bef367eb36ad34757884552b49"
  },
  {
    "url": "tags/custom-post-type/page/2/index.html",
    "revision": "527d6063a95f221bf8308613b8a4583b"
  },
  {
    "url": "tags/deployment/index.html",
    "revision": "0c17a08cc890cdb3a021b7af634b5afb"
  },
  {
    "url": "tags/deployment/page/1/index.html",
    "revision": "1bc354f2b76725f77214accc9a7d5d75"
  },
  {
    "url": "tags/developer/index.html",
    "revision": "db651a1c2fbae629daf0b1a3dec4255c"
  },
  {
    "url": "tags/developer/page/1/index.html",
    "revision": "9994f58ee10e604335cb16dbebbe368b"
  },
  {
    "url": "tags/development/index.html",
    "revision": "c8d35f2a5f3b4635f24cc4f180c3dd64"
  },
  {
    "url": "tags/development/page/1/index.html",
    "revision": "f3df9c8ad49e51bb660feb12bafc51a2"
  },
  {
    "url": "tags/device/index.html",
    "revision": "21a9d9ad4ddd3304e97b585f9176d3da"
  },
  {
    "url": "tags/device/page/1/index.html",
    "revision": "1ab05411296cca05f5c6cefed58318f5"
  },
  {
    "url": "tags/dribbble/index.html",
    "revision": "7fb9926bd394162bf94eb5eb367d8e55"
  },
  {
    "url": "tags/dribbble/page/1/index.html",
    "revision": "abd21e22eb551e83974c0e5823da40d0"
  },
  {
    "url": "tags/duplicate/index.html",
    "revision": "36ca3a600ba56aa39d46cb7cd823f762"
  },
  {
    "url": "tags/duplicate/page/1/index.html",
    "revision": "686002175eca608ab556a263200c4587"
  },
  {
    "url": "tags/email/index.html",
    "revision": "4448251f8af5e46313b3b7011e74751a"
  },
  {
    "url": "tags/email/page/1/index.html",
    "revision": "7df9b7d93af71c10d88746941a07e86f"
  },
  {
    "url": "tags/empty-space/index.html",
    "revision": "d1985ee258389fb6613427d67c26a21c"
  },
  {
    "url": "tags/empty-space/page/1/index.html",
    "revision": "f7cf47fd06a334404601e4dad924c4a3"
  },
  {
    "url": "tags/es2015/index.html",
    "revision": "75ee6612fd28e7327b46a63d5174be8a"
  },
  {
    "url": "tags/es2015/page/1/index.html",
    "revision": "89d56b94db76f5c297da8676c35368e9"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "d945fb46145d7f569721015a670332d2"
  },
  {
    "url": "tags/es6/page/1/index.html",
    "revision": "18df26c14673fb5175aa3a29bb042dcc"
  },
  {
    "url": "tags/event/index.html",
    "revision": "3cb217f116c28b7d7526dc370186d177"
  },
  {
    "url": "tags/event/page/1/index.html",
    "revision": "65755d875b6eea785a1673ebfb3f2d6b"
  },
  {
    "url": "tags/events/index.html",
    "revision": "cf1c6a7bb396b52c007e60294dbdef30"
  },
  {
    "url": "tags/events/page/1/index.html",
    "revision": "308c539ad57ae47aca087837bc3b78de"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "afd738ee6a01974744a94b7382c176d6"
  },
  {
    "url": "tags/extension/page/1/index.html",
    "revision": "4359f69a6de29c6fa9f677505ef4b160"
  },
  {
    "url": "tags/firefox/index.html",
    "revision": "3f3ce40a1da163b641dbdfab00c56fec"
  },
  {
    "url": "tags/firefox/page/1/index.html",
    "revision": "8d69d0c4237d4e9b44813cafe7d64f6e"
  },
  {
    "url": "tags/flat-design/index.html",
    "revision": "e6e84a8c7d3453c805f787079fb169e8"
  },
  {
    "url": "tags/flat-design/page/1/index.html",
    "revision": "962058bc9ade1ac2593e8a3d0a70064a"
  },
  {
    "url": "tags/flexbox/index.html",
    "revision": "585169a6802eb19a80cbda03203a61bc"
  },
  {
    "url": "tags/flexbox/page/1/index.html",
    "revision": "16d1ac401272b1a07d020f87992812ea"
  },
  {
    "url": "tags/flexslider/index.html",
    "revision": "16347d8ee0fffd26e8685dac95b66e46"
  },
  {
    "url": "tags/flexslider/page/1/index.html",
    "revision": "85c622c2f2909223fb64d306c837e712"
  },
  {
    "url": "tags/freebies/index.html",
    "revision": "fef8568be44d8e2b0cba328ac4ae2eba"
  },
  {
    "url": "tags/freebies/page/1/index.html",
    "revision": "fdb330140160e6651ca6abc5ff3bc776"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "adb6192dd8c2760ab18089f5b6b3a6e3"
  },
  {
    "url": "tags/frontend/page/1/index.html",
    "revision": "a47c995e833a01ab607655b8eb8b784c"
  },
  {
    "url": "tags/frontend/page/2/index.html",
    "revision": "4b4cb07c361fb57a539891013068f0a6"
  },
  {
    "url": "tags/function/index.html",
    "revision": "b77c2f8b79d76ba556311faf456d5e71"
  },
  {
    "url": "tags/function/page/1/index.html",
    "revision": "746a93c766c8499a13cc6684588b4ec2"
  },
  {
    "url": "tags/genesis-framework/index.html",
    "revision": "48fe4171d73941aa07cbeed6c8c87506"
  },
  {
    "url": "tags/genesis-framework/page/1/index.html",
    "revision": "6cab163b94afbe9760d65aaad7df2d78"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c6e38c2e0089e269b1f9658166e614f6"
  },
  {
    "url": "tags/git/page/1/index.html",
    "revision": "bae1658075e2dabb7f4898a66ac55ad5"
  },
  {
    "url": "tags/github/index.html",
    "revision": "3c0426be152a7950dab7075db942fdc8"
  },
  {
    "url": "tags/github/page/1/index.html",
    "revision": "047e15bd430ad0457295bf5ece2966f4"
  },
  {
    "url": "tags/google-analytics/index.html",
    "revision": "360083055a962f52541bfc375cf4c8fc"
  },
  {
    "url": "tags/google-analytics/page/1/index.html",
    "revision": "86dd5bf0e0facbfb9bde9055b2e7eafc"
  },
  {
    "url": "tags/google-maps/index.html",
    "revision": "cf570f566d7d1c8bda532e474485f276"
  },
  {
    "url": "tags/google-maps/page/1/index.html",
    "revision": "4804faff54e336b4d39529f33b897b48"
  },
  {
    "url": "tags/google/index.html",
    "revision": "578391c9a96d455f08bbbf6d17158fb3"
  },
  {
    "url": "tags/google/page/1/index.html",
    "revision": "fd500a7c1690ac1479b155096d8b0c72"
  },
  {
    "url": "tags/gruntjs/index.html",
    "revision": "fbfb446501f6c0965210727ffb20aa19"
  },
  {
    "url": "tags/gruntjs/page/1/index.html",
    "revision": "4429cf552902585ced09a01d363d4c54"
  },
  {
    "url": "tags/gulpjs/index.html",
    "revision": "85d9b44f5ba2f1a4d1170ea33e01eccf"
  },
  {
    "url": "tags/gulpjs/page/1/index.html",
    "revision": "db718a49468fe056746e60533133ab36"
  },
  {
    "url": "tags/html/index.html",
    "revision": "f17d34dd965917f4229d71eaf6d75970"
  },
  {
    "url": "tags/html/page/1/index.html",
    "revision": "b7ba68b8f4ad760d308a231eb0173c53"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "57b943906d736b9ae32330e52ab65624"
  },
  {
    "url": "tags/html5/page/1/index.html",
    "revision": "b5ec3589fab26cf56cd4c5825600341f"
  },
  {
    "url": "tags/icon-fonts/index.html",
    "revision": "6091a36ea4dd6074c8ebecef1d33e492"
  },
  {
    "url": "tags/icon-fonts/page/1/index.html",
    "revision": "8faec1f7d271a449e1d3eefdbc601e4f"
  },
  {
    "url": "tags/ie10/index.html",
    "revision": "91e2e886e9e7332643fb17869225da74"
  },
  {
    "url": "tags/ie10/page/1/index.html",
    "revision": "0252f3730d58e9859c86159af6c7b40c"
  },
  {
    "url": "tags/image/index.html",
    "revision": "597d295aa53d400cb5d0abbcc49ee534"
  },
  {
    "url": "tags/image/page/1/index.html",
    "revision": "b4fc90a6e1f148180de47a3288b875a7"
  },
  {
    "url": "tags/input/index.html",
    "revision": "db01b02b3d84f942c007f25ddc89b7c6"
  },
  {
    "url": "tags/input/page/1/index.html",
    "revision": "2c7bf051501dca82145a2bdcf0dd787e"
  },
  {
    "url": "tags/inspiration/index.html",
    "revision": "ecb7c2782356fef427e112baff0770ca"
  },
  {
    "url": "tags/inspiration/page/1/index.html",
    "revision": "3367337b0e05a7871e79ce711d63009a"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "d08590d624ba337edeaff6f08dec7055"
  },
  {
    "url": "tags/ios/page/1/index.html",
    "revision": "2b3d6b32a6796c2bb281c1b5dfd586e1"
  },
  {
    "url": "tags/ios7/index.html",
    "revision": "3f4fb96e37520ebf46285b2535bdd549"
  },
  {
    "url": "tags/ios7/page/1/index.html",
    "revision": "e2e956d656ee99a56d73f96d50eb4ff9"
  },
  {
    "url": "tags/issue/index.html",
    "revision": "fa327cd061aca3b34419edf3c0a3abdf"
  },
  {
    "url": "tags/issue/page/1/index.html",
    "revision": "af0e1489256ff678735ee8d35dce5183"
  },
  {
    "url": "tags/itunes/index.html",
    "revision": "5e2afecdfbc9a0c63d1dd29d27300627"
  },
  {
    "url": "tags/itunes/page/1/index.html",
    "revision": "bc3514295a90d82eea1bfad5dd2840b6"
  },
  {
    "url": "tags/jasmine/index.html",
    "revision": "99d0c9e2831f57a904c2ad2f870b5588"
  },
  {
    "url": "tags/jasmine/page/1/index.html",
    "revision": "907404c3457f6cdcc512fd11bb4327c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "b4d031307ceeb991ba68f8de7d5709d4"
  },
  {
    "url": "tags/javascript/page/1/index.html",
    "revision": "654f47f26bb879820f2c79d5c8f39d17"
  },
  {
    "url": "tags/javascript/page/2/index.html",
    "revision": "3c7bc43b280ed03f3ec45f53dc71f36b"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "0f4e4ba762dc44d3514825740f028ca2"
  },
  {
    "url": "tags/jquery/page/1/index.html",
    "revision": "4ecfd70bf1f4922b23dced167844e76f"
  },
  {
    "url": "tags/junior/index.html",
    "revision": "e5d01665934738a0b7172087f1c08922"
  },
  {
    "url": "tags/junior/page/1/index.html",
    "revision": "451b5fcedc5a2109b613a2b747193c04"
  },
  {
    "url": "tags/less/index.html",
    "revision": "19cbee9ccf4d02ea762857b37d946d25"
  },
  {
    "url": "tags/less/page/1/index.html",
    "revision": "97845c4fac4cccbd8d8213000fda658f"
  },
  {
    "url": "tags/loop/index.html",
    "revision": "65937bb4f4b928fa0c0baa0349564dca"
  },
  {
    "url": "tags/loop/page/1/index.html",
    "revision": "2eee65e961ed0a0ecadb9c8d34aa9b57"
  },
  {
    "url": "tags/markup/index.html",
    "revision": "c1c3c0a6594f2d77141a90762ca67bd0"
  },
  {
    "url": "tags/markup/page/1/index.html",
    "revision": "08208a3792c13f60fda22e36ccf70b4c"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "baf906d88046e6c45fc1b10ec6773fa2"
  },
  {
    "url": "tags/mentoring/page/1/index.html",
    "revision": "714a04c70ae8deca85407feb0c637188"
  },
  {
    "url": "tags/meta-box/index.html",
    "revision": "593a942cb6b83ea0396678ed3cb7a149"
  },
  {
    "url": "tags/meta-box/page/1/index.html",
    "revision": "bea937e59c2e5d7ce97c5894091534a1"
  },
  {
    "url": "tags/meta-field/index.html",
    "revision": "53beb6419b9c463898c8de9a8dc812f0"
  },
  {
    "url": "tags/meta-field/page/1/index.html",
    "revision": "0bc51d4e26b1ce1177619b2dbf24c0e7"
  },
  {
    "url": "tags/microsoft/index.html",
    "revision": "7a183f1d7c15ecb816e15ef1c6b266d2"
  },
  {
    "url": "tags/microsoft/page/1/index.html",
    "revision": "bf40d271864185cebbf08479a69a7f89"
  },
  {
    "url": "tags/mixin/index.html",
    "revision": "fafca08d94debcdbcdff5cc115480b74"
  },
  {
    "url": "tags/mixin/page/1/index.html",
    "revision": "2c20a05d38358b9e5a504af943d4e1dd"
  },
  {
    "url": "tags/mobile/index.html",
    "revision": "41646dc463e98c7791dc9c724c2ebc56"
  },
  {
    "url": "tags/mobile/page/1/index.html",
    "revision": "966549fce55d34fc8c5b3b32a16e1a8c"
  },
  {
    "url": "tags/module/index.html",
    "revision": "53b03eb7136ae9030c0ec19068757eec"
  },
  {
    "url": "tags/module/page/1/index.html",
    "revision": "693726a04ba584ed69a771a94781eacd"
  },
  {
    "url": "tags/multisite/index.html",
    "revision": "f1c3e5a613c7e2786dbce6a4d1597dc7"
  },
  {
    "url": "tags/multisite/page/1/index.html",
    "revision": "b523ef2a359ee0d93ee39d77d4cf5bb3"
  },
  {
    "url": "tags/nas/index.html",
    "revision": "3e75fec7de8e0660e986d952051070b4"
  },
  {
    "url": "tags/nas/page/1/index.html",
    "revision": "96f65f34276a5b06660e887248e65379"
  },
  {
    "url": "tags/network/index.html",
    "revision": "b2fdc4c7101dbc060d64f5d9c37b2c25"
  },
  {
    "url": "tags/network/page/1/index.html",
    "revision": "2fa4d941b642282ecda5c72ea721ef53"
  },
  {
    "url": "tags/node_modules/index.html",
    "revision": "c14c1795189792af7c932f8ddff9e496"
  },
  {
    "url": "tags/node_modules/page/1/index.html",
    "revision": "c7fdf6b22b69efd1ace8f952bcc3cbee"
  },
  {
    "url": "tags/nodejs/index.html",
    "revision": "c92f4c933543479b7082efe02670bc93"
  },
  {
    "url": "tags/nodejs/page/1/index.html",
    "revision": "80718e303cb72e193711b1b5315ec378"
  },
  {
    "url": "tags/notification/index.html",
    "revision": "1ee21e000aa2f4fd9f7f6f08a651822b"
  },
  {
    "url": "tags/notification/page/1/index.html",
    "revision": "ef844b2e024484435b4447f5b28e990b"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "430b059f418ac6c3cd9371c34972f55d"
  },
  {
    "url": "tags/npm/page/1/index.html",
    "revision": "8a980c16171e19e7bd4d76f4ee62d571"
  },
  {
    "url": "tags/options/index.html",
    "revision": "468c16ccef655b54126f2310c60ee33a"
  },
  {
    "url": "tags/options/page/1/index.html",
    "revision": "c3e454213ade1c466ab5f6a31ff6bc99"
  },
  {
    "url": "tags/page/index.html",
    "revision": "3925c3fc4b01607a2da9785545eee9bb"
  },
  {
    "url": "tags/page/page/1/index.html",
    "revision": "ea3a32d7d15a3facb9a34663107ad2ef"
  },
  {
    "url": "tags/pagination/index.html",
    "revision": "d19cce4fb5daf01b3c04b0f3b17b3481"
  },
  {
    "url": "tags/pagination/page/1/index.html",
    "revision": "cb6cec825aeca8c65c54114d81bee373"
  },
  {
    "url": "tags/pattern/index.html",
    "revision": "0d97cc68a3b587ffca06d640bdc2e85d"
  },
  {
    "url": "tags/pattern/page/1/index.html",
    "revision": "5bbaed492e1919d8261bb6ffd2a2cca6"
  },
  {
    "url": "tags/performance/index.html",
    "revision": "43880e39e1d8227f5675bf14a178d6b8"
  },
  {
    "url": "tags/performance/page/1/index.html",
    "revision": "2387e750d581080fa0ce7b1029586e33"
  },
  {
    "url": "tags/permalink/index.html",
    "revision": "04a63a517c9b56cb455bb47d29667739"
  },
  {
    "url": "tags/permalink/page/1/index.html",
    "revision": "c22a1c498458c7bd0c14867a47e0c395"
  },
  {
    "url": "tags/php/index.html",
    "revision": "d1c7e3bb73978a86bd2f7f94ab92d480"
  },
  {
    "url": "tags/php/page/1/index.html",
    "revision": "4918b09ecb1e1c9efa6df7b4c371c16d"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "bfb843792c4abb46274dfc07a5fe624c"
  },
  {
    "url": "tags/plugin/page/1/index.html",
    "revision": "21ed4946af0b8444cfd9d038e6c27613"
  },
  {
    "url": "tags/plugin/page/2/index.html",
    "revision": "7e3810baa821592ea8ef760f97aef619"
  },
  {
    "url": "tags/post/index.html",
    "revision": "75a691b91484c4372c7a73885249d5cb"
  },
  {
    "url": "tags/post/page/1/index.html",
    "revision": "2ac236cb5f6d385da8e1643d87d3edd0"
  },
  {
    "url": "tags/postccs/index.html",
    "revision": "bf35855269b28237c7fbe830e708ea1f"
  },
  {
    "url": "tags/postccs/page/1/index.html",
    "revision": "970e18c506b11d074d7db5c8021aac2f"
  },
  {
    "url": "tags/psd/index.html",
    "revision": "b343ce8765c25aca8a8005cf7d7f170a"
  },
  {
    "url": "tags/psd/page/1/index.html",
    "revision": "3fba61556488ade1d452ed8bfb176ecc"
  },
  {
    "url": "tags/re-think/index.html",
    "revision": "a7269d43b462dd93f316c91bd4ed8e52"
  },
  {
    "url": "tags/re-think/page/1/index.html",
    "revision": "762d9c7c07e2d8dd75dae0ec467542bf"
  },
  {
    "url": "tags/react-native/index.html",
    "revision": "4f896375ac720eb27be6c99d5283cfcc"
  },
  {
    "url": "tags/react-native/page/1/index.html",
    "revision": "ee1023f33ddf47ac091f993ab3a68efa"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "75dfdeaa63a149e64ce4b1da35c9a826"
  },
  {
    "url": "tags/resources/page/1/index.html",
    "revision": "d0802762a3e7fcc3dd93234859630493"
  },
  {
    "url": "tags/responsive-website/index.html",
    "revision": "d06fed64f7fd23f739c36262430dc922"
  },
  {
    "url": "tags/responsive-website/page/1/index.html",
    "revision": "2fa4b6f4d11b3ce9267a42dde5ccfbd1"
  },
  {
    "url": "tags/responsive-website/page/2/index.html",
    "revision": "055c32f165b3073058ef8f4158d42fa8"
  },
  {
    "url": "tags/retweet/index.html",
    "revision": "bbfbe22dce62cae45ffee2a918f270fb"
  },
  {
    "url": "tags/retweet/page/1/index.html",
    "revision": "6796fab20c9ded7127c5da9570aa6ccf"
  },
  {
    "url": "tags/right-to-left/index.html",
    "revision": "94aefe028dc1e009047e752b8633cfc9"
  },
  {
    "url": "tags/right-to-left/page/1/index.html",
    "revision": "50e565a4ca099c391be8b685bf68bdb9"
  },
  {
    "url": "tags/rtl/index.html",
    "revision": "731099c19331caffc50b0f1552dfeab9"
  },
  {
    "url": "tags/rtl/page/1/index.html",
    "revision": "f9efef9b1d5650dec9659a7006b09bad"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "d0bcc8b206a711941035d79f2c878e36"
  },
  {
    "url": "tags/sass/page/1/index.html",
    "revision": "b4dbb14638911c64420d0db74a2f44f1"
  },
  {
    "url": "tags/sass/page/2/index.html",
    "revision": "b83de74fafaf9c537f8b8feb4535d9be"
  },
  {
    "url": "tags/selector/index.html",
    "revision": "8cba8eab03bd0dcb65c4926f16999070"
  },
  {
    "url": "tags/selector/page/1/index.html",
    "revision": "9dd65a59d6d1508d8222b7fa0f50737b"
  },
  {
    "url": "tags/seo/index.html",
    "revision": "17763a06eedf409d51d9a832d96e6772"
  },
  {
    "url": "tags/seo/page/1/index.html",
    "revision": "bb67b05c8c677af90d28aa4f821e0760"
  },
  {
    "url": "tags/shortcode/index.html",
    "revision": "d8ff38302aa60505406af8c47e67afb2"
  },
  {
    "url": "tags/shortcode/page/1/index.html",
    "revision": "5c01c05b3d624d9765039b7e9c0d0d00"
  },
  {
    "url": "tags/snippet/index.html",
    "revision": "9383e2960a49fded79933afe443efb77"
  },
  {
    "url": "tags/snippet/page/1/index.html",
    "revision": "017667ce96ef8d0b433a49647692485d"
  },
  {
    "url": "tags/snippets/index.html",
    "revision": "f3d8ff6e7f47fb31ca94b33a33cfb8ff"
  },
  {
    "url": "tags/snippets/page/1/index.html",
    "revision": "204f95210b210c0da68ee2563bf171ae"
  },
  {
    "url": "tags/sort/index.html",
    "revision": "fd9245ad2f30ad8396659a957fac6220"
  },
  {
    "url": "tags/sort/page/1/index.html",
    "revision": "f65fac48e92e417c508648245f462bce"
  },
  {
    "url": "tags/sourcetree/index.html",
    "revision": "fe4065d484b989f3e7d55ac825464488"
  },
  {
    "url": "tags/sourcetree/page/1/index.html",
    "revision": "9bfd37fa0a09cf5785250720bf6b0e64"
  },
  {
    "url": "tags/speed/index.html",
    "revision": "083970475a850d06be4496ee1c480353"
  },
  {
    "url": "tags/speed/page/1/index.html",
    "revision": "0a0b2bf3ba9cea8d6d51429caed01f47"
  },
  {
    "url": "tags/table/index.html",
    "revision": "2a29757b8481050e88625e4637ea58a5"
  },
  {
    "url": "tags/table/page/1/index.html",
    "revision": "35c9b0750f9f503c9191f46e615cd66d"
  },
  {
    "url": "tags/tags/index.html",
    "revision": "83d5f844405a9bea26ea6199e39d9a7b"
  },
  {
    "url": "tags/tags/page/1/index.html",
    "revision": "ab04f338603a9281183e60d71fbbd385"
  },
  {
    "url": "tags/taskrunner/index.html",
    "revision": "dff003094dd4d428c7f2306a05c72728"
  },
  {
    "url": "tags/taskrunner/page/1/index.html",
    "revision": "f752d19d068cb9e031cf40851e66e5cc"
  },
  {
    "url": "tags/testing/index.html",
    "revision": "95e615bfe495a5cb143ceb6ed5f16098"
  },
  {
    "url": "tags/testing/page/1/index.html",
    "revision": "6e4588bc87c35783b37aa0619a25823c"
  },
  {
    "url": "tags/theme/index.html",
    "revision": "adcf021842eeac6dbdd839b7bebd46a3"
  },
  {
    "url": "tags/theme/page/1/index.html",
    "revision": "400f6221eddd276019e57d2a4fc0a5a0"
  },
  {
    "url": "tags/themes/index.html",
    "revision": "fd44955f8c9c1a02acb52b9f9f86f009"
  },
  {
    "url": "tags/themes/page/1/index.html",
    "revision": "cefb20c64211fe8f51e446f6f53e8e63"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "a760cbd478b035c71bfeb8f67f1da91d"
  },
  {
    "url": "tags/tools/page/1/index.html",
    "revision": "52c1baf9b41223bddad131c130c9bbff"
  },
  {
    "url": "tags/tweets/index.html",
    "revision": "48047164c045075541d0b71d1a1f8cec"
  },
  {
    "url": "tags/tweets/page/1/index.html",
    "revision": "e6971de519c1b6c474dfc094bc31bc0b"
  },
  {
    "url": "tags/tweets/page/2/index.html",
    "revision": "575f6c5f08d5a91a6417460683478fb3"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "56c3636443b5d883cf6bd995586cdb0e"
  },
  {
    "url": "tags/twitter/page/1/index.html",
    "revision": "910051bc50df17aa4e77d53d77815a62"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "f187ae92a4d7ee38ff31335b9cda314a"
  },
  {
    "url": "tags/typescript/page/1/index.html",
    "revision": "d88ba6743b4b63db6052e406c09cb029"
  },
  {
    "url": "tags/user-interface/index.html",
    "revision": "94636b2741175e03a9a8f185f9e75a13"
  },
  {
    "url": "tags/user-interface/page/1/index.html",
    "revision": "767454cd56f635dde4709d56ee76f160"
  },
  {
    "url": "tags/useragent/index.html",
    "revision": "53bc75f3f71086dd386d0cf3e4374f95"
  },
  {
    "url": "tags/useragent/page/1/index.html",
    "revision": "cc1a0c904ca6da0007fc4cefff6c8527"
  },
  {
    "url": "tags/vanilla-javascript/index.html",
    "revision": "d3e7ff4459a9d7984665d00767031779"
  },
  {
    "url": "tags/vanilla-javascript/page/1/index.html",
    "revision": "1fa80254b35695b34dfc10b2a0b30b83"
  },
  {
    "url": "tags/vision/index.html",
    "revision": "116287ba2fc0a4f65d51b59597e48a0d"
  },
  {
    "url": "tags/vision/page/1/index.html",
    "revision": "be2409f7ac8fce8b56a1cfa36a1c0c18"
  },
  {
    "url": "tags/we-love-icon-fonts/index.html",
    "revision": "b9c78b20dc0b6b3a88f78d17a5d07c05"
  },
  {
    "url": "tags/we-love-icon-fonts/page/1/index.html",
    "revision": "09864dce66e51825b4995744f99a4faa"
  },
  {
    "url": "tags/webdesign/index.html",
    "revision": "09d371bbce2a12e0e1dde74144080ec6"
  },
  {
    "url": "tags/webdesign/page/1/index.html",
    "revision": "a394000f941e506b4398c703da47e4d8"
  },
  {
    "url": "tags/webdesign/page/2/index.html",
    "revision": "0d1a311f0f2253614dc50350aee1e299"
  },
  {
    "url": "tags/webdesign/page/3/index.html",
    "revision": "66e492794664a5ac2cbe819ababda670"
  },
  {
    "url": "tags/webdevelopment/index.html",
    "revision": "eb1112dee7a70636a8cc5ed0f1a42412"
  },
  {
    "url": "tags/webdevelopment/page/1/index.html",
    "revision": "808160029862b02283663be4bac59fce"
  },
  {
    "url": "tags/webdevelopment/page/2/index.html",
    "revision": "875d70552f396b9c06f2371e2b3f3bd6"
  },
  {
    "url": "tags/webfonts/index.html",
    "revision": "38077d5f2c1fe81a16e8b89204095909"
  },
  {
    "url": "tags/webfonts/page/1/index.html",
    "revision": "4c0e4e8beffada7467809120c68ed212"
  },
  {
    "url": "tags/weekly/index.html",
    "revision": "72290d217da97c7153037618aa0653fb"
  },
  {
    "url": "tags/weekly/page/1/index.html",
    "revision": "add6c0e0c7740b88c35251582659d3fe"
  },
  {
    "url": "tags/weekly/page/2/index.html",
    "revision": "7e7f3b430e25e42fbc271a45897d2427"
  },
  {
    "url": "tags/windows-8.1/index.html",
    "revision": "10ea8ec19b8187c3812f8690063c29e6"
  },
  {
    "url": "tags/windows-8.1/page/1/index.html",
    "revision": "ce1f09a9dd3ed1e7da34a34d0dd880aa"
  },
  {
    "url": "tags/windows-8/index.html",
    "revision": "d6a3e95d177554c2742344e74474f5ed"
  },
  {
    "url": "tags/windows-8/page/1/index.html",
    "revision": "449ec716ec881948331e5cee4a23a0f7"
  },
  {
    "url": "tags/woocommerce/index.html",
    "revision": "497691be993817b8aae4c6a64178f71a"
  },
  {
    "url": "tags/woocommerce/page/1/index.html",
    "revision": "15f1309c8ee82edb3f6e3c25ffe64328"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "40369366692e4915ef6b6e0ff20b1dcc"
  },
  {
    "url": "tags/wordpress/page/1/index.html",
    "revision": "6b42cf6422e1e3bc3d255e11bdc89f14"
  },
  {
    "url": "tags/wordpress/page/2/index.html",
    "revision": "e2515689202746b5d46d0c0bf94ceead"
  },
  {
    "url": "tags/wordpress/page/3/index.html",
    "revision": "617672914237867579080c152fc919be"
  },
  {
    "url": "tags/wordpress/page/4/index.html",
    "revision": "9da2fa32268c4d2608de95421c59940d"
  },
  {
    "url": "tags/workflow/index.html",
    "revision": "dced7329c101a890271c5cffa53fcad9"
  },
  {
    "url": "tags/workflow/page/1/index.html",
    "revision": "b01712036682e27f3f578b6a3d77a7b7"
  },
  {
    "url": "tags/wp_redirect/index.html",
    "revision": "0be473d9309dce9e031539657953d06a"
  },
  {
    "url": "tags/wp_redirect/page/1/index.html",
    "revision": "db40b5325d9b0a593b607ef6be618125"
  },
  {
    "url": "tags/wpmu/index.html",
    "revision": "ee719510c6252b5eec29bfefe2e99688"
  },
  {
    "url": "tags/wpmu/page/1/index.html",
    "revision": "4b6aef60ae2379005019fe11dced856a"
  },
  {
    "url": "the-best-365-websites-around-the-world/index.html",
    "revision": "7bc11df3e88479d7ff7fb3d92d307932"
  },
  {
    "url": "the-pros-guide-to-css-layouts/index.html",
    "revision": "d5ff97955ed2f828ca1990cf0c81b2f2"
  },
  {
    "url": "this-one-advice-is-all-it-takes-to-become-a-successful-freelancer-video/index.html",
    "revision": "69e975301e0da377c155b72148b91e7f"
  },
  {
    "url": "this-weeks-web-design-135/index.html",
    "revision": "6bccc3991715aa0182fccd411861c939"
  },
  {
    "url": "tooling-for-the-modern-webapp-developer-video-from-dotjs/index.html",
    "revision": "1416b9edeb7ab81ea8eb15b62703e19d"
  },
  {
    "url": "top-10-css-gallery-websites-for-inspiration/index.html",
    "revision": "f7740a7599ce6b814120ee9df13f2009"
  },
  {
    "url": "top-10-wordpress-form-plugins-2/index.html",
    "revision": "f9c82e0558664acbf191da809b24ee08"
  },
  {
    "url": "top-10-wordpress-form-plugins/index.html",
    "revision": "610f57ff2a7376007e3a9e7edbc7648b"
  },
  {
    "url": "top-12-best-websites-of-week-25-2013/index.html",
    "revision": "52a55b42659d8f6bd008aa60db72e917"
  },
  {
    "url": "turn-a-static-website-into-a-progressive-web-app/index.html",
    "revision": "d02c05dd149d38c296c1a22b64daae47"
  },
  {
    "url": "understanding-and-using-widgets-in-wordpress/index.html",
    "revision": "35bb81b3535b84980f8c46a314bc3ca6"
  },
  {
    "url": "use-css-to-scale-in-aspect-ratio-in-your-responsive-webdesign/index.html",
    "revision": "eb90a1fceb6357d72e37b4dd0099f0d2"
  },
  {
    "url": "useful-web-design-tips-for-newbies/index.html",
    "revision": "3a7311e48293243f0d32ea139bef1a0b"
  },
  {
    "url": "user-interfaces-techniques-pros-and-cons-when-designing-ui-elements/index.html",
    "revision": "47af0c42f3fee7b9ffec3aa87e6df258"
  },
  {
    "url": "useragents-strings-mobile-desktop-snippets/index.html",
    "revision": "a0e60defb60471763ab405e9e1104c1a"
  },
  {
    "url": "web-design-critique-96-successinc-drupal-theme/index.html",
    "revision": "d0b31fa9e487cf4415cf778a75fdf3e7"
  },
  {
    "url": "web-design-trends-in-2013/index.html",
    "revision": "15d1dc36b2bb8d0c0520d3004ca8b802"
  },
  {
    "url": "web-standards-arent-just-about-html-and-css/index.html",
    "revision": "790a60b8eb81c85d4f5e85a602dc8db9"
  },
  {
    "url": "weekly-fresh-resources-for-designers-and-developers-january-21th2013/index.html",
    "revision": "63777fbf35d91a74a7f121b19aa9e36d"
  },
  {
    "url": "weekly-fresh-resources-for-designers-and-developers-january-28th2013/index.html",
    "revision": "9496efff6131c26c31653f8ee2df12df"
  },
  {
    "url": "weekly-fresh-web-design-freebies-vol-3-1-23-2013/index.html",
    "revision": "8edfcab421865641422d1a0f415df57f"
  },
  {
    "url": "weekly-roundup-wordpress-user-interface-and-gravity-forms/index.html",
    "revision": "c812f6459656f6dcf4bda94978d54936"
  },
  {
    "url": "weekly-web-design-inspiration-17/index.html",
    "revision": "393dac255ad9665eeb68af819e127586"
  },
  {
    "url": "weekly-web-design-inspiration-69/index.html",
    "revision": "75ec2d9aa34cd9d74ef8921968eea7ab"
  },
  {
    "url": "weekly-web-design-inspiration-n-174-2/index.html",
    "revision": "a335827d01ca68482b9a1f4f01f684cc"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-2/index.html",
    "revision": "2b23aebdb2f387a0874c7741a39eb173"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-3/index.html",
    "revision": "00fec3e849b4cb799dbd3733db6f81d8"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-04-05-2013-and-10-05-2013/index.html",
    "revision": "b0d81f879b10721486e07c65cc79c9d6"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-11-05-2013-and-17-05-2013/index.html",
    "revision": "da62e5e1cf640eb032433a8617c6dfc4"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-27-04-2013-and-03-05-2013/index.html",
    "revision": "6c3f1769e036d95a16d9a5875c2b48dc"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets/index.html",
    "revision": "1ed683c00a95cbe96fc4a8e21028a1e6"
  },
  {
    "url": "what-do-you-think-about-firefox-os-developer-preview-phone/index.html",
    "revision": "0af6610e1193423274cf5a61a495e0d6"
  },
  {
    "url": "what-is-set-javascript-es2015-es6-when-use-it/index.html",
    "revision": "7d246d35486d2f05d7a650013da290ea"
  },
  {
    "url": "whats-the-difference-between-ui-and-ux/index.html",
    "revision": "b9c6da718bd1418f3eb77027d0abec19"
  },
  {
    "url": "woothemes-flexslider-rtl-right-to-left-support/index.html",
    "revision": "407a7e00836162130423516a6c733d48"
  },
  {
    "url": "wordpress-3-6-what-to-expect-from-the-most-promising-update-in-a-long-time/index.html",
    "revision": "7454d88f1844a0ed3816b49a8cad3c13"
  },
  {
    "url": "wordpress-backup-data-recovery-and-its-significance/index.html",
    "revision": "03318ffb86882105ee7b4b787b6be58c"
  },
  {
    "url": "wordpress-helps-you-in-managing-your-business-more-productively/index.html",
    "revision": "71c7f435d16183b86e9d532522d50de3"
  },
  {
    "url": "wordpress-news-january-19-to-january-26-2013-2/index.html",
    "revision": "766e16f9e939446dfb2e66f545cf117c"
  },
  {
    "url": "wordpress-news-january-19-to-january-26-2013/index.html",
    "revision": "514e6c073aaacce9ae0337049a3e9ecc"
  },
  {
    "url": "wordpress-news-tutorials-resources-roundup-no-18/index.html",
    "revision": "ca42be19cf5fe5e1770b136fdb17ef4b"
  },
  {
    "url": "wordpress-pagination-with-custom-post-type-issue/index.html",
    "revision": "3947cc50b7839c573c542ff2810a43b5"
  },
  {
    "url": "wordpress-plugin-duplicate-clone-post/index.html",
    "revision": "a1a568184f57de2bf85fd603cba18e90"
  },
  {
    "url": "wordpress-snippet-googlemaps-shortcode/index.html",
    "revision": "ea21569c5d86b20d38653a235c7804e3"
  },
  {
    "url": "wordpress-snippet-make-a-button-shortcode/index.html",
    "revision": "a555cf8be78739e30a6a53baf679c5e6"
  },
  {
    "url": "work-faster-play-harder-frontend-developer/index.html",
    "revision": "8d5ab94100ed5aa465bdb8cbe7117024"
  },
  {
    "url": "working-with-sass-css-pre-processor-on-an-network-drive-was-an-hell-until-now/index.html",
    "revision": "cfa66e90b85735609ba1afde2e929692"
  },
  {
    "url": "wp-dev-add_menu_page-redirect-external-url-with-wp_redirect/index.html",
    "revision": "78d1c46dfeee4e4e5c05b175214bb519"
  },
  {
    "url": "wp-dev-complex-custom-unique-post-numbers-meta-fields/index.html",
    "revision": "030fb7fd19a558ebf6acdba986b2d5cb"
  },
  {
    "url": "wp-dev-custom-post-type-admin-column-ordering/index.html",
    "revision": "dc8fee5f2d83d1aaa537bef8151ef76d"
  },
  {
    "url": "yeoman-nice-tool-improve-frontend-workflow/index.html",
    "revision": "817a73967ecf1220f053a56138cf1d98"
  },
  {
    "url": "your-first-angularjs-application/index.html",
    "revision": "fde3d684d5b3bebf32bed2d97e50c79b"
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
