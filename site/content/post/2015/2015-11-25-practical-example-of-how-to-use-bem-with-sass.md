---
title: Practical example of how to use BEM with Sass
author: Raymon Schouwenaar
type: post
date: 2015-11-25T19:55:38+00:00
url: /practical-example-of-how-to-use-bem-with-sass/
featured_image: practical-example-of-how-to-use-bem-with-sass-825x510.jpg
dsq_thread_id:
  - 4350721236
categories:
  - Frontend Development
tags:
  - BEM
  - Frontend
  - sass

---
On the web I&#8217;ve found a lot of good article&#8217;s about using BEM. But I missed a really simple (short) example of how to use BEM on a easy way with Sass. Especially sinces more and more Frontend Developers are using Sass as their CSS-preprocessor.

So this is my quick & simple version of how you can use BEM in combination with Sass! If you don&#8217;t know BEM, than I would reccomend you to read &#8220;[MindBEMding – getting your head ’round BEM syntax][1]&#8221; from CSS Wizardry &#8211; Harry Roberts. If you don&#8217;t know Sass, I would reccomend you to read &#8220;[An introduction to Sass][2]&#8220;.

## HTML

Let&#8217;s start with the HTML. For BEM the HTML is just as important as the CSS. Since we know that the [browser is reading our selectors from right-to-left][3], we know that using element&#8217;s with classes in our selectors is very costly for the browser. So using a class on the most of our HTML elements is a good practice.

Below you can checkout how I would setup the HTML of a navigation for a website.

    <ul class="navigation navigation--main”>
     <li class="navigation__item">
      <a class="navigation__link" href="dashboard.html"></a>
      <ul class="navigation navigation--sub”>
         <li class="navigation__item">
          <a class="navigation__link" href="dashboard.html"></a>
         </li>
        </ul>
     </li>
    </ul>

## Sass

<span style="line-height: 1.6471;">In our Sass/CSS we don&#8217;t want to use nesting, only if it is really needed! But with a maximum of 1 level. This is to set everything as clean as possible.</span>

In the example below you can define the name of your Block (the B of BEM) inside `$module`. With the `&amp;` mark you can combine a string of the Element (the E of BEM) with the Block. So `&amp;__item` will be compiled to `.navigation__item`, it is a super usefull feature of Sass. In this case the `&amp;` mark will not be used for nesting but for merging classes.

    $module: 'navigation';
    .#{$module} {

      // By default, our note has a white background…
      &__item {
        border-top: 1px solid #ccc;
      }

      // But “featured” notes have an offwhite background
      &__link {
        color: blue;
      }

      &--sub {
        margin-left: 15px;
        .#{$module}__link {
            font-style: italic;
        }
      }
    }

## CSS

After the Sass is compiled to CSS, this will be the result! From my perspective it looks really clean, everyone can read from the HTML what the styling represent. Like this example, this is suitable for CSS on a big scale!

    .navigation__item {
        border-top: 1px solid #ccc;
    }
    .navigation__link {
        color: blue;
    }
    .navigation--sub {
        margin-left: 15px;
    }
    .navigation--sub .navigation__link {
        font-style: italic;
    }

Hope you did enjoyed to read this blog post about using BEM super easy with Sass! Love to see your reaction in the comments section 🙂

 [1]: http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
 [2]: http://callmenick.com/post/an-introduction-to-sass-scss
 [3]: http://www.raymonschouwenaar.nl/css-performance-we-write-css-selectors-wrong/