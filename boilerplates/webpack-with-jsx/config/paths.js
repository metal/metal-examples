const path = require('path');
const fs = require('fs');

const DEFAULT_ENTRY = 'src/index.js';

// Make sure any symlinks in the project folder are resolved
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const packageJsonPath = resolveApp('package.json');
const packageJson = require(packageJsonPath);
const packageMain = packageJson.main || DEFAULT_ENTRY;

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appIndexJs: resolveApp(packageMain),
  appPackageJson: packageJsonPath,
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  appNodeModules: resolveApp('node_modules'),
  appBuildReport: 'stat.html',
  appPublic: './',
  appDemoIndexHtml: 'demos/index.html' 
};
