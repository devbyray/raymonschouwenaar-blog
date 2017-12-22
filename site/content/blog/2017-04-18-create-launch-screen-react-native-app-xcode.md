---
title: Create launch screen for React Native app in Xcode
author: Raymon Schouwenaar
type: post
date: 2017-04-18T18:13:14+00:00
url: /create-launch-screen-react-native-app-xcode/
featured_image: /wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-screenshot.png
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*W5ssxLrDoscNIwTcu_fDEA.jpeg";s:10:"author_url";s:33:"https://medium.com/@rsschouwenaar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:3:"yes";s:2:"id";s:12:"e3c59ab3c436";s:21:"follower_notification";s:3:"yes";s:7:"license";s:19:"all-rights-reserved";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:97:"https://medium.com/@rsschouwenaar/create-launch-screen-for-react-native-app-in-xcode-e3c59ab3c436";}'
dsq_thread_id:
  - 5738084558
categories:
  - Javascript
tags:
  - iOS
  - Javascript
  - React Native

---
If you are working on a cool React Native app, I guess you want to make to look-and-feel completely to your own design.

Well, the launch screen is the first thing a user see. The first look must be the best!

So let’s create a splash screen for your React Native in Xcode, so your user doesn’t see that ugly default screen that React Native show by default in iOS.

  1. Open your project in Xcode.
  2. On the left sidebar, click the folder icon.
  
    <img class="alignnone wp-image-2397 size-medium" src="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-project-bar.png?resize=300%2C33&#038;ssl=1" alt="" width="300" height="33" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-project-bar.png?resize=300%2C33&ssl=1 300w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-project-bar.png?w=450&ssl=1 450w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />
  3. Open the dropdown
  4. Open the first folder
  
    <img class="alignnone wp-image-2396 size-medium" src="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen.png?resize=300%2C287&#038;ssl=1" alt="" width="300" height="287" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen.png?resize=300%2C287&ssl=1 300w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen.png?w=450&ssl=1 450w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />
  5. Click the file LaunchScreen.xib

There is the default launch screen. Here you can edit the text, change colors, add images and a lot more.

<img class="alignnone wp-image-2394 size-full" src="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-default.png?resize=600%2C588&#038;ssl=1" alt="" width="600" height="588" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-default.png?w=600&ssl=1 600w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-default.png?resize=300%2C294&ssl=1 300w" sizes="(max-width: 600px) 100vw, 600px" data-recalc-dims="1" />

I’m not gonna teach you how to create a nice and fancy launch screen, but this is the spot to use your own imagination!<figure id="attachment_2395" style="width: 636px" class="wp-caption alignnone">

<img class="wp-image-2395 size-large" src="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen-custom.png?resize=636%2C1024&#038;ssl=1" alt="" width="636" height="1024" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen-custom.png?resize=636%2C1024&ssl=1 636w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen-custom.png?resize=186%2C300&ssl=1 186w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen-custom.png?resize=768%2C1237&ssl=1 768w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2017/04/2017-04-launch-screen-xcode-react-native-launchScreen-custom.png?w=998&ssl=1 998w" sizes="(max-width: 636px) 100vw, 636px" data-recalc-dims="1" /><figcaption class="wp-caption-text">This one is from me!</figcaption></figure> 

Looking forwards to all the cool launch screens you will make 😀

If you like a video more than my text and images? Please check out this article: <a href="http://reactcafe.com/how-to-remove-the-powered-by-react-native-message-in-ios/" target="_blank">http://reactcafe.com/how-to-remove-the-powered-by-react-native-message-in-ios/</a>