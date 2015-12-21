'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'todo.css',
	bundleFileName: 'todo.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-examples-flux-todo'
});
