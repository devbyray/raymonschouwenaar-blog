---
title: Custom Woocommerce email notification for dealer or supplier
author: Raymon Schouwenaar
type: post
date: 2013-11-11T08:56:18+00:00
url: /custom-woocommerce-email-notification-for-dealer-or-supplier/
featured_image: /wp-content/uploads/2013/11/woocommerce.jpg
dsq_thread_id:
  - 1955542252
categories:
  - News of the Web
  - PHP
  - Webdevelopment
  - Woocommerce
  - Wordpress
tags:
  - Email
  - Notification
  - Woocommerce

---
Since a couple of days i was searching of a solution to make my own custom email notification for Woocommerce. And especially to send an dealer or supplier an email that he have got an order to handle.

But Woocommerce has a documentation. But custom stuff like this you wouldn&#8217;t find there. So i started myself! And came with an solution.

For my locations i use the WordPress plugin SimpleMap, it&#8217;s a nice plugin to create dealer location libary where visitors can search if there near by an dealer.

The code below is all in my functions.php, so if you&#8217;re familiar with PHP than you can make some custom stuff out of my code.

## Get an custom checkout field with the locations

The function &#8220;dealer\_checkout\_field()&#8221; adds an custom dealer checkout field. It&#8217;s an selectbox. It&#8217;s added like Woocommerce told in there documentation to do it. It&#8217;s very simple!

The &#8220;get\_locations\_list()&#8221; function gets an array of all published locations (from the SimpleMaps plugin). And outputs the email of the location as an value and the location name as the name that show up in the select.

[code type=&#8221;php&#8221;]

/**
  
* Add the field to the checkout
  
**/
  
add\_action(&#8216;woocommerce\_before\_order\_notes&#8217;, &#8216;dealer\_checkout\_field&#8217;);

function dealer\_checkout\_field( $checkout ) {

echo &#8216;<div id=&#8221;my\_custom\_checkout\_field&#8221;><h2>&#8217;.\__(&#8216;Dealer&#8217;).'</h2>&#8217;;

woocommerce\_form\_field( &#8216;order_dealer&#8217;, array(
  
&#8216;type&#8217; => &#8216;select&#8217;,
  
&#8216;class&#8217; => array(&#8216;my-field-class form-row-wide&#8217;),
  
&#8216;label&#8217; => __(&#8216;Kies uw dealer&#8217;),
  
&#8216;placeholder&#8217; => __(&#8216;Select&#8217;),
  
&#8216;options&#8217; => get\_locations\_list()
  
), $checkout->get\_value( &#8216;order\_dealer&#8217; ));

echo &#8216;</div>&#8217;;

}

// Get an list of all locations for the email
  
function get\_locations\_list() {
  
$args = array(
  
&#8216;orderby&#8217; => &#8216;title&#8217;,
  
&#8216;order&#8217; => &#8216;DESC&#8217;,
  
&#8216;post_type&#8217; => &#8216;sm-location&#8217;,
  
&#8216;post_status&#8217; => &#8216;publish&#8217;,
  
);
  
$locations\_array = get\_posts( $args );
  
$posts = array();
  
foreach ($locations_array as $post) {
  
$posts[get\_post\_meta($post->ID, &#8216;location\_email&#8217;, true)] = $post->post\_title;
  
}
  
$posts[] = &#8216;Select an dealer&#8217;;
  
return $posts;
  
}

[/code]

## Save the custom checkout field

The functions below will post and save the custom field so we can use it in the email notification.

[code type=&#8221;php&#8221;]

/**
  
* Process the checkout
  
**/
  
add\_action(&#8216;woocommerce\_checkout\_process&#8217;, &#8216;my\_custom\_checkout\_field_process&#8217;);

function my\_custom\_checkout\_field\_process() {
  
global $woocommerce;

// Check if set, if its not set add an error.
  
if (!$\_POST[&#8216;order\_dealer&#8217;])
  
$woocommerce->add\_error( \__(&#8216;Please enter something into this new shiny field.&#8217;) );
  
}

/**
  
* Update the order meta with field value
  
**/
  
add\_action(&#8216;woocommerce\_checkout\_update\_order\_meta&#8217;, &#8216;my\_custom\_checkout\_field\_update\_order_meta&#8217;);

function my\_custom\_checkout\_field\_update\_order\_meta( $order_id ) {
  
if ($\_POST[&#8216;order\_dealer&#8217;]) update\_post\_meta( $order\_id, &#8216;Dealer&#8217;, esc\_attr($\_POST[&#8216;order\_dealer&#8217;]));
  
}

/**
  
* Display field value on the order edition page
  
**/
  
add\_action( &#8216;woocommerce\_admin\_order\_data\_after\_billing\_address&#8217;, &#8216;my\_custom\_checkout\_field\_display\_admin\_order\_meta&#8217;, 10, 1 );

function my\_custom\_checkout\_field\_display\_admin\_order_meta($order){
  
echo &#8216;<p><strong>&#8217;._\_(&#8216;Dealer&#8217;).&#8217;:</strong> &#8216; . $order->order\_custom_fields\[&#8216;Dealer&#8217;\]\[0\] . &#8216;</p>&#8217;;
  
}

[/code]

## Send that notification to the dealer

With the &#8220;woocommerce\_checkout\_order_processed&#8221; action we trigger the function that sends the email. The action will be triggerd when there is an new order.

If you don&#8217;t understand the way WordPress handle there email function? Read the <a href="http://wp.smashingmagazine.com/2011/10/25/create-perfect-emails-wordpress-website/" target="_blank">SmashingMagazine article about the wp_mail function</a>.

[code type=&#8221;php&#8221;]

// Triggers for this email
  
add\_action(&#8220;woocommerce\_checkout\_order\_processed&#8221;, &#8220;my\_awesome\_publication_notification&#8221;);

function my\_awesome\_publication\_notification($order\_id, $checkout) {
  
global $woocommerce;

$checkout = $woocommerce->checkout();
  
$order = new WC\_Order( $order\_id );

$order = new WC\_Order( $order\_id );
  
$checkout = $woocommerce->checkout();

$dealer\_email = $checkout->get\_value( &#8216;order_dealer&#8217; );

$author\_email = $dealer\_email;
  
if($author_email == &#8221;) {
  
$author_email = &#8216;info@domain.nl&#8217;;
  
$client\_message = \__(&#8216;Dealer is not chosen. Contact client for dealer.&#8217;,&#8217;domain&#8217;);
  
}

$site\_title = \__(&#8216;Site name&#8217;,&#8217;bewe-theme&#8217;);

$email\_subject = \_\_(&#8216;New order from: &#8216;.$site\_title.&#8221;, &#8216;domain&#8217;);

$headers = &#8216;From:&#8217;.$site_title.&#8217; <no-reply@domein.nl>&#8217; . &#8220;rn&#8221;;

ob_start();

include(&#8220;email_header.php&#8221;);

?>

<?php do\_action( &#8216;woocommerce\_email\_header&#8217;, $email\_heading ); ?>

<p style=&#8221;color: #333333;&#8221;><?php printf( _\_( &#8216;You have received an order from %s. Their order is as follows:&#8217;, &#8216;woocommerce&#8217; ), $order->billing\_first\_name . &#8216; &#8216; . $order->billing\_last_name ); ?></p>
  
<?php echo $client_message; ?>

<?php do\_action( &#8216;woocommerce\_email\_before\_order_table&#8217;, $order, true ); ?>

<h2 style=&#8221;color: #333333;&#8221;><?php printf( _\_( &#8216;Order: %s&#8217;, &#8216;woocommerce&#8217;), $order->get\_order\_number() ); ?> (<?php printf( &#8216;<time datetime=&#8221;%s&#8221;>%s</time>&#8217;, date\_i18n( &#8216;c&#8217;, strtotime( $order->order\_date ) ), date\_i18n( woocommerce\_date\_format(), strtotime( $order->order_date ) ) ); ?>)</h2>

<table cellspacing=&#8221;0&#8243; cellpadding=&#8221;6&#8243; style=&#8221;width: 100%; border: 1px solid #eee;&#8221; border=&#8221;1&#8243; bordercolor=&#8221;#eee&#8221;>
  
<thead>
  
<tr>
  
<th scope=&#8221;col&#8221; style=&#8221;text-align:left; border: 1px solid #eee;color: #333333;&#8221;><?php _e( &#8216;Product&#8217;, &#8216;woocommerce&#8217; ); ?></th>
  
<th scope=&#8221;col&#8221; style=&#8221;text-align:left; border: 1px solid #eee;color: #333333;&#8221;><?php _e( &#8216;Quantity&#8217;, &#8216;woocommerce&#8217; ); ?></th>
  
<th scope=&#8221;col&#8221; style=&#8221;text-align:left; border: 1px solid #eee;color: #333333;&#8221;><?php _e( &#8216;Price&#8217;, &#8216;woocommerce&#8217; ); ?></th>
  
</tr>
  
</thead>
  
<tbody>
  
<?php echo $order->email\_order\_items_table( false, true ); ?>
  
</tbody>
  
<tfoot>
  
<?php
  
if ( $totals = $order->get\_order\_item_totals() ) {
  
$i = 0;
  
foreach ( $totals as $total ) {
  
$i++;
  
?><tr>
  
<th scope=&#8221;row&#8221; colspan=&#8221;2&#8243; style=&#8221;color: #333333;text-align:left; border: 1px solid #eee; <?php if ( $i == 1 ) echo &#8216;border-top-width: 4px;&#8217;; ?>&#8221;><?php echo $total[&#8216;label&#8217;]; ?></th>
  
<td style=&#8221;text-align:left; color: #333333;border: 1px solid #eee; <?php if ( $i == 1 ) echo &#8216;border-top-width: 4px;&#8217;; ?>&#8221;><?php echo $total[&#8216;value&#8217;]; ?></td>
  
</tr><?php
  
}
  
}
  
?>
  
</tfoot>
  
</table>

<?php do\_action(&#8216;woocommerce\_email\_after\_order_table&#8217;, $order, true); ?>

<?php do\_action( &#8216;woocommerce\_email\_order\_meta&#8217;, $order, true ); ?>

<h2 style=&#8221;color: #333333;&#8221;><?php _e( &#8216;Customer details&#8217;, &#8216;woocommerce&#8217; ); ?></h2>

<?php if ( $order->billing_email ) : ?>
  
<p style=&#8221;color: #333333;&#8221;><strong style=&#8221;color: #333333;&#8221;><?php \_e( &#8216;Email:&#8217;, &#8216;woocommerce&#8217; ); ?></strong> <?php echo $order->billing\_email; ?></p>
  
<?php endif; ?>
  
<?php if ( $order->billing_phone ) : ?>
  
<p style=&#8221;color: #333333;&#8221;><strong style=&#8221;color: #333333;&#8221;><?php \_e( &#8216;Tel:&#8217;, &#8216;woocommerce&#8217; ); ?></strong> <?php echo $order->billing\_phone; ?></p>
  
<?php endif; ?>

<?php woocommerce\_get\_template( &#8217;emails/email-addresses.php&#8217;, array( &#8216;order&#8217; => $order ) ); ?>

<?php do\_action( &#8216;woocommerce\_email_footer&#8217; ); ?>

<?php

include(&#8220;email_footer.php&#8221;);

$message = ob\_get\_contents();

ob\_end\_clean();

// wp\_mail($author\_email, $email_subject, $message);
  
wp\_mail($author\_email, $email_subject, $message, $headers);

}

add\_filter(&#8216;wp\_mail\_content\_type&#8217;,&#8217;set\_content\_type&#8217;);

function set\_content\_type($content_type){
  
return &#8216;text/html&#8217;;
  
}

[/code]

## Header & Footer include code

**email_header.php**

[code type=&#8221;php&#8221;]

<html style=&#8221;background:#444&#8243;>
  
<head>

<title><?php echo $email_subject ?></title>

</head>
  
<body>
  
<div id=&#8221;email_container&#8221;>
  
<div style=&#8221;width:570px; padding:0 0 0 20px; margin:50px auto 12px auto&#8221; id=&#8221;email_header&#8221;>
  
<span style=&#8221;background:#ad0e24; color:#fff; padding:12px;font-family:trebuchet ms; letter-spacing:1px;
  
-moz-border-radius-topleft:5px; -webkit-border-top-left-radius:5px;
  
border-top-left-radius:5px;moz-border-radius-topright:5px; -webkit-border-top-right-radius:5px;
  
border-top-right-radius:5px;&#8221;>
  
<?php echo $email_subject ?>
  
</div>
  
</div>

<div style=&#8221;width:550px; padding:0 20px 20px 20px; background:#fff; margin:0 auto; border:2px #950c1f solid;
  
moz-border-radius:5px; -webkit-border-radus:5px; border-radius:5px; color:#333333;line-height:1.5em; &#8221; id=&#8221;email_content&#8221;>

<h1 style=&#8221;padding:5px 0 0 0; font-family:georgia;font-weight:500;font-size:24px;color:#950c1f;padding-bottom:10px;border-bottom:1px solid #950c1f&#8221;>
  
<?php echo $email_subject ?>
  
</h1>

[/code]

**email_footer.php**

[code type=&#8221;php&#8221;]

<p style=&#8221;color: #333333;&#8221;>
  
Warm Regards,<br>
  
<?php echo $site_title; ?>
  
</p>

<div style=&#8221;text-align:center; border-top:1px solid #eee;padding:5px 0 0 0;&#8221; id=&#8221;email_footer&#8221;>
  
<small style=&#8221;font-size:11px; color:#999; line-height:14px;&#8221;>
  
You have received this email because you are a member of <?php echo $site_title; ?>.
  
If you would like to stop receiving emails from us, feel free to
  
unregister from our mailing list
  
</small>
  
</div>

</div>
  
</div>
  
</body>
  
</html>

[/code]

I hope this code and blog are usefull for you! If you like it, share it 🙂 Thanks!