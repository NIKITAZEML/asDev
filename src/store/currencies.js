// import state from './state.js'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'
// import axios from 'axios'
// export default {
//     namespaced: true,
//     state:{
//         currencies: [],
//     },
//     mutations,
//     getters:{
//         currencies(state){
//             return state.currencies;
//         }       
//     },
//     actions: {
//         GET_CURRENCIES({commit}){
//             return axios('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=RUB', {
//                 method: 'GET'
//             })
//         }
//     },
// }