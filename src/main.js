import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

//引入typenav并且注册成全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import Carsoul from '@/components/Carsoul'
Vue.component('Carsoul',Carsoul)

//注册vuex
import store from '@/store'

//引入mock
import '@/mock/mockServe'

//引入ui
import {Pagination,MessageBox} from 'element-ui'
Vue.use(Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入api
import *as API from "@/api"


// 引入swiper样式
import 'swiper/css/swiper.css'













Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
    Vue.prototype.$api = API
  },
  mounted() {
    
  },

  
}).$mount('#app')
