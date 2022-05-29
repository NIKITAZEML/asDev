import Vue from 'vue'
import Vuex from 'vuex'
import signup from "./sigup.js"
import currencies from './currencies'
import currenciesmore from './currenciesmore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenAuth: false,
    mail: ''
  },
  getters: {
    getIsOpenAuth(state) {
      return state.isOpenAuth
    },
    getMail(state) {
      return state.mail
    }
  },
  mutations: {
    setOpenAuth (state, payload) {
      console.log('1111111')
      state.isOpenAuth = payload
    },
    setMail (state, payload) {
      state.mail = payload
    }
  },
  actions: {
  },
  modules: {

    signup,
    currencies,
    currenciesmore

  }
})
