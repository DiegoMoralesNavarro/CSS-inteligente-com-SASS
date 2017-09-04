var gulp = require('gulp'),
	sass = require('gulp-sass');



gulp.task('scss', () => {
	return gulp.src('./scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
})



gulp.task('scss-watch', () => { gulp.watch('./scss/**/*.scss', ['scss']) })



gulp.task("default",['scss-watch'])



 /// https://www.npmjs.com/package/gulp-sass
