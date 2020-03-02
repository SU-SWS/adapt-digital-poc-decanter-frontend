const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

const SASS_INCLUDE_PATHS = [
  path.join(__dirname, '/node_modules/')
];

gulp.task('styles', () => {
    return gulp.src('src/styles/scss/**/*.scss')
        .pipe(sass({ includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(gulp.dest('src/styles/css/'));
});

gulp.task('clean', () => {
    return del([
        'src/styles/css/global.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('src/styles/scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});


gulp.task('default', gulp.series(['clean', 'styles']));
