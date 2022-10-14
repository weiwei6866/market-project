const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
      proxy:{
        '/api':{
            target:'http://gmall-h5-api.atguigu.cn',
            // pathRewrite:{'^api':''}
            //该行为是设置代理服务器
        },
      },
  },
})
