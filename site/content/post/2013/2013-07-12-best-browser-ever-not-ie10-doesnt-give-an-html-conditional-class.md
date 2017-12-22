---
title: Best browser ever? NOT! IE10 doesn’t give an HTML conditional class!
author: Raymon Schouwenaar
type: post
date: 2013-07-12T07:39:33+00:00
excerpt: What if you need an IE10 coditional tag? Microsoft drops the functionality in IE10. But here is an solution! Even for Wordpress!
url: /best-browser-ever-not-ie10-doesnt-give-an-html-conditional-class/
dsq_thread_id:
  - 1492261195
categories:
  - html
  - Webdevelopment
  - Wordpress
tags:
  - conditional tag
  - IE10
  - Microsoft

---
**What if you need an IE10 coditional tag?**
  
Microsoft calls IE the best browser ever, but i know almost every webdeveloper hate&#8217;s IE in all kinds of the words. But sometimes if you need to check your website in IE, it wil help you to use conditional class on your <html> tag.

**IE10**
  
But Microsoft thought IE10 would be so awesome, let&#8217;s drop the conditional tag for IE. But just at the moment i realise that Microsoft did this, it was to late!

**Solution!**
  
But after some searching i&#8217;ll found some handy snippet javascript, so we could give the <html> tag in IE10 an class=&#8221;ie10&#8243;. And it realy works with an ease! So copy the code and place it between the tags <head> </head> and you have you&#8217;re own IE10 conditional .

**Source**

[code type=&#8221;html&#8221;]

<!&#8211;[if !IE]><!&#8211;>
  
<script> if (/\*@cc_on!@\*/false) { document.documentElement.className+=&#8217; ie10&#8242;; } </script>
  
<!&#8211;<![endif]&#8211;>

[/code]

But special for all WordPress users/developers here is an snippet to place in your functions.php.

[code typ=&#8221;php&#8221;]

function my\_ie10\_script() {
  
echo &#8221;
  
<!&#8211;[if !IE]><!&#8211;>
  
<script> if (/\*@cc_on!@\*/false) { document.documentElement.className+=&#8217; ie10&#8242;; } </script>
  
<!&#8211;<![endif]&#8211;>
  
&#8220;;
  
}

add\_action(&#8216;wp\_head&#8217;, &#8216;my\_ie10\_script&#8217;);

[/code]

If you miss something, or want to add an comment, just scroll down and write you&#8217;re comment. And you will soon have an reaction!

Sharing is Caring!