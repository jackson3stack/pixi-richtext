var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./example/demo.js",
  output: {
    path: path.resolve(__dirname, './example-dist'),
    filename: "demo.js",
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules\/(?!(huozi))/, loader: "babel-loader" },
      { test: /\.pegjs$/, exclude: /node_modules/, loader: 'pegjs-loader' }
    ]
  },
  plugins: [
    // new webpack.BannerPlugin(fs.readFileSync('./LICENSE.txt', 'utf8')),
  ],
  devServer: {
    contentBase: './example/',
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    inline: true
  }
};
