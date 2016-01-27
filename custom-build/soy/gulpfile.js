'use strict';

var gulp = require('gulp');
// gulp-babel-globals is a very useful npm module that builds es6 modules and
// all their dependencies to a single globals bundle. You can use any babel
// build you like though.
var babelGlobals = require('gulp-babel-globals');
var metalToolsSoy = require('metal-tools-soy');
var path = require('path');

gulp.task('soy', function() {
  return metalToolsSoy();
});

gulp.task('build', ['soy'], function() {
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
 * This function replaces import paths that are neither absolute nor relative,
 * with a path relative to node_modules. This is a very simple function to
 * implement, but if preferred, you can also use babel-preset-metal
 * (https://www.npmjs.com/package/babel-preset-metal), which already includes
 * this functionality, babel-preset-es2015 as well as other optional helpers.
 */
function renameAlias(originalPath) {
  if (originalPath[0] !== '.' && originalPath[0] !== '/') {
    return path.join(path.resolve('node_modules'), originalPath);
  } else {
    return originalPath;
  }
}
