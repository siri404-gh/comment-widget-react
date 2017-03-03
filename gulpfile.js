var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var liveReload = require('gulp-livereload');
var path = require('path');

var dest = './client/dist';

gulp.task('browserify', function(){
    browserify('./client/src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(dest+'/js'))
    .pipe(liveReload());
});

gulp.task('copy', function(){
    gulp.src('./client/src/*.html').pipe(gulp.dest(dest));
    gulp.src('./client/src/css/**/*.*').pipe(gulp.dest(dest+'/css'));
    gulp.src('./client/src/fonts/**/*.*').pipe(gulp.dest(dest+'/fonts'));
    gulp.src('./client/src/images/*.*').pipe(gulp.dest(dest+'/images'));
    gulp.src('./client/src/js/vendor/*.*').pipe(gulp.dest(dest+'/js/vendor'));
});

gulp.task('default',  ['browserify', 'copy'], function() {
    liveReload.listen();
    gulp.watch('./client/src/**/*.*', ['browserify', 'copy']);
});
gulp.task('normal',  ['browserify', 'copy'], function() {
    return true;
});
