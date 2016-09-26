var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('pug', function () {
    return gulp.src('./src/template/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./www/'))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./www/css'));
});

gulp.task('watch', function () {
   gulp.watch('./src/*/*', ['pug', 'sass']);
});

gulp.task('default', ['watch']);
