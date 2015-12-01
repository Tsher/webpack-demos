var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './main.coffee',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module:{
    loaders: [{ test: /\.coffee$/, loader: 'coffee'}] 
  }
}
