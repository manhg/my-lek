var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './js/main.js',
    'styles': './css/main.stylus'
  },
  output: {
    path: path.dirname(__dirname) + '/assets/static/gen',
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader' },
      { test: /\.stylus/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!stylus-loader') },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader') },
      { test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        loader: 'file' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};