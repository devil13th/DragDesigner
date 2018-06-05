// __dirname是node.js的全局变量，它指向当前执行脚本所在的目录。
module.exports ={
  devtool: 'false',
  entry:[__dirname + '/script/componentsDic.js'],
  output:{
    path:__dirname+'/dist',
    filename:'bundle.js'
  },
  mode:'production', // 生产模式production  开发模式development
  devServer: {
    contentBase: __dirname,//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
  

}