---
title: 'Error: spawn C:\Python27 ENOENT npm'
author: Raymon Schouwenaar
type: post
date: 2015-07-17T08:00:28+00:00
url: /error-spawn-cpython27-enoent-npm/
dsq_thread_id:
  - 3942592625
categories:
  - Javascript
tags:
  - node_modules
  - NodeJS
  - NPM

---
A couple of days I was trying to fix this error when installing &#8220;gulp-sass&#8221; via:

{{< code type="javascript" >}}npm install gulp-sass{{< /code >}}

Then I got this error: &#8220;spawn C:\Python27 ENOENT&#8221;. But when I searched Google I couldn&#8217;t find the correct fix for it.

In my PATH settings for PYTHON the only value was: &#8220;C:\Python27&#8221;. But after I changed that to &#8220;C:\Python27\python.exe&#8221; the issue was solved.

So hopefully this will also help to solve your problem!