const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: {  // входной файл для сервера (если index.js, то можно не указывать)
    //     main: './src/app.js'
    // },
    output: {  // выходной файл для скрипта
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
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		open: false,
	} 
};