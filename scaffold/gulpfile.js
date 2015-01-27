// https://github.com/gulpjs/gulp/tree/master/docs
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

// 团队不同成员可以添加各自的packXXX的任务，此处供项目初始化demo使用。
gulp.task('packui', function() {
    gulp.src('src/ui.js')
        .pipe(webpack(webpackConfig))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

// watch files for changes and reload
gulp.task('watch', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['src/**/*.js'], ['packui', reload]);
});