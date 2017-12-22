---
title: 'React Native on iOS: Network Request Failed'
author: Raymon Schouwenaar
type: post
date: 2017-04-06T07:01:34+00:00
url: /react-native-ios-network-request-failed/
featured_image: /wp-content/uploads/2017/04/raymonschouwenaar-react-native-ios-network-request-failed.jpg
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:3:"yes";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:19:"all-rights-reserved";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
dsq_thread_id:
  - 5700362003
categories:
  - Javascript

---
By default iOS isn&#8217;t supporting HTTP requests, only HTTPS requests are allowed.

But what if you have an API that only works with HTTP, you can easily change the setting&#8217;s to support HTTP requests.

When I first tried to do a request to an HTTP address it gave me the error &#8220;Network Request Failed&#8221;. I couldn&#8217;t get why.

But after some digging, I figured iOS was only supporting HTTPS.

To change this, open the &#8220;info.plist&#8221;. You can find this at &#8216;ios/ProjectName&#8217;.

Search for `<key>NSAppTransportSecurity</key>`. If it&#8217;s there already you only need to this code below it:

    <br /><dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
    </dict>
    
    

Now close your simulator and kill the running process (if you already started it). Run react-native run-ios again, and now your iOS app will support HTTP calls.

Hope this will help to fix your problem with React Native 🙂