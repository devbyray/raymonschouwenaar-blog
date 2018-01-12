---
title: 'CSS Performance: We write CSS selectors wrong!'
author: Raymon Schouwenaar
type: post
date: 2015-11-06T10:59:52+00:00
url: /css-performance-we-write-css-selectors-wrong/
featured_image: css-performance-writing-css-selectors-wrong-825x510.jpg
dsq_thread_id:
  - 4294764219
categories:
  - CSS
  - Frontend Development
tags:
  - CSS
  - Performance
  - Selector

---
So today, I want to dive into CSS Performance. Especially I want to talk about, how you can make you selectors faster to render in the browser. So let&#8217;s start with an example that every (Frontend) Webdeveloper used once in CSS.

## HTML structure

So imagine that you have this html structure:

{{< code type="hml" >}}
&lt;nav class="main-navigation"&gt;
 &lt;ul&gt;
 &lt;li&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a&gt;About&lt;/a&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
 &lt;/ul&gt;
 &lt;/nav&gt;
{{< /code >}}

## CSS selectors

And beside that you have this in your stylesheet:

{{< code type="css" >}}
  nav {
 height: 60px;
 max-width: 1024px;
 }
 nav ul {
 margin: 0;
 padding: 0;
 text-align: center;
 }
 nav ul li {
 display: inline;
 }
 nav ul li a {
 display: inline-block;
 padding: .5em 1em;
 }
{{< /code >}}

## Analysing the HTML & CSS

If you check the HTML & CSS, this is something a lot developers will use in there websites/webapps. Nothing special! Just a styling for your main navigation.

### Right to Left

> One of the important things to understand about how browsers read your CSS selectors, is that they read them from right to left. That means that in the selector ul > li a the first thing thing interpreted is a. This first part is also referred to as the &#8220;key selector&#8221; in that ultimately, it is the element being selected.

**Source:** [CSS-tricks.com][1]

## Browsers read selectors right-to-left

Huh? What? Are you kidding me? Yeah, browsers don&#8217;t read your selectors from left-to-right!

So with a selector like `nav ul li a` the browser start to search to a `a` tag in the whole page, after that it will filter it to every `a` tag inside an `li` tag, and so on. You understand this will take more time than needed!

## What selectors are better and faster to use

If these selectors, most of the developers are using are not so efficient as we thought, what should we use than? Let me introduce to you the &#8220;BEM&#8221; methodology! BEM stands for &#8220;Block, Element, Modifier&#8221; and helps you to get much better selectors & class names in the HTML and CSS. In <a href="http://www.sitepoint.com/bem-smacss-advice-from-developers/" target="_blank">this blogpost of Sitepoint it is really good explained how to use BEM</a>.

 [1]: https://css-tricks.com/efficiently-rendering-css/