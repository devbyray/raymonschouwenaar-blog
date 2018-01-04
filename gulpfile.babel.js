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
import workbox from 'workbox-build';

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
gulp.task("css", () => (
  gulp.src("./src/css/*.css")
    .pipe(postcss([cssImport({from: "./src/css/main.css"}), cssnext()]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));
// htaccess
// gulp.task("other", () => (
//   gulp.src([
//     "./site/.htaccess",
//     "./site/_redirects"
//   ])
//     .pipe(gulp.dest("./dist/"))
//     .pipe(browserSync.stream())
// ));
// Compile CSS with PostCSS
gulp.task("images", () => (
  gulp.src([
    "./src/wp-content/**/*",
    "./src/images/**/*"
  ])
    .pipe(gulp.dest("./dist/wp-content"))
    .pipe(browserSync.reload())
));

// Compile Javascript
gulp.task("js", ['generate-service-worker'], (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

gulp.task('generate-service-worker', () => {
  console.log('dist: ', gulp.src('./dist'))
  const dist = gulp.src('./dist');
  return workbox.generateSW({
    globDirectory: dist,
    globPatterns: ['**\/*.{html,js,jpg,gif,png,ico,css}'],
    swDest: `${dist}/sw.js`,
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://fonts.googleapis.com/(.*)'),
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: new RegExp('https://fonts.gstatic.com/(.*)'),
        handler: 'staleWhileRevalidate'
      }
    ]
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed: ' + error);
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
  watch("./src/js/**/*.js", () => { gulp.start(["js"]) });
  watch("./src/css/**/*.css", () => { gulp.start(["css"]) });
  watch("./site/**/*", () => { gulp.start(["hugo"]) });
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
