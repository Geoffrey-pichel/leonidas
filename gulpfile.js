const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('styles', () => {
    return gulp.src('app/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});

gulp.task('minicss', function(){
    return gulp.src('app/css/style.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('default', gulp.series(['clean', 'styles']));
