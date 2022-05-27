<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header-logo">
                    <router-link class="header-icon" to="/"> <img src="@/assets/images/logo.png" alt="главная" ></router-link>
                    <div class="header-logo-info">
                        <span class="header-logo-text">CRYPTODEV</span>
                        <span class="header-logo-text">работаем 24/7</span>
                    </div>
                </div>
                <button class="burger-menu" v-on:click="open">меню</button>
                <nav v-bind:class="{nav_open:openOb}">
                    <ul class="nav-spisok">
                       <li class="nav-spisok_element">Home</li>
                       <li class="nav-spisok_element">Destinations</li>
                       <li class="nav-spisok_element">About</li>
                       <li class="nav-spisok_element">Partner</li>
                    </ul>
                    <div class="header-button">
                    <a href="" class="header-link"><button class="header-link_button button_login">Login</button></a>
                    <a href="" class="header-link"><button class="header-link_button button_registr">Register</button></a>
                </div>
                <button class="burger-menu" v-on:click="close">закрыть</button>
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
            document.body.classList.add('oveerflow');
        },
        close(){
           this.openOb = !this.openOb;
            document.body.classList.remove('oveerflow');
        }
    }
}
</script>


<style scoped lang="scss">
@import "@/assets/styles/function.scss";
header{
    margin-top: size(45, 1600);
    margin-bottom: size(80, 1600);
}
.header {
   display: flex;
   justify-content: space-between;
   nav{
       display: flex;
       align-items: center;
       ul{
           display: flex;
           li{
               margin-right: size(35, 1600); 
               font-size: 1,14rem;
               font-weight: 500;
           }
       }
   }
}
 li:not(:first-child){
    color:#B8BECD;
     }
.header-button{
    a:not(:last-child){
        margin-right: size(18, 1600);
    }
}
.button_login{
    color: #FB8F1D;
    border: 1px solid #FB8F1D;
    border-radius: 8px;
    background-color: white;
}
.button_registr{
    background-color: #FB8F1D;
    color: #FFFFFF;
    border: 0;
    border-radius: 8px;
}
.header-link_button{
    padding-top: 10px;
    padding-bottom: 10px;
    width: size(132, 1600);
}
.burger-menu{
    display: none;
}

@media (max-width: 600px){
    .burger-menu{
    display: block;
}
    nav{  
       top: 0;
        left: 0;
        margin: 0;
        flex-direction: column;
        z-index: 9999;
        position: absolute;
        height: 100%;
        background-color: gray;
        width: 100%;
         display: none !important;
    };
    .nav_open{
        display: flex !important;
    }
}
.header-logo-info{
    display: flex;
}
</style>