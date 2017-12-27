---
title: How to check if a Object is empty with Vanilla JavaScript
author: Raymon Schouwenaar
type: post
date: 2017-12-21T21:40:43+00:00
url: /check-object-empty-vanilla-javascript/
categories:
  - Javascript
---

Well I can make a very long description about how to check if a object is empty, but this could be very short!

<!--more-->

{{< code type="javascript" >}}
    function isEmptyObject(objectInput) {
        for ( name in objectInput) {
            return false;
        }
        return true;
    }
{{< /code >}}

Simply, if the for-in loop is finding any property, it will start to iterate over the first property, but after this it will return false. But when it won't loop it directly returns true.

Nothing difficult! But very handy util function to use in if-else statements 👍