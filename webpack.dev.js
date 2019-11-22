const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  watch: true,
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
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ['last 2 versions', 'ie >= 9']
              },
              sourceMap: true,
              plugins: () => [
                autoprefixer
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
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
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new VueLoaderPlugin()*/
  ],
  resolve: {
    alias: {
      //vue: 'vue/dist/vue.js',
      //jquery: 'jquery/dist/jquery.js' 
    }
  }
};
