const path = require('path');
const HtmlWebpackPlugin = require('html=webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './app/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            {test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
            ]}
        ],
    },
}