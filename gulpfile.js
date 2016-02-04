"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith');


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

// watch
gulp.task('watch', function (){
    gulp.watch('css/**/*.less', ['less']);
})

gulp.task('default', ['watch']);
