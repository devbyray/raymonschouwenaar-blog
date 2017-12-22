---
title: Use CSS to scale in Aspect Ratio in your Responsive Webdesign
author: Raymon Schouwenaar
type: post
date: 2013-06-04T15:00:40+00:00
url: /use-css-to-scale-in-aspect-ratio-in-your-responsive-webdesign/
featured_image: /wp-content/uploads/2013/06/scale-ratio-css.jpg
dsq_thread_id:
  - 1388328339
categories:
  - News of the Web

---
<img class="alignnone size-full wp-image-1008" alt="scale-ratio-css" src="https://i1.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2013/06/scale-ratio-css.jpg?resize=640%2C300" width="640" height="300" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2013/06/scale-ratio-css.jpg?w=640&ssl=1 640w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2013/06/scale-ratio-css.jpg?resize=300%2C141&ssl=1 300w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" />

For one of my clients i&#8217;ve been working on an Responsive Website. But in the design part i was thinking how i can scale a div in aspect ratio with CSS. In the past i had no solution for this. But now i have one! So i wanna share it with you all! Thanks to the owner of <a href="http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio" target="_blank">this Tumbler blog</a> to share it!

**Check the result here!**

**HTML**

{{< code type="html" >}}
&lt;div id="container"&gt;
    &lt;div id="dummy"&gt;&lt;/div&gt;
    &lt;div id="element"&gt;
        some text
    &lt;/div&gt;
&lt;/div&gt;
{{< /code >}}

**CSS**

{{< code type="css" >}}
#container {
    display: inline-block;
    position: relative;
    width: 25%;
}
#dummy {
    padding-top: 75%;
}
#element {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: silver;
}
{{< /code >}}

**Result**

<pre class="codepen" data-height="300" data-type="result" data-href="mKlGy" data-user="webmediahelden" data-safe="true"><code></code><a href="http://codepen.io/webmediahelden/pen/mKlGy">Check out this Pen!</a></pre>