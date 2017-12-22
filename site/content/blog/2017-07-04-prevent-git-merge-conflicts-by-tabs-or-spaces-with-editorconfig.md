---
title: Prevent git merge-conflicts by tabs or spaces with Editorconfig 😉
author: Raymon Schouwenaar
type: post
date: 2017-07-04T09:03:31+00:00
url: /prevent-git-merge-conflicts-by-tabs-or-spaces-with-editorconfig/
featured_image: /wp-content/uploads/2017/07/prevent-git-merge-conflicts-by-tabs-or-spaces-with-editorconfig.jpg
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:3:"yes";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:19:"all-rights-reserved";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
dsq_thread_id:
  - 5962618987
categories:
  - Git
  - Webdevelopment

---
If you ever worked in a team with developers, you soon find out they maybe use different editors, (IDE’s) with different settings than yours.

But you are a big fan of linting and reviewing code in Github or other Git system, but everytime someone checks-in code, there are massive merge-conflicts because of different settings for the indenting.

If you use tabs and a developer from your team is using spaces by default, it will soon become a merge-conflict hell!

But of course, there is a very quick fix for it!

## Editorconfig

The editorconfig is supported across multiple editors and platforms.

By putting this file in your project, most editors will change the config by default.

There is a great introduction playlist on youtube you should definitely watch if you want to see how it works.

<span class="embed-youtube" style="text-align:center; display: block;"></span>