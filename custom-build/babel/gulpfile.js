'use strict';

var gulp = require('gulp');
// gulp-babel-globals is a very useful npm module that builds es6 modules and
// all their dependencies to a single globals bundle. You can use any babel
// build you like though.
var babelGlobals = require('gulp-babel-globals');
var path = require('path');

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(babelGlobals({
      babel: {
        presets: ['es2015'],
        resolveModuleSource: renameAlias
      },
      globalName: 'metal'
    }))
    .pipe(gulp.dest('build'));
});

/**
 * This function replaces the "bower:" prefix used by metal with the actual
 * path to bower components. This is a very simple function to implement, but
 * if preferred, you can also use babel-preset-metal
 * (https://www.npmjs.com/package/babel-preset-metal), which already includes
 * this functionality, babel-preset-es2015 as well as other optional helpers.
 */
function renameAlias(originalPath) {
  if (originalPath.substr(0, 6) === 'bower:') {
    return path.join(path.resolve('bower_components'), originalPath.substr(6));
  } else {
    return originalPath;
  }
}
