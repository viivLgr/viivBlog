# html-webpack-plugin 用法总结

## 安装

```shell
yarn add html-webpack-plugin
```

## 使用

webpack.config.js

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name, title) {
    return {
        title: APP_CONFIG.NAME + '-' + title || '标题',
        template: './src/view/' + name + '.html',
        filename: name + '.html',
        favicon: './src/img/ico/' + APP_CONFIG.LOGO + '.ico',
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}

module.exports = {
    plugins: [
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页'))
    ]
}
```

页面中使用，可以获取到HtmlWebpackPlugin中设置的属性

```html
<title>
    <%= htmlWebpackPlugin.options.title%>
</title>
```

## 配置属性

### title

生成html文件的标题

### filename

就是html文件的文件名，默认是index.html

如果你设置的 title 和 filename 于模板中发生了冲突，那么以 title 和 filename 的配置值为准。

### template

指定你生成的文件所依赖哪一个html文件模板，模板类型可以是`html`、`jade`、`ejs`等。但是要注意的是，如果想使用自定义的模板文件的时候，你需要安装对应的`loader`哦。

举例子：

安装 loader

```shell
npm install jade-loader --save-dev
```

webpack.config.js

```javascript
...
loaders: {
    ...
    {
        test: /\.jade$/,
        loader: 'jade'
    }
}
plugins: [
    new HtmlWebpackPlugin({
        ...
        jade: 'path/to/yourfile.jade'
    })
]
```

### favicon

给你生成的 html 文件生成一个 favicon ,值是一个路径

```javascript
// webpack.config.js
plugins: [
    new HtmlWebpackPlugin({
        ...
        favicon: 'path/to/my_favicon.ico'
    })
]
```

然后在生成的 html 中就有了一个 link 标签

```html
<link rel="shortcut icon" href="example.ico">
```

### inject

`inject`有四个值： `true` `body` `head` `false`

`true`: 默认值，script 标签位于 html 文件的 body 底部

`body`: script 标签位于 html 文件的 body 底部

`head`: script 标签位于 html 文件的 head 中

`false`: 不插入生成的js文件，这个几乎不会用到的

### minify

使用`minify`会对生成的`html`文件进行压缩。默认是`false`。`html-webpack-plugin` 内部集成了 `html-minifier`，因此，还可以对`minify`进行配置。

> 注意，虽然`minify`支持`BooleanObject`，但是不能直接这样写：`minify: true`，这样会报错 `ERROR in TypeError: Cannot use 'in' operator to search for 'html5' in true`，使用时候必须给定一个 `{ }` 对象

```javascript
// webpack.config.js
...
plugins: [
    new HtmlWebpackPlugin({
        ...
        minify: {
            removeAttributeQuotes: true // 移除属性的引号
        }
    })
]
```

### cache

默认是`true`的，表示内容变化的时候生成一个新的文件。

### showErrors

当webpack报错的时候，会把错误信息包裹再一个`pre`中，默认是`true`。

### chunks

chunks主要用于多入口文件，当有多个入口文件，那就会编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件


```javascript
entry: {
    index: path.resolve(__dirname, './src/index.js'),
    devor: path.resolve(__dirname, './src/devor.js'),
    main: path.resolve(__dirname, './src/main.js')
}

plugins: [
    new httpWebpackPlugin({
        chunks: ['index', 'main']
    })
]
```

那么编译后：

```html
<script type=text/javascript src="index.js"></script>
<script type=text/javascript src="main.js"></script>
```

- 如果你没有设置chunks选项，那么默认是全部显示

### excludeChunks

排除掉一些js

```javascript
excludeChunks: ['devor.js']
// 等价于上面的
```