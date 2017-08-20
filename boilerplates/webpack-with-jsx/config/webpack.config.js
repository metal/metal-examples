const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const paths = require('./paths');
const packageJson = require(paths.appPackageJson);
const packageName = packageJson.publicName;

const plugins = [
  new Visualizer({
    filename: `../${paths.appBuildReport}`
  })
];

const entry = [
  paths.appIndexJs
];

// We extend the code with the webpack HMR module that a 
// client side needs to reload the modules in the browser shamelessly
if (process.env.NODE_ENVIRONMENT !== 'production') {
  entry.unshift(require.resolve('react-dev-utils/webpackHotDevClient'));
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {

  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map', 

  // We specify the entry point according to the package settings
  entry: entry,

  // the output will be placed in the defined build directory
  output: {
    path: paths.appBuild,
    filename: `${packageName}.js`,
    library: [packageName]
  },

  // external loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  plugins: plugins,
  node: {
    fs: 'empty',
    child_process: 'empty',
    readline: 'empty'
  }
};
