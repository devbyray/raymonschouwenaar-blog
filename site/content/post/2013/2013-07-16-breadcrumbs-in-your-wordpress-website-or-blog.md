---
title: Breadcrumbs in your WordPress website or blog!
author: Raymon Schouwenaar
type: post
date: 2013-07-16T14:30:52+00:00
excerpt: "Breadcrumbs where used in many website's and blogs, the let the user know where the current page is in the structure of the website. The most Wordpress users install plugin's to get this done. For non-developers i'll understand that very well, the install and activate the plugin and start using them."
url: /breadcrumbs-in-your-wordpress-website-or-blog/
featured_image: /wp-content/uploads/2013/07/breadcrumb.jpg
dsq_thread_id:
  - 1504360016
categories:
  - Snippets
  - Wordpress
tags:
  - Breadcrumb
  - Function
  - Snippet
  - Wordpress

---
Breadcrumbs where used in many website&#8217;s and blogs, the let the user know where the current page is in the structure of the website. The most [WordPress][1] users install plugin&#8217;s to get this done. For non-developers i&#8217;ll understand that very well, the install and activate the plugin and start using them.

But for the developer with there own WordPress website or blog, i&#8217;ll like to share an WordPress [snippet][2] to create an Breadcrumb. You can modify it how you like, it&#8217;s only an base i use!

**Snippet
  
** So copy the code, and paste it in your functions.php. Than place the function the_breadcrumb(); in the loop of your theme.

    <br />function the_breadcrumb() {
    global $post;
    echo '<div id="the_breadcrumb">';
    $page_id = get_the_ID();
    if (!is_home()) {
    echo '<a href="'.get_option('home').'">Home</a> → ';
    if (is_page() || !is_single()) {
    if ( is_page($page_id) || $post->post_parent == $page_id) {
    if ($post->post_parent) {
    echo '<a href="'.get_permalink($post->post_parent).'" title="'.get_the_title($post->post_parent).'">'.get_the_title($post->post_parent).'</a> → ';
    }
    }
    echo the_title();
    }
    }
    echo '</div>';
    }
    
    // Function:
    
    the_breadcrumb();
    
    

If this code is usefull for you, i&#8217;ll like to now where you use it. 🙂 And if you got any questions or comments, place it below in the comment form.

Sharing is Caring!

**Image source:** Check the source on <a href="http://dribbble.com/shots/91283-Checkout-Steps?list=searches&tag=breadcrumb?list=searches&tag=breadcrumb" target="_blank">Dribbble.com</a>. You can even download your PSD there.

 [1]: http://www.raymonschouwenaar.nl/tag/wordpress/
 [2]: http://www.raymonschouwenaar.nl/tag/snippet/