module.exports= {
	entry: './main.coffee',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
			{test: /\.coffee$/, loader: 'coffee' },
		]
	}
};