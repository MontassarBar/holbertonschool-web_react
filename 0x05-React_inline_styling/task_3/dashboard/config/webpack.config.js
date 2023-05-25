const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [
			{
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        loader: 'image-webpack-loader',
      },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		],
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: './dist/index.html',
      title: 'Dashboard',
    }),
    new CleanWebpackPlugin(),
  ],
};
