module.exports = {
    entry: {
        index: "./ts/index"
    },
    output: {
        filename: "[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ["es2015"]
            //         }
            //     },
            //     exclude: /node_modules/
            // },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
        // loader: [
        //     {
        //         test: /\.js$/,
        //         loader: "babel",
        //         exclude: "node_module",
        //         query: {
        //             presets: ["es2015"]
        //         }
        //     }
        // ]
    }
}