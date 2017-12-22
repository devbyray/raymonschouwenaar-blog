---
title: 'WP DEV: Complex custom unique post numbers meta fields'
author: Raymon Schouwenaar
type: post
date: 2013-10-22T13:04:51+00:00
url: /wp-dev-complex-custom-unique-post-numbers-meta-fields/
featured_image: /wp-content/uploads/2013/10/wordpress.jpg
dsq_thread_id:
  - 1886754338
categories:
  - PHP
  - Webdevelopment
  - Wordpress
  - Wordpress plugins
tags:
  - Custom Post Type
  - plugin
  - Wordpress

---
Maybe you know that i&#8217;m building an nice premium WordPress plugin for creating invoices, and clients can see there invoices all together. But i needed to make an unique custom post numbers in the meta fields. A number that count 1 number higher than the invoice before.

So when i found this <a href="http://wordpress.stackexchange.com/questions/107127/auto-populate-custom-field-with-complex-value-that-increase-by-one" target="_blank">WordPress StackExchange post</a> i thought that&#8217;s some code i need! So with an little customization i could use it. I integrate it in my setting page, and now all the invoices has there own unique number how the user want it!

So if you was searching for something like this? Copy and paste and give me an thanks in the comments 🙂

[code type=&#8221;php&#8221;]

add\_action( &#8216;save\_post&#8217;, &#8216;set\_invoice\_number&#8217;);

function set\_invoice\_number($post_id) {

$slug = &#8216;invoice&#8217;; // slug of your post_type called &#8220;Orders&#8221;

if ( $slug != $\_POST[&#8216;post\_type&#8217;] ) {
  
return;
  
}
  
if ( !current\_user\_can( &#8216;edit\_post&#8217;, $post\_id ) ) {
  
return;
  
}
  
$invoiceCounter = get\_option( &#8216;last\_invoice_count&#8217; ); // example 0051
  
$invoicePrefix = get\_option( &#8216;invoice\_prefix_number&#8217; ); // example 0051

$invoice\_id = get\_post\_meta($post\_id, &#8216;invoice\_order\_number&#8217;, TRUE);
  
if($invoice_id == &#8221;) {
  
$invoiceCounter++; // returns 0052
  
update\_post\_meta($post\_id, &#8216;invoice\_order_number&#8217;, $invoicePrefix.date(&#8216;Y&#8217;).sprintf(&#8216;%1$04d&#8217;, $invoiceCounter));
  
update\_option( &#8216;cih\_last\_invoice\_count&#8217;, $invoiceCounter ); // set the new number of order.
  
}
  
}

// output is for example ABC20130059

[/code]