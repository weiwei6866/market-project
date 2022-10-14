import {reqAddressInfo,reqOrderInfo} from '@/api'

const state = {
    adress:[],
    goodData:{}
}

const actions = {
    async getTradeInfo({commit}){
      let result = await reqAddressInfo()
    if(result.code == 200){
        commit('GETTRADEINFO',result.data)
    }
    },


    async getTradeInfo2({commit}){
        let result = await reqOrderInfo()
        if(result.code == 200){
            commit('GETTRADEINFO2',result.data)
        }
    }
}

const mutations = {
    GETTRADEINFO(state,value){
        state.adress = value
    },

    GETTRADEINFO2(state,value){
        state.goodData = value
    }
}

const getters = {

}

export default {
    state,actions,mutations,getters
}