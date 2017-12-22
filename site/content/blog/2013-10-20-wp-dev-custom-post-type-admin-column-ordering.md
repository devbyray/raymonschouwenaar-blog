---
title: 'WP DEV: Custom post type admin column ordering'
author: Raymon Schouwenaar
type: post
date: 2013-10-20T11:46:28+00:00
url: /wp-dev-custom-post-type-admin-column-ordering/
featured_image: /wp-content/uploads/2013/10/wp-post-column-order.jpg
dsq_thread_id:
  - 1878720299
categories:
  - PHP
  - Wordpress
tags:
  - Admin
  - Custom Post Type
  - Wordpress

---
Maybe you&#8217;re developing an WordPress plugin or theme and you need to change the ordering of the admin columns of you custom post type. I Thought it was very difficult, but actually it isn&#8217;t. So that&#8217;s why i wanna share with you the simple code snippet!

**Order the admin columns of your custom post type**

[code type=&#8221;php&#8221;]

// Reorder your post type columns
  
add\_filter( &#8216;manage\_{custom-post-type}\_posts\_columns&#8217;, &#8216;modify\_post\_table&#8217; );

function modify\_post\_table( $column ) {
  
$new_column = array();
  
$new\_column[&#8216;date&#8217;] = \__(&#8216;Published date&#8217;, &#8216;translate-url&#8217;);
  
$new\_column[&#8216;title&#8217;] = \__(&#8216;Post title&#8217;, &#8216;translate-url&#8217;);

return $new_column;
  
}

[/code]