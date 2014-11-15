'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var assign = require('object-assign');

module.exports = function (options) {

	options = assign({}, options);

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-i5ting-toc', 'Streaming not supported'));
			return;
		}
		
		require('i5ting_toc')(options.source_file, options.is_open, options.markd_config);
	});
};
