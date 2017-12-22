---
title: Bestsellers Woocommerce product loop
author: Raymon Schouwenaar
type: post
date: 2013-12-17T17:32:19+00:00
url: /bestsellers-woocommerce-product-loop/
featured_image: /wp-content/uploads/2013/12/woocommerce.png
dsq_thread_id:
  - 2056697014
categories:
  - PHP
  - Woocommerce
  - Wordpress
tags:
  - Loop
  - Woocommerce
  - Wordpress

---
Wondering how you can make an loop with only the bestsellers of your products for you Woocommerce website?

It&#8217;s pretty simple! Just make a normal loop and make use of the pre-defined meta-key &#8220;total_sales&#8221; an order by the value.

The code

{{< code type="php" >}}
  &lt;?php
  $args = array(
    'post_type' =&gt; 'product',
    'posts_per_page' =&gt; 4,
    'meta_key' =&gt; 'total_sales',
    'orderby' =&gt; 'meta_value_num',
  );
  $loop = new WP_Query( $args );
  if ( $loop-&gt;have_posts() ) {
    while ( $loop-&gt;have_posts() ) : $loop-&gt;the_post();
    woocommerce_get_template_part( 'content', 'product' );
    endwhile;
  } else {
    echo __( 'No products found' );
  }
  wp_reset_postdata();
  ?&gt;
{{< /code >}}

If you where thankfull to use the code? Please write a comment! ( i like that 🙂 )