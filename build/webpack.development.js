const { srcDir, distDir, proxy } = require('../config');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包缓存,大幅提升打包速度
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  output: {
    path: distDir,
    filename: 'scripts/[name].bundule.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: distDir,
    host: 'localhost',
    compress: true,
    port: 666,
    hot: true,
    historyApiFallback: true,
    proxy,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(srcDir, './index.html'),
      cache: true,
    }),
    //new HardSourceWebpackPlugin(),
  ],
};
