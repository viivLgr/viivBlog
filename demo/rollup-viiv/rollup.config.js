import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

// export default {
//     input: 'src/index.js',
//     format: 'umd', // umd 兼容性的规范 AMD  CMD 都可以
//     plugins: [
//         resolve(),
//         babel({
//             exclude: 'node_modules/**'
//         })
//     ],
//     output: {
//         file: 'build/bundle.js',
//         format: 'cjs'
//     }
// }
export default {
    entry: 'src/index.js',
    format: 'umd', // umd 兼容性的规范 AMD  CMD 都可以
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dist: 'build/bundle.js'
}