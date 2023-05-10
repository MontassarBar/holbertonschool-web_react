const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true
},
mode: 'development',
devtool: 'inline-source-map',
plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './dist/index.html',
})],
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader', 'image-webpack-loader']
      },
    ],
  },
};
