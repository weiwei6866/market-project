import{reGoodsInfo} from '@/api'
import {getUUID} from '@/utils/uuid_token'

const state = {
        goodInfo:{},
        uuid_token:getUUID()
}

const actions = {
    async getGoodInfo({commit},skuid){
    let result = await reGoodsInfo(skuid)
    if(result.code == 200){
        commit('GETGOODINFO',result.data)
    }
    }
}

const mutations = {
    GETGOODINFO(state,value){
        state.goodInfo = value
    }
}

const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },

    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },   
    
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,actions,mutations,getters
}