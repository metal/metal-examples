// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const url = require('url');
const webpack = require('webpack');
const config = require('../config/webpack.config');
const paths = require('../config/paths');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const useYarn = fs.existsSync(paths.yarnLockFile);

// Remove all content from build destination
fs.emptyDirSync(paths.appBuild);

// Start the webpack build
build();

// Print out errors
function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

// Create the production build and print the deployment instructions.
function build() {
  console.log('Creating an optimized production build...');
  webpack(config).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors);
      process.exit(1);
    }

    if (process.env.CI && stats.compilation.warnings.length) {
     printErrors('Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.', stats.compilation.warnings);
     process.exit(1);
   }

    console.log(chalk.green('Compiled successfully.'));
    console.log();

    console.log('The project was built assuming it is hosted at the server root.');
    console.log();

    console.log('To check the build report open: ');
    console.log(`${chalk.cyan(paths.appBuildReport)}`);
    console.log();

    const build = path.relative(process.cwd(), paths.appBuild);
    console.log('The ' + chalk.cyan(build) + ' folder is ready to be deployed.');
    console.log('You may serve it with a static server:');
    console.log();
    if (useYarn) {
      console.log(`  ${chalk.cyan('yarn')} start`);
    } else {
      console.log(`  ${chalk.cyan('npm')} start`);
    }
    console.log();
  });
}

