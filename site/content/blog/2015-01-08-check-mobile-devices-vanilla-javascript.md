---
title: How to check mobile devices with Vanilla JavaScript
author: Raymon Schouwenaar
type: post
date: 2015-01-08T19:26:35+00:00
url: /check-mobile-devices-vanilla-javascript/
featured_image: /wp-content/uploads/2015/01/official-javascript-logo-e1420744637190-825x510.jpg
dsq_thread_id:
  - 3402577425
categories:
  - Javascript
  - Webdevelopment
tags:
  - Device
  - Mobile
  - Vanilla JavaScript

---
Some now and then you want to check for your website or application, if your visitor is on an mobile device or not.

For checking this, you don&#8217;t need jQuery for that. First of all, with jQuery you load in an hughe file, but this information is just available in the navigator object.

**navigator.userAgent**

    // type this in your console of the development tools in Chrome or other browser
    navigator.userAgent
    
    

If you change to useragent in Chrome, and set it to the iPhone. If you type `navigator.userAgent` in your console, the response will be:

    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5"
    

So you see that your using an iPhone (okay we fake it!).

**navigator.userAgent**

    // type this in your console of the development tools in Chrome or other browser
    navigator.userAgent.match(/iPhone/i);
    

The response will be `["iPhone"]` (if it is an iPhone). If you replace &#8220;iPhone&#8221; for &#8220;iPad&#8221;, the response will be `null`. With this you can build a check.

## The mobile check function

    function deviceOS() {
    var useragent = navigator.userAgent;
    
    if(useragent.match(/Android/i)) {
    return 'android';
    } else if(useragent.match(/webOS/i)) {
    return 'webos';
    } else if(useragent.match(/iPhone/i)) {
    return 'iphone';
    } else if(useragent.match(/iPod/i)) {
    return 'ipod';
    } else if(useragent.match(/iPad/i)) {
    return 'ipad';
    } else if(useragent.match(/Windows Phone/i)) {
    return 'windows phone';
    } else if(useragent.match(/SymbianOS/i)) {
    return 'symbian';
    } else if(useragent.match(/RIM/i) || useragent.match(/BB/i)) {
    return 'blackberry';
    } else {
    return false;
    }
    }
    
    

Use this script in your JavaScript and you have an nice simple Mobile Device check for Android, iPhone, iPod, iPad, Windows Phone, Symbian and RIM. Enjoy using Vanilla JavaScript!

If you have some feedback on the function? Feel free to add an comment below!