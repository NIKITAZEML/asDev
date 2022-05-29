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
                    <div class="search__input">
                        <lable for="search"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_103_260)">
                                <path d="M20.8077 19.8729L14.4312 13.4574C15.6196 12.034 16.3359 10.2027 16.3359 8.2031C16.3359 3.67268 12.6632 -1.90735e-05 8.13281 -1.90735e-05C3.60239 -1.90735e-05 -0.0703125 3.67268 -0.0703125 8.2031C-0.0703125 12.7335 3.60239 16.4062 8.13281 16.4062C10.1911 16.4062 12.0713 15.6463 13.5118 14.3935L19.8794 20.8011C20.1356 21.0574 20.5514 21.0574 20.8076 20.8011C21.0636 20.5449 21.0636 20.1295 20.8076 19.8729H20.8077ZM8.13281 15.1046C4.32131 15.1046 1.23136 12.0146 1.23136 8.2031C1.23136 4.3916 4.32131 1.30165 8.13281 1.30165C11.9443 1.30165 15.0343 4.3916 15.0343 8.2031C15.0343 12.0146 11.9443 15.1046 8.13281 15.1046Z" fill="#6622A6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_103_260">
                                    <rect width="21" height="21" fill="white"/></clipPath></defs></svg></lable>
                        <input id="search" type="search">
                    </div>
                    <div class="cource-search__button">Найти</div>
                </div>
                
                    <span class="cource-search__text">Сортировка по:</span>
                    <vue-custom-select
                        v-model="selectedOption"
                        :data-array="dataArray"
                        placeholder="">
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
            <div class="stats-card" v-for='currencie in currencies'>
            <div class="stats-card-icon">
                <img :src="'https://www.cryptocompare.com' + currencie.CoinInfo.ImageUrl" alt="coin-image">
                <span class="stats-card__name">{{  currencie.CoinInfo.Internal }}</span>
            </div>
            <span class="stats-card__price">{{ currencie.RAW.RUB.PRICE }} ₽</span>
            <span class="stats-card__timeprice">{{ currencie.RAW.RUB.CHANGE24HOUR }} ₽</span>
            <span class="stats-card__largeprice">{{ currencie.RAW.RUB.HIGH24HOUR }} ₽</span>
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

  .stats-card__name, .stats-card__price, .stats-card__timeprice, .stats-card__largeprice{
    font-weight: 400;
    font-size: size(20, 1920);
    line-height: size(23, 1920);
    color: #FFFFFF;
    align-items: center;
  }



</style>