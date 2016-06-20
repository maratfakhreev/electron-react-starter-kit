const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: path.resolve('./app'),
    alias: {
      config: './config/application'
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: './app/application.jsx',
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('application.css')
  ],
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
