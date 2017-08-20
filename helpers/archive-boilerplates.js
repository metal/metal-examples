var chalk = require('chalk');
var zipFolder = require('zip-folder');
var bundleName = 'boilerplates';
var archiveName = bundleName + '.zip';
var from = './' + bundleName;
var to = './' + archiveName;

console.log('Archiving ' + chalk.cyan(archiveName));

zipFolder(from, to, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Archive ' + chalk.green(archiveName) + ' was successfully created!');
    console.log();
  }
});
