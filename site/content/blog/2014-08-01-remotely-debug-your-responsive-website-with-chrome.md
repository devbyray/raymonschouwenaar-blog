---
title: Remotely debug your responsive website with Chrome
author: Raymon Schouwenaar
type: post
date: 2014-08-01T19:40:43+00:00
url: /remotely-debug-your-responsive-website-with-chrome/
featured_image: /wp-content/uploads/2014/08/chrome_debug-825x510.jpg
dsq_thread_id:
  - 2892781482
categories:
  - Webdevelopment
tags:
  - Android
  - Chrome
  - Issue
  - Mobile
  - responsive website

---
How do you test your Responsive website? Do you use the DevTools in Chrome and just resize your brower? Or do you switch between the user agents (also an option in Chrome&#8217;s DevTools)?

If you use one of these options it&#8217;s nice. But! It can be a lot better to test on real devices. So Chrome build an option in Chrome to connect with you Android device with an USB-cable. And that&#8217;s AWESOME! Becaus now you can inspect your HTML, CSS and JavaScript realtime like you allready did in the usual DevTools on you desktop machine.

## How to Install?

To get Chrome connected you need to enable USB debugging in your Android(4.0+) device. Go to `Settings -> Developer options -> USB debugging`. On Android 4.2+ there they did hide the option. For Android 4.2+ you need to go to `Settings -> About phone` and tab 7 (seven) times on the &#8220;Build number&#8221;. Then go back and find the `Developer options`.

Put un USB cable in you computer and connect it to your Android device. Then go to Chrome and type in you url bar `chrome://inspect`. Then select the tab &#8220;Devices&#8221; and there you can see your connected Android device.

_If there is no connected devices displayed? Then update your device USB drivers. [Google as an nice explanation to install them on your machine][1]._

After the connection, you get an alert on your phone for requesting permission from your computer.

## How to use

If you&#8217;re on the inspect page where your connected device is displayed, you can select to inspect one of the open tabs of your Chrome browser on your android device. Than an window pop&#8217;s on your screen and you can see what your doing on your device. If you scroll or turn your phone around, you can see it all on your screen! So now you&#8217;re ready to debug your Responsive website/application on an real device!

## Extra

Here you can find an video of [Google I/O 2014][2] where the show some more things what you can do with it.

 [1]: http://developer.android.com/tools/extras/oem-usb.html
 [2]: https://www.youtube.com/watch?v=t1PxmN_QNFI#t=1590