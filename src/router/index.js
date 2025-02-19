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
    components: Home
  },
  {
    path: '/login',
    components: Login
  },
  {
    path: '/register',
    components:Register
  },
  {
    path: '/search',
    components:Search
  },
]

const router = new VueRouter({
  routes
})

export default router
