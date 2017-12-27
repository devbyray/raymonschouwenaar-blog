---
title: CSS Grid Layout Metro design blocks
author: Raymon Schouwenaar
type: post
date: 2017-12-10T21:40:43+00:00
url: /css-grid-layout-metro-design-blocks/
categories:
  - CSS
---
The times have come that we don't have to fiddle around with Floats and Tables anymore! Flexbox is already an established term in the industry of Frontend Developers.

<!--more-->

But there is a new thing called "CSS Grid Layout"! Well not supernew, but currently the support in all major browsers is very good.

Let's get started with it!

In this tutorial, I want to show you CSS Grid by building a Metro design inspired layout! I will walk you through the process of building this layout.

## Start with the HTML

The HTML will have 1 container div and 9 child div's in it.

{{< code type="html" >}}
    &lt;div class="grid"&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
        &lt;div class="blocks"&gt;&lt;/div&gt;
    &lt;/div&gt;
{{< /code >}}


## The CSS Grid magic
Let's start with styling the grid container.

{{< code type="css" >}}
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: .5rem;
        padding: .5rem;
        grid-auto-rows: minmax(100px, auto);
        min-height: calc(100vh - 1rem);
    }
{{< /code >}}

I will walk through every grid CSS property to tell you what it does:

### display: grid;

This will activate your container into a CSS Grid Layout

### grid-template-columns: repeat(5, 1fr);

This property will tell the div to be divided by 5 equal columns. It will be translated to grid-template-columns: 1fr 1fr 1fr 1fr 1fr; The repeat function is very handy for this, it will save you from typing manually how many columns there need to be!

### grid-gap: .5rem;

Grid gap is setting gaps between your columns and rows. If you don't define it, it will by default be 0.

### grid-auto-rows: minmax(100px, auto);

With the minmax function on the grid-auto-rows we set the min-height to 100px and the max-height to auto.

And because I wanted to have a padding around the container I've put a padding of a .5rem. To get the min-height right I've used the calc function to remove the 1rem (2 * .5rem) from the 100vh.

So with this, we got this result: [https://codepen.io/rsschouwenaar/full/mqZGNN/](https://codepen.io/rsschouwenaar/full/mqZGNN/)

<blockquote>
With CSS Grid Layout, we get a new flexible unit: the Fr unit. Fr is a fractional unit and 1fr is for 1 part of the available space. (Source: [alligator.io](https://alligator.io/css/css-grid-layout-fr-unit/))
</blockquote>

## Metro design style

Because the Metro design style we have to make a few divs bigger. Let's do the first and last div.

{{< code type="css" >}}
    .blocks:first-child{
        grid-column: 1/3;
        grid-row: 1/4;
    }
    .blocks:last-child{
        grid-column: 4/6;
        grid-row: 2/5;
    }
{{< /code >}}

With grid-column and grid-row we can decide where the position of the element should be and how big it is on the grid.

With the first block element, we make the width equal from the first column until the third. The height we set from the first row until the third.

The last block element will be in column 4 until the last. The height will be from the second until the last row.

If you are used to JavaScript starting Arrays with a 0, please keep in mind that the grid column and row are starting with 1.

With this, we get the actual Metro design style: [https://codepen.io/rsschouwenaar/full/vWqmOo/](https://codepen.io/rsschouwenaar/full/vWqmOo/)

I hope that this tutorial will help you! If you got questions please let me know in the comments?