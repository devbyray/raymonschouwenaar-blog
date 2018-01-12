---
title: 2 solutions for empty spaces below an IMG html element (no margins used)
author: Raymon Schouwenaar
type: post
date: 2015-08-12T12:01:15+00:00
excerpt: Searching for a solution for an empty space below your IMG (image) in a DIV html tag. But have no margins in the CSS? Check these 2 solutions!
url: /2-solutions-for-empty-spaces-below-an-img-html-element-no-margins-used/
featured_image: empty-space-below-image-html-css-825x510.jpg
dsq_thread_id:
  - 4025739711
categories:
  - CSS
  - html
  - Webdevelopment
tags:
  - CSS
  - Empty space
  - HTML

---
Have you ever have empty space below a DIV element with an image inside of it? No? Lucky you! I had this problem. But this image had no margin or padding below it. So it was really weird.

But I never thought about what kind of type of display (CSS), an IMG element was. And what I saw, it was a &#8220;display: inline&#8221;. So that helps a lot to find a solution (after a hour searching, checking and reloading hahaha). To fix this, there are 2 solutions!

## Solution 1

<img class="alignnone size-full wp-image-2022" src="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-display-block.jpg?resize=567%2C340" alt="empty-space-below-image-html-css-display-block" width="567" height="340" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-display-block.jpg?w=567&ssl=1 567w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-display-block.jpg?resize=300%2C180&ssl=1 300w" sizes="(max-width: 567px) 100vw, 567px" data-recalc-dims="1" />

Set the image to a display: block; in the CSS.

## Solution 2

<img class="alignnone size-full wp-image-2023" src="https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-vertical-align-top.jpg?resize=567%2C340" alt="empty-space-below-image-html-css-vertical-align-top" width="567" height="340" srcset="https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-vertical-align-top.jpg?w=567&ssl=1 567w, https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/08/empty-space-below-image-html-css-vertical-align-top.jpg?resize=300%2C180&ssl=1 300w" sizes="(max-width: 567px) 100vw, 567px" data-recalc-dims="1" />

Set the vertical-align: top;

You can decide yourself what solution is for you the best.