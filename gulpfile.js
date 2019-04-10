var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server --To trigger this command, from the terminal run gulp browser-sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});