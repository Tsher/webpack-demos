module.exports= {
	entry: ['./index.cjsx', 'file?name=index.html!jade-html!./index.jade']
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: 'style-loader!css-loader!stylus-loader'},
			{ test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
			{ test: /\.coffee$/, loader: 'coffee' },
		]
	}
}