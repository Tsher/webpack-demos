var webpack= require('webpack')
var path= require('path')

module.exports= {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./index.cjsx',
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/static'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{ test: /\.cjsx?$/, loaders: ['coffee', 'cjsx'], include: path.join(__dirname, '.') },
		]
	}
}