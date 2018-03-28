---
title: 5 ways to loop over DOM elements from querySelectorAll in JavaScript
author: Raymon Schouwenaar
type: post
date: 2018-03-28T21:15:08+00:00
url: /5-ways-loop-over-DOM-elements-queryselectorall-javascript/
featured_image: loop-over-nodelist-queryselectorall-javascript.png
draft: false
categories:
  - Javascript
---

There are a lot of ways to loop over a NodeList Object (List of DOM elements) that is returned by a querySelectorAll method! In this post I want to share 5 ways.

<!--more-->

Let's start with defining a piece of HTML and a const variable that is searching for multiple elements.

**HTML**

```html
<div class="container" id="myContainer">
	<div class="fake-image">
	  <h2>Fake image</h2>
	</div>
	<div class="fake-image">
	  <h2>Fake image</h2>
	</div>
	<div class="fake-image">
	  <h2>Fake image</h2>
	</div>
	<div class="fake-image">
	  <h2>Fake image</h2>
	</div>
</div>
```

**JavaScript**

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
```

So now we are ready to find out which 5 ways we can use to loop over this cool NodeList Object that is returned by the `querySelectorAll` method.

If a method gives a option of a callback, then I will use the "Arrow function" for that.

## 1. For-loop

The most know function to loop over everything is the good old For-loop. This is maybe not the prettiest code but definitely high performed.

So if you need to support older browsers like IE11 or lower and you don't use a compiler like [Babel](https://babeljs.io), than this is your best weapon.

**Support:** every browser!

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	for (var i = 0; i < fakeImages.length; i++) {
	  console.log('fakeImage: ', fakeImages[i]);
	}
```

## 2. For..of

I would call the [For..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop a extension on the normal For-loop. This is because this function can loop over iterable objects (including String, Array, Array-like arguments, NodeList Objects, TypedArray, Map and Set).

If you need to support old browsers then you definitely need a compiler like Babel. But if you only need to support the modern browsers For..of would be my weapon of choice!

**Support:** All modern browsers! Not supported in IE11 or lower.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	for (const fakeImage of fakeImages) {
	  console.log('fakeImage: ', fakeImage);
	}
```

## 3. For..of entries, keys, values

In the previous way we just used the NodeList to loop over in the For..of loop. But the NodeList has also a few more methods to use in this loop.

The [entries()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/entries), [keys()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/keys) and [values()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/values) methods return a [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols). A iterator is a new iterable protocol in the ES2015 specification. 

In JavaScript some types of data (Array or Map) have built in functionality to loop over. 

Object don't have build-in functionality to loop over it. Via the iterator protocol we can loop over data types that don't default support for that.


### entries

Each item in this loop is a Array with first the key and then the element. This is looks maybe a bit funny, but is expected behaviour.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	for (const fakeImage of fakeImages.entries()) {
	  console.log('fakeImage: ', fakeImage);
	};
```

### values

Where the entries method gives us an Array of the key and value. Each item in this loop is a element, in other words the value as the method name tells us.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	for (const fakeImage of fakeImages.values()) {
	  console.log('fakeImage: ', fakeImage);
	};
```

### keys

Just like the values method gives us the value of each item in the NodeList, the keys method gives us the keys from the NodeList Object.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	for (const fakeImage of fakeImages.keys()) {
	  console.log('fakeImage: ', fakeImage);
	};
```


## 4. forEach

Here comes a cool method that I was not aware of 😁. Just like the Array method forEach, a [NodeList Object has it's own forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) method. 

The most important note on this is that it's only supported in modern browsers. For support in older browsers you definitely need a compiler.

**Support:** All modern browsers! Not supported in IE11 or lower.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	fakeImages.forEach(fakeImage => {
	  console.log('fakeImage: ', fakeImage);
	});
```

## 5. (ES2015) Spread syntax with forEach

In the ES2015 we have the [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) for Arrays. With this syntax you can do a lot of cool stuff! One of those things is, turn a NodeList Object into a Array and use the Array forEach method on it.

For support in older browsers you definitely need a compiler, because the support is not completely implemented in all the modern browsers.

**Support:** [Almost all modern browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Browser_compatibility)! Not supported in IE11 or lower.

```javascript
	const fakeImages = document.querySelectorAll(".fake-image");
	[...fakeImages].forEach(fakeImage => {
			console.dir(fakeImage);
	});
```

## Thanks

If you learned something or have other ways to loop over a NodeList Object from the querySelectorAll, please let me know on twitter 😉: [@rsschouwenaar](https://twitter.com/rsschouwenaar)

