# webpack.config.js 配置

```javascript
const config = {
    // 入口文件 可以有多个
    entry: './src/index.js',
    // 打包后的文件
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        // 打包规则
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config
```