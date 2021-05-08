const browserify = require('browserify');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');


gulp.task('default', () =>
  browserify('src_dev/jsx/main.jsx')
  .transform('babelify', {
    plugins: ['transform-react-jsx']
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('src/js/'))
);
