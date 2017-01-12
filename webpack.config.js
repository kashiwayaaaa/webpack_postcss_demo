const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    entry: ['./js/entry.js'],
  },

  output: {
    path: './dist/',
    filename: "js/[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
          loader: 'babel'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },

  babel: {
    presets: ['es2015'],
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new ExtractTextPlugin('./css/sample.css'),
  ]
};
