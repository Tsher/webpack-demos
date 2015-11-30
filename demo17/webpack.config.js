module.exports= {
  entry: ['./index.cjsx', 'file?name=index.html!jade-html!./index.jade'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
    ]
  }
}