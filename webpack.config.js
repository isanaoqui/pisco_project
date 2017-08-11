const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [
      {
       test: /\.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
};
