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

// https://www.npmjs.com/package/gulp-concat/
var concat = require('gulp-concat');

// TODO https://www.npmjs.com/package/gulp-css-globbing/

// https://www.npmjs.com/package/gulp-cssimport/
var cssimport = require("gulp-cssimport");

// https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');


// 团队不同成员可以添加各自的任务，此处供项目初始化demo使用。
gulp.task('js', function() {
    gulp.src('src/app/app.js')
        .pipe(webpack(webpackConfig))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('stylus', function() {
    gulp.src(['./src/**/*.styl'])
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

// 提取css文件的import的内容 && 合并文件
gulp.task("basecss", function() {
    gulp.src(["src/base/_import.css"])
        .pipe(cssimport({}))
        .pipe(concat('base.css'))
        .pipe(cssmin())
        .pipe(gulp.dest("dist/base"));
});

// watch files for changes and reload
gulp.task('watch', ['js', 'stylus', 'basecss'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch([
        'src/**/*.js',
        'src/**/*.styl'
    ], ['js', 'stylus', function () {
        setTimeout(function () {
            reload();
        }, 400);
    }]);
});

