'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'mousePosition.css',
	bundleFileName: 'mousePosition.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-examples-attribute'
});
