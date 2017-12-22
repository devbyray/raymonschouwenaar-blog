---
title: Create an CSS-only Responsive Image Grid (with ratio scaling)
author: Raymon Schouwenaar
type: post
date: 2014-08-18T08:09:07+00:00
url: /create-css-responsive-image-grid-ratio-scaling/
featured_image: /wp-content/uploads/2014/08/Create-an-CSS-only-Responsive-Image-Grid-with-ratio-scaling-825x510.jpg
dsq_thread_id:
  - 2936662351
categories:
  - CSS
  - html
  - Webdevelopment

---
(almost) Everywhere on the web you see Responsive Websites. Some with a lot photos, some with none. But it seems to be difficult for some (junior) developers to let there pictures scale in ratio with only CSS.

Because of that i build an small demo, to show these guys (and maybe you als medior or senior) how to build there ratio scaling images with only CSS!

# Step 1

Create an HTML list with images and an text label. I use dummy images from [Lorempixel.com][1], it&#8217;s super handy!
{{< code type="javascript" >}}

&#x3C;div class=&#x22;my_container&#x22;&#x3E;
  &#x3C;ul&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/people&#x22; /&#x3E;
      &#x3C;span&#x3E;People&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/food&#x22; /&#x3E;
      &#x3C;span&#x3E;Food&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/cats&#x22; /&#x3E;
      &#x3C;span&#x3E;Cats&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/transport&#x22; /&#x3E;
      &#x3C;span&#x3E;Transport&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/abstract&#x22; /&#x3E;
      &#x3C;span&#x3E;Abstract&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/nightlife&#x22; /&#x3E;
      &#x3C;span&#x3E;Nightlife&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/city&#x22; /&#x3E;
      &#x3C;span&#x3E;City&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/sports&#x22; /&#x3E;
      &#x3C;span&#x3E;Sports&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/people&#x22; /&#x3E;
      &#x3C;span&#x3E;People&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/food&#x22; /&#x3E;
      &#x3C;span&#x3E;Food&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/cats&#x22; /&#x3E;
      &#x3C;span&#x3E;Cats&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/transport&#x22; /&#x3E;
      &#x3C;span&#x3E;Transport&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/abstract&#x22; /&#x3E;
      &#x3C;span&#x3E;Abstract&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/nightlife&#x22; /&#x3E;
      &#x3C;span&#x3E;Nightlife&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/city&#x22; /&#x3E;
      &#x3C;span&#x3E;City&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
    &#x3C;li class=&#x22;block&#x22;&#x3E;
      &#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;img src=&#x22;http://lorempixel.com/400/400/sports&#x22; /&#x3E;
      &#x3C;span&#x3E;Sports&#x3C;/span&#x3E;&#x3C;/a&#x3E;
    &#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;
{{< /code >}}

# Step 2

Use [Normalize.css][2] as reset, so add it in you HTML like other CSS files.

You also need this fix! This will set an natural box layout model for all HTML elements

{{< code type="css" >}}*, *:before, *:after {
  -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
}
{{< /code >}}

# Step 3

Setup the CSS!

**Reset the style of the list:**

{{< code type="css" >}}.my_container ul {
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    clear: both;
}
{{< /code >}}

**Set 4 images in an row:**

{{< code type="css" >}}.my_container ul .block {
    width: 25%; height: auto;
    position: relative;
    float: left;
    margin: 0 0 0 0;
    padding: 0 0 25% 0;
}
{{< /code >}}

_The padding-bottom 25% is the magic rule to let the grid scale in ratio. The padding-bottom needs to be equal to the width in procents._

**Set the right CSS for the images and the span:**

{{< code type="css" >}}.my_container ul .block img {
    max-width: none;
    width: 100%;
    position: absolute;
    top: 0; left: 0;
}
.my_container ul .block span {
    width: 100%; height: 3rem;
    line-height: 3rem;
    position: absolute;
    bottom: 0; left: 0;
    padding: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    background: rgba(0,0,0,0.5);
}
{{< /code >}}

_Set the image and span with an position absolute so the image can scale in ratio. (depending on the size of the .block)_

**Set the CSS for smaller screens:**

{{< code type="css" >}}@media screen and (max-width: 1024px) {
    .my_container ul .block {
        width: 33.33%;
        padding-bottom: 33.33%;
    }
}
@media screen and (max-width: 600px) {
    .my_container ul .block {
        width: 50%;
        padding-bottom: 50%;
    }
}
@media screen and (max-width: 360px) {
    .my_container ul .block {
        width: 100%;
        padding-bottom: 100%;
    }
}
{{< /code >}}

_As you can see i setted the with of the .block equal to the padding-bottom, this is for the ratio scaling._

# Step 4

Now where finished! But if you are as lazy as i&#8217;am? And only want to check the code? (mauhahah) Than check the demo/code here:

<p data-height="608" data-theme-id="725" data-slug-hash="yBsib" data-default-tab="result" class='codepen'>
  See the Pen <a href='http://codepen.io/rsschouwenaar/pen/yBsib/'>yBsib</a> by Raymon Schouwenaar (<a href='http://codepen.io/rsschouwenaar'>@rsschouwenaar</a>) on <a href='http://codepen.io'>CodePen</a>.
</p>

_If you want you can add nice &#8220;Transitions&#8221; for nice effect&#8217;s. Like my hover effect._

 [1]: http://lorempixel.com/
 [2]: http://necolas.github.io/normalize.css/