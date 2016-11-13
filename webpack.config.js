const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.mustache$/,
            loader: 'mustache?noShortcut',
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015'],
            },
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"],
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist', 'index.html'),
            title: 'News API',
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],
    root: [path.resolve('./')],
};