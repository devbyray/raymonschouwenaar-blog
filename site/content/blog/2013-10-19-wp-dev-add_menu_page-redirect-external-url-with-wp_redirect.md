---
title: 'WP DEV:  add_menu_page redirect external url with wp_redirect'
author: Raymon Schouwenaar
type: post
date: 2013-10-19T09:01:34+00:00
excerpt: Add_menu_page can also redirect to an external url instead of an admin page. Special for an post archive page or plugin support page. Use it for free!
url: /wp-dev-add_menu_page-redirect-external-url-with-wp_redirect/
featured_image: /wp-content/uploads/2013/10/wordpress.jpg
dsq_thread_id:
  - 1874936483
categories:
  - PHP
  - Webdevelopment
  - Wordpress
  - Wordpress plugins
tags:
  - add_menu_page
  - plugin
  - Wordpress
  - wp_redirect

---
Since i&#8217;m busy with the development of an [new WordPress plugin][1], i was searching for a function that could redirect the add\_menu\_page to an external url. I needed this because i wanted to easily redirect an user to an special page.

So after some searching it finaly works, and this is the code i love to share with you! Hope you need this or can use this.

## **add\_menu\_page redirect to external url**

[code type=&#8221;php&#8221;]

add\_action( &#8216;admin\_menu&#8217;, &#8216;register\_menu\_page&#8217; );

function register\_menu\_page(){
  
add\_menu\_page( \_\_( &#8216;Admin page title&#8217;, &#8216;text\_domain&#8217; ), \\_\_( &#8216;Admin page title&#8217;, &#8216;text\_domain&#8217; ), &#8216;manage\_options&#8217;, &#8216;page\_redirect&#8217;, &#8216;redirect\_url&#8217;, 6 );
  
}

function redirect_url() {
  
$redirect\_url = get\_bloginfo(&#8216;url&#8217;).&#8217;/wp-admin/admin.php?page=page_redirect&#8217;;
  
$pageURL = &#8216;http://&#8217;.$\_SERVER[&#8220;SERVER\_NAME&#8221;].$\_SERVER[&#8220;REQUEST\_URI&#8221;];
  
$external\_redirect\_url = get_bloginfo(&#8216;url&#8217;).&#8217;/post-archive&#8217;;

if ($pageURL == $redirect_url) {
  
// header (&#8216;location:&#8217; + $external\_redirect\_url);
  
wp\_redirect( $external\_redirect_url, 302 );
  
}
  
}

add\_action( &#8216;admin\_menu&#8217;, &#8216;redirect_url&#8217; );

[/code]

 [1]: http://www.raymonschouwenaar.nl/announcement-plan-to-build-an-invoice-wordpress-plugin/ "Announcement! Plan to build an Invoice WordPress Plugin"