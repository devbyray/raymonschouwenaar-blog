---
title: Display comments on Custom Post Type page by Genesis Framework
author: Raymon Schouwenaar
type: post
date: 2013-11-18T10:01:00+00:00
url: /display-comments-on-custom-post-type-page-by-genesis-framework/
featured_image: /wp-content/uploads/2013/10/wordpress.jpg
dsq_thread_id:
  - 1975846291
categories:
  - Wordpress
  - Wordpress plugins
tags:
  - Genesis Framework
  - Wordpress

---
So i&#8217;m building an custom plugin for one of my clients. I&#8217;m using an Custom Post Type, an visitors must be capable to add comments. Normally  you will use this function :

{{< code type="javascript" >}}comments_template();.{{< /code >}}

But because this theme is build with the Genesis Framework it doesn&#8217;t work.

But to you to save a search this is the function you need to get it done!

{{< code type="javascript" >}}genesis_get_comments_template();{{< /code >}}

So spread the Word and share!