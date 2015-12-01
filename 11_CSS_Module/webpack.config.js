module.exports= {
	entry: './main.cjsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
	      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
	      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
		]
	}
}