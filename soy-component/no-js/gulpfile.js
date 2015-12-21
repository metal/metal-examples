'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'modal.css',
	bundleFileName: 'modal.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-examples-no-js'
});
