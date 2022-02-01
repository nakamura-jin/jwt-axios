import Vue from 'vue'
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router'
import Guard from '../services/middleware'
import Home from '../views/Home.vue'
import Register from '../views/Auth/Register.vue'
import Login from '../views/Auth/Login.vue'
import Detail from '../views/Detail.vue'
import Purchased from '../views/Purchased.vue'
import Gift from '../views/Gift.vue'
import OwnerHome from '../views/Owner/OwnerHome.vue'
import OwnerMenu from '../views/Owner/OwnerMenu.vue'
import OwnerMenuCreate from '../views/Owner/OwnerMenuCreate.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import AllUserLists from '../views/Admin/AllUserLists.vue'
import AdminSendEmail from '../views/Admin/AdminSendEmail.vue'
import AdminNews from '../views/Admin/AdminNews.vue'
import RegistrationComplete from '../views/Auth/RegistrationComplete.vue'
import ChangePassword from '../views/UserSetting/ChangePassword.vue'
import ChangeEmail from '../views/UserSetting/ChangeEmail.vue'

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
    path: '/purchased',
    name: 'Purchased',
    component: Purchased,
  },
  {
    path: '/gift/:url',
    name: 'Gift',
    component: Gift,
  },
  {
    path: '/owner/:id',
    name: 'OwnerHome',
    component: OwnerHome,
    props: true,
    beforeEnter: Guard.auth
  },
  {
    path: '/owner/:id/menu',
    name: 'OwnerMenu',
    component: OwnerMenu,
  },
  {
    path: '/owner/menu/create',
    name: 'OwnerMenuCreate',
    component: OwnerMenuCreate,
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome,
  },
  {
    path: '/admin/all_lists',
    name: 'AllUserLists',
    component: AllUserLists,
    beforeEnter: Guard.auth
  },
  {
    path: '/contact',
    name: 'AdminSendEmail',
    component: AdminSendEmail,
    beforeEnter: Guard.auth
  },
  {
    path: '/create/news',
    name: 'AdminNews',
    component: AdminNews,
    beforeEnter: Guard.auth
  },
  {
    path: '/registration_complete',
    name: 'RegistrationComplete',
    component: RegistrationComplete,
  },
  {
    path: '/change_password',
    name: 'ChangePassword',
    component: ChangePassword,
  },
  {
    path: '/change_email',
    name: 'ChangeEmail',
    component: ChangeEmail,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
