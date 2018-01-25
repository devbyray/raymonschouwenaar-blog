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
    "revision": "57e4a9d6389ebbe8133c7057c399ddb8"
  },
  {
    "url": "css/critical.css",
    "revision": "711a2eca98bd78d6fa3cef0a99ba37a2"
  },
  {
    "url": "css/main.css",
    "revision": "c2ad43d718d1b1b6bc60c513584bd0ba"
  },
  {
    "url": "css/style.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/syntax.css",
    "revision": "cab0e5c51ae7e3384d31f9c90d2f4279"
  },
  {
    "url": "singlePost.js",
    "revision": "2ff71ffdba873f8fd0820db1ef345b0b"
  },
  {
    "url": "sw.js",
    "revision": "dd176cbf7f30f0b6bc8e79c4896d8368"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "10-jquery-plugins-to-enhance-your-web-typography/index.html",
    "revision": "2da8928479185c81c49fd04aba30174a"
  },
  {
    "url": "10-must-read-css3-tutorials/index.html",
    "revision": "06aeb235f37c1df17187cf921a83f30d"
  },
  {
    "url": "10-tips-loading-images-instantly-with-intersection-observer/index.html",
    "revision": "81b568d353414dac761702092eb146c8"
  },
  {
    "url": "10-wordpress-security-tips-guidelines-plugins-settings/index.html",
    "revision": "76ffc1e9f0302dbb60b2db68d5317915"
  },
  {
    "url": "11-awesome-codepens-with-html-css-and-javascript-for-your-inspiration/index.html",
    "revision": "3cf2e25c019f156a6cff72f6e5a9e9fc"
  },
  {
    "url": "12-best-wordpress-image-galleries-and-sliders/index.html",
    "revision": "44ec34a458e653c0350956da04950bad"
  },
  {
    "url": "12-eye-popping-examples-of-parallax-scrolling-websites-2/index.html",
    "revision": "9660b1d2087c6c29f06f9bb149c7e262"
  },
  {
    "url": "12-eye-popping-examples-of-parallax-scrolling-websites/index.html",
    "revision": "15692b6d42d5adf9998c0e70c4410cfb"
  },
  {
    "url": "15-cool-wordpress-video-pluginsndash-want-to-show-off-videos/index.html",
    "revision": "aefb1ae6d04235faf199af5c59d6d00c"
  },
  {
    "url": "15-really-useful-wordpress-dashboard-plugins/index.html",
    "revision": "9dd3f5f6a8764e8ccede2e7920229ed4"
  },
  {
    "url": "2-solutions-for-empty-spaces-below-an-img-html-element-no-margins-used/index.html",
    "revision": "503d717f3eb4ddc09d52dfdd29ce786e"
  },
  {
    "url": "2-steps-to-improve-the-loading-time-of-your-website/index.html",
    "revision": "7c5cfd984b3f36a16ef780413cb9451d"
  },
  {
    "url": "20-best-wordpress-plugins-want-a-cool-website/index.html",
    "revision": "450431a13e01c45fc51f25734b275b87"
  },
  {
    "url": "20-bold-and-beautiful-websites/index.html",
    "revision": "bd8fd5192c6d2b0181b5a9107c0db465"
  },
  {
    "url": "20-neat-sleek-sports-web-designs/index.html",
    "revision": "3d6c98fd63de09aa793be9d974ff9d31"
  },
  {
    "url": "20-powerful-jquery-flipbook-plugins/index.html",
    "revision": "9cd4095d4f10f619243fa2220d05a5cf"
  },
  {
    "url": "20-rocking-wordpress-music-themes-want-more-fans/index.html",
    "revision": "663865efe743624444d3635df81ef589"
  },
  {
    "url": "20-websites-with-original-non-standard-geometry/index.html",
    "revision": "b55e3bf348a16c29b225cedc610c9236"
  },
  {
    "url": "2012-into-2013-web-standards-in-perspective/index.html",
    "revision": "7ecda49cc7569fdef4341976f12f8d83"
  },
  {
    "url": "2017/04/create-launch-screen-react-native-app-xcode/index.html",
    "revision": "fa7cf386f46808d115dbbbd009f06ac4"
  },
  {
    "url": "2017/04/react-native-ios-network-request-failed/index.html",
    "revision": "6861abb46755136d58fab282ff41b34d"
  },
  {
    "url": "2017/06/love-javascript-shorthand-else-statement/index.html",
    "revision": "185c0172ccc4628519d3e0bc982aae19"
  },
  {
    "url": "2017/07/check-equality-values-javascript/index.html",
    "revision": "68e02791c52fca40c7d4510af39ff320"
  },
  {
    "url": "2017/07/focused-learning-agile-inspired-way/index.html",
    "revision": "a4fc9d9de3888a71fd4e1caa064ca5f1"
  },
  {
    "url": "2017/07/focused-learning-the-agile-inspired-way/index.html",
    "revision": "36c7c19012bd55946cdafc734e0b825d"
  },
  {
    "url": "2017/07/how-to-check-equality-of-values-in-javascript/index.html",
    "revision": "47fde4368ed099f6d878c2b5c34dec81"
  },
  {
    "url": "2017/07/prevent-git-merge-conflicts-by-tabs-or-spaces-with-editorconfig/index.html",
    "revision": "1fbc2400c98642146bad28cacf328df5"
  },
  {
    "url": "2017/09/3-ways-to-loop-over-object-properties-with-vanilla-javascript/index.html",
    "revision": "4ccc1b437e8c05a5ed66501b86e7a024"
  },
  {
    "url": "25-best-wordpress-themes-for-freelancers/index.html",
    "revision": "2b7348df4039fcd2fb1ca8005e9e887a"
  },
  {
    "url": "25-inspirational-examples-of-css/index.html",
    "revision": "9de048a9d94ec6fae5b15bab221c8cd6"
  },
  {
    "url": "25-inspiring-design-agency-websites/index.html",
    "revision": "8b18b914299b60278676fe24fb0c4237"
  },
  {
    "url": "25-interactive-html5-websites/index.html",
    "revision": "6000db750fa61aa95f22477abe5ac333"
  },
  {
    "url": "25-kickass-responsive-web-designs-for-inspiration/index.html",
    "revision": "2dd3850882b2232941cc9cd27c2d2722"
  },
  {
    "url": "25-web-designs-with-clever-fixed-header-effects/index.html",
    "revision": "19c1f1dd0d6bfadac86cf4a4e6db6782"
  },
  {
    "url": "3-ways-to-loop-over-object-properties-with-vanilla-javascript/index.html",
    "revision": "dc4d770e325540c2ba8f9f7a4de5f7b3"
  },
  {
    "url": "30-cool-web-apps-made-entirely-in-html5/index.html",
    "revision": "fd634e449317aa1dd987dd59180125f4"
  },
  {
    "url": "30-phenomenal-non-profit-website-designs/index.html",
    "revision": "ca4367cc69ae3ebed6e7b2d6ebd4e3c4"
  },
  {
    "url": "35-fresh-examples-of-modern-web-design/index.html",
    "revision": "2c531c071b7b921022a72e9f7d176c4d"
  },
  {
    "url": "35-html5-and-css3-tutorials-for-designers/index.html",
    "revision": "74da233c6c1aa2ff38d907e9d49ffca9"
  },
  {
    "url": "35-new-tools-and-services-for-web-developers-2/index.html",
    "revision": "298f6378099f442a84c4883924031685"
  },
  {
    "url": "40-interesting-websites-with-wicked-designs/index.html",
    "revision": "23492fb6d0d38c8327193166984b956f"
  },
  {
    "url": "40-light-and-white-wordpress-themes-for-minimalistic-websites/index.html",
    "revision": "c3615987fea5e84db212716088d33bea"
  },
  {
    "url": "45-inspiring-examples-of-html5-web-design-2/index.html",
    "revision": "445375484638b5af42ae827621ed52c2"
  },
  {
    "url": "45-inspiring-examples-of-html5-web-design/index.html",
    "revision": "c38e59e74416c2ff65c005ef5edf650e"
  },
  {
    "url": "450-beautiful-vector-icons-for-website-ui-design/index.html",
    "revision": "4171948b5324e696ef05b5d9711263fb"
  },
  {
    "url": "5-css-tips-junior-frontend-developers/index.html",
    "revision": "2f2bea49671b577723bf4cd4db88e7ac"
  },
  {
    "url": "5-great-examples-of-simple-web-animations/index.html",
    "revision": "4999c2d92dd808cbd0dc6c149b639f71"
  },
  {
    "url": "50-popular-gaming-websites-for-inspiration/index.html",
    "revision": "93673de7da1fd0d0f371282f27c619b6"
  },
  {
    "url": "a-round-up-of-clean-wordpress-themes/index.html",
    "revision": "e49fae4376398f453d39a635ff83b1ca"
  },
  {
    "url": "aankondiging-contentcafe-6-responsive-design/index.html",
    "revision": "13625ea1d32248ed4f25ad9d1d501cd4"
  },
  {
    "url": "about/index.html",
    "revision": "a0e5f60c452c2c98a53b8c843d6b47ae"
  },
  {
    "url": "admin-dashboard-design-inspiration-23-examples/index.html",
    "revision": "11e353084b5cda60418e1fd57963c4a5"
  },
  {
    "url": "announcement-plan-to-build-an-invoice-wordpress-plugin/index.html",
    "revision": "9ee3cd43098a878c04c4fdc7c96a6d4e"
  },
  {
    "url": "awesome-web-mobile-development-tools-themes-scripts-and-resources-of-june-2013/index.html",
    "revision": "84c0cdf81963874312dac0a9182f053e"
  },
  {
    "url": "awesome-web-mobile-ui-design-tools-inspiration-and-resources-of-june-2013/index.html",
    "revision": "68a64a4e551f4618138088588557f0d0"
  },
  {
    "url": "best-browser-ever-not-ie10-doesnt-give-an-html-conditional-class/index.html",
    "revision": "9275e0c718b8e67805eab9310fed1906"
  },
  {
    "url": "best-infographics-for-modern-web-designers-and-developers/index.html",
    "revision": "4594c68fc9622b7c06faa12db3e763ca"
  },
  {
    "url": "best-top-30-trance-progressive-house-dance-times/index.html",
    "revision": "2dcd2582ea17bf6d5d978cf21f62d95f"
  },
  {
    "url": "best-webdesign-from-behance-flat-webdesign/index.html",
    "revision": "ac8051c41e95b4f99baa386f562c14e3"
  },
  {
    "url": "best-webdesign-from-dribbble-flat-webdesign/index.html",
    "revision": "b529a8a4c396cb19535832364470b16f"
  },
  {
    "url": "best-webdesign-of-the-week-1/index.html",
    "revision": "8fa129f8b81b120eaee4eec73559af25"
  },
  {
    "url": "best-webdesign-of-the-week-2/index.html",
    "revision": "2b15c5b820b07bfc23703e1a784d1b9f"
  },
  {
    "url": "best-webdesign-of-the-week-3/index.html",
    "revision": "a06c12a86f7c15415fb73b2ee63bbe10"
  },
  {
    "url": "bestsellers-woocommerce-product-loop/index.html",
    "revision": "9b580ebc62eb34dec4c400d9159ff7aa"
  },
  {
    "url": "blog/index.html",
    "revision": "8d0501a7dd6277b5ac719e26dd13c41f"
  },
  {
    "url": "blog/page/1/index.html",
    "revision": "37ce8c3c6fd104f105636d484ad1bcc4"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "929781d395ee9b746dff119b33434cf3"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "d3c204858caf2d769bbf6d51509858ae"
  },
  {
    "url": "blog/page/12/index.html",
    "revision": "d26d96b32c40b2e318ca178b7c751b3a"
  },
  {
    "url": "blog/page/13/index.html",
    "revision": "00044aceb79a2529a8d5cb45ba8fc9c3"
  },
  {
    "url": "blog/page/14/index.html",
    "revision": "7cb920ae7afc6f2a553e921a52475067"
  },
  {
    "url": "blog/page/15/index.html",
    "revision": "520dc80884c5b13e52d76d03b1550157"
  },
  {
    "url": "blog/page/16/index.html",
    "revision": "79e928a556e73ee9638837fb519443cb"
  },
  {
    "url": "blog/page/17/index.html",
    "revision": "918571c2a462dc6ee3fd257a012c22d9"
  },
  {
    "url": "blog/page/18/index.html",
    "revision": "892c2d0cb5a8cfd448f52f478650f172"
  },
  {
    "url": "blog/page/19/index.html",
    "revision": "274a90218a44d374cf2f5c1f623bd92c"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "9d7a4816f033344d981b277c49c89012"
  },
  {
    "url": "blog/page/20/index.html",
    "revision": "8a33d4ec12f947708d719050494af0b7"
  },
  {
    "url": "blog/page/21/index.html",
    "revision": "f0e25237ac954caaa0bec5f4d7091176"
  },
  {
    "url": "blog/page/22/index.html",
    "revision": "c248144a20ee0fb24fbffa26c8622f3f"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "ecf7639d30be0e2e4c1a00ab6cf12f74"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "d7a739469d0c505e25d102bec32b7890"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "4e55170c1e3627d62c774e6d8707fc18"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "b457e926c490bd1f0fc536f191110595"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "23c1b8b170bf8e07cdca565f950a91ef"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "15e1353277c3eaf87bd8bee5337c14c9"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "ed79d81332d7372c7d6ad4ab0f896391"
  },
  {
    "url": "bootbox-js-a-small-javascript-library-to-create-programmatic-dialog-boxes-using-bootstraps-modals/index.html",
    "revision": "d9a2291d7ed8a0cc801b0a4851e0a13b"
  },
  {
    "url": "breadcrumbs-in-your-wordpress-website-or-blog/index.html",
    "revision": "4014954e9abd4d47cea493648f1d5af2"
  },
  {
    "url": "build-a-fun-true-or-false-quiz-with-css/index.html",
    "revision": "21264037e1fcab41c0b31b681e037088"
  },
  {
    "url": "building-responsive-table-with-only-css/index.html",
    "revision": "5477ec302abb58439b9d3a3197d1d85d"
  },
  {
    "url": "categories/angularjs/index.html",
    "revision": "3a02baa4ab2e66a0aa74e2abbe97087f"
  },
  {
    "url": "categories/angularjs/page/1/index.html",
    "revision": "404805230615673747323ac37711d658"
  },
  {
    "url": "categories/css/index.html",
    "revision": "fc1b7d9a95ce7be4a893754d37c0adf0"
  },
  {
    "url": "categories/css/page/1/index.html",
    "revision": "5cc3f25ac2a6a4054b391bb14d6bacc3"
  },
  {
    "url": "categories/css/page/2/index.html",
    "revision": "b6477f5485aabae9a0a48f2527ddb445"
  },
  {
    "url": "categories/css/page/3/index.html",
    "revision": "f6e71a327209789b18b828678624333b"
  },
  {
    "url": "categories/css/page/4/index.html",
    "revision": "e0a2ba6c8ea4b51e41f3a8c873460370"
  },
  {
    "url": "categories/frontend-development/index.html",
    "revision": "1bc04d714522a74920c26eaf28d9f69a"
  },
  {
    "url": "categories/frontend-development/page/1/index.html",
    "revision": "8a8844b8c81e44b1a5d45afac57d5aea"
  },
  {
    "url": "categories/frontend-development/page/2/index.html",
    "revision": "2351e58de37bc21f5331bf71e5b642e6"
  },
  {
    "url": "categories/frontend-development/page/3/index.html",
    "revision": "7015e3456cec8d920eb904a2672f09fd"
  },
  {
    "url": "categories/frontend-development/page/4/index.html",
    "revision": "499fcd96990bae744dca938e78bea6da"
  },
  {
    "url": "categories/git/index.html",
    "revision": "053ee0d8b53bfbafbc7f7be527be9352"
  },
  {
    "url": "categories/git/page/1/index.html",
    "revision": "0197c217f944e440481794841c62f11b"
  },
  {
    "url": "categories/github/index.html",
    "revision": "9fd8ce998353bb0401ccb9e5791a1464"
  },
  {
    "url": "categories/github/page/1/index.html",
    "revision": "5d4034a9f96c2fc75623d6ddc0b6d954"
  },
  {
    "url": "categories/html/index.html",
    "revision": "5639e77ffc36d89d032ee6a188b848f0"
  },
  {
    "url": "categories/html/page/1/index.html",
    "revision": "01b8b7bc4d4f40c357e55245b10f52a5"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "6c03b73048947ca3b517c9705600c522"
  },
  {
    "url": "categories/javascript/page/1/index.html",
    "revision": "e84a66e5ea1ab6f68fc42a33723fa9cd"
  },
  {
    "url": "categories/javascript/page/2/index.html",
    "revision": "6e3cea249fdb012a0fb6601bb294f3fd"
  },
  {
    "url": "categories/javascript/page/3/index.html",
    "revision": "1482ca6b86d89eead2aeb31ffb21428d"
  },
  {
    "url": "categories/javascript/page/4/index.html",
    "revision": "22593953f62eb35cb16a487242a9fda5"
  },
  {
    "url": "categories/javascript/page/5/index.html",
    "revision": "cd943a9e7c574c8734b99bfbae810959"
  },
  {
    "url": "categories/mighty-deals/index.html",
    "revision": "a863148adf5147b4f50329d5faf91872"
  },
  {
    "url": "categories/mighty-deals/page/1/index.html",
    "revision": "3ad150b1c4236ba746d08bf0c3ad73b9"
  },
  {
    "url": "categories/music/index.html",
    "revision": "53d8e3a846dc3def6de93d987c731068"
  },
  {
    "url": "categories/music/page/1/index.html",
    "revision": "dc563ab2e8d9b2726165b5abe4557407"
  },
  {
    "url": "categories/news-of-the-web/index.html",
    "revision": "7cd84e48a4361154b285c25debd38323"
  },
  {
    "url": "categories/news-of-the-web/page/1/index.html",
    "revision": "50293f125d41d352aace4a3e8c0f520e"
  },
  {
    "url": "categories/news-of-the-web/page/10/index.html",
    "revision": "8205011842bb4a43eb86d3af786c2a81"
  },
  {
    "url": "categories/news-of-the-web/page/11/index.html",
    "revision": "32f8d5f3dd49efaf412891d76becc56a"
  },
  {
    "url": "categories/news-of-the-web/page/12/index.html",
    "revision": "f8feb1b6031ea1595ae5d0176fede1bd"
  },
  {
    "url": "categories/news-of-the-web/page/13/index.html",
    "revision": "121c35d56c6e4bbcf3612f889bb34893"
  },
  {
    "url": "categories/news-of-the-web/page/14/index.html",
    "revision": "1b2f14ec08ad3c2e89a909dac4d52108"
  },
  {
    "url": "categories/news-of-the-web/page/15/index.html",
    "revision": "cc9397b07716d0b14247a30ec88ae45c"
  },
  {
    "url": "categories/news-of-the-web/page/16/index.html",
    "revision": "28e54ed3f34726292d2c40ff7f0f74df"
  },
  {
    "url": "categories/news-of-the-web/page/17/index.html",
    "revision": "2510e179d672e9961ed2c4a7c2f1b603"
  },
  {
    "url": "categories/news-of-the-web/page/18/index.html",
    "revision": "6ded220696c823bc4cf464477792feee"
  },
  {
    "url": "categories/news-of-the-web/page/19/index.html",
    "revision": "71e91560a9cafa90679a8a6bd955268c"
  },
  {
    "url": "categories/news-of-the-web/page/2/index.html",
    "revision": "1a35a70149ebe1c34fe572174ad134f7"
  },
  {
    "url": "categories/news-of-the-web/page/20/index.html",
    "revision": "cd679096e79f14bffe69540a5a45a344"
  },
  {
    "url": "categories/news-of-the-web/page/21/index.html",
    "revision": "a8cec8159ecf424cb95d0dc7e5687691"
  },
  {
    "url": "categories/news-of-the-web/page/22/index.html",
    "revision": "1364f2d3013fe46a1e134e93896f9871"
  },
  {
    "url": "categories/news-of-the-web/page/23/index.html",
    "revision": "0ce5c9de0a46d4b90764447a2f02d6a1"
  },
  {
    "url": "categories/news-of-the-web/page/24/index.html",
    "revision": "5e5fe59f246a0889c917d18bb9cc1f3a"
  },
  {
    "url": "categories/news-of-the-web/page/25/index.html",
    "revision": "c7e2d6e0bfc3fa04236b27bfb43e6d51"
  },
  {
    "url": "categories/news-of-the-web/page/26/index.html",
    "revision": "97543fd953706187c4f4f10a2e4d783a"
  },
  {
    "url": "categories/news-of-the-web/page/27/index.html",
    "revision": "d078815a01f92f3dd7e532a80b00a225"
  },
  {
    "url": "categories/news-of-the-web/page/3/index.html",
    "revision": "400eb526721a6fbff2ea02a97ab2ce70"
  },
  {
    "url": "categories/news-of-the-web/page/4/index.html",
    "revision": "e350b2a076e42625e753c7d8a191d605"
  },
  {
    "url": "categories/news-of-the-web/page/5/index.html",
    "revision": "71bf928cf60e7c154f3f57834260016b"
  },
  {
    "url": "categories/news-of-the-web/page/6/index.html",
    "revision": "95d28b6caf35a42133a75a5eac99332e"
  },
  {
    "url": "categories/news-of-the-web/page/7/index.html",
    "revision": "16e2b1dc2ffd5dce2f8e66fdc8beba7e"
  },
  {
    "url": "categories/news-of-the-web/page/8/index.html",
    "revision": "d2f1528e7f051f9b5ebaeb7e15f89790"
  },
  {
    "url": "categories/news-of-the-web/page/9/index.html",
    "revision": "6fe90143818a5ee6531e66f5e68b7b8c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "ae6a8e04880c7a2eccfb45f71e2f9590"
  },
  {
    "url": "categories/php/page/1/index.html",
    "revision": "95046d2f6b32f39690ba201e4f0e0efc"
  },
  {
    "url": "categories/sass/index.html",
    "revision": "13bbf6223d4b89387da2b3bb646b304b"
  },
  {
    "url": "categories/sass/page/1/index.html",
    "revision": "e99605705b8efa2c91d745a69fd3a83f"
  },
  {
    "url": "categories/sass/page/2/index.html",
    "revision": "4085b9a3c1fde736f10b5e4c4137b07e"
  },
  {
    "url": "categories/skills/index.html",
    "revision": "cdc398b7e0482e5f556cc3ea1f3b3e6f"
  },
  {
    "url": "categories/skills/page/1/index.html",
    "revision": "21dbe4bec77ab4e3b2bee3c527b6ec85"
  },
  {
    "url": "categories/snippets-of-vanilla-javascript/index.html",
    "revision": "7e102a4db38acebb6d704427e7c7e7cc"
  },
  {
    "url": "categories/snippets-of-vanilla-javascript/page/1/index.html",
    "revision": "81f843e8dca272d4616334abfa817eac"
  },
  {
    "url": "categories/snippets/index.html",
    "revision": "19f59e99427e7bbcc1dc315f69a2b647"
  },
  {
    "url": "categories/snippets/page/1/index.html",
    "revision": "318b4ab46044fd416e0d42efdc0afb07"
  },
  {
    "url": "categories/snippets/page/2/index.html",
    "revision": "d02ab00609064f23c0807aa2ac1d46fe"
  },
  {
    "url": "categories/snippets/page/3/index.html",
    "revision": "3cab7c6c43a9cae4daee510921abed20"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "968dbe30dd0361e9c05cb7469ea59bac"
  },
  {
    "url": "categories/webdesign/page/1/index.html",
    "revision": "717c55f29e227c3bc9657d199000fe4e"
  },
  {
    "url": "categories/webdesign/page/2/index.html",
    "revision": "2252a50cc1028405b65fe56ec8a95cd2"
  },
  {
    "url": "categories/webdevelopment/index.html",
    "revision": "d0ee8fb09ba7573f079ea6404ca95626"
  },
  {
    "url": "categories/webdevelopment/page/1/index.html",
    "revision": "075f2149d2705d945da7f5714e840863"
  },
  {
    "url": "categories/webdevelopment/page/2/index.html",
    "revision": "e051cd7054237a4ff037f6ecfc2fb45b"
  },
  {
    "url": "categories/webdevelopment/page/3/index.html",
    "revision": "1ed9879cfde9e21a14c1b18b2b9f72cb"
  },
  {
    "url": "categories/webdevelopment/page/4/index.html",
    "revision": "8876a4e8258da41a35bfd998ab9e9e5f"
  },
  {
    "url": "categories/webdevelopment/page/5/index.html",
    "revision": "9691152e9fc9a7111328a4e039153861"
  },
  {
    "url": "categories/webdevelopment/page/6/index.html",
    "revision": "39d3bda183c7ce00b05aa59cc0903b83"
  },
  {
    "url": "categories/webdevelopment/page/7/index.html",
    "revision": "488c146dcd8fe7a753228f23ab090d75"
  },
  {
    "url": "categories/webdevelopment/page/8/index.html",
    "revision": "09b80cfed18303601966b920e5027353"
  },
  {
    "url": "categories/windows/index.html",
    "revision": "1017a3ac694ff2653c3a65acc68ac981"
  },
  {
    "url": "categories/windows/page/1/index.html",
    "revision": "582d33e7f19b4686de090e83109b8bbc"
  },
  {
    "url": "categories/woocommerce/index.html",
    "revision": "3ca82fee83c413fe2abcbff9eb0840b7"
  },
  {
    "url": "categories/woocommerce/page/1/index.html",
    "revision": "04f3a55027ddaf314138df3d75ecdeb8"
  },
  {
    "url": "categories/wordpress-multisite/index.html",
    "revision": "3e68615133bd2fe3cc70971a2b2db15a"
  },
  {
    "url": "categories/wordpress-multisite/page/1/index.html",
    "revision": "6b8f941f2cfdee43cf5c0af26c3329a8"
  },
  {
    "url": "categories/wordpress-plugins/index.html",
    "revision": "debe05776b13cf5ae28fc1097bc584fd"
  },
  {
    "url": "categories/wordpress-plugins/page/1/index.html",
    "revision": "6be90e7b39cdccb5f5a164d7e306a008"
  },
  {
    "url": "categories/wordpress-plugins/page/2/index.html",
    "revision": "2d69c4c2ef0ca52beb0cea69a5b0246b"
  },
  {
    "url": "categories/wordpress/index.html",
    "revision": "cc1204d2e2edc7cf9d22f6d88d4821e7"
  },
  {
    "url": "categories/wordpress/page/1/index.html",
    "revision": "ed500e63f938d1a551551eb057def249"
  },
  {
    "url": "categories/wordpress/page/2/index.html",
    "revision": "7493d22591f7b33285e2ec64dc6ad5fd"
  },
  {
    "url": "categories/wordpress/page/3/index.html",
    "revision": "54e46c175cac67471dc77a7c1e79335e"
  },
  {
    "url": "categories/wordpress/page/4/index.html",
    "revision": "6544b3a29e3b926d348c5885e6c68974"
  },
  {
    "url": "change-your-wordpress-page-post-extension/index.html",
    "revision": "fe0b3301dd5e1eebdec7be5ca81c5590"
  },
  {
    "url": "characters-and-mascots-in-web-design-and-their-role-2/index.html",
    "revision": "911f6940b8d4c4647db271aecb0f2595"
  },
  {
    "url": "characters-and-mascots-in-web-design-and-their-role/index.html",
    "revision": "5e091d24ba4b784642d7977f82e3c081"
  },
  {
    "url": "check-equality-values-javascript/index.html",
    "revision": "a3a7e2306b4ed15fd4f8a0109c97c341"
  },
  {
    "url": "check-mobile-devices-vanilla-javascript/index.html",
    "revision": "02fe2e21614a1ddd742e376725500130"
  },
  {
    "url": "check-object-empty-vanilla-javascript/index.html",
    "revision": "58690dd7d4a4704a72f06c6e50ce61af"
  },
  {
    "url": "cody-landefeld-wordpress-design-for-the-real-world/index.html",
    "revision": "e9501942e9f91bf51318a0379269fdc9"
  },
  {
    "url": "combine-multiple-gulp-tasks-add-multiple-destination-locations/index.html",
    "revision": "a83c2229df45fe7bed6ae22ab04db90f"
  },
  {
    "url": "create-crossbrowser-css-prefixes-with-an-sass-mixin/index.html",
    "revision": "1e924c86ee21bbabdbc7ea02b627656f"
  },
  {
    "url": "create-css-responsive-image-grid-ratio-scaling/index.html",
    "revision": "0ab40b49af53dd29889f814fb97928b8"
  },
  {
    "url": "create-launch-screen-react-native-app-xcode/index.html",
    "revision": "9872f4d03ce40887c2c29055f5958d44"
  },
  {
    "url": "creating-an-html5-based-document-editor-2/index.html",
    "revision": "2faecbf3533325c699088d1cf3c220cf"
  },
  {
    "url": "creative-css-tutorials-collection/index.html",
    "revision": "bdafab4486f36bc9a4658449f002a0d0"
  },
  {
    "url": "creative-new-web-design-and-development-tools/index.html",
    "revision": "5e2f52afaba1d763e48aab29dd4f3d00"
  },
  {
    "url": "cross-browser-document-ready-with-vanilla-javascript-ie8-included/index.html",
    "revision": "db0bd5456ab932212d046944ccfeab30"
  },
  {
    "url": "css-flexbox-essentials/index.html",
    "revision": "51f7623691fe4d01f13279d09d74e996"
  },
  {
    "url": "css-grid-layout-metro-design-blocks/index.html",
    "revision": "bab4787575dfd68ea15b272dc3889fdd"
  },
  {
    "url": "css-performance-we-write-css-selectors-wrong/index.html",
    "revision": "bc6b9e6ad62d956f7caee804d0de7b53"
  },
  {
    "url": "custom-woocommerce-email-notification-for-dealer-or-supplier/index.html",
    "revision": "dc848cd602258cfa4ec385dd3b5441cb"
  },
  {
    "url": "delete-node_modules-folder-windows-nodejs/index.html",
    "revision": "63b427f6b86bc55f60fc5535a8afcf9d"
  },
  {
    "url": "deploy-dist-folder-gh-pages-branch-github-pages/index.html",
    "revision": "3de6080a153145b3e0a657dc5614640b"
  },
  {
    "url": "deploy-website-git-webhosting-webfaction-github-bitbucket/index.html",
    "revision": "4ae97c82bd3ead1c354742dfd49da9cc"
  },
  {
    "url": "display-comments-on-custom-post-type-page-by-genesis-framework/index.html",
    "revision": "b78f3dc900cfb13c8b2012d7c4616624"
  },
  {
    "url": "easy-wordpress-functions-php-hacks/index.html",
    "revision": "e84b686cc18a74f6a177a1a0c081e601"
  },
  {
    "url": "effectively-planning-ux-design-projects/index.html",
    "revision": "8d9449296cf4f08e82fc1c1ba4b6472d"
  },
  {
    "url": "error-spawn-cpython27-enoent-npm/index.html",
    "revision": "50957b3bb5c579b240856976e31ac6cd"
  },
  {
    "url": "es6-var-let-and-const-explained/index.html",
    "revision": "8a728531decb7f03be85e70cf576e9fd"
  },
  {
    "url": "find-duplicate-property-values-in-an-array-of-objects-in-javascript/index.html",
    "revision": "ab43d2c388956b77970e1c08e28a425c"
  },
  {
    "url": "five-killer-ways-to-use-parallax/index.html",
    "revision": "aa7d19f2079d69832726f8184ea2cb48"
  },
  {
    "url": "flat-design-can-you-benefit-from-the-trend/index.html",
    "revision": "856606bb2ad41df2503695dad8bd5b83"
  },
  {
    "url": "flat-design-websites-a-new-trend/index.html",
    "revision": "981253097012889d271e424378517d23"
  },
  {
    "url": "focused-learning-agile-inspired-way/index.html",
    "revision": "4c616c60c582d2e142cc173c87b02b38"
  },
  {
    "url": "foodily-brand-identity-and-web-design-by-six/index.html",
    "revision": "c244d8b5ce08e9d2d8b8b4b72e8ad618"
  },
  {
    "url": "free-desktop-user-interface-kits/index.html",
    "revision": "319da33d590dbde5640ddda36407ce7c"
  },
  {
    "url": "free-psd-ui-kit-for-your-web-applications/index.html",
    "revision": "ce94af71d323908d64f17a870f781172"
  },
  {
    "url": "free-retweet-wordpress-shortcode-plugin/index.html",
    "revision": "9af881b08787fe88154816b59150c925"
  },
  {
    "url": "free-wordpress-themes/index.html",
    "revision": "747ca4a4f185246a6d7df40000d8e271"
  },
  {
    "url": "frontend-developers-15-nice-tools-libraries-resource-october/index.html",
    "revision": "d9f1dbec5ba63a6aa692bf0d1a80339b"
  },
  {
    "url": "frontend-developers-25-tools-libraries-resource-december/index.html",
    "revision": "535be4d61a5f65260ec56242f25170ff"
  },
  {
    "url": "frontend-developers-35-tools-libraries-resource-november/index.html",
    "revision": "b4a47c357289c48e4eb3de708c184499"
  },
  {
    "url": "frontend-speed-performance-testing/index.html",
    "revision": "6bc9b330b8f4e79571709db59234aa02"
  },
  {
    "url": "frontend-workflow-1-npm-nodejs-gulpjs-bower-git-video/index.html",
    "revision": "311359cc0accdc72ddeab3e02f3364f6"
  },
  {
    "url": "frontend-workflow-2-css-automation-gulpjs/index.html",
    "revision": "ca7b89b2920974478d036059fa3aa278"
  },
  {
    "url": "gallery/index.html",
    "revision": "0c8619a92b1802e6d3d26bf1e31caa03"
  },
  {
    "url": "gallery/learn-academy/index.html",
    "revision": "1d6308b0c7ddb022ff8cc02b47bd60f5"
  },
  {
    "url": "gallery/miniflix/index.html",
    "revision": "c403393977fe62182703c5bd895d212f"
  },
  {
    "url": "gallery/osprey/index.html",
    "revision": "485b2a94dc132f555aaf3545befd2ff6"
  },
  {
    "url": "gallery/page/1/index.html",
    "revision": "4e75752a4e360b5e77d41d1f84860a0a"
  },
  {
    "url": "gallery/resume/index.html",
    "revision": "480e390b0709a4aef25014ce5c296b39"
  },
  {
    "url": "gallery/rhino-linings-corporation-spf/index.html",
    "revision": "bc69ec46ea2aeaa7dc200f3ce7522307"
  },
  {
    "url": "gallery/rugged-fellows-guide/index.html",
    "revision": "0102fcbbdf720257afc724c561b55384"
  },
  {
    "url": "gallery/volunteerup/index.html",
    "revision": "8f521af78efe3531a04438b245d84e65"
  },
  {
    "url": "getting-started-with-twitter-bootstrap/index.html",
    "revision": "dd4e797265e51d12cd613f44b126be09"
  },
  {
    "url": "git-error-updates-rejected-tag-already-exists-remote-sourcetree/index.html",
    "revision": "132a4bb52267736bd2e9cbd7f2982a20"
  },
  {
    "url": "git-feature-branch-workflow/index.html",
    "revision": "d3ab6e75644ac6074d3f4cb7804180d9"
  },
  {
    "url": "github-beginners-push-files-local-project-new-github-repository-console/index.html",
    "revision": "a3d243a0551411b0f42189b486a68778"
  },
  {
    "url": "gloople-responsive-design-review/index.html",
    "revision": "13d45e5dd1bc76dc381a18723e0a53e2"
  },
  {
    "url": "google-webfont-issue-xmlhttprequest-cannot-load/index.html",
    "revision": "1d99a72be9e2f2bd0c0ef5a4b7a4ef4f"
  },
  {
    "url": "gradual-engagement-to-increase-your-conversion-rate/index.html",
    "revision": "24db8a587319915951272cc17c0f09cb"
  },
  {
    "url": "handle-postcss-with-npm-scripts/index.html",
    "revision": "42010cd13f93a5de107c1f138f114dbf"
  },
  {
    "url": "helped-junior-frontend-developer-get-better/index.html",
    "revision": "39195de0f029aee6c309f6f4e411da29"
  },
  {
    "url": "helping-people-best-skill-can/index.html",
    "revision": "6c83b2a468bf2dc2baaca58a7861fe9b"
  },
  {
    "url": "how-does-auto-positioning-work-in-css/index.html",
    "revision": "53e5ad7a71436fe118a942424cb84105"
  },
  {
    "url": "how-much-css-should-you-have/index.html",
    "revision": "ab7fc243d51a24923a1e309fdb8ea9aa"
  },
  {
    "url": "how-to-build-user-confidence-in-your-ui/index.html",
    "revision": "94d400cceefbd7a39ab0f6b3612cad0b"
  },
  {
    "url": "how-to-create-a-membership-site-on-wordpress-best-plugins-2/index.html",
    "revision": "a4ad1cacdaa6104708412630f3204445"
  },
  {
    "url": "how-to-create-an-option-for-your-wordpress-theme/index.html",
    "revision": "f641c74ebe233419d68c241348572deb"
  },
  {
    "url": "how-to-create-cross-browser-gradient-background-sass-mixin/index.html",
    "revision": "de769dea35b0b41740d9b212b0783844"
  },
  {
    "url": "how-to-easily-build-meta-boxes-wordpress-website-theme-plugin/index.html",
    "revision": "f1ad2fa88d97d3480076a9ed320cb97f"
  },
  {
    "url": "how-to-efficiently-manage-multiple-wordpress-sites-using-managewp/index.html",
    "revision": "f0599b73b71cc2260779a6bf21582df8"
  },
  {
    "url": "how-to-find-enough-work-to-keep-an-entire-agency-busy/index.html",
    "revision": "0acd66a71a72daded75cc078510d8036"
  },
  {
    "url": "how-to-get-height-width-of-element-with-vanilla-javascript/index.html",
    "revision": "21b83e9055d8064a63ac769dea249c24"
  },
  {
    "url": "how-to-stop-your-client-ruining-your-design/index.html",
    "revision": "f163f4139ab32d1878ee7577aaa4888c"
  },
  {
    "url": "how-to-update-the-scope-with-an-eventlistener-in-angularjs/index.html",
    "revision": "6a8958307ee014c22463553c60d746a6"
  },
  {
    "url": "how-to-upsell-your-clients/index.html",
    "revision": "6f3afbf58eee530fee2e00ac79498a82"
  },
  {
    "url": "how-to-use-custom-fonts-with-font-face-on-wordpress/index.html",
    "revision": "7f4232fccbd06223bb71f54e6aa0d1f8"
  },
  {
    "url": "how-to-use-icon-fonts-in-your-next-webdevelopment-project/index.html",
    "revision": "c113eb1ce50a3ca366f35a776867f507"
  },
  {
    "url": "how-to-use-javascript-module-pattern-inside-wordpress/index.html",
    "revision": "0662f785b97817bc55202ef2e4cf3cdd"
  },
  {
    "url": "html5-apps-will-be-faster-than-native-apps/index.html",
    "revision": "f0edfdb072277889df7a359245bb1393"
  },
  {
    "url": "if-a-webdeveloper-cant-have-access-to-internet-just-like-a-carpenter-without-an-hammer/index.html",
    "revision": "4de54dc8d3b0d687bd46a10cc7b74dad"
  },
  {
    "url": "image-markup-or-srcset-alternative-solution-with-css-for-responsive-image/index.html",
    "revision": "554eb9808d0cc6e00f11a586cb846e3a"
  },
  {
    "url": "index.html",
    "revision": "2d6bb2cc5ae629e9c68ebd9fa1a3f8f9"
  },
  {
    "url": "interaction-design-lessons-from-sci-fi-visual-interfaces/index.html",
    "revision": "9acdb83fae4cf2ef31286ae6a8cd34be"
  },
  {
    "url": "interactive-guide-to-blog-typography/index.html",
    "revision": "8346d4077022fca09a74259502f0fe4c"
  },
  {
    "url": "interesting-square-fonts-for-designers-2/index.html",
    "revision": "1485a8b82f6cfc7e772d5c68dced4efa"
  },
  {
    "url": "invoice-plugin-sneakpeak/index.html",
    "revision": "fcf77d4b339fa21ec22e6c1cfed6baaf"
  },
  {
    "url": "itunes-fix-window-8-1/index.html",
    "revision": "52cde0aa22933ff8f8226083d983fbae"
  },
  {
    "url": "javascript-addeventlistener-onblur-doesnt-work-firefox-fix/index.html",
    "revision": "1294ecbc711ce86f3a680d0a01d24def"
  },
  {
    "url": "javascript-array-foreach-method-doesnt-return-anything/index.html",
    "revision": "9402f2f36fe1b15c49d7c7b26fec9b40"
  },
  {
    "url": "javascript-basics-add-something-beginning-array-javascript/index.html",
    "revision": "058e2b27b754c1f0612f98829184fa86"
  },
  {
    "url": "javascript-pdfs-css-transitions-and-web-design-trends-the-treehouse-show-ep-24/index.html",
    "revision": "ccdd9d5ff806d4e938e551faeb4af705"
  },
  {
    "url": "jquery-custom-scrollbar-plugin/index.html",
    "revision": "37353eacd58a4740a1789b771b08fa11"
  },
  {
    "url": "junior-frontend-developer-needed-mentor-coach/index.html",
    "revision": "7c1e4bb206a3dbedefdc3b52bc7c2588"
  },
  {
    "url": "launching-a-saas-product-using-wordpress-with-brian-casel-2/index.html",
    "revision": "7197be403a38ef5dc1d697e82b66ed76"
  },
  {
    "url": "launching-a-saas-product-using-wordpress-with-brian-casel/index.html",
    "revision": "f7b5d79194c0399fa4884cebd053ee71"
  },
  {
    "url": "lessons-learned-building-a-saas-with-wordpress/index.html",
    "revision": "33f9457b6ab9e1cbba42753356240217"
  },
  {
    "url": "let-jasmine-loop-array-data-validate-email-validation-javascript-example/index.html",
    "revision": "109090ecf85429801d289b6ed16f741c"
  },
  {
    "url": "love-javascript-shorthand-else-statement/index.html",
    "revision": "85e7e78345f1aff4e3ad524bf3851497"
  },
  {
    "url": "matthew-moore-design/index.html",
    "revision": "4760e2fa65f88e5364a35ce29f936088"
  },
  {
    "url": "maxmertkit-front-end-framework-with-lots-of-features-2/index.html",
    "revision": "bad6e637983431ce37b9096c382a758f"
  },
  {
    "url": "microsofts-latest-innovation-modern-ie-ie-testing-become-easier/index.html",
    "revision": "2f757781e74b64379da5a790e0be9efb"
  },
  {
    "url": "mincss-clears-the-junk-out-of-your-css-finds-and-removes-selectors-youre-not-using/index.html",
    "revision": "22f48acff90ce9c39805c083d44aa497"
  },
  {
    "url": "my-frontend-toolbox-review-of-2015/index.html",
    "revision": "b40b536d27665641cf0545888228b557"
  },
  {
    "url": "never-use-the-google-analytics-option-in-an-wordpress-theme/index.html",
    "revision": "c13117bfe28c7d5384da37870c0943ff"
  },
  {
    "url": "page-template-dashboard-for-wordpress/index.html",
    "revision": "dc4621c99364c2704e3f1d3300b6b031"
  },
  {
    "url": "page/1/index.html",
    "revision": "ed575420bfc9eedbceb79df2a976fd5a"
  },
  {
    "url": "page/10/index.html",
    "revision": "f786b0eb4ee9d33b399108026317950a"
  },
  {
    "url": "page/11/index.html",
    "revision": "db20e6eb73edbed8da0767bdf24fe621"
  },
  {
    "url": "page/12/index.html",
    "revision": "7c57124adc08b1c607b01fdc601fbcff"
  },
  {
    "url": "page/13/index.html",
    "revision": "628c4861ba88bd713c40117303c84e2e"
  },
  {
    "url": "page/14/index.html",
    "revision": "ded2aa64db394d0bd8c698cbb31023cb"
  },
  {
    "url": "page/15/index.html",
    "revision": "41d274cacf23339302df5b728131d9bc"
  },
  {
    "url": "page/16/index.html",
    "revision": "586448858efe24ea5f309c3e95d52617"
  },
  {
    "url": "page/17/index.html",
    "revision": "6169146e408107cefc919026e3127c4a"
  },
  {
    "url": "page/18/index.html",
    "revision": "2755ec34306fad4b19f6768beb3a7668"
  },
  {
    "url": "page/19/index.html",
    "revision": "6207dc79cd087fcbc3675f6229891287"
  },
  {
    "url": "page/2/index.html",
    "revision": "dd42821c12be96305b3b46ec7eed7450"
  },
  {
    "url": "page/20/index.html",
    "revision": "9148c4074eaaec8ffb6ee06c78bc4840"
  },
  {
    "url": "page/21/index.html",
    "revision": "58d1a2a0ee10e15078b7d3f5d028ffad"
  },
  {
    "url": "page/22/index.html",
    "revision": "e1ba15ca480b34f9d675f4cdbf50eaa9"
  },
  {
    "url": "page/23/index.html",
    "revision": "91befe5e75c5a834aad4eff5b74a3a3f"
  },
  {
    "url": "page/24/index.html",
    "revision": "dd9524c2c3938c4822eac3fe92d34b88"
  },
  {
    "url": "page/25/index.html",
    "revision": "2b50faaa5d35d70b2cbb9b45e8a9fe3c"
  },
  {
    "url": "page/26/index.html",
    "revision": "d8311da80ab043bc067874bfb2ceb84b"
  },
  {
    "url": "page/27/index.html",
    "revision": "8a16e122f80e504405eb3951561f4e6d"
  },
  {
    "url": "page/28/index.html",
    "revision": "f03ce44cb33d1165f3c3691ea9e71eb2"
  },
  {
    "url": "page/29/index.html",
    "revision": "ea8c4b65ad3ab5e1607401e2fb968194"
  },
  {
    "url": "page/3/index.html",
    "revision": "c2509d72849a33e9d53cd1df85180894"
  },
  {
    "url": "page/30/index.html",
    "revision": "01d6a19b9aa4abba105bd4122926db2b"
  },
  {
    "url": "page/31/index.html",
    "revision": "d29ddaea862c6144858fd91782ce4971"
  },
  {
    "url": "page/32/index.html",
    "revision": "519a4a277f581e1f2e9b40efd5f6737f"
  },
  {
    "url": "page/33/index.html",
    "revision": "52697512e02402d4bf1143af0ce4be37"
  },
  {
    "url": "page/34/index.html",
    "revision": "8f00a933b6cd1ecf77542982f140f901"
  },
  {
    "url": "page/35/index.html",
    "revision": "cf3c8ff7d54a7d4425e99873acf9b218"
  },
  {
    "url": "page/36/index.html",
    "revision": "61c494c9af788d71a75c5040b7d22eb0"
  },
  {
    "url": "page/37/index.html",
    "revision": "e4fbbccc2eed0b2b01dab7bf313a8be7"
  },
  {
    "url": "page/38/index.html",
    "revision": "39fc0026097cb95f127836f598010807"
  },
  {
    "url": "page/39/index.html",
    "revision": "67853d93939fe1ec5db452b4049702f7"
  },
  {
    "url": "page/4/index.html",
    "revision": "e64b231fe7ac7ca1fc2edc14b4281667"
  },
  {
    "url": "page/40/index.html",
    "revision": "a722087ae7f4046c38aa2cd23d5dce8b"
  },
  {
    "url": "page/41/index.html",
    "revision": "a1f079afecbcfad497b89ca7d2a97040"
  },
  {
    "url": "page/42/index.html",
    "revision": "cc0d1e43ba3b3f5c6a8966234cdc5370"
  },
  {
    "url": "page/43/index.html",
    "revision": "2bef9b13a4afd522ab2da22b7b0be209"
  },
  {
    "url": "page/44/index.html",
    "revision": "28f944a54819c51331b1aa0e36aa5586"
  },
  {
    "url": "page/45/index.html",
    "revision": "90479a8c80bc06c0d2f0fb3103c64e5d"
  },
  {
    "url": "page/46/index.html",
    "revision": "e935d60556f14692ed2e50dc8c9e6a4a"
  },
  {
    "url": "page/5/index.html",
    "revision": "b7ed46b32afb0726e2e95cd6cdc24b3f"
  },
  {
    "url": "page/6/index.html",
    "revision": "225da5ecf88f14d67385bcb02c567086"
  },
  {
    "url": "page/7/index.html",
    "revision": "2b6a526e52109aaea38fab7130a0d486"
  },
  {
    "url": "page/8/index.html",
    "revision": "bbe0c8f31e48ce7876bf63322888d85a"
  },
  {
    "url": "page/9/index.html",
    "revision": "5ac7d6f52f5afb6176623f411c171703"
  },
  {
    "url": "perfect-multi-column-css-liquid-layouts-iphone-compatible/index.html",
    "revision": "4d4dd7a545053fa9e91fbbf7895a5eef"
  },
  {
    "url": "photoshop-tutorials-30-photo-text-effect-tutorials/index.html",
    "revision": "814076e7fa41b253f970564f00b6555f"
  },
  {
    "url": "planning-your-web-design-with-sketches/index.html",
    "revision": "8186442a0638a4557de20473ad41e595"
  },
  {
    "url": "post/index.html",
    "revision": "6f1217722217d440492750978bae310e"
  },
  {
    "url": "post/page/1/index.html",
    "revision": "96e5e0da7925ad10f47c546df01006ea"
  },
  {
    "url": "post/page/10/index.html",
    "revision": "49ca9c59f5554380f8a511b2b4de158a"
  },
  {
    "url": "post/page/11/index.html",
    "revision": "a486c76b1535cf54ae5ac1dcc81dbe41"
  },
  {
    "url": "post/page/12/index.html",
    "revision": "7c3e44c62a87c7eef45c7684361ed363"
  },
  {
    "url": "post/page/13/index.html",
    "revision": "066874482579539875bc3889fdedabdd"
  },
  {
    "url": "post/page/14/index.html",
    "revision": "8866fc8c1c0e5945b9f0ca44bfff5800"
  },
  {
    "url": "post/page/15/index.html",
    "revision": "900ee331cad8acf5eca4014a6c3ea1ed"
  },
  {
    "url": "post/page/16/index.html",
    "revision": "2d2f510e3dca8a123c668f163b30e0d9"
  },
  {
    "url": "post/page/17/index.html",
    "revision": "622cec440b8687d3cae6da05471723e7"
  },
  {
    "url": "post/page/18/index.html",
    "revision": "c51c139fd7a2ee1eccf260ffcfbd2a6b"
  },
  {
    "url": "post/page/19/index.html",
    "revision": "7357dfb2563e8b792f477f348f7ae2e2"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "50bde92525627f2db5d5158e608e878d"
  },
  {
    "url": "post/page/20/index.html",
    "revision": "86556c5a29310891e95166951f7a7ec5"
  },
  {
    "url": "post/page/21/index.html",
    "revision": "121bbb451a4c8a28229fc4d0866d8644"
  },
  {
    "url": "post/page/22/index.html",
    "revision": "d2b033fc6d10dc6f5eb9c87d80a7b9ca"
  },
  {
    "url": "post/page/23/index.html",
    "revision": "ff538ce0f47fd7cb95d2af4d463f1f7b"
  },
  {
    "url": "post/page/24/index.html",
    "revision": "57c497cad8f8d34d7301e3cb3334f7c4"
  },
  {
    "url": "post/page/25/index.html",
    "revision": "3d2c939c4bf12fba7fbfd8290a330471"
  },
  {
    "url": "post/page/26/index.html",
    "revision": "8575b79c05c7a9f7ce8c166561e2ba45"
  },
  {
    "url": "post/page/27/index.html",
    "revision": "005b254da08407b46c5cdbfeb4c93312"
  },
  {
    "url": "post/page/28/index.html",
    "revision": "5ed2bb33cf7d92796f7f734ee0538d77"
  },
  {
    "url": "post/page/29/index.html",
    "revision": "e0af0c0c743960a73756388fbcd4276e"
  },
  {
    "url": "post/page/3/index.html",
    "revision": "4273fa8a8998bf523bc248c580c81984"
  },
  {
    "url": "post/page/30/index.html",
    "revision": "db38e16f26d13f7adbe5801287423d08"
  },
  {
    "url": "post/page/31/index.html",
    "revision": "5f45b666fccd425bacf423eb3d1ba771"
  },
  {
    "url": "post/page/32/index.html",
    "revision": "9700f62cb5bce0d3179ff0c897e552f1"
  },
  {
    "url": "post/page/33/index.html",
    "revision": "b79e49098237e2b035c0467458724947"
  },
  {
    "url": "post/page/34/index.html",
    "revision": "aa83edae72cfa2905afc6631e01a9ff0"
  },
  {
    "url": "post/page/35/index.html",
    "revision": "45559ab90d0b9d7dacea0b0d4c7e502f"
  },
  {
    "url": "post/page/36/index.html",
    "revision": "b585a834ef4e5bed331c4f1952e6df7a"
  },
  {
    "url": "post/page/37/index.html",
    "revision": "53af7533640b90754705ff1fc004b376"
  },
  {
    "url": "post/page/38/index.html",
    "revision": "c827d7228fed29a5ac54e8fb199873a5"
  },
  {
    "url": "post/page/39/index.html",
    "revision": "2dc3363e1b7f35d7c5b54b09c5a5d44c"
  },
  {
    "url": "post/page/4/index.html",
    "revision": "b9caf7d874c3385e8fba29c3d6a4a726"
  },
  {
    "url": "post/page/40/index.html",
    "revision": "0bd6179eee43016f18b029ccd0d65986"
  },
  {
    "url": "post/page/41/index.html",
    "revision": "42bc05af41ee0291b99f27482213b54a"
  },
  {
    "url": "post/page/42/index.html",
    "revision": "7b73fd021232b1e52452287790045d09"
  },
  {
    "url": "post/page/43/index.html",
    "revision": "fa3e110301abbd5be958fc4803ea5a87"
  },
  {
    "url": "post/page/44/index.html",
    "revision": "63c031fe44ad78064963b6cc57b14e85"
  },
  {
    "url": "post/page/45/index.html",
    "revision": "66878347d69bd7f540f2bdef446eab21"
  },
  {
    "url": "post/page/5/index.html",
    "revision": "18b73d7fb36d8085fee15a571148dc1f"
  },
  {
    "url": "post/page/6/index.html",
    "revision": "c1677963703f22ab8c63c74f337d1f01"
  },
  {
    "url": "post/page/7/index.html",
    "revision": "cec459af5a6b9360c650974b6e633552"
  },
  {
    "url": "post/page/8/index.html",
    "revision": "14e2fcf4c0e796120aee243b170d723c"
  },
  {
    "url": "post/page/9/index.html",
    "revision": "5edc0c34e9f745f2cc6ee2b01f215c94"
  },
  {
    "url": "practical-example-of-how-to-use-bem-with-sass/index.html",
    "revision": "83b295763a26a38bd38af18ea6ebae3d"
  },
  {
    "url": "prevent-git-merge-conflicts-by-tabs-or-spaces-with-editorconfig/index.html",
    "revision": "8f2f791c1798be5587de02c17803a986"
  },
  {
    "url": "prototype-iphone-apps-with-javascript-and-html/index.html",
    "revision": "23733412318a27c09496db2ea4747d2f"
  },
  {
    "url": "publish-post-accross-multiple-site-wordpress-multisite-network/index.html",
    "revision": "f1e983df88ae440b2f45f33f64a670a9"
  },
  {
    "url": "push-php-data-to-an-wordpress-external-js-script-with-wp_localize_script/index.html",
    "revision": "711c6c1dee599e070e6ef75078da396a"
  },
  {
    "url": "re-think-your-wordpress-development-process/index.html",
    "revision": "ae9e944e963defb380a09deb542858f4"
  },
  {
    "url": "react-native-ios-network-request-failed/index.html",
    "revision": "7469db26ee49060ad94577cd8c6b17d6"
  },
  {
    "url": "remotely-debug-your-responsive-website-with-chrome/index.html",
    "revision": "89aa0266bcc886954af4172099fd6910"
  },
  {
    "url": "remove-duplicate-values-javascript-array-es2015-set/index.html",
    "revision": "cb4466bef570805f2f4303a11c75c53d"
  },
  {
    "url": "responsive-sass-mixins/index.html",
    "revision": "29eec63a3b0683f50bb48c38300d096e"
  },
  {
    "url": "selectik-a-cross-browser-and-completely-customizable-alternative-to-the-standard-select-form-2/index.html",
    "revision": "f65046b7e981b9b61cd3849327a88dd7"
  },
  {
    "url": "selectik-a-cross-browser-and-completely-customizable-alternative-to-the-standard-select-form/index.html",
    "revision": "b0897aab1854c862d66b18b0ea98144b"
  },
  {
    "url": "short-history-of-web-typography/index.html",
    "revision": "061c73ce2a3ea758d7f320560c851260"
  },
  {
    "url": "simple-name-filter-angularjs/index.html",
    "revision": "559a901e318e940548fc9ef71544aa64"
  },
  {
    "url": "smooth-sass-image-hover-effect/index.html",
    "revision": "ec94fbe6223f8b5f9b4aa3b748d794ac"
  },
  {
    "url": "sort-custom-post-type-events-by-future-date/index.html",
    "revision": "323b3298d2075cde53307f3eabdf6dc5"
  },
  {
    "url": "speedup-loading-performance-with-progressive-image-loading-with-intersection-observer/index.html",
    "revision": "e8fc82c7c86bf74828baf247b6ea81e4"
  },
  {
    "url": "structure-css-sass-large-application/index.html",
    "revision": "6b150233aa379b6212a3b10fceb584a1"
  },
  {
    "url": "successful-web-design-comes-down-to-the-details/index.html",
    "revision": "b45b9113b4a03a5997091d2f94954b18"
  },
  {
    "url": "tags/2015/index.html",
    "revision": "25d255e73edf5891e1950f2f1cb22a7e"
  },
  {
    "url": "tags/2015/page/1/index.html",
    "revision": "f3fa332c8e0167e9db3eff3afef06161"
  },
  {
    "url": "tags/add_menu_page/index.html",
    "revision": "c9c0026b132764304abdf18134f0c184"
  },
  {
    "url": "tags/add_menu_page/page/1/index.html",
    "revision": "94d73f0808fb5400e5ec2c59da60b7e0"
  },
  {
    "url": "tags/admin/index.html",
    "revision": "1540ac4decdb319f9042e0c35be46657"
  },
  {
    "url": "tags/admin/page/1/index.html",
    "revision": "e346eac939005eae6a255a18020bdef8"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "45b04136e8e056a55969e2f00e9ff577"
  },
  {
    "url": "tags/agile/page/1/index.html",
    "revision": "5daf599fb81fac84b9e6adc4c725685a"
  },
  {
    "url": "tags/android/index.html",
    "revision": "9b21ca41817ec47e051341ccb9620483"
  },
  {
    "url": "tags/android/page/1/index.html",
    "revision": "7ccb6c5a016609997a15149f40f4c4ce"
  },
  {
    "url": "tags/angular2/index.html",
    "revision": "24dac783ceeb9c366b25e3a97a9c44f8"
  },
  {
    "url": "tags/angular2/page/1/index.html",
    "revision": "b37c1822492d92e215d453903a6e7b4a"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "0133ba6f1e2a68b75c1847cbd05eac6e"
  },
  {
    "url": "tags/angularjs/page/1/index.html",
    "revision": "ab249eb90a01224067342afd91dcb960"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "58a28137fbf283cdde4cb47a74d3b4a5"
  },
  {
    "url": "tags/automation/page/1/index.html",
    "revision": "cfa0b18d7457ce232cdb4ea5b94c5ab4"
  },
  {
    "url": "tags/basics/index.html",
    "revision": "35e1943e30be3916c559970e486de7c3"
  },
  {
    "url": "tags/basics/page/1/index.html",
    "revision": "4786652193f87ef679c247a785ad3f90"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "ece7cc9d44af4dc88db1285466cfc0a3"
  },
  {
    "url": "tags/behance/page/1/index.html",
    "revision": "eda9a22f935997ad5884dbc1444d23c1"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "c0b07f35524edd91b8220238e1d33125"
  },
  {
    "url": "tags/bem/page/1/index.html",
    "revision": "fd1d9b8d0a62b3e684b091ad385a4caf"
  },
  {
    "url": "tags/best-of/index.html",
    "revision": "9fa15fd5850804a744585e53fb8dc2da"
  },
  {
    "url": "tags/best-of/page/1/index.html",
    "revision": "74ccbaaece2ddb0f2c3ee3eb1f1ee86e"
  },
  {
    "url": "tags/bitbucket/index.html",
    "revision": "f225c0a3215699495ddab33eeb0085c5"
  },
  {
    "url": "tags/bitbucket/page/1/index.html",
    "revision": "ed7e7618fd32e998bd7404c8e6547489"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "26f22ccae87b0bbe93db8fdee186e93b"
  },
  {
    "url": "tags/breadcrumb/page/1/index.html",
    "revision": "5e6ef72d28c4aae1e9cd51643b8a4eb7"
  },
  {
    "url": "tags/button/index.html",
    "revision": "0dac66bfbbb7e0feeaa16341541514a2"
  },
  {
    "url": "tags/button/page/1/index.html",
    "revision": "23dabbdce6c33984bea7214ba498653f"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "dec0cdeb0f814cfbe4679bc98283048e"
  },
  {
    "url": "tags/chrome/page/1/index.html",
    "revision": "532cbe5568e8a13f3b1b0f5701fa8ec7"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "73f0fd13d58a78cb3629db4455818034"
  },
  {
    "url": "tags/classes/page/1/index.html",
    "revision": "86f80495364154be358bc112c596885c"
  },
  {
    "url": "tags/clone/index.html",
    "revision": "e0955bd35eab192f307808f26b69d8e5"
  },
  {
    "url": "tags/clone/page/1/index.html",
    "revision": "d9a7bc6d49cec3c6ea8ef1ef21bbfd1c"
  },
  {
    "url": "tags/coaching/index.html",
    "revision": "0144102bdae86eccfae8ab7d2594bc3c"
  },
  {
    "url": "tags/coaching/page/1/index.html",
    "revision": "f9a72be80c7d6de453400b8e9ce6cc69"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "c93d32ca5504fe857d6a21b59d9257f4"
  },
  {
    "url": "tags/codepen/page/1/index.html",
    "revision": "25b3aceae14f56318b664f6d7a0838b4"
  },
  {
    "url": "tags/conditional-tag/index.html",
    "revision": "e2a0886f2880fc533a8df5a743143aae"
  },
  {
    "url": "tags/conditional-tag/page/1/index.html",
    "revision": "bdbef0bdea8535374a080c3c83febc4f"
  },
  {
    "url": "tags/crossbrowser/index.html",
    "revision": "99618bfc8efd2187519209e1d01df1d9"
  },
  {
    "url": "tags/crossbrowser/page/1/index.html",
    "revision": "6dffb65b47c4c2131a70b9a96dea7ede"
  },
  {
    "url": "tags/css/index.html",
    "revision": "ee97c1823f4943d86cbffcffe5f37996"
  },
  {
    "url": "tags/css/page/1/index.html",
    "revision": "34f68632aa48843e56b3ce103f7cc0a3"
  },
  {
    "url": "tags/css/page/2/index.html",
    "revision": "15e4c1f3dbce12fbfa65a32cb4c58365"
  },
  {
    "url": "tags/css/page/3/index.html",
    "revision": "5c7ad7009d768bc31520572227ada050"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "1f08f28870d2b018b0f2813ba71d0351"
  },
  {
    "url": "tags/css3/page/1/index.html",
    "revision": "1ed8a7967fa18b59f0afc484553859f1"
  },
  {
    "url": "tags/css3/page/2/index.html",
    "revision": "8ade64db6466ef1de07d4ef2fb2c3e87"
  },
  {
    "url": "tags/custom-post-type/index.html",
    "revision": "71b4effd734c36527de6a6a13102fc4b"
  },
  {
    "url": "tags/custom-post-type/page/1/index.html",
    "revision": "01c488bef367eb36ad34757884552b49"
  },
  {
    "url": "tags/custom-post-type/page/2/index.html",
    "revision": "c1430e7d626b5726bbeeb0a1831ecae3"
  },
  {
    "url": "tags/deployment/index.html",
    "revision": "84ebd978228db9ee99fb7e1739f02893"
  },
  {
    "url": "tags/deployment/page/1/index.html",
    "revision": "1bc354f2b76725f77214accc9a7d5d75"
  },
  {
    "url": "tags/developer/index.html",
    "revision": "b06aaea57dd2037acfb4daa339f01a57"
  },
  {
    "url": "tags/developer/page/1/index.html",
    "revision": "9994f58ee10e604335cb16dbebbe368b"
  },
  {
    "url": "tags/development/index.html",
    "revision": "d01e0bdd9e688731dae0637cfb5e54a8"
  },
  {
    "url": "tags/development/page/1/index.html",
    "revision": "f3df9c8ad49e51bb660feb12bafc51a2"
  },
  {
    "url": "tags/device/index.html",
    "revision": "f23025ff65044c107acd8fbdbe0ecea7"
  },
  {
    "url": "tags/device/page/1/index.html",
    "revision": "1ab05411296cca05f5c6cefed58318f5"
  },
  {
    "url": "tags/dribbble/index.html",
    "revision": "72c3856158306e9d3e97a4237626bcaa"
  },
  {
    "url": "tags/dribbble/page/1/index.html",
    "revision": "abd21e22eb551e83974c0e5823da40d0"
  },
  {
    "url": "tags/duplicate/index.html",
    "revision": "0416f5b29f22bafac7a42b2b580227cb"
  },
  {
    "url": "tags/duplicate/page/1/index.html",
    "revision": "686002175eca608ab556a263200c4587"
  },
  {
    "url": "tags/email/index.html",
    "revision": "9cde4a70677643c26ed3b9c4dfd499ce"
  },
  {
    "url": "tags/email/page/1/index.html",
    "revision": "7df9b7d93af71c10d88746941a07e86f"
  },
  {
    "url": "tags/empty-space/index.html",
    "revision": "348b110955eb6bdac2fcf5cfa067dbfc"
  },
  {
    "url": "tags/empty-space/page/1/index.html",
    "revision": "f7cf47fd06a334404601e4dad924c4a3"
  },
  {
    "url": "tags/es2015/index.html",
    "revision": "704a0e927c69d777c0f137e9608ce0f1"
  },
  {
    "url": "tags/es2015/page/1/index.html",
    "revision": "89d56b94db76f5c297da8676c35368e9"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "aaa4ade0ac059a01aeaa6c63fd39f013"
  },
  {
    "url": "tags/es6/page/1/index.html",
    "revision": "18df26c14673fb5175aa3a29bb042dcc"
  },
  {
    "url": "tags/event/index.html",
    "revision": "04a2ddd53df75fdfe284e11c052c6b07"
  },
  {
    "url": "tags/event/page/1/index.html",
    "revision": "65755d875b6eea785a1673ebfb3f2d6b"
  },
  {
    "url": "tags/events/index.html",
    "revision": "22d2678553429923d27d6df5f5c85094"
  },
  {
    "url": "tags/events/page/1/index.html",
    "revision": "308c539ad57ae47aca087837bc3b78de"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "0abfe0cb2663e4510c629652c141050c"
  },
  {
    "url": "tags/extension/page/1/index.html",
    "revision": "4359f69a6de29c6fa9f677505ef4b160"
  },
  {
    "url": "tags/firefox/index.html",
    "revision": "3e9ee52c3247459d63eec016adfd32b9"
  },
  {
    "url": "tags/firefox/page/1/index.html",
    "revision": "8d69d0c4237d4e9b44813cafe7d64f6e"
  },
  {
    "url": "tags/flat-design/index.html",
    "revision": "367660f44ce89122fad66fcc12f3ff98"
  },
  {
    "url": "tags/flat-design/page/1/index.html",
    "revision": "962058bc9ade1ac2593e8a3d0a70064a"
  },
  {
    "url": "tags/flexbox/index.html",
    "revision": "882bf84602c1b46b08eb09d1e45c7da6"
  },
  {
    "url": "tags/flexbox/page/1/index.html",
    "revision": "16d1ac401272b1a07d020f87992812ea"
  },
  {
    "url": "tags/flexslider/index.html",
    "revision": "580d1cb7ff71a4dc99a4072b7c44990d"
  },
  {
    "url": "tags/flexslider/page/1/index.html",
    "revision": "85c622c2f2909223fb64d306c837e712"
  },
  {
    "url": "tags/freebies/index.html",
    "revision": "69e34513cd3487c505c1b413423d0a47"
  },
  {
    "url": "tags/freebies/page/1/index.html",
    "revision": "fdb330140160e6651ca6abc5ff3bc776"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "c65b8bcf39266f4272db1188f5170b5c"
  },
  {
    "url": "tags/frontend/page/1/index.html",
    "revision": "a47c995e833a01ab607655b8eb8b784c"
  },
  {
    "url": "tags/frontend/page/2/index.html",
    "revision": "774ce243a60cfadc936d351a61c4d573"
  },
  {
    "url": "tags/function/index.html",
    "revision": "23078a17dc54f8f9838dd7b9807b690c"
  },
  {
    "url": "tags/function/page/1/index.html",
    "revision": "746a93c766c8499a13cc6684588b4ec2"
  },
  {
    "url": "tags/genesis-framework/index.html",
    "revision": "8b6563aa122dc5eb6abde0df3a750cec"
  },
  {
    "url": "tags/genesis-framework/page/1/index.html",
    "revision": "6cab163b94afbe9760d65aaad7df2d78"
  },
  {
    "url": "tags/git/index.html",
    "revision": "b4edda4a4bce7708a6645cd85bd783b7"
  },
  {
    "url": "tags/git/page/1/index.html",
    "revision": "bae1658075e2dabb7f4898a66ac55ad5"
  },
  {
    "url": "tags/github/index.html",
    "revision": "71c9cd79005d4291c7c827c4da5e2e24"
  },
  {
    "url": "tags/github/page/1/index.html",
    "revision": "047e15bd430ad0457295bf5ece2966f4"
  },
  {
    "url": "tags/google-analytics/index.html",
    "revision": "0a48ee9a15793bb224470f0d0c602f99"
  },
  {
    "url": "tags/google-analytics/page/1/index.html",
    "revision": "86dd5bf0e0facbfb9bde9055b2e7eafc"
  },
  {
    "url": "tags/google-maps/index.html",
    "revision": "f1aa75b954b7f0b74f748231ee4c4649"
  },
  {
    "url": "tags/google-maps/page/1/index.html",
    "revision": "4804faff54e336b4d39529f33b897b48"
  },
  {
    "url": "tags/google/index.html",
    "revision": "b4622d8edd3f680ae8831372994aa2f2"
  },
  {
    "url": "tags/google/page/1/index.html",
    "revision": "fd500a7c1690ac1479b155096d8b0c72"
  },
  {
    "url": "tags/gruntjs/index.html",
    "revision": "7dc0bc6b4bd05c8465813e97016e7467"
  },
  {
    "url": "tags/gruntjs/page/1/index.html",
    "revision": "4429cf552902585ced09a01d363d4c54"
  },
  {
    "url": "tags/gulpjs/index.html",
    "revision": "d3e67ac1920899bb23a29476121efc04"
  },
  {
    "url": "tags/gulpjs/page/1/index.html",
    "revision": "db718a49468fe056746e60533133ab36"
  },
  {
    "url": "tags/html/index.html",
    "revision": "5b7c4717eb2a1641fdd98d728800b4a1"
  },
  {
    "url": "tags/html/page/1/index.html",
    "revision": "b7ba68b8f4ad760d308a231eb0173c53"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "8e1f10768fe0b5ff5218943d646039a6"
  },
  {
    "url": "tags/html5/page/1/index.html",
    "revision": "b5ec3589fab26cf56cd4c5825600341f"
  },
  {
    "url": "tags/icon-fonts/index.html",
    "revision": "1015acf73d6af99eec8240db302735d3"
  },
  {
    "url": "tags/icon-fonts/page/1/index.html",
    "revision": "8faec1f7d271a449e1d3eefdbc601e4f"
  },
  {
    "url": "tags/ie10/index.html",
    "revision": "624e14004680c2a858a1dbefed2c00cf"
  },
  {
    "url": "tags/ie10/page/1/index.html",
    "revision": "0252f3730d58e9859c86159af6c7b40c"
  },
  {
    "url": "tags/image/index.html",
    "revision": "656a3bbd3dcf57babbea1669537940f1"
  },
  {
    "url": "tags/image/page/1/index.html",
    "revision": "b4fc90a6e1f148180de47a3288b875a7"
  },
  {
    "url": "tags/input/index.html",
    "revision": "ec8bf1a4648432a06d0402c5da1f552d"
  },
  {
    "url": "tags/input/page/1/index.html",
    "revision": "2c7bf051501dca82145a2bdcf0dd787e"
  },
  {
    "url": "tags/inspiration/index.html",
    "revision": "c67fbefda4bdcb412f576512f7437e6c"
  },
  {
    "url": "tags/inspiration/page/1/index.html",
    "revision": "3367337b0e05a7871e79ce711d63009a"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "e4e5a504e9d14f39c1d92cc5146c1fa7"
  },
  {
    "url": "tags/ios/page/1/index.html",
    "revision": "2b3d6b32a6796c2bb281c1b5dfd586e1"
  },
  {
    "url": "tags/ios7/index.html",
    "revision": "9a36ee3425163ead37c118d7886428aa"
  },
  {
    "url": "tags/ios7/page/1/index.html",
    "revision": "e2e956d656ee99a56d73f96d50eb4ff9"
  },
  {
    "url": "tags/issue/index.html",
    "revision": "76d0b0cbd4582911012a6fd87d9baf04"
  },
  {
    "url": "tags/issue/page/1/index.html",
    "revision": "af0e1489256ff678735ee8d35dce5183"
  },
  {
    "url": "tags/itunes/index.html",
    "revision": "84e9b8828769cc6301b34fb90aa9c344"
  },
  {
    "url": "tags/itunes/page/1/index.html",
    "revision": "bc3514295a90d82eea1bfad5dd2840b6"
  },
  {
    "url": "tags/jasmine/index.html",
    "revision": "384c2dce16396b3bece8fcec1cdd608d"
  },
  {
    "url": "tags/jasmine/page/1/index.html",
    "revision": "907404c3457f6cdcc512fd11bb4327c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "f5498c443cd02f8f506a17d492d45c98"
  },
  {
    "url": "tags/javascript/page/1/index.html",
    "revision": "654f47f26bb879820f2c79d5c8f39d17"
  },
  {
    "url": "tags/javascript/page/2/index.html",
    "revision": "eb5905ca4d06ef805c54d82a39231286"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "ae317468be5c48de8a7fcbcb2ed12041"
  },
  {
    "url": "tags/jquery/page/1/index.html",
    "revision": "4ecfd70bf1f4922b23dced167844e76f"
  },
  {
    "url": "tags/junior/index.html",
    "revision": "ac82bdd47369dae6104fa1e2928c80c0"
  },
  {
    "url": "tags/junior/page/1/index.html",
    "revision": "451b5fcedc5a2109b613a2b747193c04"
  },
  {
    "url": "tags/less/index.html",
    "revision": "80766f46c704ac8e6cd57628b1c250ad"
  },
  {
    "url": "tags/less/page/1/index.html",
    "revision": "97845c4fac4cccbd8d8213000fda658f"
  },
  {
    "url": "tags/loop/index.html",
    "revision": "88ca5dce6098939e6188a6663254abd3"
  },
  {
    "url": "tags/loop/page/1/index.html",
    "revision": "2eee65e961ed0a0ecadb9c8d34aa9b57"
  },
  {
    "url": "tags/markup/index.html",
    "revision": "1909eae528f9ac22337a356c7a896921"
  },
  {
    "url": "tags/markup/page/1/index.html",
    "revision": "08208a3792c13f60fda22e36ccf70b4c"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "920594ca9633710fdd4acb8decf20599"
  },
  {
    "url": "tags/mentoring/page/1/index.html",
    "revision": "714a04c70ae8deca85407feb0c637188"
  },
  {
    "url": "tags/meta-box/index.html",
    "revision": "c1f865f4d81b6d7e23a34351e1caa657"
  },
  {
    "url": "tags/meta-box/page/1/index.html",
    "revision": "bea937e59c2e5d7ce97c5894091534a1"
  },
  {
    "url": "tags/meta-field/index.html",
    "revision": "f8137d6819862a6f00741baa1d777001"
  },
  {
    "url": "tags/meta-field/page/1/index.html",
    "revision": "0bc51d4e26b1ce1177619b2dbf24c0e7"
  },
  {
    "url": "tags/microsoft/index.html",
    "revision": "0d3911ee03973b884062004acbca3901"
  },
  {
    "url": "tags/microsoft/page/1/index.html",
    "revision": "bf40d271864185cebbf08479a69a7f89"
  },
  {
    "url": "tags/mixin/index.html",
    "revision": "5f4434c55cf4d055c2b99528f4fe1222"
  },
  {
    "url": "tags/mixin/page/1/index.html",
    "revision": "2c20a05d38358b9e5a504af943d4e1dd"
  },
  {
    "url": "tags/mobile/index.html",
    "revision": "7fc4ef9b481111d8b318335ceb9bbb2a"
  },
  {
    "url": "tags/mobile/page/1/index.html",
    "revision": "966549fce55d34fc8c5b3b32a16e1a8c"
  },
  {
    "url": "tags/module/index.html",
    "revision": "2eb98261077f2467bb65ff933acf3406"
  },
  {
    "url": "tags/module/page/1/index.html",
    "revision": "693726a04ba584ed69a771a94781eacd"
  },
  {
    "url": "tags/multisite/index.html",
    "revision": "b58eb1b1cd03ba168d5020cf94234c26"
  },
  {
    "url": "tags/multisite/page/1/index.html",
    "revision": "b523ef2a359ee0d93ee39d77d4cf5bb3"
  },
  {
    "url": "tags/nas/index.html",
    "revision": "950e3e3b68d03f5e9594b37dfeb4fb32"
  },
  {
    "url": "tags/nas/page/1/index.html",
    "revision": "96f65f34276a5b06660e887248e65379"
  },
  {
    "url": "tags/network/index.html",
    "revision": "d584097b4b8b5eb6e4022a945ae952a2"
  },
  {
    "url": "tags/network/page/1/index.html",
    "revision": "2fa4d941b642282ecda5c72ea721ef53"
  },
  {
    "url": "tags/node_modules/index.html",
    "revision": "90f8e87efa2dfafcd1d16141342aaabc"
  },
  {
    "url": "tags/node_modules/page/1/index.html",
    "revision": "c7fdf6b22b69efd1ace8f952bcc3cbee"
  },
  {
    "url": "tags/nodejs/index.html",
    "revision": "2876329db58346d1045909a86a80fe9d"
  },
  {
    "url": "tags/nodejs/page/1/index.html",
    "revision": "80718e303cb72e193711b1b5315ec378"
  },
  {
    "url": "tags/notification/index.html",
    "revision": "9ce16e653be56764a71ea6e5ee3f4ac6"
  },
  {
    "url": "tags/notification/page/1/index.html",
    "revision": "ef844b2e024484435b4447f5b28e990b"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "67f3c082f3902d2ba8c552a63a853bb2"
  },
  {
    "url": "tags/npm/page/1/index.html",
    "revision": "8a980c16171e19e7bd4d76f4ee62d571"
  },
  {
    "url": "tags/options/index.html",
    "revision": "b03fd1fd12762e030f00f41092d9be34"
  },
  {
    "url": "tags/options/page/1/index.html",
    "revision": "c3e454213ade1c466ab5f6a31ff6bc99"
  },
  {
    "url": "tags/page/index.html",
    "revision": "062af18778f675a32be21d1ad3c0de1b"
  },
  {
    "url": "tags/page/page/1/index.html",
    "revision": "ea3a32d7d15a3facb9a34663107ad2ef"
  },
  {
    "url": "tags/pagination/index.html",
    "revision": "842b3683ae6aa1f16b5df1983b89422f"
  },
  {
    "url": "tags/pagination/page/1/index.html",
    "revision": "cb6cec825aeca8c65c54114d81bee373"
  },
  {
    "url": "tags/pattern/index.html",
    "revision": "1290d5cf83c45b772017ceabad371205"
  },
  {
    "url": "tags/pattern/page/1/index.html",
    "revision": "5bbaed492e1919d8261bb6ffd2a2cca6"
  },
  {
    "url": "tags/performance/index.html",
    "revision": "1a011e9c469065f2c6be94272406e974"
  },
  {
    "url": "tags/performance/page/1/index.html",
    "revision": "2387e750d581080fa0ce7b1029586e33"
  },
  {
    "url": "tags/permalink/index.html",
    "revision": "4d0b3ce98fb0e2e33aa62ee86e0b2d41"
  },
  {
    "url": "tags/permalink/page/1/index.html",
    "revision": "c22a1c498458c7bd0c14867a47e0c395"
  },
  {
    "url": "tags/php/index.html",
    "revision": "9259299e08be81e12ee51640b6153c80"
  },
  {
    "url": "tags/php/page/1/index.html",
    "revision": "4918b09ecb1e1c9efa6df7b4c371c16d"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "1cbcacff19bc41656c53ba426d03f405"
  },
  {
    "url": "tags/plugin/page/1/index.html",
    "revision": "21ed4946af0b8444cfd9d038e6c27613"
  },
  {
    "url": "tags/plugin/page/2/index.html",
    "revision": "0ce3cce4fa00fa2b9736e723e75b1dc0"
  },
  {
    "url": "tags/post/index.html",
    "revision": "3327e993e9840f3239cdd1edfc1d7bc7"
  },
  {
    "url": "tags/post/page/1/index.html",
    "revision": "2ac236cb5f6d385da8e1643d87d3edd0"
  },
  {
    "url": "tags/postccs/index.html",
    "revision": "2d6d2ff2598666589b3c205dff6f9f0b"
  },
  {
    "url": "tags/postccs/page/1/index.html",
    "revision": "970e18c506b11d074d7db5c8021aac2f"
  },
  {
    "url": "tags/psd/index.html",
    "revision": "a3cebba03da415e7e8afd3a7c9665064"
  },
  {
    "url": "tags/psd/page/1/index.html",
    "revision": "3fba61556488ade1d452ed8bfb176ecc"
  },
  {
    "url": "tags/re-think/index.html",
    "revision": "97577e183ae7cd11dcb405f164b48387"
  },
  {
    "url": "tags/re-think/page/1/index.html",
    "revision": "762d9c7c07e2d8dd75dae0ec467542bf"
  },
  {
    "url": "tags/react-native/index.html",
    "revision": "b63580567bde5d143776231a1d169a9f"
  },
  {
    "url": "tags/react-native/page/1/index.html",
    "revision": "ee1023f33ddf47ac091f993ab3a68efa"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "4ad88cfc8b1abb6227b314693c29ac6f"
  },
  {
    "url": "tags/resources/page/1/index.html",
    "revision": "d0802762a3e7fcc3dd93234859630493"
  },
  {
    "url": "tags/responsive-website/index.html",
    "revision": "293fe9ae42a96d249fa891971c486558"
  },
  {
    "url": "tags/responsive-website/page/1/index.html",
    "revision": "2fa4b6f4d11b3ce9267a42dde5ccfbd1"
  },
  {
    "url": "tags/responsive-website/page/2/index.html",
    "revision": "3904f11c96195477c9985d176f9ea8b4"
  },
  {
    "url": "tags/retweet/index.html",
    "revision": "a12bed7f8908695fd4f9f6e73848d174"
  },
  {
    "url": "tags/retweet/page/1/index.html",
    "revision": "6796fab20c9ded7127c5da9570aa6ccf"
  },
  {
    "url": "tags/right-to-left/index.html",
    "revision": "1024c589c6fd3ce195c69a468c5fce6c"
  },
  {
    "url": "tags/right-to-left/page/1/index.html",
    "revision": "50e565a4ca099c391be8b685bf68bdb9"
  },
  {
    "url": "tags/rtl/index.html",
    "revision": "3724545b2c549fee3b913f627136f501"
  },
  {
    "url": "tags/rtl/page/1/index.html",
    "revision": "f9efef9b1d5650dec9659a7006b09bad"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "304073da28d8c2a9f6f7f19ec70ff95d"
  },
  {
    "url": "tags/sass/page/1/index.html",
    "revision": "b4dbb14638911c64420d0db74a2f44f1"
  },
  {
    "url": "tags/sass/page/2/index.html",
    "revision": "f26e048b337ff6de4203994055449bdd"
  },
  {
    "url": "tags/selector/index.html",
    "revision": "12175ca56a39aaf38d160d3280c1daae"
  },
  {
    "url": "tags/selector/page/1/index.html",
    "revision": "9dd65a59d6d1508d8222b7fa0f50737b"
  },
  {
    "url": "tags/seo/index.html",
    "revision": "8c1363e765491fb8654280c029a30939"
  },
  {
    "url": "tags/seo/page/1/index.html",
    "revision": "bb67b05c8c677af90d28aa4f821e0760"
  },
  {
    "url": "tags/shortcode/index.html",
    "revision": "8e0594f691e14eec483e0fcee6f3fd1f"
  },
  {
    "url": "tags/shortcode/page/1/index.html",
    "revision": "5c01c05b3d624d9765039b7e9c0d0d00"
  },
  {
    "url": "tags/snippet/index.html",
    "revision": "eb6088b266b8fec0408634f5e8232a18"
  },
  {
    "url": "tags/snippet/page/1/index.html",
    "revision": "017667ce96ef8d0b433a49647692485d"
  },
  {
    "url": "tags/snippets/index.html",
    "revision": "7f2dab177a27e9c88c8e3e1c320fe980"
  },
  {
    "url": "tags/snippets/page/1/index.html",
    "revision": "204f95210b210c0da68ee2563bf171ae"
  },
  {
    "url": "tags/sort/index.html",
    "revision": "ac9bf3a05b9a62207e361198edf0e9d8"
  },
  {
    "url": "tags/sort/page/1/index.html",
    "revision": "f65fac48e92e417c508648245f462bce"
  },
  {
    "url": "tags/sourcetree/index.html",
    "revision": "36ac8c26b53d0fd907fa731537d3d22c"
  },
  {
    "url": "tags/sourcetree/page/1/index.html",
    "revision": "9bfd37fa0a09cf5785250720bf6b0e64"
  },
  {
    "url": "tags/speed/index.html",
    "revision": "5ee0fb33de9f2587b5964f1d520d68bb"
  },
  {
    "url": "tags/speed/page/1/index.html",
    "revision": "0a0b2bf3ba9cea8d6d51429caed01f47"
  },
  {
    "url": "tags/table/index.html",
    "revision": "9077b03410098a04a3b69048d7ec04be"
  },
  {
    "url": "tags/table/page/1/index.html",
    "revision": "35c9b0750f9f503c9191f46e615cd66d"
  },
  {
    "url": "tags/tags/index.html",
    "revision": "d696c3564b1d5db27f02196f72c30919"
  },
  {
    "url": "tags/tags/page/1/index.html",
    "revision": "ab04f338603a9281183e60d71fbbd385"
  },
  {
    "url": "tags/taskrunner/index.html",
    "revision": "670fba95dbc445e99b6ae233d9e79f16"
  },
  {
    "url": "tags/taskrunner/page/1/index.html",
    "revision": "f752d19d068cb9e031cf40851e66e5cc"
  },
  {
    "url": "tags/testing/index.html",
    "revision": "bf82a0de18ea90003299c870a3b72909"
  },
  {
    "url": "tags/testing/page/1/index.html",
    "revision": "6e4588bc87c35783b37aa0619a25823c"
  },
  {
    "url": "tags/theme/index.html",
    "revision": "76930076233ce940a42586afa0d05a52"
  },
  {
    "url": "tags/theme/page/1/index.html",
    "revision": "400f6221eddd276019e57d2a4fc0a5a0"
  },
  {
    "url": "tags/themes/index.html",
    "revision": "b80de4ed72965e6de9569c5c9822847c"
  },
  {
    "url": "tags/themes/page/1/index.html",
    "revision": "cefb20c64211fe8f51e446f6f53e8e63"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "0c7973ba48dc9a1b7b359091e4d698ee"
  },
  {
    "url": "tags/tools/page/1/index.html",
    "revision": "52c1baf9b41223bddad131c130c9bbff"
  },
  {
    "url": "tags/tweets/index.html",
    "revision": "24ca6f1c689f0ea0f806acd4fc593770"
  },
  {
    "url": "tags/tweets/page/1/index.html",
    "revision": "e6971de519c1b6c474dfc094bc31bc0b"
  },
  {
    "url": "tags/tweets/page/2/index.html",
    "revision": "e931ede77b42b52668061412e080828b"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "ca275fddd846b48ee6eab637f07aa629"
  },
  {
    "url": "tags/twitter/page/1/index.html",
    "revision": "910051bc50df17aa4e77d53d77815a62"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "3eb2747e5db80012496febe16ed55c45"
  },
  {
    "url": "tags/typescript/page/1/index.html",
    "revision": "d88ba6743b4b63db6052e406c09cb029"
  },
  {
    "url": "tags/user-interface/index.html",
    "revision": "c5e0875a6b779260afea556d7ce82254"
  },
  {
    "url": "tags/user-interface/page/1/index.html",
    "revision": "767454cd56f635dde4709d56ee76f160"
  },
  {
    "url": "tags/useragent/index.html",
    "revision": "1ec108060bfed2069040fa9314ae1c57"
  },
  {
    "url": "tags/useragent/page/1/index.html",
    "revision": "cc1a0c904ca6da0007fc4cefff6c8527"
  },
  {
    "url": "tags/vanilla-javascript/index.html",
    "revision": "5952d4788848e3b23140a97c0e56356a"
  },
  {
    "url": "tags/vanilla-javascript/page/1/index.html",
    "revision": "1fa80254b35695b34dfc10b2a0b30b83"
  },
  {
    "url": "tags/vision/index.html",
    "revision": "9f4a7edce57acf7e607346bcd904e3cd"
  },
  {
    "url": "tags/vision/page/1/index.html",
    "revision": "be2409f7ac8fce8b56a1cfa36a1c0c18"
  },
  {
    "url": "tags/we-love-icon-fonts/index.html",
    "revision": "f6501984389ed855521226fe2deed58f"
  },
  {
    "url": "tags/we-love-icon-fonts/page/1/index.html",
    "revision": "09864dce66e51825b4995744f99a4faa"
  },
  {
    "url": "tags/webdesign/index.html",
    "revision": "25c1b6cd7464675dfed8c9f8127dd922"
  },
  {
    "url": "tags/webdesign/page/1/index.html",
    "revision": "a394000f941e506b4398c703da47e4d8"
  },
  {
    "url": "tags/webdesign/page/2/index.html",
    "revision": "076fcadd9839c91cf80f1d58edde88c1"
  },
  {
    "url": "tags/webdesign/page/3/index.html",
    "revision": "4736554d307f21dd20f56b06788374ed"
  },
  {
    "url": "tags/webdevelopment/index.html",
    "revision": "383bd6a459cda63754483e68c5e08a0f"
  },
  {
    "url": "tags/webdevelopment/page/1/index.html",
    "revision": "808160029862b02283663be4bac59fce"
  },
  {
    "url": "tags/webdevelopment/page/2/index.html",
    "revision": "2a4844bd50274746235065252baa2654"
  },
  {
    "url": "tags/webfonts/index.html",
    "revision": "8f71d12945828d9141c6f68daa55de8e"
  },
  {
    "url": "tags/webfonts/page/1/index.html",
    "revision": "4c0e4e8beffada7467809120c68ed212"
  },
  {
    "url": "tags/weekly/index.html",
    "revision": "c1df7ed8980d3c72ab8123c2427c7dcb"
  },
  {
    "url": "tags/weekly/page/1/index.html",
    "revision": "add6c0e0c7740b88c35251582659d3fe"
  },
  {
    "url": "tags/weekly/page/2/index.html",
    "revision": "e20f0fdf94f36959f332f4b477e17cfc"
  },
  {
    "url": "tags/windows-8.1/index.html",
    "revision": "2fc9e21910d294575f398ac66722cdff"
  },
  {
    "url": "tags/windows-8.1/page/1/index.html",
    "revision": "ce1f09a9dd3ed1e7da34a34d0dd880aa"
  },
  {
    "url": "tags/windows-8/index.html",
    "revision": "311f9d27af9665c099e4d6422536f56d"
  },
  {
    "url": "tags/windows-8/page/1/index.html",
    "revision": "449ec716ec881948331e5cee4a23a0f7"
  },
  {
    "url": "tags/woocommerce/index.html",
    "revision": "47617072127c16bbdbad90b1113f8c48"
  },
  {
    "url": "tags/woocommerce/page/1/index.html",
    "revision": "15f1309c8ee82edb3f6e3c25ffe64328"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "c7588614671457794c0536f51a21480f"
  },
  {
    "url": "tags/wordpress/page/1/index.html",
    "revision": "6b42cf6422e1e3bc3d255e11bdc89f14"
  },
  {
    "url": "tags/wordpress/page/2/index.html",
    "revision": "e4e7437e198d7d326d0c4cbf1bc402c8"
  },
  {
    "url": "tags/wordpress/page/3/index.html",
    "revision": "812923ec203dd4dc2a626cf995c79eda"
  },
  {
    "url": "tags/wordpress/page/4/index.html",
    "revision": "4be4cbb82544c690306c6d2e5359d560"
  },
  {
    "url": "tags/workflow/index.html",
    "revision": "3df382cf961e1000e60d7410ba9553f6"
  },
  {
    "url": "tags/workflow/page/1/index.html",
    "revision": "b01712036682e27f3f578b6a3d77a7b7"
  },
  {
    "url": "tags/wp_redirect/index.html",
    "revision": "92bd2c765be85f097b9e32a9091f725f"
  },
  {
    "url": "tags/wp_redirect/page/1/index.html",
    "revision": "db40b5325d9b0a593b607ef6be618125"
  },
  {
    "url": "tags/wpmu/index.html",
    "revision": "965223dde5edfa2f2ed448310698573a"
  },
  {
    "url": "tags/wpmu/page/1/index.html",
    "revision": "4b6aef60ae2379005019fe11dced856a"
  },
  {
    "url": "the-best-365-websites-around-the-world/index.html",
    "revision": "97d487464268fcae0f039440f79fcb2a"
  },
  {
    "url": "the-pros-guide-to-css-layouts/index.html",
    "revision": "26c54518c105512dfa5b26ba9a097b81"
  },
  {
    "url": "this-one-advice-is-all-it-takes-to-become-a-successful-freelancer-video/index.html",
    "revision": "84c8a237a10479fefd6ed5eb592f5b28"
  },
  {
    "url": "this-weeks-web-design-135/index.html",
    "revision": "a68735d68ff3b0c82a0c04133416df1f"
  },
  {
    "url": "tooling-for-the-modern-webapp-developer-video-from-dotjs/index.html",
    "revision": "c2b6f9143177df9108d7e82fedef3542"
  },
  {
    "url": "top-10-css-gallery-websites-for-inspiration/index.html",
    "revision": "e4705dece73277971b36deb87e2303ea"
  },
  {
    "url": "top-10-wordpress-form-plugins-2/index.html",
    "revision": "43c387677bff4996fac5fa9bf8f87fa1"
  },
  {
    "url": "top-10-wordpress-form-plugins/index.html",
    "revision": "9cf00595299d69905aee612a1c6050be"
  },
  {
    "url": "top-12-best-websites-of-week-25-2013/index.html",
    "revision": "ae94f2d0448f2b0647d6acc3a999836f"
  },
  {
    "url": "turn-a-static-website-into-a-progressive-web-app/index.html",
    "revision": "c72e720a59502996cc358d45af596cf6"
  },
  {
    "url": "understanding-and-using-widgets-in-wordpress/index.html",
    "revision": "2c64834b726054290f4197742fdca1e2"
  },
  {
    "url": "use-css-to-scale-in-aspect-ratio-in-your-responsive-webdesign/index.html",
    "revision": "8aa8e7b2b0cbf22fecf1219c4b991dfb"
  },
  {
    "url": "useful-web-design-tips-for-newbies/index.html",
    "revision": "8a02a4c93ea0770fdda3b226e7e72a3f"
  },
  {
    "url": "user-interfaces-techniques-pros-and-cons-when-designing-ui-elements/index.html",
    "revision": "075578c8ea4a94b39e8b86b050210f91"
  },
  {
    "url": "useragents-strings-mobile-desktop-snippets/index.html",
    "revision": "9ffb338006a1c4a58961e61f62e5403c"
  },
  {
    "url": "web-design-critique-96-successinc-drupal-theme/index.html",
    "revision": "1230c43bb33f9a8f7cf6c6dc63e543be"
  },
  {
    "url": "web-design-trends-in-2013/index.html",
    "revision": "92e390d8228003a88a20aef3d7ffa874"
  },
  {
    "url": "web-standards-arent-just-about-html-and-css/index.html",
    "revision": "9cc53341be6b26601a550ffe7870eac9"
  },
  {
    "url": "weekly-fresh-resources-for-designers-and-developers-january-21th2013/index.html",
    "revision": "29b04814b9f4863c632d9449ab891e10"
  },
  {
    "url": "weekly-fresh-resources-for-designers-and-developers-january-28th2013/index.html",
    "revision": "727f68bf29faaa8239555a45b550bbac"
  },
  {
    "url": "weekly-fresh-web-design-freebies-vol-3-1-23-2013/index.html",
    "revision": "2fd21da1faaaf120453d5126eb4d6060"
  },
  {
    "url": "weekly-roundup-wordpress-user-interface-and-gravity-forms/index.html",
    "revision": "4843b13d4d4c430f581ccc9c572346c5"
  },
  {
    "url": "weekly-web-design-inspiration-17/index.html",
    "revision": "c24c75d00bb756c36294b7f008bd3fa0"
  },
  {
    "url": "weekly-web-design-inspiration-69/index.html",
    "revision": "2b3afefd8f2071f234b8591bb798c134"
  },
  {
    "url": "weekly-web-design-inspiration-n-174-2/index.html",
    "revision": "6a666a5e55c6dd30fe540c0db50a2fea"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-2/index.html",
    "revision": "eb47adb78d7afb46af13479610a3cc43"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-3/index.html",
    "revision": "752f08132eb72a0e9927dff55889a549"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-04-05-2013-and-10-05-2013/index.html",
    "revision": "702f08603857373db3d085f75cc49207"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-11-05-2013-and-17-05-2013/index.html",
    "revision": "fc5087badc2be25f8b9d15c05663ad0e"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets-between-27-04-2013-and-03-05-2013/index.html",
    "revision": "512b621a33062941b4f6fc3bf355823d"
  },
  {
    "url": "weekly-webdesign-webdevelopment-tweets/index.html",
    "revision": "64f63f617da0e2e9b1cc9400aab0dc9e"
  },
  {
    "url": "what-do-you-think-about-firefox-os-developer-preview-phone/index.html",
    "revision": "11354192ba5ad15a0212077c17390439"
  },
  {
    "url": "what-is-set-javascript-es2015-es6-when-use-it/index.html",
    "revision": "6d1f80af7744b82b6103203b5fe37cf0"
  },
  {
    "url": "what-is-set-object-javascript-es2015-es6-when-use-it/index.html",
    "revision": "55cc34a1cde327c9785b2023847752a3"
  },
  {
    "url": "whats-the-difference-between-ui-and-ux/index.html",
    "revision": "91412cbad86a1bd13da3f4dedc7bb72f"
  },
  {
    "url": "woothemes-flexslider-rtl-right-to-left-support/index.html",
    "revision": "e3b97fb11667af2c63cbdf0ef42845db"
  },
  {
    "url": "wordpress-3-6-what-to-expect-from-the-most-promising-update-in-a-long-time/index.html",
    "revision": "1a420422e640f055823eeca2784b0c4d"
  },
  {
    "url": "wordpress-backup-data-recovery-and-its-significance/index.html",
    "revision": "9c6c148aa4757645459b15e0edd02655"
  },
  {
    "url": "wordpress-helps-you-in-managing-your-business-more-productively/index.html",
    "revision": "44af6cc528d4c1cbfdd584eac829fd1d"
  },
  {
    "url": "wordpress-news-january-19-to-january-26-2013-2/index.html",
    "revision": "c2d7bff2ce21fe63fb4da639abd4ec21"
  },
  {
    "url": "wordpress-news-january-19-to-january-26-2013/index.html",
    "revision": "fbd2699b82943b288086f9d7c78dbb5c"
  },
  {
    "url": "wordpress-news-tutorials-resources-roundup-no-18/index.html",
    "revision": "1bff0c2e19ff1356ff4073a003b41074"
  },
  {
    "url": "wordpress-pagination-with-custom-post-type-issue/index.html",
    "revision": "20898728c8bbb7168f57e2b2a6f02b47"
  },
  {
    "url": "wordpress-plugin-duplicate-clone-post/index.html",
    "revision": "e815c7d3be6e0932ef3c7410abd60376"
  },
  {
    "url": "wordpress-snippet-googlemaps-shortcode/index.html",
    "revision": "227c99eba389718973212835ccea3e70"
  },
  {
    "url": "wordpress-snippet-make-a-button-shortcode/index.html",
    "revision": "230e2f618169406015f830c559685b77"
  },
  {
    "url": "work-faster-play-harder-frontend-developer/index.html",
    "revision": "ff4a3bf61f0b7142c6479a10a31ee01e"
  },
  {
    "url": "working-with-sass-css-pre-processor-on-an-network-drive-was-an-hell-until-now/index.html",
    "revision": "a9291d942c5f989ee9e3538e72fd271d"
  },
  {
    "url": "wp-dev-add_menu_page-redirect-external-url-with-wp_redirect/index.html",
    "revision": "2041b9562462e077f866db11690e90d5"
  },
  {
    "url": "wp-dev-complex-custom-unique-post-numbers-meta-fields/index.html",
    "revision": "4fdec8f79b93a15e6226959de2668337"
  },
  {
    "url": "wp-dev-custom-post-type-admin-column-ordering/index.html",
    "revision": "30b8d4be908689e3e5fca84d69718173"
  },
  {
    "url": "yeoman-nice-tool-improve-frontend-workflow/index.html",
    "revision": "45acba16c76c823af130dab2b5799fa6"
  },
  {
    "url": "your-first-angularjs-application/index.html",
    "revision": "48b89940c5246bdeeb227345ba3af7a2"
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
