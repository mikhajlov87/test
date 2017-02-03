'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./frontend/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //.pipe(csso())
    .pipe(gulp.dest('./publick/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./frontend/sass/**/*.scss', ['sass']);
});