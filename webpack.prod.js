const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ['last 2 versions', 'ie >= 9']
              },
              sourceMap: false,
              plugins: () => [
                autoprefixer
              ]
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
