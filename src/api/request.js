//对于axios进行二次封装
import axios from 'axios'
import store from '@/store'



const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

requests.interceptors.request.use((config)=>{
    
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }

    if(localStorage.getItem('TOKEN')){
        config.headers.token = localStorage.getItem('TOKEN')
    }
   
    return config
})

requests.interceptors.response.use((res)=>{



    return res.data

},(Error)=>{
   return Promise.reject(new Error('faile'))
})



export default requests



















//对外暴露
