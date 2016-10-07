const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: [
      path.resolve('app')
    ],
    alias: {
      config: path.resolve('config', 'application')
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: path.resolve('app', 'application.jsx'),
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('application.css'),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  target: 'electron',
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
