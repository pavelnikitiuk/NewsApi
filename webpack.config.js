const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill','whatwg-fetch', path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'docs'),
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
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "IE 10"]}!sass-loader',
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'docs', 'index.html'),
            title: 'News API',
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        // new webpack.ProvidePlugin({
        //     'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        //     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        // }),
    ],
    root: [path.resolve('./')],
};