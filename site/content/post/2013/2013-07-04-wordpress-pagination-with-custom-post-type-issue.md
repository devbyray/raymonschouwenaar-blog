---
title: WordPress Pagination with Custom Post Type issue
author: Raymon Schouwenaar
type: post
date: 2013-07-04T11:38:11+00:00
excerpt: If you searching for an possible solution for your problem with Custom post types and Pagination. Maybe this snippet could help you.
url: /wordpress-pagination-with-custom-post-type-issue/
dsq_thread_id:
  - 1466160693
categories:
  - Snippets
  - Webdevelopment
  - Wordpress
tags:
  - Custom Post Type
  - Issue
  - pagination
  - php
  - webdevelopment
  - Wordpress

---
If you searching for an possible solution for your problem with Custom post types and Pagination. Maybe this snippet could help you.

I&#8217;ll find out the the WP\_Query() function does not work if you want to make an archive page with multiple custom post type&#8217;s. After searching for some ours, i find the solution. You should use the function query\_posts() to get pagination.

**Source
  
** Copy the function in your functions.php and customise the code of the query in your page template you wanna use.

[code type= php]

<?php

/\* PAGINATION functions \*/
  
function base_pagination() {
  
global $wp_query;

$big = 999999999; // This needs to be an unlikely integer

// For more options and info view the docs for paginate_links()
  
// http://codex.wordpress.org/Function\_Reference/paginate\_links
  
$paginate\_links = paginate\_links( array(

<p style="padding-left: 30px;">
  &#8216;base&#8217; => str_replace( $big, &#8216;%#%&#8217;, get_pagenum_link($big) ),<br /> &#8216;current&#8217; => max( 1, get_query_var(&#8216;paged&#8217;) ),<br /> &#8216;total&#8217; => $wp_query->max_num_pages,<br /> &#8216;mid_size&#8217; => 5,<br /> &#8216;show_all&#8217; => true,<br /> &#8216;end_size&#8217; => 1,<br /> &#8216;prev_next&#8217; => true,<br /> &#8216;prev_text&#8217; => &#8216;<&#8217;,<br /> &#8216;next_text&#8217; => &#8216;>&#8217;,<br /> &#8216;type&#8217; => &#8216;plain&#8217;
</p>

) );

// Display the pagination if more than one page is found
  
if ( $paginate_links ) {
  
echo &#8216;<section><div id=&#8221;paging&#8221;>&#8217;;
  
echo $paginate_links;
  
echo &#8216;</div></section><!&#8211;// end .pagination &#8211;>&#8217;;

}
  
}

/\* PAGINATION for you page template\*/
  
$paged = (get\_query\_var(&#8216;paged&#8217;)) ? get\_query\_var(&#8216;paged&#8217;) : 1;

$args = array(
  
&#8216;post_type&#8217; => array(
  
&#8216;product&#8217;, &#8216;dienst&#8217;,
  
),
  
&#8216;posts\_per\_page&#8217; => 12,
  
&#8216;paged&#8217; => (get\_query\_var(&#8216;paged&#8217;)) ? get\_query\_var(&#8216;paged&#8217;) : 1, // set the current page
  
);

query_posts($args);
  
if (have_posts()) {
  
while (have_posts()) {
  
the_post(); ?>

<a href=&#8221;<?php the\_permalink(); ?>&#8221; title=&#8221;Read more about: <?php the\_title(); ?>&#8221;>
  
<div class=&#8221;news_item&#8221;>
  
<div class=&#8221;news_photo&#8221;>
  
<?php if ( has\_post\_thumbnail() ) {
  
the\_post\_thumbnail(&#8216;news\_archive\_format&#8217;);
  
}?>
  
</div>
  
<div class=&#8221;news_content&#8221;>
  
<span class=&#8221;news\_title&#8221;><?php limit\_titel(45); ?></span>
  
<?php the_excerpt(); ?>
  
</div>
  
<div class=&#8221;news\_read\_more&#8221;></div>
  
</div>
  
</a>
  
<?php } // end of the loop. ?>
  
<?php } // end of the loop. ?>
  
<?php base_pagination(); ?>

[/code]

If this solution was usefull, i&#8217;ll like to know it in the comments!
  
Thanks for reading!

Sharing is Caring!