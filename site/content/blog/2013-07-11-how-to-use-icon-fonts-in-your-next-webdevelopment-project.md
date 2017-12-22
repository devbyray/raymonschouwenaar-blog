---
title: How to use icon fonts in your next Webdevelopment project?
author: Raymon Schouwenaar
type: post
date: 2013-07-11T08:26:24+00:00
excerpt: "Icon fonts became populair than ever, that's why i wanna share with you folks how to use them in your next webdevelopment project. It's super easy, so check it out!"
url: /how-to-use-icon-fonts-in-your-next-webdevelopment-project/
featured_image: /wp-content/uploads/2013/07/weloveiconfonts-825x510.jpg
dsq_thread_id:
  - 1487396858
categories:
  - CSS
  - News of the Web
  - Webdevelopment
tags:
  - Icon fonts
  - Tools
  - We Love Icon Fonts
  - Webfonts

---
Icon fonts became populair than ever, that&#8217;s why i wanna share with you folks how to use them in your next webdevelopment project. It&#8217;s super easy! There are many tools and services to use them in you webdevelopment project.

## This is how i do it

I use the free service of <a title="Tim Pietrusky" href="https://twitter.com/TimPietrusky" target="_blank">TimPietrusky</a> named &#8220;<a title="We Love Icon Fonts" href="http://weloveiconfonts.com/" target="_blank">We Love Icon Fonts</a>&#8220;.

  1. Go to the website
  2. Scroll trough the different fonts
  3. Select for example &#8220;Font Awesome&#8221;
  4. Select in the navigation the second icon to see how to use your selected font
  5. Copy & Paste the code in your CSS
    {{< code type="javascript" >}}
      @import url(http://weloveiconfonts.com/api/?family=fontawesome);

      /* fontawesome */
      [class*="fontawesome-"]:before {
        font-family: 'FontAwesome', sans-serif;
      }
    {{< /code >}}

  6. Add this to your html
    {{< code type="javascript" >}}&lt;span class="fontawesome-headphones"&gt;&lt;/span&gt;{{< /code >}}

  7. And just refresh your browser

## You could style them to!

<pre class="codepen" data-height="300" data-type="result" data-href="hugdE" data-user="rsschouwenaar" data-safe="true"><code></code><a href="http://codepen.io/rsschouwenaar/pen/hugdE">Check out this Pen!</a></pre>



If you see the example of my <a href="http://codepen.io/rsschouwenaar/pen/hugdE" target="_blank">Codepen</a>, than you know you could experiment with the style of the icons. You can also use other fonts, or other services. But i prefer &#8220;We Love Icon Fonts&#8221;.

I hope you did like this explanation of how to use icon fonts in your webdesign or webdevelopment project. If you like you can comment in the comment&#8217;s or share with your followers on twitter or facebook.

Sharing is Caring!