const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');

const webpackConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      name: 'common'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `webpack demo`,
    }),
    new HtmlWebpackPlugin(),
    new WebpackManifestPlugin()
  ]
};

module.exports = webpackConfig;