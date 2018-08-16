var Path = require('path')
var Webpack = require('webpack')
// 打包清除指定目录插件
var CleanWebpackPlugin = require('clean-webpack-plugin')
// 自动生成html插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取css的插件
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry:{
    'app':Path.resolve(__dirname,'./src/index.js')
  },
  output:{
    // 打包的文件名
    filename:'[name].bundle.js',
    // 打包文件的输出位置
    path:__dirname+'/dist'
    // publicPath:'./dist/',
    //提取第三方代码的设置
    // vonder:['jquery']
  },

  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
       
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader'
        },
        exclude:'/node_modules/' // 在规则之外的文件
      },
      {
        test:/\.less$/,
        use:[
          {loader:'style-loader'},
          {loader: 'css-loader'},
          {loader:'less-loader'}
        ]
      },
      // 加载图片
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/,
        use:['file-loader']
      },
      // 加载字体图标
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:['file-loader']
      },

    ]
  },
  plugins:[
    // 打包清除的文件
    new CleanWebpackPlugin(['dist']), // 每次打包都清除指定目录
    // 提取css文件
    // new ExtractTextWebpackPlugin({
    //   filename:'[name].bundle.css' // 给提取的css文件命名
    // }),
    // 提取公共代码
    // new Webpack.optimization.splitChunks(),
    /*// 提取第三方
    new config.optimization.splitChunks({
      names:['vondor'], /// 对应output中的vonder
      minChunks: Infinity
    }),*/
    new HtmlWebpackPlugin({ // 自动生成html文件  
      title: 'myproduct' // 定义html文件的title
    }), 
  ]
}
