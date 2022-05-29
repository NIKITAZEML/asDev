<template>
    <div class="wrapper">
        <div class="container">
            <div class="cource">
                <div class="cource-title">
                    <span class="cource-title__text">Курс валют</span>
                    <span class="cource-title__score">Счёт в рублях: 2102342 ₽</span>
                </div>
                <div class="cource-wrapper">
                <div class="cource-search">
                    <div class="col-3">
            <input type="email" class="main-button__email"  placeholder="Введите email">
          <span class="focus-border">
                <i></i>
              </span>
                </div>
                    <div class="cource-search__button">Найти</div>
                </div>
                
                    <span class="cource-search__text">Сортировка по:</span>
                    <vue-custom-select
                        v-model="selectedOption"
                        :data-array="dataArray"
                        placeholder="-" >
                    </vue-custom-select>
                    <svg class="cource-search__svg" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8583 6.09836H17.2583C17.1495 6.09836 17.0471 6.15792 16.9831 6.25559L10.9223 15.5842L4.86155 6.25559C4.79756 6.15792 4.69516 6.09836 4.58636 6.09836H2.98637C2.8477 6.09836 2.76663 6.27464 2.8477 6.4009L10.3698 17.9806C10.6429 18.3999 11.2018 18.3999 11.4727 17.9806L18.9948 6.4009C19.078 6.27464 18.9969 6.09836 18.8583 6.09836Z" fill="#777777"/>
</svg>
                </div>

        <div class="cource-stats">
            <span class="cource-stats__text">Название </span>
            <span class="cource-stats__text">Последняя цена</span>
            <span class="cource-stats__text">Изменение за 24 часа</span>
            <span class="cource-stats__text">Наивысшая стоимость за 24 часа</span>
        </div>
     
        <div v-for='currencies in this.$store.state.currencies' class="cource-stats-cards">
            <div class="stats-card" v-for='(currencie, index) in currencies' >
            <div class="stats-card-icon">
                <img :src="'https://www.cryptocompare.com' + currencie.CoinInfo.ImageUrl" alt="coin-image">
                <span class="stats-card__name">{{  currencie.CoinInfo.Internal }}</span>
            </div>
            <span class="stats-card__price" v-if="currencie.RAW">{{ currencie.RAW.RUB.PRICE }} ₽</span>
            <span class="stats-card__timeprice" v-if="currencie.RAW">{{ currencie.RAW.RUB.CHANGE24HOUR }} ₽</span>
            <span class="stats-card__largeprice" v-if="currencie.RAW">{{ currencie.RAW.RUB.HIGH24HOUR }} ₽</span>
                <svg class="stats-card__arrow" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.199373L0 2.0744C0 2.20191 0.0927737 2.32191 0.244922 2.39691L14.777 9.49953L0.244922 16.6021C0.0927737 16.6771 0 16.7971 0 16.9246L0 18.7997C0 18.9622 0.27461 19.0572 0.47129 18.9622L18.5102 10.147C19.1633 9.82703 19.1633 9.17202 18.5102 8.85452L0.47129 0.0393696C0.27461 -0.0581322 0 0.036871 0 0.199373Z" fill="#777777"/>
                </svg>
            </div>
        </div>


            </div>
        </div>
    </div>
</template>

<script>
    import vueCustomSelect from 'vue-custom-select/src/CustomSelect.vue';
    import {mapActions} from 'vuex';
    export default {
        

        components: {
            vueCustomSelect,
        },

        data () {
            return {
                selectedOption: '',
                dataArray: [
                    {text: 'Нет сортировки', value: 'Any'},
                    {text: 'Названию', value: 'Any'},
                    {text: 'Цене', value: 'Any'},
                ]
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
};
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";

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
    .wrapper{
        display: flex;
        flex:1 0;
        margin-top: size(50, 1920);
    }
    .cource-title{
        margin-bottom: size(50, 1920);
    }

    .container{
        width: size(1440, 1920);
        margin: 0 auto;
    }

    .cource-wrapper{
        display:flex;
        align-items: center;
    }

    .cource-title{
        display: flex;
        justify-content: space-between;
        .cource-title__text{
            font-weight: 600;
            font-size: size(30, 1920);
            line-height: size(35, 1920);
            color: #FFFFFF;
        }
        .cource-title__score{
            font-weight: 600;
            font-size: size(20, 1920);
            line-height: size(23, 1920);
            color: #FFFFFF;
        }
    }

    .cource-search{
        display:flex;
        align-items: center;
    }

    .cource-search__svg{
       margin-left: size(5, 1920);
    }

    .cource-search__button{
    width: size(128, 1920);
    height: size(42, 1920);
    margin-left: size(15, 1920);
    margin-right: size(70, 1920);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: black;
    cursor: pointer;
    background: #49DEDA;
    box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
    transition: all .5s linear 0s;
  }

  .cource-search__button:hover{
    color: white;
    transition: all 1s ease-out;
    background: rgb(60, 52, 172);
    box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
    cursor: pointer;
  }



    .search__input{
        input{
            width: size(326, 1920);
            height: size(42, 1920);
            z-index: 1;
        }
        lable{
            position: absolute;
            z-index: 2;
            margin-left: size(290, 1920);
            margin-top: size(8, 1920);
            svg{
                width: size(21, 1920);
                height: size(21, 1920);
            }
        }
    }

    .custom-select{
        width: size(300, 1920) !important;
        height: size(42, 1920) !important;
        span .placeholder{
            display: none !important;
        }
    }
    


    .cource-stats{
    display: flex;
    justify-content: space-between;
    margin-top: size(50, 1920);
  }

  .cource-stats__text{
    font-weight: 600;
    margin-bottom: size(20, 1920);
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #FFFFFF;
  }

    .cource-search__text{
    margin-right: size(15, 1920);
    font-weight: 400;
    font-size: size(16, 1920);
    line-height: size(24, 1920);
    color: #A5A5A5;
    }

  .stats-card{
    display: flex;
    margin-top: size(30, 1920);
    align-items: center;
  }

   .stats-card-icon{
    display: flex;
    align-items: center;
    width: size(345, 1920);
    img{
      width: size(50, 1920);
      height: size(50, 1920);
      height: auto;
      margin-right: size(10, 1920);
    }
  }

  .stats-card__price{
    width: size(400, 1920);
  }

  .stats-card__timeprice{
    width: size(440, 1920);
  }

  .stats-card__largeprice{
      width: size(220, 1920);
  }
    .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #FFFFFF;
        align-items: center;
    }

    .stats-card__arrow{
        width: size(19, 1920);
        height: size(19, 1920);

    }


</style>