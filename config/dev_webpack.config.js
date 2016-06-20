const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: path.resolve('./app'),
    alias: {
      config: './config/application'
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: [
    'webpack/hot/dev-server',
    './app/application.jsx'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    contentBase: './dist',
    publicPath: 'http://localhost:8080/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel'
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
