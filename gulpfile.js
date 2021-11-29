const { src, dest, parallel } = require('gulp');

const copyScss = () => {
    return src('dist/sass/*.scss')
        .pipe(dest('build/css/'));
};

const copyHtml = () => {
    return src('dist/*.html')
        .pipe(dest('build/'));
};

const copyImages = () => {
    return src('dist/images/*.png')
        .pipe(dest('build/images'));
};

exports.copyAll = parallel(copyScss, copyHtml, copyImages);
