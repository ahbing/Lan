var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('gulp-util');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass:compile', function() {
  return gulp.src('./src/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('./'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass:compile']);
