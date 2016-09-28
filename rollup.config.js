module.exports = {
  plugins: [
    require('rollup-plugin-node-resolve')({
      jsnext: true,
      main: true,
      browser: true,
    }),
    require('rollup-plugin-commonjs')({
      include: 'node_modules/**',
    }),
  ],
};
