const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: ['babel-polyfill', 'whatwg-fetch', path.resolve(__dirname, 'src', 'index.js')],

	output: {
		path: path.resolve(__dirname, 'docs'),
		publicPath: env === 'development' ? '/' : false,
		filename: '[name].bundle.js',
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
		new webpack.NoErrorsPlugin(),
		// new CleanWebpackPlugin('docs'),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'docs', 'index.html'),
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	},
		// }),
		new webpack.DefinePlugin({
			'enviroment': env,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'main',
			children: true,
			minChunks: 2,
			async: true,
		}),
	],

	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, 'docs'),
		hot: true,
	},

	root: [path.resolve('./')],

	devtool: env === 'development' ? 'source-map' : false,
};
