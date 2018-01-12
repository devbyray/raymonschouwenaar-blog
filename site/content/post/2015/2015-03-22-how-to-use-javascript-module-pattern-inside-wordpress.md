---
title: How to use JavaScript Module Pattern inside WordPress
author: Raymon Schouwenaar
type: post
date: 2015-03-22T18:23:45+00:00
excerpt: Since I discovered that it is better to avoid to put everything in your global scope with JavaScript I love to use the Module Pattern. This is how you can use the JavaScript Module Pattern inside WordPress
url: /how-to-use-javascript-module-pattern-inside-wordpress/
featured_image: wordpress-javascript-module-pattern-825x510.jpg
dsq_thread_id:
  - 3617498858
categories:
  - Webdevelopment
  - Wordpress
tags:
  - Javascript
  - Module
  - Pattern

---
Since I discovered that it is better to avoid to put everything in your global scope with JavaScript I love to use the Module Pattern. (<a title="Mastering The Module Pattern in JavaScript" href="http://toddmotto.com/mastering-the-module-pattern/" target="_blank">Mastering The Module Pattern of Todd Motto</a> is a very good article about it) But I build a lot of WordPress websites. At the first time I started the create a cool slider for 1 of my clients with the Module Pattern, it was not easy to let WordPress change options like the autoplay, slide effect or the animation speed.

I was used to use jQuery in WordPress, and jQuery does a lot on the global scope. After searching a trying a lot with my slider, I discovered the solution, and I love to share with you! (if you have better ideas about this, I love to hear it in the comments!)

## How to add theme options to a WordPress website

For theme options I always use the WordPress plugin: <a href="https://wordpress.org/plugins/options-framework/" target="_blank">Options Framework</a>. This is a great helpfull plugin to create custom WordPress theme options.

These are my options for my CleanSlider module:

{{< code type="php" >}}
  $options[] = array(
      'name' =&gt; __('CleanSlider Opties', 'options_check'),
      'type' =&gt; 'heading');

 $options[] = array(
  'name' =&gt; __('Clean slider toon/verberg', 'options_check'),
  'desc' =&gt; __('Toon de slider', 'options_check'),
  'id' =&gt; 'visibility_clean_slider',
  'type' =&gt; 'checkbox');

 $options[] = array(
  'name' =&gt; __('Clean slider autoplay', 'options_check'),
  'desc' =&gt; __('Automatisch afspelen', 'options_check'),
  'id' =&gt; 'clean_slider_autoplay',
  'type' =&gt; 'checkbox');

  $cleanSlider_animation = array(
    'slide' =&gt; __('Slide effect', 'options_check'),
    'fade' =&gt; __('Fade effect', 'options_check'),
  );

  $options[] = array(
    'name' =&gt; __('Clean slider effect', 'options_check'),
    'desc' =&gt; __('Selecteer animatie effect van de slider.', 'options_check'),
    'id' =&gt; 'clean_slider_effect',
    'std' =&gt; 'fade',
    'type' =&gt; 'radio',
    'options' =&gt; $cleanSlider_animation);

  // Test data
  $clean_slider_animation_speed = array(
    '1000' =&gt; __('1 sec', 'options_check'),
    '2000' =&gt; __('2 sec', 'options_check'),
    '3000' =&gt; __('3 sec', 'options_check'),
    '4000' =&gt; __('4 sec', 'options_check'),
    '5000' =&gt; __('5 sec', 'options_check'),
    '6000' =&gt; __('6 sec', 'options_check'),
    '7000' =&gt; __('7 sec', 'options_check'),
    '8000' =&gt; __('8 sec', 'options_check'),
    '9000' =&gt; __('9 sec', 'options_check'),
    '10000' =&gt; __('10 sec', 'options_check'),
  );

  $options[] = array(
    'name' =&gt; __('Clean slider animatie snelheid', 'options_check'),
    'desc' =&gt; __('Snelheid van de slider animatie', 'options_check'),
    'id' =&gt; 'clean_slider_animation_speed',
    'std' =&gt; '5000',
    'type' =&gt; 'select',
    'class' =&gt; 'mini', //mini, tiny, small
    'options' =&gt; $clean_slider_animation_speed);

{{< /code >}}

I created an option for animation speed, autoplay, animation effect and show or hide slider.

## How to use a WordPress theme options with JavaScript Module Pattern

First I tried to make some options of my CleanSlider Module global via the window object. But this is not so clean. And just trying to access the cleanSlider object inside a script tag inside the html was not so nice.

That&#8217;s why I have used this way to integrated the theme options inside my script. So clients can easly change the effects of the slider.

This is how my &#8220;wp-footer.php&#8221; looked like:

{{< code type="php" >}}
&lt;?php wp_footer(); ?&gt;
&lt;script type="text/javascript"&gt;
(function(window, document, cleanSlider, undefined){
  &lt;?php
    $cleanSliderAutoplay = getThemeOptionVal('clean_slider_autoplay');
    $cleanSliderEffect = getThemeOptionVal('clean_slider_effect');
    $cleanSliderAnimationSpeed = getThemeOptionVal('clean_slider_animation_speed');

    if($cleanSliderAutoplay == '') {
      $cleanSliderAutoplayRef = 'false';
    } else {
      $cleanSliderAutoplayRef = 'true';
    }

    if($cleanSliderEffect == 'fade') {
      $cleanSliderEffectRef = '';
    } else {
      $cleanSliderEffectRef = ", 'slide'";
    }

    if($cleanSliderAnimationSpeed == '') {
      $cleanSliderAnimationSpeedRef = '5000';
    } else {
      $cleanSliderAnimationSpeedRef = $cleanSliderAnimationSpeed;
    }

  ?&gt;
  cleanSlider.init(&lt;?php echo $cleanSliderAutoplayRef; ?&gt;, &lt;?php echo $cleanSliderAnimationSpeedRef; ?&gt; &lt;?php echo $cleanSliderEffectRef; ?&gt;);
})(window, document, cleanSlider);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
{{< /code >}}

Hopefully this helped you to integrate the theme options of your WordPress website inside your JavaScript (Module Pattern)! If you have problems with it? Please add a comment below!

## Source of the CleanSlider JavaScript open sourced

I made my <a title="CleanSlider JavaScript Module" href="https://gist.github.com/raymonschouwenaar/7c4d0f378a517b9df8ba" target="_blank">CleanSlider module open-source</a> so you can use it in your project! Please let me know if you used it in one of your sites? I like to know 🙂

<a class="button" title="CleanSlider JavaScript Module" href="https://gist.github.com/raymonschouwenaar/7c4d0f378a517b9df8ba" target="_blank">Gist link to the source!</a>