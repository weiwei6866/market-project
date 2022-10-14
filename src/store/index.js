import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import home from './home'
import search from './search'
import user from './user'
import shopCart from './shopCart'
import trade from './trade'
import detail from './detail'

const store = new Vuex.Store({
   modules:{
    home,search,user,shopCart,trade,detail
   }
})

export default store