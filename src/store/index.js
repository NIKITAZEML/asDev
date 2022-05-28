import Vue from 'vue'
import Vuex from 'vuex'
import signup from "./sigup.js"
import currencies from './currencies'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {

    signup,
    currencies

  }
})
