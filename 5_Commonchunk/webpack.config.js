var CommonChunkPlugin= require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports= {
	entry: {
		bundle1: './main1.cjsx',
		bundle2: './main2.cjsx'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.cjsx$/, loaders: ['coffee', 'cjsx']}
		]
	},
	plugins: [
		new CommonChunkPlugin('init.js')
	]
}