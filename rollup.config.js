// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [{
  output: {
    file: 'build/science.js',
    name: 'science',
    format: 'umd'
  }
  plugins: [
    resolve(),
    commonjs(),
    babel({
        exclude: 'node_modules/**'
    })
  ]
}, {
  output: {
    file: 'build/science.mjs',
    name: 'ChartHierarchical',
    format: 'esm'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
        exclude: 'node_modules/**'
    })
  ]
}];
