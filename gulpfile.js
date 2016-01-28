var gulp = require('gulp'),
		copy = require('gulp-copy'),
		sass = require('gulp-sass'),
		csscomb = require('gulp-csscomb'), 
		clean = require('gulp-clean'),
		connect = require('gulp-connect'),
		excel2json = require('gulp-excel2json'),
		sequence = require('run-sequence');

var bases = {
 app: 'src/',
 dist: 'build/'
};

var path = {
			build: { //Build files
					html: 'build',
					css: 'build/css/',
					fonts: 'build/css/fonts',
					img: 'build/img',
					js: 'build/js',
					xls: 'build/xls'
			},
			src:  {
				html: 'src/index.html',
				cssstyle: 'build/css/*.css',
				css: 'src/css/*',
				fonts: 'src/scss/fonts/*',
				scss: 'src/scss/main.scss',
				scsscomponents: 'src/scss/components/*.scss',
				scssreload :'src/scss',
				img: 'src/img/*',
				js: 'src/js/*',
				xls: 'src/xls/*'
			}
}

gulp.task('xls', function() {
    gulp.src([ path.src.xls])
        .pipe(excel2json({
            headRow: 1,
            valueRowStart: 3,
            trace: true
        }))
        .pipe(gulp.dest(path.build.xls))
});

gulp.task('clean', function() {
	return gulp.src(bases.dist)
		.pipe(clean())
});

gulp.task('clean-css', function() {
	return gulp.src(path.build.css)
		.pipe(clean())
});


gulp.task('copy-html', function () {
	return gulp
		.src([ path.src.html])
		.pipe(gulp.dest(path.build.html))
		.pipe(connect.reload())
})

gulp.task('scss', function () {
	return gulp
		.src([path.src.scss])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(path.build.css))

})

gulp.task('reload-scss', function () {
	return gulp
		.src([path.src.scss])
		.pipe(gulp.dest(path.src.scssreload))
})

gulp.task('styles', function() {
  return gulp.src([path.src.cssstyle])
    .pipe(csscomb())
    .pipe(gulp.dest(path.build.css))
    .pipe(connect.reload())
});

gulp.task('copy-img', function () {
	return gulp
		.src([path.src.img])
		.pipe(gulp.dest(path.build.img))
		.pipe(connect.reload())
})

gulp.task('copy-js', function () {
	return gulp
		.src([path.src.js])
		.pipe(gulp.dest(path.build.js))
		.pipe(connect.reload())
})

gulp.task('copy-fonts', function () {
	return gulp
		.src([path.src.fonts])
		.pipe(gulp.dest(path.build.fonts))
		.pipe(connect.reload())
})

gulp.task('connect', function() {
	connect.server({
		root: 'build',
		port: 8080,
		livereload: true
	});
});

gulp.task('connect-stop', function() {
	connect.serverClose()
});

// gulp.task('db-config', function () {
// 	return gulp
// 		.src(['*.js*'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/'))
// })
// gulp.task('db-html', function () {
// 	return gulp
// 		.src(['src/index.html'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/src'))
// })
// gulp.task('db-scss', function () {
// 	return gulp
// 		.src(['src/scss/*'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/src/scss'))
// })
// gulp.task('db-scss-components', function () {
// 	return gulp
// 		.src(['src/scss/components/*'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/src/scss/components'))
// })
// gulp.task('db-js', function () {
// 	return gulp
// 		.src(['src/js/*'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/src/js'))
// })
// gulp.task('db-ft', function () {
// 	return gulp
// 		.src(['src/scss/fonts/*'])
// 		.pipe(gulp.dest('/../Dropbox/COPY/src/scss/fonts/'))
// })

// gulp.task('dropbox', function() {
// 	sequence(
// 			['db-config','db-html','db-scss','db-scss-components','db-js','db-ft']
// 		);
// });

gulp.task('no-scss-components-reload', function() {
	sequence(
			'clean-css',
			['copy-fonts','copy-img','copy-html','copy-js'],
			'scss',
			'styles'
		);
});

gulp.task('watch', function () {
 gulp.watch([path.src.html, path.src.css, path.src.img, path.src.js, path.src.scss, path.src.fonts], ['no-scss-components-reload'] )
});

gulp.task('watch-scss-components', function () {
 gulp.watch([ path.src.scsscomponents], ['reload-scss'] )
});


gulp.task('default', function() {
	sequence(
		'clean',
		['copy-html','copy-js','scss','copy-img','connect','copy-fonts'],
		'styles',
		['watch', 'watch-scss-components']
	);
});
