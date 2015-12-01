module.exports= {
	entry: './main.coffee',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: 'coffee'},
		]
	},
};