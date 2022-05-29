import axios from "axios";
export default {
    state:{
        currenciesMore: [],
    },
    mutations:{
        SET_CURRENCIES_MORE: (state, currenciesMore) => {
            state.currenciesMore = currenciesMore;
        }
    },
    getters:{
        currenciesMore(state){
            return state.currenciesMore;
        }       
    },
    actions: {
        GET_CURRENCIES_MORE({commit}){
            return axios('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=RUB', {
                method: 'GET'
            })
            .then((currenciesMore) => {
                commit('SET_CURRENCIES_MORE', currenciesMore.data.Data)
                return currenciesMore;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
}