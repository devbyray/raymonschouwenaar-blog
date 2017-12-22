---
title: 'WordPress snippet: Sort Custom Post Type events by Future Date'
author: Raymon Schouwenaar
type: post
date: 2013-04-16T11:34:12+00:00
excerpt: Place this snippet in your loop and you can sort your Custom Post type events by future date from your custom field.
url: /sort-custom-post-type-events-by-future-date/
categories:
  - Snippets
tags:
  - Custom Post Type
  - Event
  - Snippet
  - Sort
  - Wordpress

---
Place this snippet in your loop and you can sort your Custom Post type events by future date from your custom field.

[code type=php]

global $paged;

$current\_time = current\_time(&#8216;timestamp&#8217;);

query_posts(array(
  
&#8216;post_type&#8217; => &#8216;agenda&#8217;, // can be custom post type
  
&#8216;paged&#8217; => $paged, // set the current page
  
&#8216;total&#8217; => $wp\_query->max\_num_pages,
  
&#8216;meta_query&#8217; => array(
  
array(
  
&#8216;key&#8217; => &#8216;easy\_fields\_begindate&#8217;,
  
&#8216;value&#8217; => $current_time,
  
&#8216;compare&#8217; => &#8216;>=&#8217;
  
)
  
),
  
&#8216;meta\_key&#8217;=> &#8216;easy\_fields_begindate&#8217;,
  
&#8216;orderby&#8217; => &#8216;easy\_fields\_begindate&#8217;,
  
&#8216;order&#8217; => &#8216;ASC&#8217;
  
));

[/code]