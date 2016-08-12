import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/Modal.js',
  plugins: [
    nodeResolve({
			jsnext: true
		})
  ],
	moduleName: 'Modal',
  format: 'umd',
  dest: 'build/modal.js',
  sourceMap: true
};
