const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /\.(css|scss)$/,
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: 'body',
        filename: 'index.html',
        template: './src/index.html',
    })],
};