---
title: How to structure CSS or Sass for an large application
author: Raymon Schouwenaar
type: post
date: 2014-11-25T20:00:38+00:00
url: /structure-css-sass-large-application/
featured_image: how-to-structure-css-or-sass-for-an-large-application-825x347.jpg
dsq_thread_id:
  - 3367616582
categories:
  - CSS
  - Frontend Development
  - SASS
tags:
  - CSS
  - Frontend
  - sass

---
If you read more off my posts, you know that i love Front-end! Not only the Development, but also the Architecture! I got great experience with setting up an CSS structure for big (and small) applications. All the time i setup an structure i use Sass.

## Use Sass to structure the CSS

Since i work with Sass, my development is a lot faster then before. I think it&#8217;s smarter to don&#8217;t ignore the CSS-preprocessors in opinion! Sass gives you a lot of things to write faster and smarter CSS, but it gives you also the ability to create an better structure.

### Sass gives your more development speed

Sass gives you more speed in the development because of the Variables & Mixins for example (but there is a lot more!). For the people who don&#8217;t know Sass, you can do a [free Sass course at Codeschool][1].

## Setup the CSS Architecture

I assume that you know Grunt or Gulp, the made it very easy to compile your Sass to CSS. If not, you can also use another Compiling tool for this structure.

### Folder & File Structure

{{< code type="javascript" >}}- Sass
    - mixins
        - _position.scss
        - _transition.scss
    - modules
        - _buttons.scss
        - _defaults.scss
        - _grid.scss
        - _inputs.scss
        - _lists.scss
        - _print.scss
        - _typo.scss
        - _variables.scss
    - partials
        - _header.scss
        - _sidebar.scss
        - _footer.scss
        - _nav.scss
        - _layout.scss
        - _content.scss
    - pages
        - _homepage.scss
        - _contactpage.scss
        - _aboutpage.scss
    - vendor
        - _normalize.scss
    - styles.scss
{{< /code >}}

### Style.scss

This is how the Style.scss looks like.

{{< code type="css" >}}
    // Mixins
    @import 'mixins/_position.scss';
    @import 'mixins/_transition.scss';

    // Modules
    @import 'modules/_variables.scss';
    @import 'modules/_defaults.scss';
    @import 'modules/_grid.scss';
    @import 'modules/_buttons.scss';
    @import 'modules/_inputs.scss';
    @import 'modules/_lists.scss';
    @import 'modules/_typo.scss';
    @import 'modules/_print.scss';
    @import 'modules/_clearfix.scss';

    // Partials
    @import 'partials/_layout.scss';
    @import 'partials/_header.scss';
    @import 'partials/_nav.scss';
    @import 'partials/_sidebar.scss';
    @import 'partials/_footer.scss';
    @import 'partials/_content.scss';

    // Pages
    @import 'pages/_homepage.scss';
    @import 'pages/_contactpage.scss';
    @import 'pages/_aboutpage.scss';

    // Vendor
    @import 'vendor/_normalize.scss';

{{< /code >}}

## Development Speed

In my own experience, this structure gives you more speed in the development. You can find faster where the styles are declared. I use this structure for every project i work on. So every project my basic setup will be better and better. I created an [Git Repo][2], so you can clone it and use it for your own project. (for free!)

For cloning the Git Repo: `git clone https://github.com/Frontendhero/frontend-css-sass-structure`. You can also [download it as an ZIP][3].

I loved to share this with the world. If you have some improvements, let me know. Or if you have some questions? Please add them in the comments.

 [1]: https://www.codeschool.com/courses/assembling-sass
 [2]: https://github.com/Frontendhero/frontend-css-sass-structure
 [3]: https://github.com/Frontendhero/frontend-css-sass-structure/archive/master.zip