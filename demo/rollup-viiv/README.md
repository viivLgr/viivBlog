# rollup

## 安装rollup

```shell
yarn add --save-dev rollup rollup-plugin-node-resolve rollup-plugin-babel @babel/core@7 babel-plugin-external-helpers babel-preset-latest
```

## 配置.babelrc

```json
{
    "presets": [
        ["latest", {
            "es2015": {
                "modules": false
            }
        }]
    ],
    "plugins": ["external-helpers"]
}
```

## rollup 配置

```javascript
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js',
    format: 'umd',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'build/bundle.js'
}
```