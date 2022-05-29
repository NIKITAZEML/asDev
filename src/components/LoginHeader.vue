<template>
  <header>
    <div class="container">
      <div class="header">
        <nav>
          <div class="nav-block">
            <div class="nav-block-logo">
              <router-link class="header-logo" to="/"><img style="width:100%" src="../assets/images/logo.png" ></router-link>
              <transition name="fade">
                <img v-if="!openOb" src="@/assets/images/icons/burger.svg" class="burger-menu" v-on:click="open"/>
              </transition>
              <transition name="fade" ><img v-show="openOb" src="@/assets/images/close.svg" class="burger-menu" v-on:click="open"/>
              </transition>
            </div>
            <div v-bind:class="{nav_open:openOb}"  class="nav">
              <div class="nav-block-value">
                <router-link v-on:click="open" :to="'/trade'" class="header__nav"><span v-on:click="open">Обмен валют</span></router-link>
                <router-link v-on:click="open" :to="'/allcoins'" class="header__nav"><span v-on:click="open">Курс валют</span></router-link>
              </div>
             <router-link :to='"/account"' class="header__nav">
               <div class="user" v-on:click="open"> 
                 <span>porverkaexample@mail.ru</span>
                 <img src="@/assets/images/icons/User.svg" alt="">
              </div>
             </router-link>
              <!-- <div class="nav-block-singin">
                <a href="#" @click.prevent="logout"><div v-on:click="open" class="header-login">Выход</div></a>
              </div> -->
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
      screenWidth: null,
      userName: localStorage.getItem('username')
    }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/')
    },
    open(){
      if ( this.screenWidth = window.screen.width < 760){
        this.openOb = !this.openOb;
        if(this.openOb){
          document.body.style.overflow = "hidden"
        }else{
          document.body.style.overflow = "auto" }
      }
      else {

      }
    },

  }
}
</script>


<style scoped lang="scss">
@import "src/assets/styles/fonts";
.user{
  display: flex;
  align-items: center;
  span{
    color: white;
    margin-right: size(10, 1920);
     font-style: normal;
  font-weight: 400;
  font-size: size(20, 1920);
  line-height: size(28, 1920);
  color: #FFFFFF;
  }
  img{
    width: size(40, 1920);
    height: size(40, 1920);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}

.fade-enter, .fade-leave-to {
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

nav{
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;

}

.nav{
  width: 60%;
  align-items: center;
  justify-content: space-between;
  display: flex;
}

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
  padding: size(12, 1920) size(28, 1920);
  font-weight: 400;
  font-size: size(16, 1920);
  line-height: size(19, 1920);
  color: #FFFFFF;
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

.nav-block-logo{
  width: 20%;
}
.nav-block-singin[data-v-60f72354] {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 18.75vw;
}
.nav-block-singin[data-v-60f72354] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
}
@media (max-width: 750px){

  .burger-menu{
    display: block;
    width: size(40, 750);
    height: size(40, 750);
    position: absolute;
    top: size(20, 750);
    right: size(50, 750);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
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
    margin-bottom: size(60, 750);
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
    padding: size(12, 750) size(28, 750);
    font-weight: 400;
    font-size: size(20, 750);
    line-height: size(19, 750);
    color: #FFFFFF;
    width: 100%;
    height: size(60, 750);
    vertical-align: center;
    text-align: center;
    margin-bottom: size(30, 750);
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
    width: size(250, 750);
    height: size(20, 750);
  }
  .container{
    width: size(700, 750);
    margin: 0 auto;
  }
  .nav-block-value{
    display: flex;

    width: 80%;
    flex-direction: column;
  }
  .nav-block-singin{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    flex-direction: column;
  }
  .user{
  display: flex;
  align-items: center;
  margin-bottom: size(30, 1920);
  justify-content: center;
  span{
    color: white;
    margin-right: size(10, 750);
     font-style: normal;
  font-weight: 400;
  font-size: size(20, 750);
  line-height: size(28, 750);
  color: #FFFFFF;
  }
  img{
    width: size(40, 750);
    height: size(40, 750);
  }
}
}
@media (max-width: 468px){
  .user{
  display: flex;
  align-items: center;
   margin-bottom: size(30, 1920);
  span{
    color: white;
    margin-right: size(10, 468);
     font-style: normal;
  font-weight: 400;
  font-size: size(20, 468);
  line-height: size(28, 468);
  color: #FFFFFF;
  }
  img{
    width: size(40, 468);
    height: size(40, 468);
  }
}
  .container{
    width: 90vw;
  }
  .nav-block{
    margin: 0;
  }
  .nav-block-logo{
    width: 30%;
  }
}
</style>