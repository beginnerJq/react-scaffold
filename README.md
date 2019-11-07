### React H5

---

_单位使用 px,插件会自动转换为 vw_
_css module 使用 styleName 形式,自动添加 hash_

#### 命令

```
npm start // 启动服务
npm run build // 打包上线
npm run eslint:fix // 根据 eslint 规则修复 fixable
```

#### vscode 插件

> 建议安装

- eslint
- prettier

```
Eslint默认规则

for-direction // 执行 for 循环,子句记数从一个方向
getter-return // get 函数必须有 return
no-async-promise-executor // 禁止将 async 函数作为 Promise 的执行器
no-compare-neg-zero // 禁止与 -0 比较
no-cond-assign // 条件语句中禁止使用赋值运算符作为条件
no-constant-condition // 条件语句中不允许使用常量值
no-control-regex // 正则表达式中不允许使用控制字符
no-debugger // 禁止使用debugger
no-dupe-args // 不允许有重复的函数参数
no-dupe-keys // 对象字面量中不允许有重复的key
no-duplicate-case // 禁止重复的 case 匹配条件
no-empty // 禁止空的语句块
no-empty-character-class // 正则表达式中不允许空字符类
no-ex-assign // 不允许给 catch 捕获的错误重新赋值
no-extra-boolean-cast // 不允许不必要的布尔值转换
no-extra-semi // 不允许多余的分号
no-func-assign // 禁止对函数声明重新赋值
no-inner-declarations // 不允许在块级作用域中 var 或者函数声明
no-invalid-regexp // 正则构造函数中禁止无效的正则字符串
no-irregular-whitespace // 禁止不规则的空格
no-misleading-character-class // 禁止在字符串中使用单个字符占用 4 个字节的字符串,特殊字符等...
no-obj-calls // 禁止将全局对象的属性作为函数调用
no-prototype-builtins // 禁止直接在对象上调用 Object.proto 上的方法
no-regex-spaces // 在正则表达式中不允许存在多个空格
no-sparse-arrays // 禁止稀疏数组
no-unexpected-multiline // 禁止混淆的多行表达式
no-unreachable // 禁止出现执行不到的语句 如 在 return,throw,continue,break 之后的语句
no-unsafe-finally // 在 finally 块中不允许控制流语句
no-unsafe-negation // 不允许否定关系运算符的左数
require-atomic-updates // 禁止由于使用 await 和 yield ,导致竞态条件的赋值
use-isnan // 检查NaN时,只能使用isNaN函数
valid-typeof // typeof 的返回值只能与有效的类型的字符比较

```

vacode配置
```
{
  "eslint.enable": true,  //是否开启vscode的eslint
  "eslint.autoFixOnSave": true, //是否在保存的时候自动fix eslint
  "eslint.options": {    //指定vscode的eslint所处理的文件的后缀
    "extensions": [
      ".js",
      ".ts",
      ".tsx"
    ]
  },
  "eslint.validate": [     //确定校验准则
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```