 const merge = require('webpack-merge');
 // 混淆压缩js插件
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.conf.js');

 module.exports = merge(common, {
  mode:'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
 });