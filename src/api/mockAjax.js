//对axios进行二次封装为什么用到二次封装？主要想用请求和响应拦截器
import axios from 'axios'



const requests = axios.create({
    //发请求当中路径会自带api,所以以后发请求可以省略写api
    baseURL:'/mock',
    timeOut:5000
})
//请求拦截器可以在发请求之前可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里由一个属性很重要，header请求头
    //进度条开始

    return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数，服务器响应数据回来后可以做一些事情

    return res.data
},(Error)=>{
    return Promise.reject(new Error('faile'))
})

export default requests
