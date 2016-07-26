module.exports = {
	entry: './src/Modal.js',
	output: {
		library: 'Modal',
		path: './build',
		filename: 'modal.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
