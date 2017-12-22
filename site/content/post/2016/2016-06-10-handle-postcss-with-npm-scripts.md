---
title: Handle PostCSS (with plugins) with NPM scripts
author: Raymon Schouwenaar
type: post
date: 2016-06-10T18:38:06+00:00
url: /handle-postcss-with-npm-scripts/
featured_image: /wp-content/uploads/2016/06/handle-postcss-with-plugins-via-npm-scripts-2016-1200x750.jpg
dsq_thread_id:
  - 4900363576
categories:
  - CSS
tags:
  - NPM
  - PostCCS

---
PostCSS becomes more and more popular these days. And yeah, why should we develop in these weird file extensions for Sass, Scss or Less. With PostCSS, we just stick to CSS extensions.

That&#8217;s what I love about PostCSS! There are currently loads of plugins for to do the same magic as we were used to in Sass/Scss! PreCSS is my favorite! You can use Variables, Conditionals, Loops, Mixins, Extends, Imports, Property lookup, Root and so much more! Autoprefixer and Color functions are also very cool!

You can choose your favorite tool/task runner to handle PostCSS. Gulp, Grunt, PostCSS CLI, NodeJS. But more and more people want to stick to NPM scripts, people like me!

I like the idea to do everything with NPM scripts. Just use your already created package.json, drop in your CLI commands in the scripts object, and of we go!

**Step 1**
  
Let&#8217;s create a package.json (if you didn&#8217;t have that already) with `npm init`.

**Step 2**
  
Start with a few commands to install the dependencies:
  
`npm install postcss normalize-css precss --save-dev`. And install `postcss-cli` globally on your system: `npm install postcss-cli`.

**Step 3**
  
After the installation create a CSS file (`style.css`) in a folder `CSS`.

**Step 4**
  
On the first rule of the CSS file set this @import: `@import "../node_modules/normalize-css/normalize.css";`.

**Step 5**
  
Let&#8217;s create an `postcss-options.json`.

**Step 6**
  
Add this content to the postcss-options file:

    {
    "use": ["precss"],
    "input": "./CSS/style.css",
    "output": "./CSS/final.css",
    "local-plugins": true
    }
    

**Step 7**
  
If you want to compile your CSS with the PostCSS-cli you need to run this: `postcss -c postcss-options.json`. The `-c` is a shortcut for `--config`.

**Step 8**
  
Now you got your `final.css` file where the Normalize CSS content is in!

**Step 9**
  
Let&#8217;s add this command to the package.json:

    "scripts": {
    "css": "postcss -c postcss-options.json"
    }
    

**Step 10**
  
No you can run `npm run css` and you got the same result. But you can make it shorter by adding a new rule:

    "scripts": {
    "start: "npm run css",
    "css": "postcss -c postcss-options.json"
    }
    

**Step 11**
  
Now run `npm start`, same result.

**Step 12**
  
Let&#8217;s add a PostCSS plugin called &#8220;CSSnano&#8221;, this plugin is gonna minify your CSS. Run `npm install cssnano --save-dev` and add CSSnano to the postcss-options.json.

    {
    "use": ["precss", "cssnano"],
    "input": "./CSS/style.css",
    "output": "./CSS/final.min.css",
    "local-plugins": true
    }
    

**Step 13**
  
If you run `npm start` you can find your minified CSS in the CSS folder. Like this, you can add as many plugins as you want! There is a great directory with all kinds of PostCSS plugins: http://postcss.parts/

I hope that this explanation helps you with setting up PostCSS in your Frontend Workflow with NPM scripts. If you have any question, please add them in the comments 🙂