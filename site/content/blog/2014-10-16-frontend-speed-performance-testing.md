---
title: Frontend speed and performance testing!
author: Raymon Schouwenaar
type: post
date: 2014-10-16T08:15:50+00:00
url: /frontend-speed-performance-testing/
featured_image: /wp-content/uploads/2014/10/frontend-speed-performance-testing-825x480.jpg
dsq_thread_id:
  - 3401810320
categories:
  - Frontend Development
tags:
  - Performance
  - Speed
  - Testing

---
For a while i was searching for a good tool to analyse my work of HTML, CSS & JavaScript. I just wanted to know what i could do better to make the websites/web-app load faster in the browsers.

But never came any further than the Google [PageSpeed Insights tool][1]. That tool is really simple to use, gives you some tips, but never gives you an real Frontend Performance report. An report that you can show your client that what you build is really better than what he had before.

## Time is changing.

I just discovered an really awesome tool to test the Frontend performance. An tool that works with NodeJS/NPM, called &#8220;[Sitespeed.io][2]&#8220;. With SiteSpeed.io you can analyze your website speed and performance. It works in your Commandline, is compleetly opensource and offcourse free!

## How to analyze the speed and performance of any website?

Before you can work with SiteSpeed.io, you have to install it offcourse.

**Install on Mac OS X** For Mac OS X you use [Homebrew][3]

{{< code type="html" >}}
  $ brew tap sitespeedio/sitespeedio
  $ brew tap tobli/browsertime
  $ brew install sitespeed.io
  $ sitespeed.io -h
{{< /code >}}

**Install on Linux**

  1. Install [PhantomJS(1.9)][4].
  2. Install [Java 1.6 (or higher)][5].
  3. Make sure you have `curl` and `xsltproc` installed, if not install them.
  4. Clone the project from Github: `$ git clone https://github.com/sitespeedio/sitespeed.io.git` or [Download][6] and unpack the zip.
  5. Run: `$ bin/sitespeed.io -h`

**Install on Windows**

  1. Install the latest full version of [Git Bash][7]
  2. Install [Java 1.6 (or higher)][5] and include it in you path.
  3. Install [PhantomJS(1.9)][4] and include it in you path.
  4. Install SiteSpeed.io global `npm install sitespeed.io -g`.

**Test your installation** Close your commandline and fire-up again. Type `sitespeed.io -v` to check if SiteSpeed.io is installed correctly. You should see a version number.

## Lets run SiteSpeed.io

For example run `sitespeed.io -u http://www.raymonschouwenaar.nl`. Now the script will analyze http://www.raymonschouwenaar.nl. And safe the performance test to your drive. SiteSpeed.io will show you where it is saved.

Lets try another website. `sitepeed.io -u http://sitepoint.com` will save the performance test of http://sitepoint.com to your drive.

## Options

There are a lot of options for SiteSpeed.io:

&#8220;&#96;

     -h      Help

     -u      The start URL of the crawl: http[s]://host[:port][/path/]. Use this or use the -f file option.

     -f      The path to a plain text file with one URL on each row.

     -d      The crawl depth, default is 1 (one page and all links pointing to the same domain on that page) [optional]

     -q      Crawl URLs only URLs that contains this keyword in the path [optional]

     -s      Skip URLs that contains this keyword in the path [optional]

     -p      The number of processes that will analyze pages, default is 5 [optional]

     -m      The memory heap size for the Java applications, default is 1024 Mb [optional]

     -n      Give your test a name, it will be added to all HTML pages [optional]

     -o      The output format, always output as HTML and you can also output a CSV file for the detailed site summary page  (csv) [optional]

     -r      The result base directory, default is sitespeed-result [optional]

     -x      The proxy host & protocol: proxy.soulgalore.com:80 [optional]

     -t      The proxy type, default is http [optional]

     -a      The full User Agent string, default is Chrome for MacOSX. You can also set the value as iphone or ipad (will automagically change the viewport) [optional]

     -v      The view port, the page viewport size WidthxHeight, like 400x300, default is 1280x800 [optional]

     -y      The compiled YSlow file, default is dependencies/yslow-3.1.5-sitespeed.js [optional]

     -l      Which ruleset to use, default is the latest sitespeed.io version for desktop [optional]

     -g      The columns showed on detailed page summary table, see http://www.sitespeed.io/documentation/#config-columns for more info [optional]

     -b      The boxes showed on site summary page, see http://www.sitespeed.io/documentation/#config-boxes for more info [optional]

     -j      The max number of pages to test [optional]

     -k      Take screenshots for each page (using the configured view port). Default is false. (true|false) [optional]

     -c      Choose which browser to use to collect timing data. You can set multiple browsers in a comma sepratated list (firefox|chrome|ie) [optional]

     -z      The number of times you should test each URL when fetching timing metrics. Default is three times [optional]

     -V      Show the version of sitespeed.io

     -B      Basic auth user & password  Note: Only works for analyzing rules at the moment [optional]

     -C      A comma separated list of additional CDNs [optional]`


Here you can find the [SiteSpeed.io documentation][8].

## Afterword

So if your gonna do some changes to an website or web-app. First start with an performance & speed test with SiteSpeed.io. So you can see the differents of your work. And proof that you did an good job!

For now, keep the good work going and never stop with developing good (performed) Frontend code.

If you like add some comments below 🙂 I would like, if you share this tutorial!

## Update:

The option with getting screenshot&#8217;s doesn&#8217;t work on the alpha version (latest version). But it is not possible to install SiteSpeed.io 2.5.7 with npm install. ([see issue][9])

 [1]: https://developers.google.com/speed/pagespeed/insights/
 [2]: http://www.sitespeed.io/
 [3]: http://brew.sh/
 [4]: http://phantomjs.org/download.html
 [5]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html
 [6]: https://github.com/sitespeedio/sitespeed.io/releases
 [7]: https://code.google.com/p/msysgit/downloads/list?q=label:Featured
 [8]: http://www.sitespeed.io/documentation/
 [9]: https://github.com/sitespeedio/sitespeed.io/issues/495