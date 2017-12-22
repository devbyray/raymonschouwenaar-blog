---
title: Create crossbrowser CSS prefixes with an Sass Mixin
author: Raymon Schouwenaar
type: post
date: 2013-10-07T10:13:55+00:00
url: /create-crossbrowser-css-prefixes-with-an-sass-mixin/
featured_image: /wp-content/uploads/2013/10/sass-blog.jpg
dsq_thread_id:
  - 1832476636
categories:
  - CSS
  - SASS
  - Snippets
  - Webdevelopment
tags:
  - crossbrowser
  - CSS
  - CSS3
  - mixin
  - sass

---
Are you searching for an Sass Mixin that generate all the crossbrowser prefixes for CSS3? Than you definitely need this Sass Mixin. I use it myself in all my projects. It is so easy to use, let me explain it to you guys!

**Sass Mixin**
  
[code type=&#8221;css&#8221;]

@mixin css3($property, $value) {
  
@each $prefix in -webkit-, -moz-, -ms-, -o-, &#8221; {
  
#{$prefix}#{$property}: $value;
  
}
  
}

[/code]

**How to use!**
  
[code type=&#8221;css&#8221;]

@include css3(box-shadow, 0 0 8px $grey);
  
@include css3(border-radius, 5px);
  
@include css3(border-radius, 5px 8px 5px 8px);
  
@include css3(transition, 0.8s ease-in-out);
  
@include css3(opacity, 0.7);

[/code]

**Result**
  
[code type=&#8221;css&#8221;]

-webkit-transition: 0.8s ease-in-out;
  
-moz-transition: 0.8s ease-in-out;
  
-ms-transition: 0.8s ease-in-out;
  
-o-transition: 0.8s ease-in-out;
  
transition: 0.8s ease-in-out;

[/code]

**Ideas
  
** Maybe you have other ideas how you could use this mixin? If you wanna share, add it in the comments! I love to hear!

&nbsp;