const postcssPresetEnv = require('postcss-preset-env'); // 使用 css 新特性
const postcssNested = require('postcss-nested'); // css 可以类似 less 那样嵌套
const postcssCssVariables = require('postcss-css-variables'); // 编译变量
const postcssPxToViewport = require('postcss-px-to-viewport'); // 将 px 转换成 vw
module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      autoprefixer: { grid: 'autoplace' },
    }),
    postcssNested(),
    postcssCssVariables(),
    postcssPxToViewport({
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    }),
  ],
};
