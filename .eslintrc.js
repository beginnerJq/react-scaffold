/**
 * 0 1 2为错误等级
 */
module.exports = {
  // 指定解析器
  parser: 'babel-eslint',
  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  // 指定脚本的运行环境
  env: {
    browser: true,
    es6: true,
  },
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告
  // 所以需要定义这些额外的全局变量
  globals: {
    process: true,
  },
  // 默认的规则结合 prettier 规则  参考 https://eslint.org/docs/rules/
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // 启用的规则及其各自的错误级别
  rules: {
    'prettier/prettier': 'error',
    // 最大块嵌套深度为 5 层
    'max-depth': ['error', 5],
    // 字符串必须使用单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true, // 允许使用模板字符串
      },
    ],
    // 不能在块作用域内 var 定义的变量
    'block-scoped-var': 2,
    // 变量名必须使用驼峰式
    camelcase: 2,
    // 禁止函数 if ... else switch 的复杂度超过 10
    complexity: ['error', 10],
    // 变量导入未使用
    'no-unused-vars': 0,
    // 禁止 == 和 != 与 null 做比较，必须用 === 或 !==
    'no-eq-null': 2,
  },
};
