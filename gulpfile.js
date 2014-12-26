var gulp   = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('compress', function () {
  gulp.src('./template/css/app.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('./template/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./template/css/*.styl', ['compress']);
});

gulp.task('default', ['watch']);
