import Vue from 'vue'
import Vuex from 'vuex'
import signup from "./sigup.js"
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
    // currencies
    signup
  }
})
