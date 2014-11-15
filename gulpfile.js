var gulp = require('gulp');
var i5ting_toc = require('./');

var opt = {
	source_file: 'sample.md',
	is_open: true,
	markd_config: {
		debug: false
	}
}

gulp.task('default', function() {
	gulp.src('sample.md')
		.pipe(i5ting_toc(opt))
		.pipe(gulp.dest('test/'));
});
