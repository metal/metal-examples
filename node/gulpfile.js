'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'uri.css',
	bundleFileName: 'uri.js',
	moduleName: 'metal-examples-uri',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
