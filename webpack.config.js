const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		app: "./src/index"
	},
	devtool: "source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin() // Enable HMR
	],
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	devServer: {
		hot: true
	}
}