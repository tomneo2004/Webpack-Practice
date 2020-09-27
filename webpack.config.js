const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry:{
        index: path.resolve(__dirname, "src", "index.js")
    },
    output:{
        path: path.resolve(__dirname, "build"),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader','css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                //use: ['style-loader', 'css-loader', 'sass-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                use: ['babel-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        splitChunks: { chunks: "all"}
    }
};