---
title: 'JavaScript Basics: Add something to the beginning of an array in JavaScript'
author: Raymon Schouwenaar
type: post
date: 2016-07-11T09:04:12+00:00
excerpt: How to add something (Object, Array, String, Number) to an Array in JavaScript. Well that is simply done with the `Array.push()` method.
url: /javascript-basics-add-something-beginning-array-javascript/
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