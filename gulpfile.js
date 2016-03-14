var gulp = require('gulp');
var watch = require('gulp-watch');

var nunjucksRender = require('gulp-nunjucks-render');


gulp.task('templates', function(req, res) {
  nunjucksRender.nunjucks.configure(['./dev/views/'], {watch: true});
    return gulp.src('./dev/views/*.html')
      .pipe(nunjucksRender())
      .pipe(gulp.dest('public'));
});

var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./dev/assets/stylesheets/**/*.scss')
    .pipe(sass({outputStyle: 'outputStyle'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/styles'));
});

gulp.task('images', function () {
  gulp.src('./dev/assets/images/**/*')
    .pipe(gulp.dest('./public/assets/images/'));
});

var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var uglify     = require('gulp-uglify');
var streamify  = require('gulp-streamify');


gulp.task('browserify', function() {
    return browserify('./dev/assets/scripts/app.js').transform("babelify")
        .bundle()
        .pipe(source('app.js'))
        //.pipe(streamify(uglify()))
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['templates', 'browserify', 'sass', 'images']);

gulp.task('watch', ['default'], function() {
    gulp.watch('./dev/assets/stylesheets/**/*.scss', ['sass']);
    gulp.watch('./dev/views/**/*.html', ['templates']);
    gulp.watch('./dev/assets/scripts/**/*.js', ['browserify']);
    gulp.watch('./dev/assets/images/**/*', ['images']);
});
