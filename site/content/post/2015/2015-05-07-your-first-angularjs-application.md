---
title: Your first AngularJS Application
author: Raymon Schouwenaar
type: post
date: 2015-05-07T06:42:32+00:00
url: /your-first-angularjs-application/
featured_image: Your-first-AngularJS-Application-825x510.jpg
dsq_thread_id:
  - 3743372146
categories:
  - Javascript
  - Webdevelopment
tags:
  - AngularJS

---
AngularJS is hot these times, so hot that all the big companies are searching for (frontend) developers with a good knowledge of AngularJS and testing AngularJS application&#8217;s.

So I would love to tell you how to build your first (basic) AngularJS Application. You can use it as a base to start, and build something cool(er) with it.

Let&#8217;s begin with the start! If you just want to use my first setup? [checkout my source at Github][1]. For the ones who like to read first, please continue.

## How to start an AngularJS Application

We are gonna start with including the AngularJS library. You can choose to include it from a CDN or download the script and save it.

{{< code type="javascript" >}}
  &lt;!-- CDN version of AngularJS --&gt;
 &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;

&lt;!-- Or use a selfhosted version --&gt;
 &lt;script src="assets/js/libs/angular.min.js"&gt;&lt;/script&gt;

{{< /code >}}

But since I prefer to concat all my JavaScript files into one file (to minimise the total requests). In the end I only include one file:

{{< code type="javascript" >}}&lt;script src="assets/js/app.js"&gt;&lt;/script&gt;{{< /code >}}

### Set AngularJS root element

To let AngularJS know what the root element is you need to use `ng-app`. Add the atribute to the `html` tag. Which results in:

{{< code type="javascript" >}}&lt;html ng-app&gt;{{< /code >}}

### Test if AngularJS is loaded

Inside the body you need to add this expression: `1 + 2 = {{1 + 2}}`. If AngularJS is loaded correctly, you will see the awnser of 1 + 2 on your page. If you try to remove the `ng-app` attribute from your root element, you will see that the expression stays like you added it to the HTML.

<p class='codepen'  data-height='268' data-theme-id='725' data-slug-hash='QbWoRv' data-default-tab='result' data-animations='run' data-editable='' data-embed-version='2'>
  See the Pen <a href=’http://codepen.io/rsschouwenaar/pen/QbWoRv/’>Simple AngularJS setup</a> by Raymon Schouwenaar (<a href=’http://codepen.io/rsschouwenaar’>@rsschouwenaar</a>) on <a href=’http://codepen.io’>CodePen</a>.725
</p>

### Create the AngularJS Application

If you really want to create an application where you could do something with, we need to create an AngularJS module `var todoApp = angular.module("myTodoApp", []);`. Now you can use the variable `todoApp` everywhere in your script to create your application. &#8220;myTodoApp&#8221; is the app name you are gonna use inside.

{{< code type="javascript" >}}&lt;html ng-app="myTodoApp"&gt;{{< /code >}}

### Let&#8217;s create some AngularJS routing

For creating different views (like pages) we need to include the ngRoute script in our html. ([source][2]) When the ngRoute script is loaded we need to include &#8220;ngRoute&#8221; inside our AngularJS module: `var todoApp = angular.module("myTodoApp", ['ngRoute']);`. Now we can create a configuration for the different views. ([check my source on Github][3])

{{< code type="javascript" >}}
todoApp.config(function($routeProvider, $locationProvider) {
 $routeProvider
 .when('/', {
 templateUrl: '../views/home.html'
 })
 .when('/home', {
 redirectTo: '/'
 })
 .when('/about', {
 templateUrl: '../views/about.html'
 })
 .when('/contact', {
 templateUrl: '../views/contact.html'
 })
 .otherwise({
 redirectTo: '/'
 });
 });
{{< /code >}}

For creating different views I created a [folder with html files][4] to show different content for each view.

Every view I added to the `$routeProvider`. So when I go to /home the application will redirect to the base url. And there the templateUrl will be showed in the `ng-view` tag inside your html body. This is the same for /about or /contact, there the views will be showed which you specified. If you don&#8217;t include ng-view the different views won&#8217;t appear.

I hope this blog will help you to build a cool AngularJS project. You can use my Github sources as a base to build your own application!

  * [AngularJS first setup][1]
  * [AngularJS routing setup][3]

Please let me know if you used it in one of your application? Or if you got some questions/comments please add them to the comments below 🙂 Enjoy!

 [1]: https://github.com/raymonschouwenaar/angularjs-first-setup
 [2]: https://code.angularjs.org/1.3.9/angular-route.js
 [3]: https://github.com/raymonschouwenaar/angularjs-routing-setup
 [4]: https://github.com/raymonschouwenaar/angularjs-routing-setup/tree/master/dist/views