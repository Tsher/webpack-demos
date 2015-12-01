var HtmlwebpackPlugin= require('html-webpack-plugin');
var OpenBrowserPlugin= require('open-browser-webpack-plugin');

module.exports= {
	entry: './main.coffee',
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Webpack-demos'
		}),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	],
	module: {
		loaders: [{ test: /\.coffee$/, loader: 'coffee'}] 
	}
}