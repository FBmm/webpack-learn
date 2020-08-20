const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [
  //   new UglifyJsPlugin({
  //     compress: {
  //       drop_console: true,
  //     }
  //   })
  // ]
}