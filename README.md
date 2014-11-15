gulp-i5ting-toc
===============

[![npm version](https://badge.fury.io/js/gulp-i5ting-toc.svg)](http://badge.fury.io/js/gulp-i5ting-toc)

gulp-i5ting-toc is  a gulp task wrapper of i5ting_ztree_toc https://github.com/i5ting/i5ting_ztree_toc 

- [ruby版本tocmd](https://github.com/i5ting/tocmd.gem)
- [node版本i5ting_toc](https://github.com/i5ting/tocmd.npm)
- [gulp task for i5ting-toc](https://github.com/i5ting/gulp-i5ting-toc)

## Usage

```
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
		.pipe(i5ting_toc(opt));
});
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
