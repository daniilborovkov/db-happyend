var gulp = require('gulp'),
notify = require('gulp-notify'),
minifyJS = require('gulp-minify'),
concat = require('gulp-concat'),
sass = require('gulp-sass');

gulp.task('build', ['sass'], function () {});

gulp.task('stream', ['build'], function () {
    gulp.watch('sass/**/*', ['sass_notify']);
});

gulp.task('sass', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass())
    .on('error', notify.onError(function (err) {
            return 'Scss: ' + err;
        }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass_notify', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass())
    .on('error', notify.onError(function (err) {
            return 'Scss: ' + err;
        }))
    .pipe(notify('Scss compilation finished!'))
    .pipe(gulp.dest('./'));
});