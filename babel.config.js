module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    [
      'i18next-extract',
      {
        locales: ['zh'],
        discardOldKeys: true,
        useI18nextDefaultValue: false,
        keyAsDefaultValue: true,
      },
    ],
    [
      'react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        filetypes: {
          '.pcss': {},
        },
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
  ],
};
