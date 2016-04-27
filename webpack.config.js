var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    './src/js/index'
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src', 'js'), loaders: ['babel-loader', 'eslint-loader']}
    ]
  }
};
