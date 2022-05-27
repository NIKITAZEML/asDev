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
                        <img src="../assets/images/icons/btk.png" alt="">
                        <span>2102342</span>
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
                        <img src="../assets/images/icons/checkall.png" alt="">
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
        margin: size(80, 1920) auto;
    }



    .account-title{
        font-weight: 600;
        font-size: size(30, 1920);
        line-height: size(35, 1920);
        color: #FFFFFF;
    }
    .account-bill__title{
        font-weight: 400;
        font-size: size(30, 1920);
        line-height: size(35, 1920);
        color: #FFFFFF;
    }

    .transact-history__text{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #FFFFFF;
    }

    .transact-history__data{
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(23, 1920);
        color: #8A8A8A;

    }
</style>