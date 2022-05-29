<template>
    <div class="wrapper">
        <div class="container">
            <div class="wrapper-trade">
                <div class="trade-title">
                    <span>Обмен валют</span>
                    <span class="trade-title__text">Счёт в рублях: 2102342 ₽</span>
                </div>
                <div class="trade-cards">
                    <div class="trade-card__cardsell">
                        <input type="number" placeholder="Потратить">
                        <select>
                            <option>1</option>
                        </select>
                    </div>
                    <div class="trade-card__cardreceive">
                        <input type="number" placeholder="Получить">
                        <select>
                            <option>2</option>
                        </select>
                    </div>
                </div>
                <div class="trade-card__button">Обменять</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TradeView"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";
    .container{
        width: size(1440, 1920);
        margin: 0 auto;
    }
    .wrapper{
        flex: 1 0;
    }

    .wrapper-trade{
        margin: 0 auto;
    }

    .trade-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: size(50, 1920);
        margin-bottom: size(196, 1920);
        font-weight: 600;
        font-size: size(30, 1920);
        line-height: size(35, 1920);
        color: #FFFFFF;
        .trade-title__text{
            font-size: size(20, 1920);
            line-height: size(23, 1920);
            color: #FFFFFF;

        }
    }


    .trade-cards{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: size(730, 1920);
        margin: 0 auto;
    }

    .trade-card__cardsell, .trade-card__cardreceive{
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

    .trade-card__button{
        width: size(166, 1920);
        height: size(50, 1920);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #46DFDD;
        font-weight: 600;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #000000;
        transition: 0.2s ease-out;
        cursor: pointer;
        margin: size(50, 1920) auto;
         background: #49DEDA;
    box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
    transition: all .2s linear 0s;

    }
      .trade-card__button:hover{
    color: white;
    transition: all .2s ease-out;
    background: rgb(60, 52, 172);
    box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
    cursor: pointer;
  }


</style>