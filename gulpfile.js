'use strict';

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    connect     = require('gulp-connect'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    maps        = require('gulp-sourcemaps'),
    cleanCSS    = require('gulp-clean-css');

var scssFiles = './sass/**/*.scss';
var htmlFiles = './*.html';
var libCssFiles = [
    './node_modules/normalize.css/*.css',
    './node_modules/foundation-sites/dist/foundation-flex.min.css'
];
var libJsFiles = [
    './node_modules/foundation-sites/dist/foundation.min.js'
];

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true,
        port: 4000,
        fallback: 'index.html'
    })
});

gulp.task('libcss', function () {
    return gulp.src(libCssFiles)
        .pipe(concat('libs.css'))
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('libjs', function () {
    return gulp.src(libJsFiles)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('js'))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src(scssFiles)
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('site.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(htmlFiles)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(scssFiles,['sass']);
  gulp.watch(htmlFiles,['html']);
  gulp.watch(libCssFiles,['libcss']);
  gulp.watch(libJsFiles,['libjs']);
});

gulp.task('default', function(callback) {
    runSequence('sass', 'libcss', 'libjs', 'watch', 'connect',
        callback
    );
});
