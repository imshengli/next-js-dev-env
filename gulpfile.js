var gulp = require('gulp');
var babel = require('gulp-babel');

var jsSource = 'src/**/*.js';

gulp.task('compileJS', function () {
    return gulp.src(jsSource)
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    var watcher = gulp.watch(jsSource, ['compileJS']);
    watcher.on('change', function(event) {
        console.log(new Date() + ': File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
