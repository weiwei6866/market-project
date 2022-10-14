import {reqGetSearchInfo} from '@/api'

const state = {
    searchList:{}
}

const actions = {
    async getSearchList({commit},params){
       let result = await reqGetSearchInfo(params) 
       if(result.code == 200){
           commit('GETSEARCHLIST',result.data)
       }
    }
}

const mutations = {
    GETSEARCHLIST(state,value){
        state.searchList = value
    }
}

const getters = {
  goodsList(state){
    return state.searchList.goodsList || []
  },
  
  attrsList(state){
      return state.searchList.attrsList || []
  },
  trademarkList(state){
      return state.searchList.trademarkList || []
  },
  searchList(state){
        return state.searchList || {}
  }

  
  

}

export default {
    state,actions,mutations,getters
}