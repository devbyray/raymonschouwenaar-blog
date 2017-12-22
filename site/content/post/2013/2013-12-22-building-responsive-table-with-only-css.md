---
title: Building Responsive Table with only CSS
author: Raymon Schouwenaar
type: post
date: 2013-12-22T13:49:15+00:00
url: /building-responsive-table-with-only-css/
featured_image: /wp-content/uploads/2013/12/responsive-table-css-woocommerce-wordpress.gif
dsq_thread_id:
  - 2066710934
categories:
  - CSS
  - Snippets
  - Webdevelopment
  - Woocommerce
  - Wordpress
  - Wordpress plugins
tags:
  - responsive website
  - table

---
Are you working a lot with Responsive websites? And hate those table&#8217;s in form example Woocommerce? Try this snippet to make your table Responsive with only CSS!

## WordPress Responsive Body classes

For my Responsive WordPress website&#8217;s i use also an (half) self developed WordPress plugin named &#8220;<a title="WP Mobile Detect" href="https://github.com/raymonschouwenaar/wp-detect-mobile/" target="_blank">WP Mobile Detect</a>&#8221; to check if the website is loaded on an computer, smartphone or tablet. And if it is an tablet to check what kind of OS it has. It checks a lot of different OS.

This plugin i use to get an more specific style on smartphone&#8217;s and tablet&#8217;s, it&#8217;s very useful! For those developers who want to add some features to my plugin, i like to know so we can developer the plugin further.

## Responsive Table with only CSS

To make you&#8217;re table responsive you need this small snippet!

**Snippet**

[code type=&#8221;css&#8221;]

table {
  
-webkit-overflow-scrolling: touch;
  
overflow-x: auto;
  
display: block;
  
}

[/code]

Or if you want to set it in an Mediaquerie

[code type=&#8221;css&#8221;]

@media only screen and (max-width:1024px&#8221;) {
  
table {
  
-webkit-overflow-scrolling: touch;
  
overflow-x: auto;
  
display: block;
  
}
  
}

[/code]

Or if you want to use it with the WP Mobile Detect plugin? Use this one!

[code type=&#8221;css&#8221;]

body.dt-is-phone table,
  
body.dt-is-tablet-device table {
  
-webkit-overflow-scrolling: touch;
  
overflow-x: auto;
  
display: block;
  
}

[/code]

If you have any questions or comments? Just add them below!

Sharing is caring! 🙂