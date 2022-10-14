import {reqGetCode,reqRegister,reqLogin,reqUserInfo,reqLogOut} from '@/api'


const state = {
    code:'',
    tokenData:{},
    userInfo:{}
}

const actions = {
   async sendCode({commit},phone){
      let result = await reqGetCode(phone) 
      if(result.code == 200){
          commit('SENDCODE',result.data)
          return 'ok'
      }else{
          return Promise.reject(new Error('faile'))
      }
    },

    async getRegister({commit},{phone,password,code}){
        let result = await reqRegister({phone,password,code})
        if(result.code == 200){
            console.log(result,'注册成功');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    async login({commit},{phone,password}){
        let result = await reqLogin({phone,password})
        if(result.code == 200){
             commit('LOGIN',result.data)
            console.log(result,'tokne获取');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
        
    },

    async getUserData({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('GETUSERDATA',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    async logOut({commit}){
        let result = await reqLogOut()
        if(result.code == 200){
            commit('LOGOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}

const mutations = {
    SENDCODE(state,value){
        state.code = value
    },
    LOGIN(state,value){
        state.tokenData = value
    },

    GETUSERDATA(state,value){
        state.userInfo = value
    },
    LOGOUT(state){
        state.userInfo = '',
        state.tokenData = '',
        localStorage.removeItem('TOKEN')
    }
}

const getters = {

}

export default {
    state,actions,mutations,getters
}