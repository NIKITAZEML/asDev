<template>
    <header>
        <div class="container">
            <div class="header">
                <router-link class="header-logo" to="/"><img style="width:100%" src="../assets/images/logo.png" ></router-link>
                <button class="burger-menu" v-on:click="open">меню</button>
                <nav v-bind:class="{nav_open:openOb}">
                        <div class="nav-block">
                            <route-link :to="'/'" class="header__nav">Обмен валют</route-link>
                            <route-link :to="'/'" class="header__nav">Курс валют</route-link>
                            <div class="header-login">Войти</div>
                            <div class="header-register">Зарегистрироваться</div>
                        </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default{
    data(){
        return{
           openOb: false
        }
    },
    methods:{
        open(){
           this.openOb = !this.openOb;
           if(this.openOb){
               document.body.style.overflow = "hidden"
           }else{
                document.body.style.overflow = "auto" }
        },
       
    }
}
</script>


<style scoped lang="scss">
    @import "src/assets/styles/fonts";

    .container{
        width: size(1440, 1920);
        margin: 0 auto;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: size(108, 1920);
        z-index: 999;
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
.nav-block{
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
        padding: size(12, 1920) size(17, 1920);
        font-weight: 600;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #000000;
    }
    .burger-menu{
        display: none;
    }
    @media (max-width: 750px){
       
         .burger-menu{
    display: block;
}
    nav{  
        top:size(70, 750);
        left: 0;
        margin: 0;
        flex-direction: column;
        z-index: 9;
        position: absolute;
        height: 100%;
        background-color: rgb(61, 14, 75);
        width: 100%;
         display: none !important;
         padding: size(25, 750);
         justify-content: center;
    }
    .nav_open{
        display: flex !important;
    }
      .header__nav{
        font-style: normal;
        font-weight: 400;
        font-size: size(50, 750);
        line-height: size(28, 1920);
        color: #FFFFFF;
        margin: 0;
    }
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: size(70, 750);
        z-index: 999;
    }
    .header-login{
        margin: 0;
        border: 1px solid #BCD0E5;
        font-family: 'Raleway';
        padding: size(12, 750) size(28, 750);
        font-weight: 400;
        font-size: size(16, 750);
        line-height: size(19, 750);
        color: #FFFFFF;
        width: 100%;
    }
    .header-register{
          font-size: size(16, 750);
           padding: size(12, 750) size(28, 750);
           line-height: size(19, 750);
           width: 100%;
    }
    .nav-block{
     display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        flex-direction: column;
        height: 30%;
}
 .header-logo{
        width: size(150, 750);
        height: size(20, 750);
    }
    }
</style>