---
title: How to create an Cross browser Gradient Background with an Sass Mixin
author: Raymon Schouwenaar
type: post
date: 2013-08-20T14:03:11+00:00
url: /how-to-create-cross-browser-gradient-background-sass-mixin/
dsq_thread_id:
  - 1620743087
categories:
  - News of the Web
  - SASS
  - Snippets
  - Webdevelopment
tags:
  - CSS3
  - HTML
  - sass

---
Since I&#8217;ve working with Sass as an CSS-preprocessor my front-end development stage is faster than before. I like to work with compass to compile my Sass. But sometime i think hé that code could be easier, and than i&#8217;m simply searching with Google and than i find easy Sass mixin&#8217;s.

## Cross browser Gradient background

So now i create my own Sass mixin to create an cross browser gradient background. And it&#8217;s so easy! Just look at the code, copy/past in your own Sass code and you can use it for free!

### Sass mixin

[code type=&#8221;css&#8221;]

// Sass Mixin 2 color gradient
  
@mixin gradient-bg-2($begin\_color, $end\_color) {
  
background: $begin_color; /\* Old browsers \*/
  
/\* IE9 SVG, needs conditional override of &#8216;filter&#8217; to &#8216;none&#8217; \*/
  
background: -moz-linear-gradient(top, $begin\_color 0%, $end\_color 100%); /\* FF3.6+ \*/
  
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,$begin\_color), color-stop(100%,$end\_color)); /\* Chrome,Safari4+ \*/
  
background: -webkit-linear-gradient(top, $begin\_color 0%,$end\_color 100%); /\* Chrome10+,Safari5.1+ \*/
  
background: -o-linear-gradient(top, $begin\_color 0%,$end\_color 100%); /\* Opera 11.10+ \*/
  
background: -ms-linear-gradient(top, $begin\_color 0%,$end\_color 100%); /\* IE10+ \*/
  
background: linear-gradient(to bottom, $begin\_color 0%,$end\_color 100%); /\* W3C \*/
  
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=&#8217;$begin\_color&#8217;, endColorstr=&#8217;$end\_color&#8217;,GradientType=0 ); /\* IE6-8 \*/
  
}

// Sass Mixin 3 color gradient
  
@mixin gradient-bg-3($begin\_color, $middle\_color, $end_color) {
  
background: $begin_color; /\* Old browsers \*/
  
/\* IE9 SVG, needs conditional override of &#8216;filter&#8217; to &#8216;none&#8217; \*/
  
background: -moz-linear-gradient(top, $begin\_color 0%, $middle\_color 50%, $end_color 100%); /\* FF3.6+ \*/
  
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,$begin\_color), color-stop(50%,$middle\_color), color-stop(100%,$end_color)); /\* Chrome,Safari4+ \*/
  
background: -webkit-linear-gradient(top, $begin\_color 0%,$middle\_color 50%,$end_color 100%); /\* Chrome10+,Safari5.1+ \*/
  
background: -o-linear-gradient(top, $begin\_color 0%,$middle\_color 50%,$end_color 100%); /\* Opera 11.10+ \*/
  
background: -ms-linear-gradient(top, $begin\_color 0%,$middle\_color 50%,$end_color 100%); /\* IE10+ \*/
  
background: linear-gradient(to bottom, $begin\_color 0%,$middle\_color 50%,$end_color 100%); /\* W3C \*/
  
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=&#8217;$begin\_color&#8217;, endColorstr=&#8217;$end\_color&#8217;,GradientType=0 ); /\* IE6-8 \*/
  
}

[/code]

### Result

Click on the HTML, SCSS and Result tab to check the code and result.

<p data-height="268" data-theme-id="725" data-slug-hash="FhfuH" data-user="rsschouwenaar" data-default-tab="result" class='codepen'>
  See the Pen <a href='http://codepen.io/rsschouwenaar/pen/FhfuH'>FhfuH</a> by Raymon Schouwenaar (<a href='http://codepen.io/rsschouwenaar'>@rsschouwenaar</a>) on <a href='http://codepen.io'>CodePen</a>
</p>


  
If you like the code or have something to add on. Write it in the comments!