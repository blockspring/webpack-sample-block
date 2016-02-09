var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname),
    filename: 'block.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      }
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  externals: [
    'blockspring',
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}
