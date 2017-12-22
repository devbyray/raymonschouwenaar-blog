---
title: 'WordPress snippet: Make a button shortcode'
author: Raymon Schouwenaar
type: post
date: 2013-03-29T13:20:39+00:00
excerpt: Learn how to make an Wordpress button with your own shortcode.
url: /wordpress-snippet-make-a-button-shortcode/
categories:
  - Snippets
tags:
  - button
  - shortcode
  - Wordpress

---
Place this code in your functions.php

[code type=php]

//Button Shortcode
  
function my\_shortcode\_button($atts, $content = null) {
  
extract(shortcode_atts(array(
  
&#8220;href&#8221; => &#8216;#&#8217;,
  
&#8216;color&#8217; => &#8221;,
  
&#8216;target&#8217; => &#8221;
  
), $atts));

$target= ($target== &#8216;new&#8217;) ? &#8216; target=&#8221;_blank&#8221;&#8216; : &#8221;;
  
$color= ($color) ? &#8216; &#8216;.$color: &#8221;;

return &#8216;<p><a href=&#8221;&#8216;.$href.'&#8221; class=&#8221;button &#8216;.$color.'&#8221; target=&#8221;&#8216;.$target.'&#8221;>&#8217;.$content.'</a></p>&#8217;;
  
}
  
add\_shortcode(&#8220;button&#8221;, &#8220;my\_shortcode_button&#8221;);

[/code]

In your content you can use this shortcode

[code type=php]

[button href=&#8221;http://www.google.com&#8221; target=&#8221;new&#8221; color=&#8221;orange&#8221;]This is the link content[/button]

[/code]