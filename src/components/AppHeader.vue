<template>
    <header>
        <div class="container">
            <div class="header">
                <nav>
                    <div class="nav-block">
                <router-link class="header-logo" to="/"><img style="width:100%" src="../assets/images/logo.png" ></router-link>
                      <transition name="fade">
                    <img v-if="!openOb" src="@/assets/images/icons/burger.svg" class="burger-menu" v-on:click="open"/>
                     </transition>
                    <transition name="fade" ><img v-show="openOb" src="@/assets/images/close.svg" class="burger-menu" v-on:click="open"/>
                    </transition>
              

                         <div v-bind:class="{nav_open:openOb}" class="nav">
                                <div class="nav-block-value">
                                <route-link :to="'/'" class="header__nav">Обмен валют</route-link>
                                <route-link :to="'/'" class="header__nav">Курс валют</route-link>
                                </div>
                                <div class="nav-block-singin">
                                <router-link :to="'/auth'"><div class="header-login">Войти</div></router-link>
                                <router-link :to="'/auth'"><div class="header-register">Зарегистрироваться</div></router-link>
                                </div>
                         </div>
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
           openOb: false,
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
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
        margin: 0 auto;
        z-index: 999;
    }

    /*-----------------LOGO-------------   */

    .header-logo{
        width: size(214, 1920);
        height: size(36.36, 1920);
    }

    /*-----------------NAV-------------   */

    /*nav{*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    text-align: center;*/
    /*    width: size(1440, 1920);*/
    /*    margin: 0 auto;*/
    /*}*/
    .nav-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: size(1440, 1920);
    margin: 0 auto;
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
        border: 1px solid #BCD0E5;
        font-family: 'Raleway';
        padding: size(12, 1920) size(28, 1920);
        font-weight: 400;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #FFFFFF;
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
    // анимации
  .header-login:hover {
    background-color: #6d44b8;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: rgb(0, 0, 0);
    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: 800;
    color: white;
     transform: scale(1.2);
     border: 0;
     border-radius: 2px;
    }
     .header-register:hover {
    background-color: #6d44b8;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: rgb(0, 0, 0);
    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: 800;
    transform: scale(1.1);
     color: white;
    }
     .nav-block-singin{
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: size(360, 1920);
     }

    .header-register{
        background: #FFFFFF;
        padding: size(12, 1920) size(17, 1920);
        font-weight: 600;
        font-size: size(16, 1920);
        line-height: size(19, 1920);
        color: #000000;
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
    .burger-menu{
        display: none;
    }
    @media (max-width: 750px){
       
         .burger-menu{
    display: block;
    width: size(40, 750);
    height: size(40, 750);
    position: absolute;
    top: size(20, 750);
    right: size(20, 750);
}
    .nav{  
        top:-100%;
         transition: 0.5s ease-out;
        left: 0;
        margin: 0;
        flex-direction: column;
        z-index: 9;
        position: absolute;
        height: 100%;
        background-color: rgb(61, 14, 75);
        width: 100%;
         padding: size(25, 750);
         justify-content: center;
    }
    .nav_open{
         top:size(80, 750);
    }
      .header__nav{
        font-style: normal;
        font-weight: 400;
        font-size: size(60, 750);
        line-height: size(28, 1920);
        color: #FFFFFF;
        margin: 0;
    }
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: size(80, 750);
        z-index: 999;
    }
    .header-login{
        margin: 0;
        border: 1px solid #BCD0E5;
        font-family: 'Raleway';
        padding: size(12, 750) size(28, 750);
        font-weight: 400;
        font-size: size(20, 750);
        line-height: size(19, 750);
        color: #FFFFFF;
        width: 100%;
        height: size(60, 750);
         vertical-align: center;
        text-align: center;
    }
    .header-register{
          font-size: size(20, 750);
           padding: size(12, 750) size(28, 750);
           line-height: size(19, 750);
           width: 100%;
           height: size(60, 750);
           vertical-align: center;
           text-align: center;
           margin-left: 0;
    }
    a{
        width: 100%;
    }
    .nav-block{
     display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
       
        vertical-align: center;
        height: 30%;
}
 .header-logo{
        width: size(150, 750);
        height: size(20, 750);
    }
       .container{
        width: size(700, 750);
        margin: 0 auto;
    }
    }
</style>