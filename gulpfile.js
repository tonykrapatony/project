let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

function css_style(done){

    gulp.src('./scss/style.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));

    done()
}

gulp.task(css_style);

// exports.default = defaultSomeTask;
