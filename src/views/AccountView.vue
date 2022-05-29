<template>
    <div>
      <transition name="fade">
        <AppPopol ref="donate" @getNew="getNew" @checkMsg="openMessage"/>
      </transition>
        <AppMessage ref="appMessage" v-if="showMessage"/>
        <div class="account">
            <div class="container">
                <div class="account-wrapper">
                    <span class="account-title">Личный кабинет </span>
                    <div class="account-bill">
                        <span class="account-bill__title">Мои счета</span>
                        <span class="account-bill__money">Счёт в рублях: {{rubSumm}} ₽</span>
                        <button v-on:click="$refs.donate.openPopup()" class="account-bill_button">Пополнить</button>
                    </div>
                    <div class="account-bill-transact" v-for="coin in this.myCoins">
                        <div class="bill-transact__block">
<!--                            <img src="../assets/images/icons/btk.png" alt="">-->
                            <span style="margin-right: 1vw;">{{coin.coinName}}</span>
                            <span>{{coin.summ}}</span>
                        </div>
                    </div>
                    <span class="account-title">История транзакций</span>
                  <div v-for="item in myHistory">
<!--                    {{item.action}}-->
                    <div v-if="item.action === 'пополнение'" class="transact-history">
                      <span class="transact-history__text">{{item.action}}</span>
                      <span class="transact-history__text">+ {{ item.firstSumm }} RUB</span>
                      <span class="transact-history__data">{{ slideData(item.date) }}</span>
                    </div>
                    <div v-else-if="item.action === 'вывод'" class="transact-history">
                      <span class="transact-history__text">{{item.action}}</span>
                      <span class="transact-history__text">- {{ item.firstSumm }} RUB</span>
                      <span class="transact-history__data">{{ slideData(item.date) }}</span>
                    </div>
                    <div v-else-if="item.action === 'обмен'" class="transact-history">
                      <span class="transact-history__text">{{item.action}}</span>
                      <span class="transact-history__text">{{ item.firstSumm }}</span>
                      <span class="transact-history__text">{{ item.firstName }} на</span>

                      <span class="transact-history__text">{{ item.secondSumm }}</span>
                      <span class="transact-history__text">{{ item.secondName }}</span>
                      <span class="transact-history__data">{{ slideData(item.date) }}</span>
                    </div>
                  </div>
<!--                    -->
                </div>
     </div>
    </div>
    </div>
</template>

<script>
import AppPopol from '@/components/AppPopol.vue'
import AppMessage from '@/components/AppMessage.vue';
import axios from "axios";

export default {
 name: "AccountView",
  components: {
    AppPopol,
    AppMessage
  },
    data(){
        return{
           proverka:false,
          myCoins: [],
          rubSumm: null,
          myHistory: [],
          showMessage: false

        }
    },
  computed: {

  },
    created() {
      let token = localStorage.getItem('token')
      if(!token) {
        this.$router.push('/auth')
      } else {
        this.getMyCoins()
        this.getMyHistory()
      }
    },
  methods: {
   slideData(item) {
     if(item) {
       item = item.slice(0, -5)
     }
     return item.split('T').reverse().join(', дата: ')
   },
    openMessage() {
     this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 2000)
    },
   getNew () {
     this.getMyHistory()
     this.getMyCoins()
   },
   async getMyCoins () {
     try {
       const token = localStorage.getItem("token");
       axios.defaults.headers.common["Authorization"] = "Bearer " + token;
       let res = await axios.get('http://localhost:5000/api/my_coins')
       // console.log(res.data)
       this.myCoins = res.data
       console.log(res.data)
       this.myCoins.forEach((item) => {
         if(item.coinName === "RUB") {
           return this.rubSumm = item.summ
         }
       })
       return res.data
     } catch (e) {
       console.log(e)
       return e
     }
   },
    async getMyHistory () {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        let res = await axios.get('http://localhost:5000/api/history')
        // console.log(res.data)
        console.log(res.data)
        this.myHistory = res.data.reverse()
        return res.data
      } catch (e) {
        console.log(e)
        return e
      }
    },

        openSchet(){
             this.proverka = !this.proverka
        }
    }
}
   
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";
    .closeModal{
        z-index: 999999;
        position: absolute;
        top: 0;
        right: 0;
       width: size(50, 1920);
       height: size(50, 1920);
       cursor: pointer;
     
    }
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
.account-bill_button{
    background: #46DFDD;
    border: none;
    width: size(176, 1920);
    padding: size(15, 1920);
    font-size: size(20, 1920);
     background: #49DEDA;
    box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
    transition: all .2s linear 0s;
}
 .account-bill_button:hover{
    color: white;
    transition: all .2s ease-out;
    background: rgb(60, 52, 172);
    box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
    cursor: pointer;
  }
    .container{
        width: size(1440, 1920);
        margin: size(60, 1920) auto;
    }
.open{
    display: flex;
}
    .account{

    }

    .account-title{
        font-weight: 600;
        font-size: size(30, 1920);
        line-height: size(35, 1920);
        color: #FFFFFF;
    }

    .account-bill{
        display: flex;
        justify-content: space-between;
        margin-top: size(50, 1920);
        margin-bottom: size(30, 1920);
        align-items: center;
    }


    .account-bill__title{
        font-weight: 400;
        font-size: size(30, 1920);
        line-height: size(35, 1920);
        color: #FFFFFF;
    }

    .account-bill__money{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #FFFFFF;

    }

    .account-bill-transact{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: size(50, 1920);
        .bill-transact__block{
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: size(49, 1920);
                height: size(49, 1920);
                margin-right: size(8, 1920);
            }
            span{
                font-weight: 400;
                font-size: size(20, 1920);
                line-height: size(23, 1920);
                color: #FFFFFF;

            }
        }
    }

    .transact-history{
        margin-top: size(30, 1920);
    }

    .transact-history__text{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #FFFFFF;
        margin-right: size(8, 1920);
    }

    .transact-history__data{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #8A8A8A;
        margin-left: size(20, 1920);
    }

    .transact-history-trade{
        display: flex;
        margin-top: size(26, 1920);
        align-items: center;
        img{
            width: size(29, 1920);
            height: size(29, 1920);
            margin-right: size(10, 1920);
        }
        .history-trade__arrow{
            width: size(33, 1920) !important;
            height: size(26, 1920) !important;
        }
    }
@media (max-width: 768px){
          .closeModal{
        z-index: 999999;
        position: absolute;
        top: 0;
        right: 0;
       width: size(50, 468);
       height: size(50, 468);
       color: black;
    
       img{
           width: 100%;
       }
    }
}
</style>