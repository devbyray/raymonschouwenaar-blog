---
title: How to update $scope or vm with an eventlistener in AngularJS
author: Raymon Schouwenaar
type: post
date: 2016-03-29T07:30:26+00:00
draft: false
url: /how-to-update-the-scope-with-an-eventlistener-in-angularjs/
categories:
  - Webdevelopment

---
Today I had such an annoying problem with AngularJS. I couldn&#8217;t understand why the `$scope` didn&#8217;t update with an eventlistener! In my case, it is `vm` (if you want to know why to choose `vm` instead of `$scope`, [check out this of John Papa][1]) that didn&#8217;t update.

And it was only updating after my mouse left the browser and clicking on the other program. Really weird issue!

So I thought I should do `$scope.apply()`, but that didn&#8217;t work. After some digging, I found out that you should use a `$timeout()` function.

Hopefully, this example will help you further!

{{< code type="javascript" >}}
(function () {
    angular
        .module('app')
        .controller('example.controller', Controller);

    Controller.$inject =  ['$timeout'];
    function Controller($timeout) {
        document.body.onkeydown = function (e) {
            // I was searching for shortcut ctrl+m
            if (e.keyCode === 77 && e.ctrlKey) {
                $timeout(function () {
                    vm.getTimeStamp();
                });
            }
        };
    }
})();
{{< /code >}}

If you have an other approuch, please let me know in the comments 🙂

 [1]: http://www.johnpapa.net/angularjss-controller-as-and-the-vm-variable/