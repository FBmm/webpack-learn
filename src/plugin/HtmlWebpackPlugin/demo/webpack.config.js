var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `webpack demo`,
    }),
    new HtmlWebpackPlugin({
      title: `webpack demo ${new Date().toLocaleString()}`,
      template: 'index.html',
      filename: 'test.html',
      hash: true
    }),
  ]
};

module.exports = webpackConfig;