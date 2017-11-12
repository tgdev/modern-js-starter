const merge = require('webpack-merge');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  }
});
