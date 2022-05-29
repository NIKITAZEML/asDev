import Vue from 'vue'
import Vuex from 'vuex'
import signup from "./sigup.js"
import currencies from './currencies'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenAuth: false
  },
  getters: {
    getIsOpenAuth(state) {
      return state.isOpenAuth
    }
  },
  mutations: {
    setOpenAuth (state, payload) {
      console.log('1111111')
      state.isOpenAuth = payload
    }
  },
  actions: {
  },
  modules: {

    signup,
    currencies

  }
})
