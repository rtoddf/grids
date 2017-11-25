var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

// gulp.task('log', function(){
// 	gutil.log('grids are awesome');
// });

var jsSources = [
	'components/scripts/base.js'
];

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
});