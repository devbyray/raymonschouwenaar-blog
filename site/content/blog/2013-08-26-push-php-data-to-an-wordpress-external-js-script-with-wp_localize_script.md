---
title: Push PHP data to an WordPress external JS script with wp_localize_script
author: Raymon Schouwenaar
type: post
date: 2013-08-26T14:34:26+00:00
excerpt: "Creating an Wordpress website and you want to push the PHP data to the external JS script! But how you gonna do that? Learn it here! It's very simple!"
url: /push-php-data-to-an-wordpress-external-js-script-with-wp_localize_script/
dsq_thread_id:
  - 1649427460
categories:
  - Javascript
  - Webdevelopment
  - Wordpress
  - Wordpress plugins
tags:
  - Javascript
  - jQuery
  - php
  - Wordpress

---
Creating an WordPress website and you want to push the PHP data to the external JS script! But how you gonna do that? Learn it here! It&#8217;s very simple!

## PHP data to the external JS file

There is an simple answer! <a href="http://codex.wordpress.org/Function_Reference/wp_localize_script" target="_blank">Use the wp_localize_script()</a> function from WordPress!

I assume that you&#8217;re familiar with the right way to load the JS or jQuery scripts with <a href="http://codex.wordpress.org/Function_Reference/wp_enqueue_script" target="_blank">wp_enqeue_script()</a> function. Only than you can use wp\_localize\_script().

**The script**
  
This code below is special for building an WordPress Plugin, you can see that i use the plugins\_url() function. For theme&#8217;s you should use get\_template\_directory\_uri() to get the theme url.

[code type=&#8221;php&#8221;]
  
/\* Script functions \*/
  
function wp\_exclusive\_js_scripts() {
  
wp\_enqueue\_script( &#8216;jquery&#8217;, plugins\_url( &#8216;../js/jquery.js&#8217; , \\_\_FILE\_\_ ));
  
wp\_enqueue\_script( &#8216;jquery\_cycle&#8217;, plugins\_url( &#8216;../js/jquery.cycle.js&#8217; , \_\_FILE\_\_ ), array( &#8216;jquery&#8217; ));
  
wp\_enqueue\_script( &#8216;maximage&#8217;, plugins\_url(&#8216;../js/jquery.maximage.js&#8217; , \\_\_FILE\_\_ ) , array( &#8216;jquery&#8217; ));

$exclusive\_slider\_fx = get\_option(&#8216;fx\_slider_type&#8217;);
  
$exclusive\_slider\_speed = get\_option(&#8216;speed\_slider_type&#8217;);
  
$exclusive\_slider\_timeout = get\_option(&#8216;timeout\_slider_type&#8217;);
  
$exclusive\_slider\_pauze = get\_option(&#8216;pauze\_slider_type&#8217;);

wp\_enqueue\_script( &#8216;custom\_maximage\_slider&#8217;, plugins\_url( &#8216;../js/custom\_maximage\_slider.js&#8217; , \\_\_FILE\_\_ ) , array( &#8216;jquery&#8217; ));

wp\_localize\_script( &#8216;custom\_maximage\_slider&#8217;, &#8216;slider_setting&#8217;, array(
  
&#8216;fx&#8217; => $exclusive\_slider\_fx,
  
&#8216;speed&#8217; => $exclusive\_slider\_speed,
  
&#8216;timeout&#8217; => $exclusive\_slider\_timeout,
  
&#8216;pauze&#8217; => $exclusive\_slider\_pauze,
  
)
  
);

}
  
[/code]

If you&#8217;re check the source of the page, you should see this:

[code type=&#8221;html&#8221;]

<script type=&#8217;text/javascript&#8217;>
  
/\* <![CDATA[ \*/
  
var slider_setting = {&#8220;fx&#8221;:&#8221;fade&#8221;,&#8221;speed&#8221;:&#8221;2500&#8243;,&#8221;timeout&#8221;:&#8221;0&#8243;,&#8221;pauze&#8221;:&#8221;1&#8243;};
  
/\* ]]> \*/
  
</script>

[/code]

So you see WordPress has the data of the setting page!

Now you need to add this data to you&#8217;re external file. In my case this is the &#8216;custom\_maximage\_slider.js&#8217; script. There i&#8217;m gonna add some variable&#8217;s. (check below)

[code type=&#8221;javascript&#8221;]

jQuery(document).ready(function ($) {
  
$(&#8216;#maximage&#8217;).maximage({
  
cycleOptions: {
  
fx: slider_setting.fx,
  
speed: slider_setting.speed, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 &#8211; 33)
  
timeout: slider_setting.timeout,
  
prev: &#8216;#arrow_left&#8217;,
  
next: &#8216;#arrow_right&#8217;,
  
pause: slider_setting.pauze,
  
cssBackgroundSize: false, // We don&#8217;t want to use background-size:cover for our custom size
  
before: function(last,current){
  
if(!$.browser.msie){
  
// Start HTML5 video when you arrive
  
if($(current).find(&#8216;video&#8217;).length > 0) $(current).find(&#8216;video&#8217;)[0].play();
  
}
  
},
  
after: function(last,current){
  
if(!$.browser.msie){
  
// Pauses HTML5 video when you leave it
  
if($(last).find(&#8216;video&#8217;).length > 0) $(last).find(&#8216;video&#8217;)[0].pause();
  
}
  
}
  
},
  
onFirstImageLoaded: function(){
  
jQuery(&#8216;#cycle-loader&#8217;).hide();
  
jQuery(&#8216;#maximage&#8217;).fadeIn(&#8216;fast&#8217;);
  
}
  
});

// Helper function to Fill and Center the HTML5 Video
  
jQuery(&#8216;video,object&#8217;).maximage(&#8216;maxcover&#8217;);

// To show it is dynamic html text
  
jQuery(&#8216;.in-slide-content&#8217;).delay(1200).fadeIn();
  
});

[/code]

**Result**

So now you can see that it works!