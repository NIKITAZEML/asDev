<template>
  <div class="wrapper">
  <section class="main">
    <div class="container">
      <div class="main-container">
      <div class="main-container__text">
        <span class="main__title">Покупайте, торгуйте и храните более 600 криптовалют на</span>
        <span class="main__little">CryptoDev</span>
      </div>
        <div class="main-button__container">
         <div class="col-3">
            <input type="email" class="main-button__email"  placeholder="Введите email">
          <span class="focus-border">
                <i></i>
              </span>
         </div>
          <router-link for="chk"  :to="'/auth'" class="main-button__register">Зарегистрироваться</router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="popularcrypto">
    <div class="container">

      <div class="crypto-title">
        <span class="crypto-title__text">Популярные криптовалюты</span>
          <div class="crypto-checkall">
            <span class="crypto-checkall__text">Посмотреть все</span>
            <img src="../assets/images/icons/checkall.png">
          </div>
      </div>
      <div class="crypto-cards">
        <div class="crypto-cards__cardsell">
        <input type="number" placeholder="Потратите">
          <select v-for='(currencies) in this.$store.state.currencies' >
              <option v-for='(currencie, index) in currencies' :selected="0">
                {{  currencie.CoinInfo.Internal }} {{index}}
              </option>
          </select>
        </div>
        <div class="crypto-cards__cardreceive">
        <input type="number" placeholder="Получите">
          <select v-for='currencies in this.$store.state.currencies'>
              <option v-for='currencie in currencies'>
                {{  currencie.CoinInfo.Internal }}
              </option>
          </select>
        </div>
        <div class="crypto-cards__cardreg">
        <input type="number" placeholder="Получите при регистрации">
         <select v-for='currencies in this.$store.state.currencies' >
              <option v-for='currencie in currencies'>
                {{  currencie.CoinInfo.Internal }}
              </option>
          </select>
        </div>
        <div class="crypto-cards__button">
          Рассчитать
        </div>
      </div>
  
      <div class="crypto-stats-cards">
        <div class="cards" v-for='currencies in this.$store.state.currencies'>
        <div class="stats-card" v-for='(currencie, index) in currencies' v-if="index !== 0">
            <div class="stats-cards">
              <span class="crypto-stats__text">Название </span>
                <div class="stats-card-icon">
                <img :src="'https://www.cryptocompare.com' + currencie.CoinInfo.ImageUrl" alt="coin-image">
                <span class="stats-card__name">{{  currencie.CoinInfo.Internal }}</span>
               </div>
            </div>
            <div class="stats-cards" v-if="currencie.RAW">
                <span class="crypto-stats__text">Последняя цена</span>
                <span class="stats-card__price">{{ currencie.RAW.RUB.PRICE }} ₽</span>
            </div>
            <div class="stats-cards" v-if="currencie.RAW">
              <span class="crypto-stats__text">Изменение за 24 часа</span>
              <span class="stats-card__price">{{ currencie.RAW.RUB.CHANGE24HOUR }} ₽</span>
            </div>
          <div class="stats-cards" v-if="currencie.RAW">
            <span class="crypto-stats__text">Наивысшая стоимость за 24 часа</span>
            <span class="stats-card__price">{{ currencie.RAW.RUB.HIGH24HOUR }} ₽</span>
          </div>
           </div>
      </div>
      </div>
      
      <div class="crypto-register__title">
        <span class="crypto-title__text">Зарегистрируйтесь сейчас и получите более выгодный курс (5%)</span>
        <router-link :to="'/auth'" class="register-title__button">Начать</router-link>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex';


export default {
  name: 'HomeView',
  data(){
    return{
        firstSelect: '',
    }
  },
  methods:{
      ...mapActions([
        'GET_CURRENCIES'
      ]),
      getw(){
      console.log(this.firstSelect)
    }
  },
  mounted(){
    this.GET_CURRENCIES(),
    console.log();
  },
  components: {

  },
}
</script>

<style scoped lang="scss">
  @import "src/assets/styles/fonts";

  .wrapper{
    background: #1D114F;
  }

  /*------------MAIN--------------*/

  .main{
    background-size: 100% 100%;
    height: size(896, 1920);
    background-image: url('../assets/images/mainbg.png');
  }

  .container{
    width: size(1440, 1920);
    margin: 0 auto;
  }

  .main-container{
    padding-top: size(306, 1920);
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: end;
    text-align: end;
  }

  .main-container__text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: size(517, 1920);
    margin-bottom: size(40, 1920);
  }

  .main-button__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: size(550, 1920);
  }

  .main-button__email{
    width: size(290, 1920);
    height: size(44, 1920);
    outline: none;
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    &::placeholder{
      font-weight: 600;
      font-size: size(15, 1920);
      line-height: size(18, 1920);
      color: #8A8A8A;
    }
      .main-button__email:hover{
        -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);}
  }

  .main-button__email ~ .focus-border:before,
  .main-button__email ~ .focus-border:after{content: ""; position: absolute; top: 0; right: 0; width: 0; height: 3px; background-color: #6d44b8; transition: 0.2s; transition-delay: 0.2s;}
  .main-button__email ~ .focus-border:after{top: auto; bottom: 0; right: auto; left: 0; transition-delay: 0.6s;}
  .main-button__email ~ .focus-border i:before,
  .main-button__email ~ .focus-border i:after{content: ""; position: absolute; top: 0; left: 0; width: 3px; height: 0; background-color: #6d44b8; transition: 0.2s;}
  .main-button__email ~ .focus-border i:after{left: auto; right: 0; top: auto; bottom: 0; transition-delay: 0.4s;}
  .main-button__email:focus ~ .focus-border:before,
  .main-button__email:focus ~ .focus-border:after{width: 100%; transition: 0.2s; transition-delay: 0.6s; }
  .main-button__email:focus ~ .focus-border:after{transition-delay: 0.2s;}
  .main-button__email:focus ~ .focus-border i:before,
  .main-button__email:focus ~ .focus-border i:after{height: 100%; transition: 0.2s;}
  .main-button__email:focus ~ .focus-border i:after{transition-delay: 0.4s;}
  :focus{outline: none;}
  .main-button__email:focus{
  -webkit-box-shadow: 4px 4px 44px -14px rgba(26, 0, 255, 0.68);
  -moz-box-shadow: 4px 4px 44px -14px rgba(26, 0, 255, 0.68);
  box-shadow: 4px 4px 44px -14px rgba(26, 0, 255, 0.68);}
  input[type="text"]{font: 15px/24px 'Muli', sans-serif; color: #333; width: 100%; box-sizing: border-box; letter-spacing: 1px;}
  .col-3{ position: relative;}
  :focus{outline: none;}

  .main-button__register{
    background: #FFFFFF;
    text-align: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #000000;
    padding: size(12, 1920) size(17, 1920);
    background-clip: padding-box;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s ease-out;
  }
  .main-button__register:hover {
    transform: scale(1.2);
    background-color: #6d44b8;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: 800;
    color: white;
    text-align: center;
    vertical-align: center;
    }

  /*------------TEXT-STYLE---------------*/

  .main__title{
    font-weight: 400;
    font-size: size(48, 1920);
    line-height: size(56, 1920);
    color: #FFFFFF;
  }

  .main__little{
    font-weight: 600;
    font-size: size(48, 1920);
    line-height: size(56, 1920);
    color: #FFFFFF;

  }

  /*--------------CRYPTO--------------*/

  .crypto-cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .crypto-cards__cardsell, .crypto-cards__cardreceive{
    display: flex;
    height: size(44, 1920);
    align-items: center;
    justify-content: center;
    input {
      padding-left: size(17, 1920);
      width: size(237, 1920);
      height: size(44, 1920);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 1920);
      line-height: size(18, 1920);
      color: #8A8A8A;
    }
    select{
      width: size(93, 1920);
      height: size(44, 1920);
    }
  }

  .crypto-cards__cardreg{
    display: flex;
    height: size(44, 1920);
    align-items: center;
    justify-content: center;
    input {
      padding-left: size(17, 1920);
      width: size(250, 1920);
      height: size(44, 1920);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 1920);
      line-height: size(18, 1920);
      color: #8A8A8A;
    }
    select{
      width: size(93, 1920);
      height: size(44, 1920);
    }

  }


  .crypto-cards__button{
    width: size(229, 1920);
    height: size(44, 1920);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: black;
    cursor: pointer;
    border-radius: 5px;
    background: #49DEDA;
    box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
    transition: all .5s linear 0s;
  }
.crypto-cards__button:hover{
    color: white;
    cursor: pointer;
    transition: all 1s ease-out;
    background: rgb(60, 52, 172);
    box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
}
  /*------Crypto----Popylaryty------*/

  .crypto-title{
    margin-bottom: size(50, 1920);
    display: flex;
    justify-content: space-between;
  }

  .crypto-title__text{
    font-weight: 600;
    font-size: size(30, 1920);
    line-height: size(35, 1920);
    color: #FFFFFF;
  }

  .crypto-checkall{
    display: flex;
    align-items: center;
    img{
      width: size(23, 1920);
      height: size(19, 1920);
      margin-left: size(8, 1920);
    }
  }

  .crypto-checkall__text{
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #FFFFFF;
  }

  /*------CRYPTO-STATS------*/

  .crypto-stats{
    display: flex;
    justify-content: space-between;
    margin-top: size(50, 1920);
  }

  .crypto-stats__text{
    font-weight: 600;
    margin-bottom: size(20, 1920);
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #FFFFFF;
  }

  .stats-card-icon{
    display: flex;
    align-items: center;
    width: size(345, 1920);
    img{
      width: 10%;
      height: auto;
      margin-right: size(10, 1920);
    }
  }

  .stats-card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: size(30, 1920);
  }

  .stats-card__price{
    width: size(400, 1920);
  }

  .stats-card__timeprice{
    width: size(440, 1920);
  }

  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
    font-weight: 400;
    font-size: size(20, 1920);
    line-height: size(23, 1920);
    color: #FFFFFF;
    align-items: center;
  }
  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice {
    font-weight: 400;
    font-size: 1.0416666667vw;
    line-height: 1.1979166667vw;
    color: #FFFFFF;
   
   
}

  /*-------CRYPTO-TITLE-----*/

  .crypto-register__title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: size(90, 1920);
  }

  .register-title__button{
    width: size(166, 1920);
    height: size(50, 1920);
    margin: size(30, 1920) 0 size(66, 1920) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: black;
    cursor: pointer;
    border-radius: 5px;
    background: #49DEDA;
    box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
    transition: all .5s linear 0s;
  }
  .stats-card{
    display: flex;
    align-items: center;
    height: size(50, 1920);
    justify-content: space-between;
  }
  .register-title__button:hover{
    color: white;
    transition: all 1s ease-out;
    background: rgb(60, 52, 172);
    box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
    cursor: pointer;
  }
  .stats-cards{
    display: flex;
    flex-direction: column;
  }
@media (max-width: 750px){
   .main-container{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    text-align: end;
  }
  .main{
    background-image: none;
    height: auto;
    width: 100%;
  }
  .stats-card-icon{
    display: flex;
    align-items: center;
    width: size(360, 1920);
    img{
      width: 20%;
      height: auto;
      margin-right: size(10, 1920);
    }
  }
  .main-container{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    text-align: start;
    padding: 0;
  }
  .main-container__text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: size(15, 750);
  }
  .main__title{
    font-weight: 400;
    font-size: size(48, 750);
    line-height: size(56, 750);
    color: #FFFFFF;
    text-align: center;
  }

  .main__little{
    font-weight: 600;
    font-size: size(48, 750);
    line-height: size(56, 750);
    color: #FFFFFF;
     text-align: center;

  }
  .main-button__container{
    width: 100%;
    flex-direction: column;
  }
  .col-3{
    width: 70%;
  }
  .main-button__email{
    width: 100%;
    height: size(20, 750);
    
  }
  .main-button__register{
    width: size(300, 750);
    margin-bottom: size(30, 750);
  }
   .main-button__email{
    width: size(290, 750);
    height: size(44, 750);
    outline: none;
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    width: 100%;
    &::placeholder{
      font-weight: 600;
      font-size: size(15, 750);
      line-height: size(18, 750);
      color: #8A8A8A;
    }
}
.crypto-cards{
  margin-bottom: size(60, 750) !important;
}
  .main-button__register{
    background: #FFFFFF;
    text-align: center;
    font-weight: 600;
    font-size: size(16, 750);
    line-height: size(19, 750);
    color: #000000;
    padding: size(12, 750) size(17, 750);
    -moz-border-radius: 2px;
    -moz-transition: 0.2s ease-out;
    -ms-transition: 0.2s ease-out;
    -o-transition: 0.2s ease-out;
    -webkit-border-radius: 2px;
    -webkit-transition: 0.2s ease-out;
    background-clip: padding-box;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s ease-out;
    margin-top: size(15, 750);
  }
  .crypto-cards{
    flex-direction: column;
  }

  .crypto-cards__cardsell, .crypto-cards__cardreceive{
    display: flex;
    height: size(44, 750);
    align-items: center;
    justify-content: center;
    margin-bottom: size(20, 750);
    input {
      padding-left: size(17, 750);
      width: size(237, 750);
      height: size(44, 750);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 750);
      line-height: size(18, 750);
      color: #8A8A8A;
    }
    select{
      width: size(93, 750);
      height: size(44, 750);
    }
  }

  .crypto-cards__cardreg{
    display: flex;
    height: size(44, 750);
    align-items: center;
    justify-content: center;
    margin-bottom: size(20, 750);
    input {
      padding-left: size(17, 750);
      width: size(237, 750);
      height: size(44, 750);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 750);
      line-height: size(18, 750);
      color: #8A8A8A;
    }
    select{
      width: size(93, 750);
      height: size(44, 750);
    }

  }
  .crypto-cards__button{
    width: size(229, 750);
    height: size(44, 750);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: size(16, 750);
    line-height: size(19, 750);
    color: black;
     transition: 0.2s ease-out;
     cursor: pointer;
     border-radius: 5px;
     background: #49DEDA;
  box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
 transition: all .5s linear 0s;
  }
  .crypto-title{
    display: flex;
    justify-content: space-between;
  }
  .crypto-title__text{
    font-weight: 600;
    font-size: size(30, 750);
    line-height: size(35, 750);
    color: #FFFFFF;
  }
  .crypto-checkall__text{
    display: none;
  }
  .crypto-checkall{
    display: flex;
    align-items: center;
    img{
      width: size(23, 750);
      height: size(23, 750);
    }
  }
  .crypto-title__text {
    text-align: center;
}
.register-title__button{
    width: size(166, 750);
    height: size(50, 750);
    margin: size(30, 750) 0 size(66, 750) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #46DFDD;
    font-weight: 600;
    font-size: size(16, 750);
    line-height: size(19, 750);
    color: black;
     transition: all 1s ease-out;
     cursor: pointer;
     border-radius: 5px;
 background: #49DEDA;
  box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
 transition: all .5s linear 0s;
  }
  .crypto-stats__text{
    font-weight: 600;
    font-size: size(20, 750);
    line-height: size(19, 750);
    color: #FFFFFF;
  }
 
  .crypto-stats{
    width: 100%;
    flex-wrap: wrap;
  }
  .stats-card{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: size(150, 750);
    justify-content: space-between;
    align-items: center;
  }
  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
    font-weight: 400;
    width: 100%;
    font-size: size(20, 750);
    line-height: size(23, 750);
    color: #FFFFFF;
    
    
  }
  .stats-cards{
    width: 45%;
    display: flex;
    margin-bottom: 10px;
  }
  .cards{
    display: flex;
    flex-direction: column;
   flex-wrap: wrap;
  }
}
@media (max-width: 486px){
 
  .main-container__text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: size(15, 750);
  }
  .main__title{
    font-weight: 400;
    font-size: size(48, 486);
    line-height: size(56, 486);
    color: #FFFFFF;
    text-align: center;
  }

  .main__little{
    font-weight: 600;
    font-size: size(48, 486);
    line-height: size(56, 486);
    color: #FFFFFF;
     text-align: center;

  }
  .main-button__container{
    width: 100%;
    flex-direction: column;
  }
  .col-3{
    width: 70%;
  }
  .main-button__email{
    width: 100%;
    height: size(20, 486);
    
  }
  .main-button__register{
    width: size(300, 486);
    margin-bottom: size(30, 486);
  }
   .main-button__email{
    width: size(290, 486);
    height: size(44, 486);
    outline: none;
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    width: 100%;
    &::placeholder{
      font-weight: 600;
      font-size: size(15, 486);
      line-height: size(18, 486);
      color: #8A8A8A;
    }
}
  .main-button__register{
    background: #FFFFFF;
    text-align: center;
    font-weight: 600;
    font-size: size(16, 486);
    line-height: size(19, 486);
    color: #000000;
    padding: size(12, 486) size(17, 486);
    -moz-border-radius: 2px;
    -moz-transition: 0.2s ease-out;
    -ms-transition: 0.2s ease-out;
    -o-transition: 0.2s ease-out;
    -webkit-border-radius: 2px;
    -webkit-transition: 0.2s ease-out;
    background-clip: padding-box;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s ease-out;
    margin-top: size(15, 486);
  }
  .crypto-cards{
    flex-direction: column;
  }

  .crypto-cards__cardsell, .crypto-cards__cardreceive{
    display: flex;
    height: size(44, 486);
    align-items: center;
    justify-content: center;
    margin-bottom: size(20, 486);
    input {
      padding-left: size(17, 486);
      width: size(237, 486);
      height: size(44, 486);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 486);
      line-height: size(18, 486);
      color: #8A8A8A;
    }
    select{
      width: size(93, 486);
      height: size(44, 486);
    }
  }

  .crypto-cards__cardreg{
    display: flex;
    height: size(44, 486);
    align-items: center;
    justify-content: center;
    margin-bottom: size(20, 486);
    input {
      padding-left: size(17, 486);
      width: size(237, 486);
      height: size(44, 486);
      border: 0;
      outline: none;
      font-weight: 600;
      font-size: size(15, 486);
      line-height: size(18, 486);
      color: #8A8A8A;
    }
    select{
      width: size(93, 486);
      height: size(44, 486);
    }

  }
  .crypto-cards__button{
    width: size(229, 486);
    height: size(44, 486);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: size(16, 486);
    line-height: size(19, 486);
    color: black;
     transition: 0.2s ease-out;
     cursor: pointer;
     border-radius: 5px;
     background: #49DEDA;
  box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
 transition: all .5s linear 0s;
  }
  .crypto-title{
    display: flex;
    justify-content: space-between;
  }
  .crypto-title__text{
    font-weight: 600;
    font-size: size(30, 486);
    line-height: size(35, 486);
    color: #FFFFFF;
  }
  .crypto-checkall__text{
    display: none;
  }
  .crypto-checkall{
    display: flex;
    align-items: center;
    img{
      width: size(23, 486);
      height: size(23, 486);
    }
  }
  .crypto-title__text {
    text-align: center;
}
.register-title__button{
    width: size(166, 486);
    height: size(50, 486);
    margin: size(30, 486) 0 size(66, 486) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #46DFDD;
    font-weight: 600;
    font-size: size(16, 486);
    line-height: size(19, 486);
    color: black;
     transition: all 1s ease-out;
     cursor: pointer;
     border-radius: 5px;
 background: #49DEDA;
  box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
 transition: all .5s linear 0s;
  }
  .crypto-stats__text{
    font-weight: 600;
    font-size: size(20, 486);
    line-height: size(19, 486);
    color: #FFFFFF;
  }
 
  .crypto-stats{
    width: 100%;
    flex-wrap: wrap;
  }
  .stats-card{
    width: 100%;
    margin-bottom: size(150, 486);
    align-items: center;
  }
  .stats-cards{
    width: 50%;
  }
  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
    font-weight: 400;
    font-size: size(20, 486);
    line-height: size(23, 750);
    color: #FFFFFF;
    align-items: center;
    width: 100%;
  }
  .container{
    width: 90vw;
  }
}
</style>
