const gulp = require('gulp');
const zip = require('gulp-zip');
const archivesFolder = 'dist';

function archiveProject({ source, dest }) {
	return gulp.src([`${source}/**`, '!/{node_modules,node_modules/**}'])
		.pipe(zip(dest))
		.pipe(gulp.dest(archivesFolder))
}

gulp.task('archive:boilerplate-soy', () => {
	return archiveProject({
		source: 'boilerplates/boilerplate-soy',
		dest: 'boilerplate.zip'
	});
});

gulp.task('archive:boilerplate-jsx', () => {
	return archiveProject({
		source: 'boilerplates/boilerplate-jsx',
		dest: 'boilerplate-jsx.zip'
	});
});

gulp.task('archive:boilerplates', ['archive:boilerplate-soy', 'archive:boilerplate-jsx']);
