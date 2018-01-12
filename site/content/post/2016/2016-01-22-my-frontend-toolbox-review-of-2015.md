---
title: My Frontend Toolbox review of 2015
author: Raymon Schouwenaar
type: post
date: 2016-01-22T22:15:24+00:00
url: /my-frontend-toolbox-review-of-2015/
featured_image: frontend-toolbox-review-of-2015.jpg
dsq_thread_id:
  - 4514883901
categories:
  - Frontend Development
tags:
  - 2015
  - Frontend
  - Tools

---
2015 was a busy year, worked on a lot of nice projects, discovered a lot of cool and use full tools to use in my daily job as Frontend Developer. Besides that I learned a lot of new things, so scroll down and read it! I love to share this with you. I hope you like it! And hope it gives you inspiration!

## CSS (CSS pre-processor)

### BEM (CSS Methodology)

In 2015 the BEM Methodology (Block, Element, Modifier) was the best thing to use, to structure the CSS classes in my projects. I Helped out a lot of Frontend Developers with (re)structuring their CSS/Sass with the help of BEM. For now, BEM gives my CSS classes more meaning than the did before. It&#8217;s better readable, so easier to maintain for other Developers.

The only thing with BEM, CSS classes will grow larger and larger the project continues, that&#8217;s to the only thing I don&#8217;t like. So for 2016, I want to search for guidelines/solutions that help to make the classes shorter, but still readable.

**Resources:**

  * <https://css-tricks.com/bem-101/>
  * <http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/>
  * [http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology&#8211;cms-19403][1]

### Sass

My main CSS pre-processor Sass in 2015. Sass helped me this year to implement the BEM Methodology on a lot easier way than I did before. Sass stayed for me what it was. But in 2015, I played a lot with @extend, Placeholder classes.

A nice layout engine for Sass is Susy. Not a big ass CSS framework like Twitter Bootstrap, what is full of (handy) things, but, in the end, your only using the grid layout. No, Susy don&#8217;t waste the bytes of your CSS file! Susy helps you to build complex layouts (still with floats). It is doing a lot of math for you, it is worth it to take a look. And it doesn&#8217;t give you an overload off CSS styles.

### Flexbox

Flexbox is in my eyes still a really new/complex feature. And I&#8217;m not using it for building the whole layout. But for some design challenges, it is very very useful. It is super flexible. The browser support for Flexbox is growing bigger and bigger, and that is a good thing!

Microsoft dropped the support for old Internet Explorers browsers, so that is a nice thing for all the Frontend Developers! If you want to try out Flexbox, CSS-tricks.com has written a big article/summary for Flexbox. It&#8217;s worth reading!

**Resources:**

  * <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
  * <https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties>
  * <http://flexboxgrid.com/>
  * <http://www.sketchingwithcss.com/samplechapter/cheatsheet.html>

### CSS Selectors

One of my biggest conclusions of the CSS Selectors was, I&#8217;VE WRITTEN MY SELECTORS WRONG ALL THESE YEARS! Yeah really! Browsers render the CSS selectors not from left-to-right but from right-to-left. In short it means that if you have a selector like: &#8220;nav ul li a&#8221;, it&#8217;s going trough all your <a> tags on the page. Then it is filtering it to all the <a> tags inside <li> tags and so on. Do you want to know more about this? Check out my article: <http://www.raymonschouwenaar.nl/css-performance-we-write-css-selectors-wrong/>

### CSSLint

On one of my biggest projects in 2015 was building a huge platform for a big company, with a big team of Developers. There was a big codebase full of CSS. When I started to make changes on it, it seemed it was in a really bad shape. A lot off !important where inside it, or selectors like div#thisId ul li a .tab .readmore-link. Really in bad shape! So every time I had to change something, I had to overrule it. I even end up with writing selectors with the same length, !important and ID&#8217;s. So that was really frustrated me.

I found CSSLint, man that is a really helpful tool! I started to use [CSSLint in the browser][2], but that was not really productive. Until I found out that [Grunt][3] and [Gulp][4] also had a plugin for it. So with the GulpJS plugin for CSSLint, I found out that we needed a whole lot more time to fix it all! Thanks, CSSlint 🙂

JavaScript

## Javascript

### Vanilla JavaScript / jQuery

In 2015, I started to fall more in love with Vanilla JavaScript. It is surprising that so many developers are depending on jQuery! For so many years jQuery was the ruler of all the JavaScript DOM manipulations, even new Frontend Developers that came into companies where forgetting Vanilla JavaScript! But Vanilla JavaScript is used in jQuery. So everything you do with jQuery, you also can do with Vanilla Javascript! The website &#8220;[You Might Not Need jQuery][5]&#8221; was a huge success. It showed in a clear list what you can do with Vanilla JavaScript, where all these years you used jQuery. So from now on, I will stimulate more Vanilla JavaScript inside my projects because it runs a lot faster!

### Performance

2015 was performance wise very important for my toolkit. A couple years I was doing HTML, CSS and JavaScript in a nice way. But I wanted to specialise a bit more. And there was the performance! Performance is one of the most important things for a website/web app. It can make users happy or sad.

The biggest issue with the load time of a website is mostly images. So I integrated [bLazy.js][6] a lot in new project&#8217;s for better loading of images. Lazyloading boosts the performance up for the most website&#8217;s to 50% of the speed. (this is not a solid percentage, but an average in my projects). bLazy.js also helped to create a sort of &#8220;responsive images idea&#8221; for loading smaller images for smaller screens. So definitely worth checking out 🙂

### Performance testing

Gulp is also a fantastic tool to do Performance testing and auto-generating performance reports. I combined GulpJS, [Google&#8217;s PSI][7] and [Handlebars][8] to do a performance test and after that generated an HTML performance report. In the near future I want to write an article about this, and set that on Github, so you can use it too!

## Taskrunner

### GulpJS

Yeah, [GulpJS][9] is my primary task runner in all my projects. I started with GruntJS (what does the same thing, but different), but after seeing GulpJS does it faster, I switched. I used GulpJS with a lot of plugins like:

  * [Gulp JShint][10]
  * [Gulp Sass][11]
  * [Gulp CSSLint][12]
  * [Gulp Autoprefixer][13]
  * [PSI][14] ([PageSpeedInsight][7] by Google)
  * [Gulp BrowserSync][15]
  * [Gulp Uglify][16]
  * [Gulp File Include][17]
  * [Gulp SVGmin][18]
  * [Gulp Raster][19]
  * [Gulp Concat][20]

If you have also some new cool and useful tools, that I should use? Please add them in the comments!

 [1]: http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology--cms-19403
 [2]: http://csslint.net/
 [3]: https://www.npmjs.com/package/grunt-contrib-csslint
 [4]: https://www.npmjs.com/package/gulp-csslint
 [5]: http://youmightnotneedjquery.com/
 [6]: http://dinbror.dk/blog/blazy/
 [7]: https://developers.google.com/speed/pagespeed/insights/
 [8]: http://handlebarsjs.com/
 [9]: http://gulpjs.com/
 [10]: https://github.com/spalger/gulp-jshint
 [11]: https://github.com/dlmanning/gulp-sass
 [12]: https://github.com/lazd/gulp-csslint
 [13]: https://github.com/sindresorhus/gulp-autoprefixer
 [14]: https://github.com/addyosmani/psi
 [15]: https://github.com/BrowserSync/gulp-browser-sync
 [16]: https://github.com/terinjokes/gulp-uglify
 [17]: https://github.com/coderhaoxin/gulp-file-include
 [18]: https://github.com/ben-eb/gulp-svgmin
 [19]: https://github.com/otouto/gulp-raster
 [20]: https://github.com/contra/gulp-concat