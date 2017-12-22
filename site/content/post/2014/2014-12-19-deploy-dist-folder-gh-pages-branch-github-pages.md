---
title: How to deploy only your dist folder to gh-pages branch (Github Pages)
author: Raymon Schouwenaar
type: post
date: 2014-12-19T13:53:43+00:00
url: /deploy-dist-folder-gh-pages-branch-github-pages/
featured_image: /wp-content/uploads/2014/12/githubpages-825x347.jpg
dsq_thread_id:
  - 3366876800
categories:
  - Github
  - Webdevelopment
tags:
  - Github
  - GruntJS
  - GulpJS

---
If you do a lot on Github, you probably know what Github Pages are. For the ones who don&#8217;t know: &#8220;On Github Pages you can host an HTML, CSS & JavaScript website. Simply create an branch called: gh-pages, wait a few minutes and you can find it with this url <github-username>/github.io/<github-repo-name>&#8220;.

### Only deploy your dist folder to Github Pages

When you&#8217;re working with a handy taskrunner like GruntJS or GulpJS, than you may have a dist folder where all files are in that are fully optimized. Grunt & Gulp have there own plugins to deploy to Github Pages:

  * [Grunt deploy to Github Pages][1]
  * [Gulp deploy to Github Pages][2]

But you can also create a simple Bat script (if your an windows user) or an Shell (if your an Mac user). The only code you have to add is:

{{< code type="bash" >}}git subtree push --prefix dist origin gh-pages{{< /code >}}

If you think there is an faster way to deploy a dist folder to Github Pages, let me know in the comments!

* * *

[Download the Bat & Shell script i created as an example][3]. [Hosted on Github][4].

 [1]: https://github.com/tschaub/grunt-gh-pages
 [2]: https://github.com/rowoot/gulp-gh-pages
 [3]: https://gist.github.com/raymonschouwenaar/b8045b531016f7fd57cb/download
 [4]: https://gist.github.com/raymonschouwenaar/b8045b531016f7fd57cb