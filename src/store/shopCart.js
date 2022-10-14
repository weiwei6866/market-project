import {reqAddOrUpdateShopCart,reqCartList,reqDelete,reqUpdateChecked} from '@/api'
const state = {
    cartList:[]
}

const actions = {
    async sendIdAndNum({commit},{skuId,skuNum}){
      
            let result = await reqAddOrUpdateShopCart(skuId,skuNum)
            if(result.code == 200){
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'))
            }
        },


    async getCarList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('GETCARLIST',result.data)
        }
    },


    async deleteOne({commit},skuId){
        let result = await reqDelete(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }   
    },

     deleteAll({dispatch,getters}){
        let arr = []
         getters.cartList.cartInfoList.forEach(element => {
            let promise = element.isChecked==1?dispatch('deleteOne',element.skuId):''
            arr.push(promise)
        });
        return Promise.all(arr)
       
    },

      async chooseOne({commit},{skuId,isChecked}){
        let result = await reqUpdateChecked(skuId,isChecked)
        
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }

    },

    // chooseAll({state,dispatch},isChecked){
    //     let arr = []
    //     state.cartList[0].cartInfoList.forEach((item)=>{
    //         let promise = dispatch('chooseOne',{skuId:item.skuId,isChecked})
    //         arr.push(promise)
    //     })
    //     return Promise.all(arr)
        
    // }

    
    
    
    
    }

const mutations = {
    GETCARLIST(state,value){
        state.cartList = value
    }
}

const getters = {

    cartList(state){
        return state.cartList[0] || {}
       },
}

export default {
    state,actions,mutations,getters
}