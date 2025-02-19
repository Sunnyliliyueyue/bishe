import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {show:true}
  },
  {
    path: '/search/:keyword',
    component: Search,
    meta: {show:true},
    name: "search"
  },
  {
    path: '/login',
    component: Login,
    meta: {show:false}
  },
  {
    path: '/register',
    component:Register,
    meta: {show:false}
  },
  
  {
    path: '/',
    redirect: '/home',
    meta:{show:true}
  }
]

const router = new VueRouter({
  routes
})

export default router
