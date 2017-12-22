---
title: 'Image markup  or srcset alternative solution with CSS for Responsive Image'
author: Raymon Schouwenaar
type: post
date: 2013-06-06T12:49:28+00:00
url: /image-markup-or-srcset-alternative-solution-with-css-for-responsive-image/
featured_image: /wp-content/uploads/2013/06/responsive-image-alternative-825x510.jpg
dsq_thread_id:
  - 1369554455
categories:
  - Snippets
tags:
  - image
  - markup
  - responsive website

---
<img src="https://i2.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2013/06/responsive-image-alternative.jpg?resize=700%2C445" alt="responsive-image-alternative" width="700" height="445" class="alignnone size-full wp-image-1023" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2013/06/responsive-image-alternative.jpg?w=1127&ssl=1 1127w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2013/06/responsive-image-alternative.jpg?resize=300%2C191&ssl=1 300w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2013/06/responsive-image-alternative.jpg?resize=1024%2C651&ssl=1 1024w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

After reading a nice article of Smashing Magazine: &#8220;<a href="http://mobile.smashingmagazine.com/2013/05/29/the-state-of-responsive-web-design/" target="_blank">The Sate of Responsive Web Design</a>&#8221; i get an idea as alternative for the <picture> or srcset to load bigger or smaller image depend on the resolution or pixel-depth.

Because it&#8217;s an idea, i wanna know what developers think about my solution, so i look forward to your comments below the page.

Check it on an iPhone or iPad, so you can see that it works!

**HTML**

{{< code type="html" >}}&lt;div id="container"&gt;
    &lt;div class="image" id="post-id_412"&gt;
    &lt;/div&gt;
&lt;/div&gt;</code><a href="http://codepen.io/rsschouwenaar/pen/eofvu">Check out this Pen!</a>{{< /code >}}



&nbsp;

**CSS**

{{< code type="css" >}}.image {
    width: 500px; height: 320px;
    position: relative;
  background-size: cover;
}
#post-id_412 {
    background: url("http://lorempixel.com/500/320/sports");
}
.image img {
  max-width: 100%;
}
@media (-webkit-min-device-pixel-ratio: 2) {
   #post-id_412 {
      background: url("http://lorempixel.com/1000/640/nightlife");
    }
}</code><a href="http://codepen.io/rsschouwenaar/pen/eofvu">Check out this Pen!</a>{{< /code >}}



&nbsp;

**Result**

<pre class="codepen" data-height="300" data-type="result" data-href="eofvu" data-user="rsschouwenaar" data-safe="true"><code></code><a href="http://codepen.io/rsschouwenaar/pen/eofvu">Check out this Pen!</a></pre>



Image source: <a href="http://lorempixel.com/" target="_blank">Lorumpixel</a>