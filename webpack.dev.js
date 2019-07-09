const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const autoprefixer = require('autoprefixer')

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader", options: {
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["last 2 versions"]
            },
            sourceMap: true,
            plugins: () => [
              autoprefixer
            ]
          },
        },
        {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }
      ]
    }],
  },
})