import { nodeResolve }  from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { babel,getBabelOutputPlugin } from "@rollup/plugin-babel"


export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/index.cjs',
        format: 'cjs',   
    },{
        file: 'dist/index.m.js',
        format: 'es',
    },{
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'monitor'
    }],
    plugins: [
        nodeResolve(),
        commonjs(),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
            allowAllFormats: true, //允许打包后的所有格式都进行babel处理
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        })
    ]
}