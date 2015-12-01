var webpack= require('webpack')

module.exports= {
	entry: {
		app: './main.coffee',
		vendor: ['jquery'],
	},
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: 'coffee'},
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	]
}