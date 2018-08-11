 import Vue from 'vue'

 import VueRouter from 'vue-router'

 Vue.use(VueRouter)


 import Home from '../components/pages/Home/Home.vue'
 import Classify from '../components/pages/Classify/Classify.vue'
 import ClassifyItem from '../components/pages/Classify/Classify-item.vue'
 import Buycar from '../components/pages/Buycar/Buycar.vue'
 import Mine from '../components/pages/Mine/Mine.vue'
 import Login from '../components/pages/Login/Login.vue'
 import Register from '../components/pages/Register/Register.vue'
 import NotFound from '../components/pages/NotFound/NotFound.vue'
 import Search from '../components/pages/Search/Search.vue'

 import store from '../store'

 let routes = [{
     path: '/',
     name: 'home',
     component: Home
   },
   {
     path: '/classify',
     name: 'classify',
     component: Classify
   },
   {
    path: '/classify-item',
    name: 'classifyItem',
    component: ClassifyItem
  },
   {
     path: '/buycar',
     name: 'buycar',
     component: Buycar,
   },
   
   {
     path: '/mine',
     name: 'mine',
     component: Mine
   },
   {
     path: '/not-found',
     name: 'not-found',
     component: NotFound
   },

   {
     path: '/login',
     name: 'login',
     component: Login
   },
   {
     path: '/register',
     name: 'register',
     component: Register
   },
   {
    path: '/search',
    name: 'search',
    component: Search
  },
   {
     path: '**',
     redirect: {
       name: 'not-found'
     }
   }






   // { path: '/classify', redirect:{ name: 'classify' } },
   // { path: '/', name: 'home', component: Home },
 ]

 const router = new VueRouter({
   mode: 'history',
   routes
 })

 export default router
