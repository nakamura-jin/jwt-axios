import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Guard from '../services/middleware'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import OwnerHome from '../views/Owner/OwnerHome.vue'
import CheckOut from '../views/CheckOut.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: Guard.auth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    beforeEnter: Guard.auth
  },
  {
    path: '/owner',
    name: 'OwnerHome',
    component: OwnerHome,
    beforeEnter: Guard.auth
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
