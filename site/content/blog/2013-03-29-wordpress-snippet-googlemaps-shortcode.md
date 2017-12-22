---
title: 'WordPress snippet: GoogleMaps shortcode'
author: Raymon Schouwenaar
type: post
date: 2013-03-29T13:34:05+00:00
excerpt: Learn how to embed an Googlemaps map in Wordpress with your own shortcode!
url: /wordpress-snippet-googlemaps-shortcode/
categories:
  - Snippets
tags:
  - Google
  - Google Maps
  - shortcode
  - Snippet
  - Wordpress

---
Place this code in your functions.php

[code type=php]

function wmh_googleMaps($atts, $content = null) {
  
extract(shortcode_atts(array(
  
&#8220;width&#8221; => &#8216;100%&#8217;,
  
&#8220;height&#8221; => &#8216;300&#8217;,
  
&#8220;src&#8221; => &#8221;
  
), $atts));
  
return &#8216;<iframe width=&#8221;&#8216;.$width.'&#8221; height=&#8221;&#8216;.$height.'&#8221; frameborder=&#8221;0&#8243; scrolling=&#8221;no&#8221; marginheight=&#8221;0&#8243; marginwidth=&#8221;0&#8243; src=&#8221;&#8216;.$src.&#8217;&output=embed&#8221;></iframe>&#8217;;
  
}
  
add\_shortcode(&#8220;googlemap&#8221;, &#8220;wmh\_googleMaps&#8221;);

[/code]

In your content you can use this shortcode

[code type=php]
  
[googlemap src=&#8221;https://maps.google.nl/?ll=52.212992,5.27937&spn=4.611501,13.392334&t=h&z=7&#8243;]

[/code]