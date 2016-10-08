const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: [
      path.resolve('./app')
    ],
    alias: {
      config: path.resolve('config', 'application')
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: [
    'webpack/hot/dev-server',
    path.resolve('app', 'application.jsx')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: 'http://localhost:8080/',
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ],
  target: 'electron',
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: [/node_modules/],
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        loader: 'url'
      }
    ]
  },
  postcss: postcssConfig
};
