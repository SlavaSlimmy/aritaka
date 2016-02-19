"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// less
gulp.task('less', function () {
    gulp.src('css/main.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [ path.join(__dirname, 'mixins', 'blocks') ]
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('css/'));
});

// sprite
gulp.task('sprite', function () {
    var spriteData = gulp.src('images/sprite-images/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '../css/sprite.less',
        padding: 5,
        cssTemplate: 'images/sprite-images/sprite.css.handlebars'
    }));
    return spriteData.pipe(gulp.dest('images'));
});

// minify CSS
gulp.task('mincss', function() {
    return gulp.src('css/main.css')
        .pipe(cssnano())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('css'));
});

// compress JS
gulp.task('minjs', ['clean-js'], function() {
    return gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest('js'));
});

gulp.task('clean-js', function () {
    return gulp.src('js/app.min.js', {read: false})
        .pipe(clean());
});

// watch
gulp.task('watch', function (){
    gulp.watch('css/**/*.less', ['less']);
})

gulp.task('default', ['watch']);
