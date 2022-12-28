const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //取消Vue的语法检查
  lintOnSave: false,

  devServer: {
    proxy: {
      //  '/user'为请求前缀，用于检测是否使用代理
      '/user': {
        target: 'http://localhost:3000', //目标路径
        ws: true, //是否支持websocket
        changeOrigin: true //控制请求头中的host值
      },
    }
  },

})
