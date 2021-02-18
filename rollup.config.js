// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default function Config() {
  return {
    input: './src/index.js',
    output: [
      {
        sourcemap: true,
        exports: 'named',
        file: pkg.module,
        format: 'esm',
      },
      {
        sourcemap: true,
        exports: 'named',
        file: pkg.main,
        name: pkg.global,
        format: 'umd',
      },
      {
        sourcemap: true,
        exports: 'named',
        file: pkg.unpkg,
        name: pkg.global,
        format: 'umd',
        plugins: [terser()],
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs(),
      replace({
        // eslint-disable-next-line no-undef
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'production',
        __VERSION__: JSON.stringify(pkg.version),
      }),
    ],
  };
}
