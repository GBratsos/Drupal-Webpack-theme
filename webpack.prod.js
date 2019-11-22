const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimize: true,
    minimizer: [
    new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
    }),
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
          'sass-loader'
        ]
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
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      /*{
        test: /\.vue$/,
        loader: 'vue-loader'
      },*/
    ],
  },
  plugins: [
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new VueLoaderPlugin(),*/
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
  /*resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      jquery: 'jquery/dist/jquery.js'
    }
  }*/
};
