---
title: Woothemes Flexslider RTL (right-to-left) support
author: Raymon Schouwenaar
type: post
date: 2015-09-16T09:19:19+00:00
excerpt: How to support RTL (right-to-left) in the Woothemes Flexslider of Woocommerce ? Pretty easy to fix with CSS! Check it out here!
url: /woothemes-flexslider-rtl-right-to-left-support/
featured_image: /wp-content/uploads/2015/09/woocommerce-flexslider-support-rtl-right-to-left-css-825x450.jpg
dsq_thread_id:
  - 4134620829
categories:
  - CSS
  - Frontend Development
tags:
  - CSS
  - Flexslider
  - right-to-left
  - RTL
  - Woocommerce

---
RTL, no it is not the dutch television channel! RTL stands for right-to-left, websites with Arabic visitors want to support their natural way of reading online.  I&#8217;m used to LTR (left-to-right), so I never thought about supporting RTL.

But now I needed to build a page that supports RTL. That was interesting to investigate. The website that gave me a very quick help was the all time favorite &#8220;CSS Tricks&#8221;, the have a article about <a href="https://css-tricks.com/almanac/properties/d/direction/" target="_blank">RTL / the CSS direction property</a>.

But in the website I was working on, the used the <a href="https://github.com/woothemes/FlexSlider" target="_blank">Woothemes Flexslider</a>. But that didn&#8217;t get well in the first time. The slides where not showing anymore, because of the <body dir=&#8221;rtl&#8221;> tag.

But I found the solution to fix that! You just need to set the flexslider element back to direction: ltr. And that it works. So hopefully this will also help you to make the slider work again.

## CSS example:

{{< code type="javascript" >}}
  body[dir="rtl"] .flexslider {
    direction: ltr;
  }
{{< /code >}}

&nbsp;