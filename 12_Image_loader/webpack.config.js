module.exports= {
	entry: './main.coffee',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{test: /\.coffee$/, loader: 'coffee'},
		]
	}
};