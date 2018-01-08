import babel from 'rollup-plugin-babel';

// rollup.config.js
export default {
    input: 'src/index.js',
    output: {
        file: 'science.v1.js',
        format: 'umd',
        name: 'science'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};