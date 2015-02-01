// https://github.com/gulpjs/gulp/tree/master/docs
// https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-webpack/
var webpack = require("gulp-webpack");
// https://github.com/webpack/webpack-with-common-libs/blob/master/webpack.config.js
var webpackConfig = require('./webpack.config.js');

// https://www.npmjs.com/package/gulp-watch/
var watch = require('gulp-watch');

// https://github.com/terinjokes/gulp-uglify
var uglify = require('gulp-uglify');

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// https://github.com/stevelacy/gulp-stylus
var stylus = require('gulp-stylus');

// https://github.com/floridoo/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// http://nibstyl.us/docs/
// https://github.com/tj/nib/blob/master/lib/nib/reset.styl
var nib = require('nib');

// TODO https://www.npmjs.com/package/gulp-concat/
// TODO https://www.npmjs.com/package/gulp-css-globbing/
// TODO https://www.npmjs.com/package/gulp-cssimport/

// 团队不同成员可以添加各自的任务，此处供项目初始化demo使用。
gulp.task('js', function() {
    gulp.src('src/app.js')
        .pipe(webpack(webpackConfig))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('css', function() {
    gulp.src('./src/**/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
});

// watch files for changes and reload
gulp.task('watch', ['js', 'css'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch([
        'src/**/*.js',
        'src/**/*.styl'
    ], ['js', 'css', reload]);
});