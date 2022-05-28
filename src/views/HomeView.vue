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
          <input type="email" class="main-button__email"  placeholder="Введите email">
          <router-link for="chk"  :to="'/auth'"><div class="main-button__register">Зарегистрироваться </div></router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="popularcrypto">
    <div class="container">
      <div class="crypto-cards">
        <div class="crypto-cards__cardsell">
        <input type="number" placeholder="Потратите">
          <select>
            <option>1</option>
          </select>
        </div>
        <div class="crypto-cards__cardreceive">
        <input type="number" placeholder="Получите">
          <select>
            <option>2</option>
          </select>
        </div>
        <div class="crypto-cards__cardreg">
        <input type="number" placeholder="Получите при регистрации">
          <select>
            <option>3</option>
          </select>
        </div>
        <div class="crypto-cards__button">
          Рассчитать
        </div>
      </div>
      <div class="crypto-title">
        <span class="crypto-title__text">Популярные криптовалюты</span>
          <div class="crypto-checkall">
            <span class="crypto-checkall__text">Посмотреть все</span>
            <img src="../assets/images/icons/checkall.png">
          </div>
      </div>
      <div class="crypto-stats">
        <span class="crypto-stats__text">Название </span>
        <span class="crypto-stats__text">Последняя цена</span>
        <span class="crypto-stats__text">Стоимость 24 часа назад</span>
        <span class="crypto-stats__text">Наивысшая стоимость</span>
      </div>
      <div class="crypto-stats-cards">
        <div class="stats-card">
          <div class="stats-card-icon">
          <img src="../assets/images/icons/btk.png" alt="">
          <span class="stats-card__name">BNB</span>
          </div>
          <span class="stats-card__price">20 100 ₽</span>
          <span class="stats-card__timeprice">20 500 ₽</span>
          <span class="stats-card__largeprice">3 281 818M ₽</span>
        </div>
      </div>
      <div class="crypto-register__title">
        <span class="crypto-title__text">Зарегистрируйтесь сейчас и получите более выгодный курс (5%)</span>
        <div class="register-title__button">Начать</div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  }
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
    justify-content: flex-end;
    align-items: center;
  }

  .main-button__email{
    width: size(290, 1920);
    height: size(44, 1920);
    border: 0;
    outline: none;
    padding-left: size(17, 1920);
    &::placeholder{
      font-weight: 600;
      font-size: size(15, 1920);
      line-height: size(18, 1920);
      color: #8A8A8A;
    }
  }

  .main-button__register{
   
    background: #FFFFFF;
    text-align: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #000000;
    padding: size(12, 1920) size(17, 1920);
    margin-left: size(31, 1920);
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
  }
  .main-button__register:hover {
   
     
    background-color: #6d44b8;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: rgb(0, 0, 0);
    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: 800;
     padding: size(20, 1920) size(30, 1920);
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
    background: #46DFDD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #000000;
  }

  /*------Crypto----Popylaryty------*/

  .crypto-title{
    margin-top: size(100, 1920);
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
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #FFFFFF;
  }

  .stats-card-icon{
    display: flex;
    align-items: center;
    width: size(360, 1920);
    img{
      width: size(40, 1920);
      height: size(40, 1920);
      margin-right: size(10, 1920);
    }
  }

  .stats-card{
    display: flex;
    align-items: center;
    margin-top: size(30, 1920);
  }
  .stats-card__price{
    width: size(420, 1920);
  }
  .stats-card__timeprice{
    width: size(485, 1920);
  }
  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
    font-weight: 400;
    font-size: size(20, 1920);
    line-height: size(23, 1920);
    color: #FFFFFF;
    align-items: center;
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
    background: #46DFDD;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #000000;
  }

</style>
