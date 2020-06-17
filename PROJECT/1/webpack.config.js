const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: {
    //     main: './src/app.js'
    // },
    output: {
        filename: 'script/bundle.js'
    },
    //...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // {
            //     test: /\.js$/i
            //     use:....
            // }
        ],
    },
    devServer: {
      port: 3000,
      open: false,
    }
  };