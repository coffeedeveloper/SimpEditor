module.exports = {
  entry: './app.js',
  output: {
    path: './build',
    filename: 'client.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
};
