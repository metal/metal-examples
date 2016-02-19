module.exports = {
	entry: './demos/Modal.js',
	output: {
      path: './build',
      filename: 'modal.js'
  },
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      loader: 'babel',
	      query: {
	        presets: ['metal']
	      }
	    }
	  ]
	}
};
