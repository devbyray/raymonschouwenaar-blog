---
title: How to make a real copy of a JavaScript Array with Objects (without a reference)
author: Raymon Schouwenaar
type: post
date: 2017-12-19T21:40:43+00:00
url: /make-real-copy-javascript-array-objects-without-reference/
categories:
  - Javascript
---

It happens a lot that you want to copy a variable, with an Object or Array, to manipulate the data and use it afterward. But when we create an array of users and make a copy in a new variable.

<!--more-->

```javascript
    var originalObject = [
        {"first":"Gretchen","last":"Kuphal","email":"greenwolf54@gmail.com","address":"416 Lesch Road","created":"March 1, 2012","balance":"$9,782.26"},
        {"first":"Morton","last":"Mayer","email":"salmonsquirrel25@gmail.com","address":"1602 Bernhard Parkway","created":"April 29, 2017","balance":"$6,596.11"},
        {"first":"Catalina","last":"Daugherty","email":"Catalina.Daugherty@filomena.name","address":"11893 Kali Vista","created":"October 16, 2008","balance":"$6,372.86"},
        {"first":"Orpha","last":"Heaney","email":"turquoisewolf22@gmail.com","address":"8090 Chris Stream","created":"November 21, 2015","balance":"$9,596.26"},
        {"first":"Reva","last":"Mohr","email":"Reva.Mohr@oda.net","address":"0291 Kailyn Stravenue","created":"November 6, 2014","balance":"$4,768.37"},
        {"first":"Loma","last":"Keeling","email":"turquoisegiraffe09@gmail.com","address":"84460 Samson Knoll","created":"June 13, 2017","balance":"$9,361.16"}
    ];

    var duplicateObject = originalObject;
```

It will keep a reference from “duplicateObject” to “originalObject”. This is also called a shallow copy.
To show you that it will keep its reference, we gonna change the first name of the first user in the “originalObject”.
```javascript
    originalObject[0].first = "Ray";
```

Then log the `originalObject` and `duplicateObject` and the result will show you that both are changed! In a lot of cases, you don’t want this to happen!!

So how do we fix this in ES5?
We can do the trick with JSON.stringify and JSON.parse method.

```javascript
    var duplicateObject = JSON.parse(JSON.stringify( originalObject ));
```

And if we now change the first name of the first user in the originalObject, the duplicate will not change!
```javascript
    originalObject[0].first = "Ray";
```
Check it via the console to log the `originalObject` and `duplicateObject`;

**Update 6 Feb 2018**

In ES6 (ES2015) there is an other way of making a copy of a Array with Objects. The "[Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)" can do the much simpler!

```javascript
	// code of originalObject
	var duplicateObject = [... originalObject];
```

Check the result in the demo:

<a class="jsbin-embed" href="https://jsbin.com/noyetuz/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.2"></script>