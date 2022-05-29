import axios from "axios";
export default {
    state:{
        currenciesMore: [],
    },
    mutations:{
        SET_CURRENCIES_MORE: (state, currenciesMore) => {
            state.currenciesMore = currenciesMore;
        },
        sortPrice: (state) => {
            state.currenciesMore = state.currenciesMore.sort((a, b) => b.RAW.RUB.PRICE - a.RAW.RUB.PRICE)
        },
        sortAlph: (state) => {
            state.currenciesMore = state.currenciesMore.sort((a, b) => {
                let fa = a.CoinInfo.Internal.toLowerCase(),
                  fb = b.CoinInfo.Internal.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
        },
    },
    getters:{
        currenciesMore(state){
            return state.currenciesMore;
        }       
    },
    actions: {
        GET_CURRENCIES_MORE({commit}){
            return axios('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=RUB', {
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