'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'list.css',
	bundleFileName: 'list.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-list'
});
