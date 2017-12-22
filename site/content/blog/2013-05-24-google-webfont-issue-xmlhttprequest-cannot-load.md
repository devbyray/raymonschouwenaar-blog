---
title: 'Google Webfont issue: XMLHttpRequest cannot load'
author: Raymon Schouwenaar
type: post
date: 2013-05-24T10:02:22+00:00
url: /google-webfont-issue-xmlhttprequest-cannot-load/
featured_image: /wp-content/uploads/2013/05/google-fonts-issue.jpg
categories:
  - Snippets
tags:
  - Google
  - Issue
  - Webfonts

---
Today i&#8217;ve had a problem with Google Webfonts. I&#8217;m a huge fan of Google Webfont, because it is so easy to use! But if you got an error it&#8217;s not nice!

So with a short time of searching with Google, I&#8217;ve found the fix for the issue.

When i loaded my website in chrome, I&#8217;ve got an error in the debugger: XMLHttpRequest cannot load.

**Problem**

    <br />XMLHttpRequest cannot load <a title="http://fonts.googleapis.com/css?family=Armata" href="http://fonts.googleapis.com/css?family=Armata" target="_blank">http://fonts.googleapis.com/css?family=Armata</a>. Origin <a title="http://webhostinghelden.nl" href="http://webhostinghelden.nl/" target="_blank">http://raymonschouwenaar.nl</a> is not allowed by Access-Control-Allow-Origin.
    
    

**The solution is easy!**

Add by rel=&#8221;prefetch&#8221;, than the issue will disappear!