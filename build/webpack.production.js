const { srcDir, distDir, buildPublicPath } = require('../config');
const { join } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  output: {
    path: distDir,
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    publicPath: buildPublicPath,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxSize: 512000,
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'all',
        },
        antd: {
          name: 'chunk-antd-mobile', // 单独将 antd 拆包
          test: /[\\/]node_modules[\\/]antd-mobile[\\/]/,
          priority: 20,
        },
        commons: {
          name: 'chunk-commons',
          test: join(srcDir, './components'),
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`,
    },
    moduleIds: 'hashed', // 更好进行长缓存
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(srcDir, './index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime~.*\.js$/,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
};
