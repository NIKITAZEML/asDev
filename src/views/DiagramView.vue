<template>
    <div class="wrapper">
        <div class="container">
            <div class="diagram-wrapper">
                <div class="diagram-wrapper-title">
                <span>Bitcoin</span>
                <span>Счёт в рублях: 2102342 ₽</span>
                </div>
                    <img src="../assets/images/diagram.png" alt="" class="digram-select">
                <div class="diagram-wrapper-money">
                    <span>Последняя цена: 2335645 ₽</span>
                    <span>Цена 24 часа назад: 2335645 ₽</span>
                    <span>Наивысшая стоимость: 2335645 ₽  </span>
                </div>
                <div class="money-wrapper"><span class="diagram-money__button">Купить</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DiagramView"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";

    .wrapper{
        flex: 1 0;
    }

    .diagram-wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .diagram-wrapper-title{
        display: flex;
        justify-content: space-between;
        margin-top: size(50, 1920);
        margin-bottom: size(50, 1920);
        span{
            font-weight: 600;
            font-size: size(30, 1920);
            line-height: size(35, 1920);
            color: #FFFFFF;
        }
    }

    .digram-select{
        margin-bottom: size(150, 1920);
    }

    .diagram-wrapper-money{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: size(50, 1920);
        span{
        font-weight: 600;
        font-size: size(25, 1920);
        line-height: size(29, 1920);
        color: #FFFFFF;
        }
    }

    .container{
        width: size(1440, 1920);
        margin: 0 auto;
    }

    .money-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .diagram-money__button{
        width: size(220, 1920);
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
        border-radius: 0;
        background: #49DEDA;
        box-shadow: inset .125em .125em .5em hsl(178.39,69.3%,57.84%), inset -.125em -.125em .5em hsl(178.39,69.3%,57.84%);
        transition: all .2s linear 0s;
    }


    .diagram-money__button:hover{
        color: white;
        transition: all .2s ease-out;
        background: rgb(60, 52, 172);
        box-shadow: inset .125em .125em .5em hsl(251.61,64.58%,18.82%), inset -.125em -.125em .5em hsl(251.61,64.58%,18.82%), ;
        cursor: pointer;
    }

</style>