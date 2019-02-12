# rollup 使用

[rollup中文文档](https://www.rollupjs.com/guide/zh)

Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码;

Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。

ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。

- rollup 功能单一（模块化打包），webpack 功能强大

## 安装

`npm install --global rollup` 全局安装

## 配置

rollup.config.js

```javascript
export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    }
}
```
