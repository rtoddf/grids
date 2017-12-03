var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect');

// gulp.task('log', function(){
// 	gutil.log('grids are awesome');
// });

var jsSources = [
	'components/scripts/base.js'
];

var sassSources = [
	'components/sass/style.scss'
]

var htmlSources = [
	'builds/development/*.html'
]

var jsonSources = [
	'builds/development/data/*.json'
]

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			images: 'builds/development/images',
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
})

gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload())
})

gulp.task('json', function(){
	gulp.src(jsonSources)
	.pipe(connect.reload())
})

gulp.task('watch', function(){
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(jsonSources, ['json']);
})

gulp.task('default', ['html', 'js', 'compass', 'json', 'connect', 'watch']);


gulp.task('connect', function(){
	connect.server({
		root: 'builds/development/',
		livereload: true
	})
})






