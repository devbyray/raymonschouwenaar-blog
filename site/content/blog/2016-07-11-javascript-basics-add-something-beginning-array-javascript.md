---
title: 'JavaScript Basics: Add something to the beginning of an array in JavaScript'
author: Raymon Schouwenaar
type: post
date: 2016-07-11T09:04:12+00:00
excerpt: How to add something (Object, Array, String, Number) to an Array in JavaScript. Well that is simply done with the `Array.push()` method.
url: /javascript-basics-add-something-beginning-array-javascript/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*W5ssxLrDoscNIwTcu_fDEA.jpeg";s:10:"author_url";s:33:"https://medium.com/@rsschouwenaar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:3:"yes";s:2:"id";s:12:"78c03e3accdf";s:21:"follower_notification";s:3:"yes";s:7:"license";s:19:"all-rights-reserved";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:121:"https://medium.com/@rsschouwenaar/javascript-basics-add-something-to-the-beginning-of-an-array-in-javascript-78c03e3accdf";}'
dsq_thread_id:
  - 4976416011
categories:
  - Javascript
tags:
  - Basics
  - Vanilla JavaScript

---
How to add something (Object, Array, String, Number) to an Array in JavaScript. Well that is simply done with the `Array.push()` method.

{{< code type="javascript" >}}
  var arrayName = ['1', '2', '3'];
  arrayName.push({
      property1: 'First property of Object',
      property2: ['Array', 'of', 'Items']
  });
  arrayName.push('Last item');
{{< /code >}}

The result will be:

{{< code type="javascript" >}}
  [
    '1',
    '2',
    '3',
    {
      property1: 'First property of Object',
      property2: ['Array', 'of', 'Items']
    },
    'Last item'
  ]
{{< /code >}}

That was simple! Right? Every time you push something to the Array, it will be added to the end. But what if you need to add something to the beginning of the array?

That is also simple, use the `Array.unshift()` method.

{{< code type="javascript" >}}
  var arrayName = ['1', '2', '3'];
  arrayName.unshift({
    property1: 'First property of Object',
    property2: ['Array', 'of', 'Items']
  },'Second item');{{< /code >}}

  The result of the code above will be:

  {{< code type="javascript" >}}[
    {
      property1: 'First property of Object',
      property2: ['Array', 'of', 'Items']
    },
    'Second item',
    '1',
    '2',
    '3'
  ]
{{< /code >}}

I thought it would be useful in some cases to put something at the beginning of an exciting Array. So I hope this will help you to use it. 🙂

Check the resources of W3Schools if you want to read more about the [Array.unshift()][1] or [Array.push()][2] method.

 [1]: http://www.w3schools.com/jsref/jsref_unshift.asp
 [2]: http://www.w3schools.com/jsref/jsref_push.asp