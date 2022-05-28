import axios from "axios";

export default {
  namespaced: true,
  state:{
    data: {}
  },
  mutations: {
    // setSignupData(state, payload) {
    //   console.log('2')
    //   state.signupData = payload
    // }
  },
  getters:{
    getSignUpResult(state) {
      return state.data
    }
  },
  actions: {
    async sendSignupData(signupData, {commit}){

    }
  },
}