const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const mode = process.env.NODE_ENV || 'development';

const userscriptHeader = fs.readFileSync(
	path.resolve(__dirname, 'UserScript-header.txt'),
	'utf8'
);

module.exports = {
	mode: mode,
	entry: './src/main.ts',
	output: {
		path: __dirname,
		filename: 'archive.today-redirect.user.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
	devtool: mode === 'production' ? 'inline-source-map' : false,
	plugins: [
		new webpack.BannerPlugin({
			banner: userscriptHeader,
			raw: true,
			entryOnly: true,
			stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
		}),
	],
};