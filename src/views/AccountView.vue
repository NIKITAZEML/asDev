<template>
    <div>
        <div class="account">
            <div class="container">
                <div class="account-wrapper">
                    <span class="account-title">Личный кабинет </span>
                    <div class="account-bill">
                        <span class="account-bill__title">Мои счета</span>
                        <span class="account-bill__money">Счёт в рублях: 2102342 ₽</span>
                    </div>
                    <div class="account-bill-transact">
                        <div class="bill-transact__block">
                            <img src="../assets/images/icons/btk.png" alt="">
                            <span>2102342</span>
                        </div>
                        <div class="bill-transact__block">
                            <img src="../assets/images/icons/btk.png" alt="">
                            <span>2102342</span>
                        </div>
                        <div class="bill-transact__block">
                            <img src="../assets/images/icons/btk.png" alt="">
                            <span>2102342</span>
                        </div>
                        <div class="bill-transact__block">
                            <img src="../assets/images/icons/btk.png" alt="">
                            <span>2102342</span>
                        </div>
                    </div>
                    <span class="account-title">История транзакций</span>
                    <div class="transact-history">
                        <span class="transact-history__text">Пополнение баланса</span>
                        <span class="transact-history__text">+200грн</span>
                        <span class="transact-history__data">26.34.9543</span>
                    </div>
                    <div class="transact-history-trade">
                        <span class="transact-history__text">Обмен валют: </span>
                        <img src="../assets/images/icons/btk.png" alt="">
                        <span class="transact-history__text">2102342</span>
                        <img class="history-trade__arrow" src="../assets/images/icons/checkall.png" alt="">
                        <img src="../assets/images/icons/btk.png" alt="">
                        <span class="transact-history__text">2102342</span>
                        <span class="transact-history__data">26.34.9543</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountView"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";

    .container{
        width: size(1440, 1920);
        margin: size(60, 1920) auto;
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

</style>