module.exports= {
	entry: './main.cjsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.cjsx$/, loaders: ['coffee', 'cjsx'] },			
		]
	},
	externals: {
		'data': 'data'
	}
}