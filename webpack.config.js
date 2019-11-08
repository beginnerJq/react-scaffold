const { join } = require('path');
const { srcDir } = require('./config');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || argv.webpackEnv || 'development';
//动态的加载上线环境 开发环境
const _mergeConfig = require(`./build/webpack.${_mode}.js`);
//判断一下当前是否是上线环境
const _modeProduction = _mode === 'production';
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

let isMinicss = _modeProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const common = smp.wrap({
  context: __dirname, // to automatically find tsconfig.json
  entry: join(srcDir, './index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        exclude: /node_modules/,
        use: [
          isMinicss,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        // 转换 node_modules 中的 less
        test: /\.less$/,
        exclude: /src/,
        use: [
          isMinicss,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [isMinicss, 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: !_modeProduction, // 开发环境下开启 babel 缓存
            },
          },
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: _modeProduction
                ? 'images/[name].[contenthash:5].[ext]'
                : 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      reportFiles: ['src/**/*.{ts,tsx}'],
      checkSyntacticErrors: true,
      async: false,
    }),
    new MiniCssExtractPlugin({
      filename: _modeProduction
        ? 'styles/[name].[contenthash].css'
        : 'styles/[name].css',
      chunkFilename: _modeProduction
        ? 'styles/[id].[contenthash].css'
        : 'styles/[id].css',
    }),
    new WebpackBuildNotifierPlugin({
      title: 'mining-h5 compile success',
      suppressSuccess: true,
    }),
    new ProgressBarPlugin(),
  ],
});

module.exports = merge(common, _mergeConfig);
