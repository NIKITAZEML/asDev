import axios from "axios";
export default {
    state:{
        currencies: [],
    },
    mutations:{
        SET_CURRENCIES: (state, currencies) => {
            state.currencies = currencies;
        }
    },
    getters:{
        currencies(state){
            return state.currencies;
        }       
    },
    actions: {
        GET_CURRENCIES({commit}){
            return axios('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=3&tsym=RUB', {
                method: 'GET'
            })
            .then((currencies) => {
                commit('SET_CURRENCIES', currencies.data.Data)
                return currencies;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
}