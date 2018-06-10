// --------------------------------------------
// Dependencies
// --------------------------------------------

import gulp from 'gulp';

import stylus from 'gulp-stylus';
import postcss from 'gulp-postcss';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';
import sourcemaps from 'gulp-sourcemaps';

import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

import imagemin from 'gulp-imagemin';

import nunjucksRender from 'gulp-nunjucks-render';
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import beep from 'beepbeep';


// Paths
const src         = 'source/',
      dest        = 'build/';

const styleSrcMain    = `${src}assets/styles/main.styl`,
      styleSrc        = `${src}assets/styles/**/*.styl`,
      styleDest       = `${dest}assets/css/`,

      scriptSrc       = `${src}assets/js/*.js`,
      vendorSrc       = `${src}assets/js/vendors/*.js`,
      scriptDest      = `${dest}assets/js/`,

      htmlSrc         = `${src}**/!(_)*.{html,php}`,
      htmlSrcPartials = `${src}**/*.{html,php}`,

      imgSrc          = `${src}assets/img/**/*`,
      imgDest         = `${dest}assets/img/`,
      imgFavicon      = `${src}favicon.ico`,

      htmlWatch       = `${dest}**/*.html`,
      styleWatch      = `${dest}assets/css/*.css`,
      scriptWatch     = `${dest}assets/js/*.js`;


// Error handler
const onError = function (err) {
  beep();
  console.log(err.toString());
  this.emit('end');
};


// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------


// Process styles
gulp.task('styles', () => {
  const processors = [
    autoprefixer,
    pxtorem
  ];
  gulp.src(styleSrcMain)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(rename({
      basename: 'styles',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(styleDest));
});


// Process JS
gulp.task('scripts', () => {
  gulp.src(scriptSrc)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scriptDest));
});


// Process vendor JS
gulp.task('vendors', () => {
  gulp.src(vendorSrc)
    .pipe(plumber())
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest(scriptDest));
});


// Process HTML
gulp.task('nunjucks', () => {
  nunjucksRender.nunjucks.configure(src, { watch: false });
  gulp.src(htmlSrc)
    .pipe(nunjucksRender({
      inheritExtension: true
    }))
    .pipe(gulp.dest(dest));
});


// Process images
gulp.task('images', () => {
  gulp.src(imgSrc)
    .pipe(gulp.dest(imgDest));
});
gulp.task('favicon', () => {
  return gulp.src(imgFavicon)
    .pipe(gulp.dest(dest));
});


// Watch for changes
gulp.task('watch', function () {

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: dest
    },
    notify: false
  });

  gulp.watch(styleSrc, ['styles']);
  gulp.watch(scriptSrc, ['scripts']);
  gulp.watch(vendorSrc, ['vendors']);
  gulp.watch(htmlSrcPartials, ['nunjucks']);
  gulp.watch(imgSrc, ['images']);
  gulp.watch(imgFavicon, ['favicon']);
  gulp.watch([htmlWatch, styleWatch, scriptWatch]).on('change', browserSync.reload);

});


// use default task to launch Browsersync and watch JS files
gulp.task('default', [
  'styles',
  'scripts',
  'vendors',
  'nunjucks',
  'images',
  'favicon',
  'watch'
], function () {});