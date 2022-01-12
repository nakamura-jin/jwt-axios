import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/modules/users'
import Owner from '@/modules/owners'
import Admin from '@/modules/admins'
import axios from 'axios'
import { login, getLoginData } from '@/apis/login_api'
import Cookies from 'js-cookie'
// import router from '@/router'
import MenuResponse from '@/modules/menus'
import { getMenus, getOwnerMenus, getMenuDetail } from '@/apis/menu_apis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData: [] as User[] | Owner[] | Admin[],
    menus: [] as MenuResponse[],
    ownerMenus: [] as MenuResponse[],
    menuDetail: [] as MenuResponse[]
  },


  mutations: {
    LOGIN(state, data) {
      state.loginData = data
    },

    LOGOUT(state) {
      state.loginData = []
    },

    GET_MENUS(state, data) {
      state.menus = data
    },

    GET_OWNER_MENUS(state, data) {
      state.ownerMenus = data
    },
    GET_MENU_DETAIL(state, data) {
      state.menuDetail = data
    }
  },


  actions: {
    async getData({ commit }) {
      try {
        const response = await getLoginData()
        commit('LOGIN', response)
      } catch (err) {
        return err
      }
    },

    async login({ commit }, { email, password, type }) {
      const response = await login({
        email: email,
        password: password,
        type: type
      })
      Cookies.set('_myapp_token', response.access_token)
      commit('LOGIN', response.loginData)
    },

    async refresh({ dispatch }) {
      const res = await axios.post('/refresh')
      Cookies.remove('_myapp_token')
      Cookies.set('_myapp_token', res.data.access_token)
      dispatch('getUser')
    },

    async getMenu({ commit }) {
        const response = await getMenus()
        commit('GET_MENUS', response)
    },

    async getOwnerMenu({ commit }, owner_id) {
      const response = await getOwnerMenus( owner_id.id )
      commit('GET_OWNER_MENUS', response)
    },

    async menuDetail({ commit }, id) {
      const response = await getMenuDetail( id.id )
      commit('GET_MENU_DETAIL', response)
    }


  },
  modules: {}
})
