---
title: Find duplicate property values in an Array of Objects in JavaScript
author: Raymon Schouwenaar
type: post
date: 2016-08-25T10:56:15+00:00
url: /find-duplicate-property-values-in-an-array-of-objects-in-javascript/
featured_image: finding-duplicate-property-values-in-an-array-of-objects-in-javascript-1200x750.jpg
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*W5ssxLrDoscNIwTcu_fDEA.jpeg";s:10:"author_url";s:33:"https://medium.com/@rsschouwenaar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:3:"yes";s:2:"id";s:12:"d4bab4fa613e";s:21:"follower_notification";s:3:"yes";s:7:"license";s:19:"all-rights-reserved";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:114:"https://medium.com/@rsschouwenaar/find-duplicate-property-values-in-an-array-of-objects-in-javascript-d4bab4fa613e";}'
dsq_thread_id:
  - 5093733525
categories:
  - Javascript
tags:
  - Javascript

---
Finding duplicate property values in an Array of Objects in JavaScript is not always that simple if you thought, so let&#8217;s dive in! A few days ago I needed to work this out, so I thought let&#8217;s write it down, so I could use it later again!

## Array of Objects

Let&#8217;s define an example Array of Objects, where each Object is a user:

    var myArray = [
      {id: 1, name: 'Foo Bar', email: 'foo@bar.com'},
      {id: 2, name: 'Bar Foo', email: 'bar@foo.com'},
      {id: 3, name: 'Joe Ocean', email: 'joe@ocean.com'},
      {id: 3, name: 'Jenny Block', email: 'foo@bar.com'},
    ];


You can see that there are a few property value&#8217;s that are duplicated. The `id` and the `email` property. But if you can imagine in a real application you don&#8217;t know if someone else has used an email address before. So you need to check it before you can save it.

I&#8217;m not gonna discuss a process how you should do this in an application. But just showing how you could see if an Array of Objects has duplicated property values.

## JavaScript function to check duplicate property values

    function checkDuplicateInObject(propertyName, inputArray) {
      var seenDuplicate = false,
          testObject = {};

      inputArray.map(function(item) {
        var itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
          testObject[itemPropertyName].duplicate = true;
          item.duplicate = true;
          seenDuplicate = true;
        }
        else {
          testObject[itemPropertyName] = item;
          delete item.duplicate;
        }
      });

      return seenDuplicate;
    }


Let&#8217;s create a function with 2 parameters. I will explain everything from the function, so everyone could follow this :-).

The `propertyName` you want to check in each Object and the `inputArray`, where you are gonna check the Objects from.

We define 2 variables at the start. `seenDuplicate`, the value is gonna be `false` as default. After that, we create a `testObject` to put in every Object we are looping trough.

We use the `.map()` function to loop trough the Array (read the article [.map() vs .forEach() vs .for()][1] to know why I picked `.map()`). For every Object we check if there is an property in the `testObject` with the name of the `id`, `email` or something else. Because the `in` keyword checks the property name not the value of a property!

If there isn&#8217;t a property name in the `testObject` that is the same as the item&#8217;s property value, then it will be placed in the Object. If it is already in the `testObject` it will be marked as duplicated. But more important, `seenDuplicate` will be `true`!

After the `.map()` function we return the `seenDuplicate` variable. So the result of the function, if we check the `id` property will be true. If we check it with the property `name` it will be false. Or with `email`, it will return `true`!

## Demo

In the demo below you can test the output of the console.

[JS Bin on jsbin.com][2]{.jsbin-embed}

If you have some question&#8217;s or comments on this post, please add them to the comments 🙂

 [1]: https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html
 [2]: http://jsbin.com/kerovot/embed?js,console