---
title: 2 steps to improve the loading time of your website
author: Raymon Schouwenaar
type: post
date: 2015-09-17T11:00:52+00:00
url: /2-steps-to-improve-the-loading-time-of-your-website/
featured_image: /wp-content/uploads/2015/09/2-steps-to-improve-the-loading-time-of-your-website-825x510.jpg
dsq_thread_id:
  - 4137884733
categories:
  - Frontend Development
tags:
  - Development
  - Frontend
  - Performance

---
A time ago I gave a presentation about Frontend Performance, how you can improve the loading time of your website. But for the people who where not there, I wanted to write down the 2 steps I take to improve the loading time of several websites. I hope you like it! If you got some tips & tricks to add, please add them in the comments.

## 1. Images are slowing down everything!

Images are the biggest issue in a the loading time of your site. A lot of website don&#8217;t use optimized images and most of the time the are to big. Especially websites with a CMS.

So to prevent that the images are to big, I usually save my images (for a static website) in different resolutions (btw, WordPress does save images in different formats). I use these sizes in width&#8217;s:

  * 1980px (for big screens and backgrounds on 70% quality)
  * 1024px (for big content images on 70% quality)
  * 800px (for content images on tablet with portrait mode in 70% quality)
  * 640px (for content images on big smartphones in 70% quality)
  * 480px (for content images on smartphones in 70% quality)
  * 320px (for content images on small/old smartphones in 70% quality)

_Note: with <a href="https://www.npmjs.com/package/grunt-imagemagick" target="_blank" shape="rect">grunt </a>or <a href="https://www.npmjs.com/package/gulp-gm" target="_blank" shape="rect">gulp</a> you can resize image automaticly._

For loading images in a website, you always have the problem that the block the page from loading completly. So the always slow down the loading time of a website. If you use <a href="http://dinbror.dk/blog/blazy/" target="_blank" shape="rect">Blazy</a> (a Vanilla JavaScript library for _Device-specific _Lazyloading), your website will start to load a lot faster. In the first time, the page loads without the images. If the page is ready and an image is in the visible part of the browser, Blazy activate the loading of the image. So the images are not blocking anymore.

A cool feature of Blazy is that on smaller screens, you can load smaller images. The even have support for background images. Deffenitly a must-do for improving the Frontend Performance! Let me say it better, the most important (in my opinion).

## 2. Minify CSS and JavaScript files

A lot of website&#8217;s including a ton of CSS and Javascript files. It&#8217;s nice for development maybe, to see where error&#8217;s come&#8217;s from. But all these different files has a big effect on the loading time. For each new file, there is a request to get that file loaded.

And a big amount of requests, costs more time. When you merge the CSS files into 1 file and do the same with Javascript. This will  also improve the loading time! Here is a good article to set it up with <a href="http://mattwatson.codes/compile-scss-javascript-grunt/" target="_blank" shape="rect">Grunt</a> or <a href="https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js" target="_blank" shape="rect">Gulp</a>.