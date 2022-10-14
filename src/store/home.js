import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'


const state = {
categoryList:[],
bannerList:[],
floorList:[]

}

const actions = {
    async categoryList({commit}){
        const result = await reqCategoryList()
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },

    async getBanner({commit}){
        let result = await reqGetBannerList()
        if(result.code == 200){
            commit('GETBANNER',result.data)
        }
    },

    async getFloorList({commit}){
        let result = await reqFloorList()
        
        if(result.code == 200){
            commit('GETFLOORLIST',result.data)
            
        }
    }
}

const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value
    },
    GETBANNER(state,value){
        state.bannerList = value
    },
    GETFLOORLIST(state,value){
        state.floorList = value
    }

}

const getters = {

}

export default {
    state,actions,mutations,getters
}