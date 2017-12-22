---
title: 'Snippets of JS: How to get height & width an of Element with Vanilla JavaScript?'
author: Raymon Schouwenaar
type: post
date: 2015-02-19T08:27:07+00:00
excerpt: "How to get height & width of Element with JavaScript? It is super simple! Check the example, you don't need jQuery for this!"
url: /how-to-get-height-width-of-element-with-vanilla-javascript/
featured_image: /wp-content/uploads/2015/02/snippets-of-vanilla-javascript-you-dont-need-jquery-for-this-825x510.jpg
dsq_thread_id:
  - 3528877572
categories:
  - Javascript
  - Snippets of Vanilla JavaScript
tags:
  - Snippets
  - Vanilla JavaScript
format: quote

---
**You don&#8217;t need jQuery for this!**
  
For getting the height of an Element with Vanilla JavaScript:
  
`<br />
var element = document.querySelector('.element');<br />
window.getComputedStyle(element).height;<br />
` 

For getting the width of an Element with Vanilla JavaScript:
  
`<br />
var element = document.querySelector('.element');<br />
window.getComputedStyle(element).width;<br />
`