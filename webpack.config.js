/* eslint-env node */
// webpack.config.js

var config = {
  entry: __dirname + '/src/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'string-arrays-equal',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
