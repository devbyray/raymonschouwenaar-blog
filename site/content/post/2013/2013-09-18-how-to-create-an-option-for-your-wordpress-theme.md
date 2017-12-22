---
title: How to create an option for your WordPress Theme
author: Raymon Schouwenaar
type: post
date: 2013-09-18T14:32:45+00:00
url: /how-to-create-an-option-for-your-wordpress-theme/
dsq_thread_id:
  - 1774115640
categories:
  - Snippets
  - Webdevelopment
  - Wordpress
  - Wordpress plugins
tags:
  - Development
  - Options
  - theme
  - Wordpress

---
For one of my client´s i´m building an custom WordPress Theme. And in my development process i´m an proponent to create the admin as flexible as possible for the client. So i needed an options so the client could change the zoom level of an Google Maps map in the footer.

For all the options in an WordPress Theme i use the [Options Framework][1]. It´s very flexibel and easy to use in your WordPress themes. If you´re interested in the Options Framework, you could see <a href="http://wptheming.com/options-framework-plugin/" target="_blank">there website</a> or <a href="https://github.com/devinsays/options-framework-plugin" target="_blank">GitHub page</a> and learn to use it!

For the option of selecting the Google Maps zoom level i used this code.

[code type=&#8221;php&#8221;]

$gmaps\_zoom\_range = range(1,20);

$options[] = array(
  
&#8216;name&#8217; => _\_(&#8216;Google Maps Zoom&#8217;, &#8216;options\_check&#8217;),
  
&#8216;desc&#8217; => _\_(&#8216;Select the zoom level.&#8217;, &#8216;options\_check&#8217;),
  
&#8216;id&#8217; => &#8216;gmaps\_zoom\_level&#8217;,
  
&#8216;std&#8217; => 8,
  
&#8216;type&#8217; => &#8216;select&#8217;,
  
&#8216;class&#8217; => &#8216;mini&#8217;, //mini, tiny, small
  
&#8216;options&#8217; => $gmaps\_zoom\_range);

// This code i use to output the data of the option
  
echo of\_get\_option(&#8216;gmaps\_loc\_center&#8217;);

[/code]

It is also posible to include the Options Framework in you&#8217;re WordPress Theme, without any external plugin installation. <a href="http://www.freebiewebresources.com/2012/12/how-include-options-framework-wordpress-theme.html" target="_blank">Read the tutorial here!</a>

 [1]: http://wordpress.org/plugins/options-framework/ "Wordpress Options Framework"