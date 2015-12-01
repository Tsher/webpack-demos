module.exports= {
	entry: {
		bundle1: './main1.coffee',
		bundle2: './main2.coffee'
	},
	output: {
		filename: '[name].js'
	},
	module:{
		loaders: [
			{test: /\.coffee$/, loader: 'coffee'},
		]
	}
}