import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import Myorder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

import store from '@/store'

const router = new VueRouter({
    routes:[
        {
            path:'/search/:keyword?',
            name:'search',
            component:Search,
            meta:{show:true}
        },
        {
            path:"/home",
            name:"home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/register",
            name:"register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"/login",
            name:"login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/detail/:skuid?",
            name:"detail",
            component:Detail,
            meta:{show:false}
        },
        {
            path:"/addcartsuccess",
            name:"addcartsuccess",
            component:AddCartSuccess,
            meta:{show:false}
        },
        {
            path:"/shopcart",
            name:"shopcart",
            component:ShopCart,
            meta:{show:false}
        },
        {
            path:"/trade",
            name:"trade",
            component:Trade,
            meta:{show:false},
            beforeEnter:(to,from,next)=>{
                if(from.path == '/shopcart'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path:"/pay",
            name:"pay",
            component:Pay,
            meta:{show:false},
            beforeEnter:(to,from,next)=>{
                if(from.path == '/trade'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path:"/paysuccess",
            name:"paysuccess",
            component:PaySuccess,
            meta:{show:false},
            beforeEnter:(to,from,next)=>{
                if(from.path == '/pay'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path:"/center",
            name:"center",
            component:Center,
            meta:{show:false},
            children:[
                {
                    path:"myorder",
                    component:Myorder,
                    name:"myorder"
                },
                {
                    path:"grouporder",
                    component:GroupOrder,
                    name:"grouporder"

                },
                {
                    path:'/center',
                    redirect:'/center/myorder' 
                }
            ]
        },
        {
            path:'*',
            redirect:'/home'
        }
        
    ],

    

    scrollBehavior: function (to, from, savedPosition) {
        return { y: 0 }
    }
})



router.beforeEach(async (to, from, next) => {
    next()
    let name =  store.state.user.userInfo.name
    let token = localStorage.getItem('TOKEN')
    if(token){
        if(to.path == '/login'){
            next('/search')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('getUserData')
                    next()
                } catch (error) {
                    await store.dispatch('logOut')
                    next('/login')
                }
            }
        }
    }else{
        if(to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1){
            next(`/login?redirect=${to.path}`)
        }else{
            next()
        }
    }
})

export default router