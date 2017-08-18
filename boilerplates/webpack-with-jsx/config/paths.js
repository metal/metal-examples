const DEFAULT_ENTRY = 'src/index.js';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const packageJson = resolveApp('package.json');
const packageMain = require(packageJson).main || DEFAULT_ENTRY;

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appIndexJs: resolveApp(packageMain),
  appPackageJson: packageJson,
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  appNodeModules: resolveApp('node_modules'),
  appBuildReport: 'stat.html',
  appPublic: './',
  appDemoIndexHtml: 'demos/index.html' 
};
