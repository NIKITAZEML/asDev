<template>
    <header>
        <div class="container">
            <div class="header">
                <img src="../assets/images/logo.png" class="header-logo">
                <nav>
                    <route-link :to="'/'" class="header__nav">Обмен валют</route-link>
                    <route-link :to="'/'" class="header__nav">Курс валют</route-link>
                    <div class="header-login">Войти</div>
                    <div class="header-register">Зарегистрироваться</div>
                </nav>
            </div>
        </div>
    </header>
</template>



<style scoped lang="scss">
    @import "src/assets/styles/fonts";

    .container{
        width: size(1440, 1920);
        margin: 0 auto;
        padding-top: size(24, 1920);
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    /*-----------------LOGO-------------   */

    .header-logo{
        width: size(214, 1920);
        height: size(36.36, 1920);
    }

    /*-----------------NAV-------------   */

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .header__nav{
        margin-left: size(24, 1920);
        font-style: normal;
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(28, 1920);
        color: #FFFFFF;
    }

    .header-login{
        margin-left: size(252, 1920);
        border: 1px solid #BCD0E5;
        border-radius: 4px;
        font-family: 'Raleway';
        padding: size(12, 1920) size(28, 1920);
        font-weight: 400;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #FFFFFF;
    }

    .header-register{
        margin-left: size(24, 1920);
        background: #FFFFFF;
        border-radius: 4px;
        font-family: 'Raleway';
        padding: size(12, 1920) size(17, 1920);
        font-weight: 600;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #000000;
    }

</style>