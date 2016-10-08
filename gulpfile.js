var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');

gulp.task('pug', function() {
    return gulp.src('./src/template/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./www/'))
});

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./www/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    gulp.src('./src/images/*.{png,svg}')
        .pipe(gulp.dest('./www/img'));
});

gulp.task('build', ['images', 'pug', 'sass']);

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./www"
    });
    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/template/**/*.{pug,js,md}", ['pug']);
    gulp.watch("www/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);

gulp.task('deploy', function() {

    var conn = ftp.create({
        host: '',
        user: '',
        password: '',
        parallel: 10,
        log: gutil.log
    });

    return gulp.src(['www/**'], {
            buffer: false
        })
        .pipe(conn.dest('/public_html'));
});
