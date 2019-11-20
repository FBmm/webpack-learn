var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: `webpack demo ${new Date().toLocaleString()}`,
      template: 'index.html',
      filename: 'test.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    })
  ]
};

module.exports = webpackConfig;