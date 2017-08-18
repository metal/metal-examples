const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const paths = require('./paths');
const packageJson = require(paths.appPackageJson);
const packageName = packageJson.publicName;

const entries = {};
entries[packageName] = paths.appIndexJs;

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',	
	// We specify the entry point according to the package settings
	entry: entries,
	// the output will be placed in the defined build directory
	output: {
		path: paths.appBuild,
		filename: '[name].js',
		library: ['[name]']
	},
	// external loaders
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}, 
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader'}, 
					{ loader: 'css-loader' }, 
					{ loader: 'sass-loader' }
				]
			}			
		]
	},
	// plugins
	plugins: [
		new Visualizer({
			filename: `../${paths.appBuildReport}`
		})
	]
};
