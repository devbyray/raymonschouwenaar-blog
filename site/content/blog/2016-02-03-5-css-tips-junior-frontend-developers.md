---
title: 5 CSS Tips for Junior Frontend Developers
author: Raymon Schouwenaar
type: post
date: 2016-02-03T12:39:24+00:00
url: /5-css-tips-junior-frontend-developers/
featured_image: /wp-content/uploads/2016/02/5-CSS-tips-for-junior-frontend-developers.jpg
dsq_thread_id:
  - 4547944765
categories:
  - CSS
  - Frontend Development
tags:
  - CSS
  - Developer
  - Frontend
  - Junior

---
HTML & CSS are the basic skills for Frontend Developers. But basic will not always say it is easy to write clean CSS code. So from the things that I&#8217;ve learned in all these years as a Frontend Developer, I&#8217;ll like to share some tips for writing clean CSS and not spaghetti CSS.

## 1. Think before you write

Think before you write sounds logical. But a lot of Frontend Developers choosing weird class names that don&#8217;t make any sense to others, even worse, after a while it doesn&#8217;t make any sense to themselves.

So take a moment and think about your class name, because naming classes are the hardest thing in CSS.

**Tip**: Think of components, modules or other segments. Separate your HTML in modules. A module could be:

  * Main navigation
  * Social media bar
  * Search box
  * Google maps
  * Subscription box
  * Facebook messages widget

## 2. Keep CSS Specificity as low as possible

When I review CSS of Juniors, a lot of times I see selectors like these: `nav ul li a`, `#logo`, `.navigation ul li a`, `html body div#pagewrap ul#summer-drinks li.favorite`. The thing with these selectors is that the CSS Specificity is too high! The higher CSS Specificity of a selector is, the more difficult it is to overwrite on a later moment.

### 2.1 What is CSS Specificity score?

CSS Selectors gives different Specificity scores:

  * **Selector**: \`nav ul li a\` gets the score: &#8220;_0.0.0.4_&#8220;
  * **Selector**: \`.navigation ul li a\` gets the score: &#8220;_0.0.1.3_&#8220;
  * **Selector**: \`html body div#pagewrap ul#summer-drinks li.favorite\` gets the score: &#8220;_0.1.2.5_&#8220;

### 2.2 How is CSS Specificity score calculated?

CSS Specificity can be divided into 4 categories. Each category gives a number for the score.

  * **Inline styles**

    The first number in: &#8220;1.0.0.0&#8221;An inline style lives in your HTML document. It is set directly to a HTML element like this:</p>
    {{< code type="javascript" >}}&lt;h1 style="color: #fff;"&gt;{{< /code >}}

  * **ID selectors**

    The second number in: &#8220;0.1.0.0&#8221;An ID can be set directly to a HTML element like this:</p>
    {{< code type="javascript" >}}&lt;div id="page-header"&gt;{{< /code >}}

    In the CSS you use it lik \`#page-header\`.</li>

      * **Classes, attributes and pseudo-classes**.

        The third number in: &#8220;0.0.1.0&#8221;An class can be set directly to a HTML element like this:</p>
        {{< code type="javascript" >}}&lt;div class="main-navigation-container"&gt;{{< /code >}}

        In the CSS you use it lik \`.main-navigation-container\`.</li>

          * **Elements and pseudo-elements **

            The fourth number in: &#8220;0.0.0.1&#8221;This includes all HTML elements and pseudo-elements like: \`:before, :after\`.</ul>

        If you want to test your selectors, [test the CSS Specificity here][1]. And to check out more details about it, [CSS-tricks has written a good explanation about CSS Specificity][2].

        ## 3. Don&#8217;t nest selectors to deep

        The things I saw a lot on CSS of beginners is &#8220;CSS Nesting&#8221;. If you use it properly it a nice feature. But a lot of beginners goes to deep with selectors nesting. The can use so many layers in their selectors, that it will become messy.

        ### Example:

        Selectors like: `html body div#pagewrap ul#summer-drinks li.favorite` has 8 layers of nesting. So if your `#summer-drinks` is not applied on the `&lt;ul&gt;` element, but on a `&lt;div&gt;`, it won&#8217;t apply the styling.

        ### Do it better

        Selectors like: `.main-navigation .nav-item` or `.main-navigaton .nav-link` is much better. There are only 2 layers of nesting.

        {{< code type="javascript" >}}
          &lt;li class="nav-item"&gt;
          &lt;a href="#"&gt;&lt;/a&gt;
          &lt;/li&gt;
        {{< /code >}}

        So if you have a link element without a `.nav-link` class, it won&#8217;t apply the styling to that link.

        The good thing about this, if you are working on a huge application you won&#8217;t screw things up in other places. Especially if you used the way of thinking in modules, so your classes make sense.

        ## 4. Don&#8217;t use !important

        When your CSS Specificity is too high, it will force you to use `!important` to apply the styling even when the Specificity scores is lower than the other selector.

        In my early years as Frontend Developer, it was used a lot! Because I didn&#8217;t know why it was bad and how I could fix this.

        If you are working on a website or web application for your boss or client, and you see things like this. Fix this! It will help you and others in the future to maintain the CSS better, and spend less time fixing these bugs.

        ## 5. Ask Feedback to Medior or Senior

        My biggest lesson of all is, ask your tech-lead, Medior, Senior Frontend Developer (_who has more experience_) to look at your CSS! This will always help you get better!

        This can feedback can help you:

          * Look more critical to your CSS
          * Change the way you write your CSS
          * Write clean CSS
          * Make smaller CSS files
          * Get better in CSS! (That is a fact!)

        ### But I&#8230;..

        #### &#8230; I&#8217;m the only Frontend Developer in the company

        That is no excuse! Frontend Development is not bound to 1 company. On the web, we all share knowledge with each other.

          * Follow CSS experts and trendsetters on Social media.
          * Contact via Twitter/Facebook or via a personal website with a Medior or Senior, asking them for help.
          * Go to meetups in your region about CSS or Frontend Development, and talk with people.

        ##### &#8230;.. not good enough

        Don&#8217;t look at yourself that way! Then you stop yourself from growing. Tell yourself, &#8220;hé maybe I&#8217;m not there yet, but I&#8217;m gonna do everything I can do to get there&#8221;!

        #### &#8230;&#8230; can&#8217;t share my project with someone else

        Since CSS is not very secret for a website, you can always send the CSS to someone to review. But yeah, off course it would be better if you can send a whole project via Github or Bitbucket, so the review can be more effective.

        So there is never an excuse to contact an other Frontend Developer to help you out!

        ## End

        Besides the tips I&#8217;ve given in this article, I&#8217;m also always willing to help with CSS or other Frontend Development things. If you want to have feedback about your CSS, contact me via Twitter: <a href="https://twitter.com/rsschouwenaar" target="_blank">@rsschouwenaar</a>

 [1]: https://specificity.keegan.st/
 [2]: https://css-tricks.com/specifics-on-css-specificity/