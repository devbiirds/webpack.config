const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: '/*.js',
        exclude: '/node_modules/',
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
