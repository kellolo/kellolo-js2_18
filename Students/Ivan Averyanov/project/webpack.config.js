let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script/bundle.js',
    //path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    },
    new HtmlWebpackPlugin({
      template: './public/product.html'
    }),
    new ExtractTextPlugin('styles.css'),
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
          ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        'style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: false,
  }
};