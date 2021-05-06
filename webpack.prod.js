const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    libraryTarget: 'var',
    library: 'Client',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
};
