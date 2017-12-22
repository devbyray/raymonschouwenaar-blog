---
title: Responsive Sass Mixins
author: Raymon Schouwenaar
type: post
date: 2013-09-09T12:02:59+00:00
url: /responsive-sass-mixins/
featured_image: /wp-content/uploads/2013/09/responsive-sass-mixins.jpg
dsq_thread_id:
  - 1739846989
categories:
  - CSS
  - SASS
  - Webdevelopment
tags:
  - CSS
  - CSS3
  - responsive website
  - sass

---
Working with Sass is very easy, and it make&#8217;s your development shorter in time. Also with Responsive Website&#8217;s you can use very easy mixin&#8217;s! So below you can find the Responsive Sass Mixin&#8217;s what i&#8217;m using myself in my development. So Enjoy! Sharing is Caring!

[code type=&#8221;css&#8221;]

/\* Available Variables \*/
  
$mobile-screen: emCalc(481px);
  
$small_2-screen: emCalc(601px);
  
$small-screen: emCalc(775px);
  
$medium_2-screen: emCalc(800px);
  
$medium-screen: emCalc(1025px);
  
$large-screen: emCalc(1366px);

$screen: &#8220;only screen&#8221;;
  
$mobile: &#8220;only screen and (max-width:&#8221;#{$mobile-screen}&#8221;)&#8221;;
  
$small\_2: &#8220;only screen and (max-width:&#8221;#{$small\_2-screen}&#8221;)&#8221;;
  
$small: &#8220;only screen and (max-width:&#8221;#{$small-screen}&#8221;)&#8221;;
  
$medium\_2: &#8220;only screen and (max-width:&#8221;#{$medium\_2-screen}&#8221;)&#8221;;
  
$medium: &#8220;only screen and (max-width:&#8221;#{$medium-screen}&#8221;)&#8221;;
  
$large: &#8220;only screen and (max-width:&#8221;#{$large-screen}&#8221;)&#8221;;
  
$landscape: &#8220;only screen and (orientation: landscape) and (max-width:&#8221;#{$medium-screen}&#8221;)&#8221;;
  
$portrait: &#8220;only screen and (orientation: portrait) and (max-width:&#8221;#{$small-screen}&#8221;)&#8221;;

// /\* We use this media query to add styles to any device that supports media queries \*/
  
// @media #{$screen} { }

// /\* Used to alter styles for screens at least 480px wide. This is where the grid changes. \*/
  
// @media #{$mobile} { }

// /\* Used to alter styles for screens at least 600px wide. This is where the grid changes. \*/
  
// @media #{$small_2} { }

// /\* Used to alter styles for screens at least 768px wide. This is where the grid changes. \*/
  
// @media #{$small} { }

// /\* Used to alter styles for screens at least 1280px wide. \*/
  
// @media #{$medium} { }

// /\* Used to alter styles for screens at least 1440px wide. \*/
  
// @media #{$large} { }

// /\* Apply styles to screens in landscape orientation \*/
  
// @media #{$landscape} { }

// /\* Apply styles to screens in portrait orientation \*/
  
// @media #{$portrait} { }

// /\* We also use Modernizr to add a .touch class to the body when applicable \*/
  
// /\* You can prepend this class to anything and it will style only for touch devices \*/
  
// .touch .your-element {}
  
.hide-tablet {
  
@media #{$small} {
  
display: none;
  
}
  
@media #{$small_2} {
  
display: none;
  
}
  
@media #{$mobile} {
  
display: none;
  
}
  
}
  
.full-landscape, .full-portrait {
  
@media #{$landscape} {
  
width: 100%;
  
}
  
@media #{$portrait} {
  
width: 100%;
  
}
  
@media #{$mobile} {
  
padding: 0;
  
}
  
}
  
.hide-mobile {
  
@media #{$medium} {
  
.ie & {
  
display: none;
  
}
  
}
  
@media #{$medium_2} {
  
display: none;
  
}
  
}
  
.show-mobile {
  
display: none;
  
@media #{$medium_2} {
  
.ie & {
  
display: block;
  
}
  
}
  
@media #{$medium_2} {
  
display: block;
  
}
  
}

[/code]

If you discover any error? Tell me in the comments!