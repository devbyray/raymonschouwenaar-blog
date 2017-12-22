---
title: How to combine multiple Gulp tasks and add multiple destination locations
author: Raymon Schouwenaar
type: post
date: 2015-02-04T10:00:02+00:00
url: /combine-multiple-gulp-tasks-add-multiple-destination-locations/
featured_image: /wp-content/uploads/2015/02/combine-gulp-tasks-825x510.jpg
dsq_thread_id:
  - 3484580423
categories:
  - Webdevelopment
tags:
  - GulpJS
  - NodeJS
  - NPM

---
For my frontend work i use Gulp a lot, because it is easy to use and super-fast! But in the past i created a lot more tasks that was needed. For example: For concatenate an app.js from multiple .js files and minify them. For that i created these tasks:

{{< code type="javascript" >}}
    gulp.task('js', function() {
      return gulp.src([
          'src/scripts/polyfills/*.js',
          'src/scripts/irondomClassModule.js',
          'node_modules/components-webfontloader/webfont.js',
          'src/scripts/feathers/*.js',
          'src/scripts/main.js'
        ])
        .pipe(concat('app.js'))
        .pipe( gulp.dest('dist/scripts/'));
    });

    gulp.task('jsmin', function() {
      return gulp.src('dist/scripts/app.js')
        .pipe(uglify('app.min.js'))
        .pipe( gulp.dest('dist/scripts/'));
    });
{{< /code >}}

## Combine tasks with Gulp

Even with Gulp, 2 tasks cost more time to finish than 1 task. So i decided to improve my code in the Gulp file and make it faster.

I combined the &#8220;js&#8221; & &#8220;jsmin&#8221; gulp tasks to 1:

{{< code type="javascript" >}}
    gulp.task('js', function() {
      return gulp.src([
          'src/scripts/polyfills/*.js',
          'src/scripts/irondomClassModule.js',
          'node_modules/components-webfontloader/webfont.js',
          'src/scripts/feathers/*.js',
          'src/scripts/main.js'
        ])
        .pipe(concat('app.js'))
        .pipe( gulp.dest('dist/scripts/'))
        .pipe(uglify('app.min.js'))
        .pipe( gulp.dest('dist/scripts/'));
    });
{{< /code >}}

## Add multiple destinations to Gulp

This task is now a lot quicker than the previous 2 i used before. But a while ago i was working on an multi-language website. I decided to create a separate folder for each language of the website. In the early days before the taskrunners, this would cost me a lot more time. To copy every time i changed the JavaScript files, to the different language websites.

But now it can be done in an ease! Just add multiple destinations to the `gulp.dest()` method. The only thing i think is kinda weird, in `gulp.dest()` you can&#8217;t add an array with multiple destinations. But you can do that with adding an extra `.pipe()` function. But it works!

{{< code type="javascript" >}}
    gulp.task('js', function() {
      return gulp.src([
          'src/scripts/polyfills/*.js',
          'src/scripts/irondomClassModule.js',
          'node_modules/components-webfontloader/webfont.js',
          'src/scripts/feathers/*.js',
          'src/scripts/main.js'
        ])
        .pipe(concat('app.js'))
        .pipe( gulp.dest('dist/english/scripts/'))
        .pipe( gulp.dest('dist/dutch/scripts/'))
        .pipe(uglify('app.min.js'))
        .pipe( gulp.dest('dist/english/scripts/'))
        .pipe( gulp.dest('dist/dutch/scripts/'));
    });
{{< /code >}}

I also tried it in a different order. To con-cat the app.js, then uglify the app.min.js and than add the multiple destinations. But then the app.js won&#8217;t exist anymore.

{{< code type="javascript" >}}
    /* THIS CODE DOES NOT GIVE THE RIGHT RESULT
    ** ITS ONLY AS EXAMPLE OF WHAT I TRIED
    */
    gulp.task('js', function() {
      return gulp.src([
          'src/scripts/polyfills/*.js',
          'src/scripts/irondomClassModule.js',
          'node_modules/components-webfontloader/webfont.js',
          'src/scripts/feathers/*.js',
          'src/scripts/main.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify('app.min.js'))
        .pipe( gulp.dest('dist/english/scripts/'))
        .pipe( gulp.dest('dist/dutch/scripts/'));
    });
{{< /code >}}

Hopefully you can use this in your work-flow with Gulp! If you have some comments please add them below.