var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    poststylus = require('poststylus'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    rupture = require('rupture'),
    babelify = require('babelify'),
    bootstrap = require('bootstrap-styl'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    nano = require('gulp-cssnano');

var paths = {
    cssSource: 'resources/styl/',
    destination: 'assets/',
    jsSource: 'resources/js/'
};

gulp.task('styles', function () {
    return gulp.src(paths.cssSource + 'main.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [
                rupture(),
                bootstrap(),
                poststylus(['postcss-normalize', 'lost', 'autoprefixer'])
            ]
        }))
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(nano({autoprefixer: false}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.destination));
});

gulp.task('scripts', function () {
    return browserify(paths.jsSource + 'app.js')
        .transform(babelify, {presets: ["es2015"]})
        .bundle()
        .on('error', function (e) {
            console.log(e.message);

            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(paths.destination));
});

gulp.watch(paths.cssSource + '**/*.styl', ['styles']);
gulp.watch(paths.jsSource + '**/*.js', ['scripts']);

gulp.task('default', ['styles', 'scripts']);