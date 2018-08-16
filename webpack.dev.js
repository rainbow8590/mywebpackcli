 const webpack = require('webpack')
 const merge = require('webpack-merge');
 const common = require('./webpack.conf.js');

 module.exports = merge(common, {
   mode:'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './',
     inline: true,
     hot: true
   },
   plugins:[
      // 热更新插件
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
 });