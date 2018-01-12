---
title: How to check equality of values in JavaScript!
author: Raymon Schouwenaar
type: post
date: 2017-07-11T19:00:44+00:00
url: /check-equality-values-javascript/
featured_image: how-to-check-equality-of-values-in-javascript.jpg
dsq_thread_id:
  - 5981426615
categories:
  - Javascript

---
In JavaScript, there are 2 comparison operators. The _triple equals_ and the _double equals_ (=== or ==).

When I checked JavaScript in an older application, I saw a lot of double equals in it. I thought that couldn’t be right.

Then I realized it was built by a few Java developers. If you check the documentation of <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html" target="_blank" rel="noopener">Java Equality, Relational and Conditional Operators</a> you soon find out why it was written like that.

In Java, there are only _double equals_ operators (==). So there was my &#8220;aha&#8221; moment.

## Avoid the double equals (==) operator in JavaScript

There are a lot of articles written about how you should check for equality in JavaScript. Mostly to long and harder to understand for beginners with JavaScript. So let me make it easy for you.

### Double equality (==) operator

The == operator will start with checking the type of the value. If the type is not equal, it’s gonna check the value. If the value is equal it will return true, otherwise false. Like in this example:



### How works == underwater

The type or value needs to equal to get a result of true, otherwise, it will be false.

Here is an example of how the double equality operator works underwater:



So only the value is checked. But the first value is a type number and the second is a string. So if you want to have the reliable code, the double equality operator does not what you would expect (except if you already knew this).

### Triple equality (===) operator

The === starts with checking type equality, just like the == operator. If it is equal it will check the value equality, if not it will be false. If the type and value are equal, it will be true. Like this example:



### How works === underwater

The type and value need to equal to get a result of true, otherwise, it will be false.

Here is an example of how the triple equality operator works underwater:



## Use the triple equals (===) operator in JavaScript

Hopefully, by now, you understand why you need to use the triple equals operator (===) in JavaScript instead of the double equals operator (==).

Using the triple equals operator will also make your code and checkings in it more reliable. Other developers can trust that what you expect is definitely true because you compare the value and type of the value.

Hopefully, this makes it all clear, if not please ask your questions in the comments, I’m happy to help you out!