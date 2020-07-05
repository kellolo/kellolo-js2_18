const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //...
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            },

        ],
    },
    
    devServer: {
        port: 8080,
        open: false,
        proxy: {
            "/api": {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api': ''},
                secure: false,
                changeOrigin: true
            }
        }
    }
};