---
title: Lazy-loading images with the Intersection Observer
author: Raymon Schouwenaar
type: post
date: 2018-03-17T21:32:08+00:00
url: /lazy-loading-images-intersection-observer/
featured_image: ES2015-set.jpg
draft: true
categories:
  - Javascript
---

Last year I try to focus more and more on performance of websites and webapps. It's quite a challenge in the world of all the big frameworks and libraries.

Hopefully you know that loading images can cost even more time and data. But lucky that we are, we are known with the technique of lazy-loading images.

<!--more-->

## Loading images
Loading images with the normal `<img>` tag, let's the browser wait for being ready until all of the images are loaded.

```html
	<img src="https://loadyourimages.nl/image-nam.jpg" src="This is my awesome image">
```

Especially if you have a website with a lot of images, it can take maybe up till 10 seconds before the user has a interactive page.

On mobile connections that can even worse. With bad or slow connections your user sometimes will wait for tens of seconds or even minutes.

But we all know that those users want to wait that long! They will leave after a few seconds!

## Lazy-loading images

We want our pages loaded as fast as it is possible. Our goal should be 0 - 5 seconds, this is the amount of time a user will be patient for the page to load.

So if we avoid the normal `<img>` tags, our pages will load a lot faster. There are a few techniques to still load images without initially have the `<img>` tag present.


## Loading images with JavaScript

Create a `<div>` tag with the image url's in a `data-attribute`. So initially there will be no `<img>` tag. But with JavaScript we can detect if this image is in the visible part of the page.

```html
	<div class="lazy-image"
		data-large="https://loadyourimages.nl/image-nam.jpg"
		data-small="https://loadyourimages.nl/very-small-images.jpg">
		<div class="spacer"></div>
	</div>
```

We detect if the `<div>` is inside the visible part of the browser and replacing the spacer element for a image tag, with the correct image.

Most people and libraries for lazy-loading will use a `eventListener` on the `scroll` event for this. But caused on a lot of devices performance issues, so we need something better!

The Intersection Observer does a pretty good job in detecting if a certain element is inside the visible part of your browser.

## Intersection Observer
> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. **source: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)**

With this API we can listen of a element is in the viewport or is intersecting with another element.

### How to create an intersection observer
We have a few options in configuring the observer.

- `root`: Here you define the element that will be set as the viewport.
- `rootMargin`:

```javascript
	const options = {
	  root: document.querySelector('body'),
	  rootMargin: '0px',
	  threshold: 1.0
	}

	const observer = new IntersectionObserver(callback, options);
```






