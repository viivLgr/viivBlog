const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定输入文件名
    output: {
        filename: "main.js"
    },
    resolve: {
        // 自动解析以下拓展，当我们要引入 src/index.ts 的时候，只需要写 src/index 即可
        extensions: [".tex", ".ts", ".js"]
    },
    module: {
        // 配置以 .ts/.tsx结尾的文件都用 ts-loader解析
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    // 指定编译后是否生成 source-map ，这里判断如果是生产打包环境则不生产 source-map
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    // 使用 webpack-dev-server 进行本地开发调试
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 8089
    },
    plugins: [
        // 编译之前先删除 dist 文件夹
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        // 指定编译需要用模版
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}