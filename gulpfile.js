var gulp = require('gulp');
var duration = require('gulp-duration');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps'); // necesario para mapas scss

gulp.task('clean-jade', function () {
  return gulp.src('out_gulp/views', {read: false})
    .pipe(clean());
});

gulp.task('clean-sass', function () {
  return gulp.src('out_gulp/styles', {read: false})
    .pipe(clean());
});

// gulp-jade is used because gulp-pug does not link .jade partials
gulp.task('jade', ['clean-jade'], function build() {
  return gulp.src('JADE-Bootstrap/**/*.jade')
    .pipe(jade({
      data: {
        debug: false
      }
    }))
    .pipe(duration('compiling jade templates'))
    .pipe(gulp.dest('out_gulp/views/'));
});

gulp.task('sass', ['clean-sass'], function () {
  return gulp.src('main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        noCache: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('out_gulp/styles/'));
});
