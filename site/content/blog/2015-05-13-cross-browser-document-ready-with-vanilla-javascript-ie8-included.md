---
title: Cross-browser Document Ready with Vanilla JavaScript (IE8 included)
author: Raymon Schouwenaar
type: post
date: 2015-05-13T15:25:47+00:00
excerpt: In jQuery, developers are used to the $(document).ready(); function. This is just a check if your document is completely loaded, and all needed stuff is on your page. But since I left jQuery in my work, I wanted to have the same check but with Vanilla JavaScript.
url: /cross-browser-document-ready-with-vanilla-javascript-ie8-included/
featured_image: /wp-content/uploads/2015/02/snippets-of-vanilla-javascript-you-dont-need-jquery-for-this-825x510.jpg
dsq_thread_id:
  - 3760738825
categories:
  - Javascript
  - Webdevelopment
tags:
  - jQuery
  - Vanilla JavaScript

---
In jQuery, developers are used to the $(document).ready(); function. This is just a check if your document is completely loaded, and all needed stuff is on your page. But since I left jQuery in my work, I wanted to have the same check but with Vanilla JavaScript.

So today I would love to share with you a snippet, that check&#8217;s if you DOM is ready without any dependencies!

## Document Ready check

This snippet will <a href="http://caniuse.com/#search=DOMContentLoaded" target="_blank">covers all the browser</a> to check if the DOM is ready.

{{< code type="javascript" >}}document.addEventListener("DOMContentLoaded", function() {
   console.log('Your document is ready!');
});{{< /code >}}

## Document Ready check for IE8

Offcourse there is IE8, who wants a different way.

{{< code type="javascript" >}}document.attachEvent("onreadystatechange", function(){
 if (document.readyState === "complete"){
   console.log('Your document is ready!');
 }
});{{< /code >}}

## Cross-browser Document Ready check

If I would create a small module of it, it would be like this:

{{< code type="javascript" >}}var domIsReady = (function(domIsReady) {
   var isBrowserIeOrNot = function() {
      return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
   }

   domIsReady = function(callback) {
      if(callback && typeof callback === 'function'){
         if(isBrowserIeOrNot() !== 'ie') {
            document.addEventListener("DOMContentLoaded", function() {
               return callback();
            });
         } else {
            document.attachEvent("onreadystatechange", function() {
               if(document.readyState === "complete") {
                  return callback();
               }
            });
         }
      } else {
         console.error('The callback is not a function!');
      }
   }

   return domIsReady;
})(domIsReady || {});{{< /code >}}

Source is on <a href="https://gist.github.com/raymonschouwenaar/84bc7def8fbfa06ffd84" target="_blank">Gist</a> and a demo is on <a href="http://codepen.io/rsschouwenaar/pen/LVNWzQ" target="_blank">Codepen</a>.

And this is how you could use it:

{{< code type="javascript" >}}(function(document, window, domIsReady, undefined) {
   domIsReady(function() {
      console.log('My DOM is ready peeps!');
      document.querySelector('#page').style.background = 'blue';
   });
})(document, window, domIsReady);{{< /code >}}

&nbsp;

## Use a micro-library

You can also choose to use a small JavaScript Library if you like. It can be very usefull, but I prefer to intergrate the snippets above in my own code.

  * docReady: <a href="https://github.com/jfriend00/docReady" target="_blank">https://github.com/jfriend00/docReady</a>
  * js-ready: <a href="https://github.com/zombiept2/js-ready" target="_blank">https://github.com/zombiept2/js-ready</a>
  * domReady: <a href="https://github.com/freelancephp/domReady" target="_blank">https://github.com/freelancephp/domReady</a>

Hope this will help you build your website or application!