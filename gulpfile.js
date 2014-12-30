var gulp   = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('compress', function () {
  gulp.src('./css/app.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('./css/*.styl', ['compress']);
});

gulp.task('default', ['watch']);
