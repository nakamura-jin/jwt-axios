import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/modules/users'
import Owner from '@/modules/owners'
import Admin from '@/modules/admins'
import axios from 'axios'
import { login, getLoginData } from '@/apis/login_api'
import Cookies from 'js-cookie'
import Menu, { MenuResponse } from '@/modules/menus'
import Stock from '@/modules/stocks'
import { getMenus, getOwnerMenus, getMenuDetail, updateStockQuantity } from '@/apis/menu_apis'
import { PurchaseResponse, Purchase, sendMail } from '@/apis/checkout_apis'
import { createGift, getSelectedGift } from '@/apis/gift_apis'
import { GiftResponse } from '@/modules/gifts'
import { userLists, ownerLists, ListsResponse, getAllNews, News } from '@/apis/admin_lists'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    loginData: [] as User[] | Owner[] | Admin[],
    menus: [] as MenuResponse[],
    ownerMenus: [] as MenuResponse[],
    menuDetail: [] as Menu[],
    quantity: null,
    purchase: [] as PurchaseResponse[],
    purchaseData: [],
    purchaseGift: [] as GiftResponse[],
    gift: [] as GiftResponse[],
    allUser: [] as ListsResponse[],
    allOwner: [] as ListsResponse[],
    allNews: [] as News[],
    stock: [] as Stock[]
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
    },

    SET_QUANTITY(state, data) {
      state.quantity = data
    },

    PURCHASE(state, data) {
      state.purchase = data
    },

    UPDATE_PURCHASE(state, data) {
      state.purchase = data
    },

    PURCHASE_DATA(state, response) {
      state.purchaseData = response
    },

    SET_PURCHASE_GIFT(state, data) {
      state.purchaseGift = data
    },

    SET_GIFT(state, data) {
      state.gift = data
    },

    //admin
    ALL_USER(state, data) {
      state.allUser = data
    },

    ALL_OWNER(state, data) {
      state.allOwner = data
    },

    //News
    ALL_NEWS(state, data) {
      state.allNews = data
    },


    //stock
    SET_STOCK(state, data) {
      state.stock.push({ id: data.id, owner_id: data.owner_id, product_code: data.product_code, name: data.name, stockQuantity: data.quantity, recievedQuantity: 1 })
    },

    UPDATE_RECIEVED_QUANTITY(state, { code, recievedQuantity }) {
      state.stock.forEach(item => {
        if (item.product_code == code) {
          item.recievedQuantity = recievedQuantity
        }
      })
    },

    UPDATE_STOCK(state) {
      state.stock = []
    },

    DELETE_SET_STOCK(state, data) {
      const newStock = state.stock.filter(item => item.name !== data.name)
      state.stock = newStock
      console.log(newStock)
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

    async ownerMenus({ commit }, owner_id) {
      const response = await getOwnerMenus(owner_id.owner_id)
      commit('GET_OWNER_MENUS', response)
    },

    async menuDetail({ commit }, id) {
      const response = await getMenuDetail( id.id )
      commit('GET_MENU_DETAIL', response)
    },

    async setPurchase({ commit }, { user_id, menu_id, quantity }) {
      try {
        const response = await Purchase({
          user_id: user_id,
          menu_id: menu_id,
          quantity: quantity
        })
        Cookies.set('purchase', String(response.id))
        commit('PURCHASE', response)
      } catch (err) {
        return err
      }
    },

    async createPurchasedGift({ commit }) {
      try {
        const id = Cookies.get('purchase')
        const response = await createGift({
          purchase_id: id as string,
          display: 1
        })
        commit('SET_PURCHASE_GIFT', response)
        await sendMail(response.url)
        Cookies.remove('purchase')
      } catch (err) {
        return err
      }
    },

    async getGift({ commit }, url) {
      try {
        const response = await getSelectedGift(url.url)
        commit('SET_GIFT', response)
      } catch (err) {
        return err
      }
    },


    //admin
    async getAllUser({ commit }) {
      const response = await userLists()
      commit('ALL_USER', response)
    },

    async getAllOwner({ commit }) {
      const response = await ownerLists()
      commit('ALL_OWNER', response)
    },

    //News
    async getNews({ commit }) {
      const response = await getAllNews()
      commit('ALL_NEWS', response)
    },

    //stock quantity
    async updateQuantity({ commit }) {
      const response = await updateStockQuantity(this.state.stock)
      commit('UPDATE_STOCK')
    }


  },
  modules: {}
})
