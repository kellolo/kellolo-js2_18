let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script/[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    },
    new HtmlWebpackPlugin({
      template: './public/product.html'
    }),
    [
      new ExtractTextPlugin('style.css')
    ]
  )],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader'],
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
       },
    ],
  },
  devServer: {
    port: 3000,
    open: false,
  }
};