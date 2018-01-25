import gulp from "gulp";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import workbox from "workbox-build";
import path from "path";
import cloudinary from "cloudinary";
import es from "event-stream";
import filenames from "gulp-filenames";
import gulpCloudinary from "./custom-gulp-cloudinary";
import cssnano from "gulp-cssnano";


const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["css", "js"], (cb) => buildSite(cb, [], "production"));
gulp.task("build-preview", ["css", "js"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

// Compile CSS with PostCSS
gulp.task("css", () =>
  gulp
    .src("./src/css/*.css")
    .pipe(postcss([cssImport({from: "./src/css/main.css"}), cssnext({
      browsers: ['last 2 versions'],
      features: {
        rem: false
      }
    })]))
    .pipe(cssnano({
      minifyFontWeight: false
    }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

gulp.task('generate-service-worker', () => {
  return workbox.generateSW({
    globDirectory: './dist',
    globPatterns: [
      '**\/*.{css,js}'
    ],
    swDest: './site/static/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://fonts.googleapis.com'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://res.cloudinary.com'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://ajax.googleapis.com'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://www.google-analytics.com'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://www.googletagmanager.com'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://fonts.gstatic.com'),
        handler: 'staleWhileRevalidate'
      }
    ]
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed: ' + error);
  });
});

gulp.task("images", () =>
  gulp
    .src(["./src/wp-content/**/*", "./src/images/**/*"])
    .pipe(filenames("images"))
    .pipe(gulp.dest("./dist/wp-content"))
    // .pipe(browserSync.reload())
    .pipe(console.log("images: ", filenames.get("images")))
);

var critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('./dist/*.html')
        .pipe(critical({base: 'dist/', inline: true, css: ['./dist/css/main.css']}))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('dist'));
});

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    browserSync.reload();
    cb();
  });
});

// Development server with browsersync
gulp.task("server", ["hugo", "css", "js"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
  watch("./src/js/**/*.js", () => {
    gulp.start(["js"]);
  });
  watch("./src/css/**/*.css", () => {
    gulp.start(["css"]);
  });
  watch("./site/**/*", () => {
    gulp.start(["hugo"]);
  });
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
