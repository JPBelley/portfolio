// load the require modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Translate SASS to CSS
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Watcher to rerun gulp on save
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('*.html', browserSync.reload);
  // gulp.watch('js/**/*.js', browserSync.reload);
})

// Setting up a web server for auto browser reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})
