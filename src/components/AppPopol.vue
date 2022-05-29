<template>
    <div class="modal" :class="{close:closes}" v-on:click="close">
       <div class="modal-block">
           <div class="modal-block-logo">
               <img src="@/assets/images/logologin.png" alt="">
               <span>Пополнение счёта</span>
           </div>
           <form>
                        <div class="form-input">
                            <span>Номер карты</span>
                            <input type="text" name="txt" placeholder="Логин" required="">
                        </div>
                        <div class="form-input">
                             <span>Сумма</span>
                            <input type="email" name="eml" placeholder="Email" required="">
                        </div>
                        <button v-on:click="openMessage" class="signup-button">Пополнить</button>
                    </form>
       </div>
   <AppMessage v-show="Truemodal"/></div>
</template>

<script>
 import AppMessage from '@/components/AppMessage.vue';
  export default {
     components: {
         AppMessage
     },
    //   props:{
    //    proverka: Boolean
    //   },
//       data: function() {
//    return {
//        propVal: this.proverka
//    };},
data(){
    return{
    closes:false,
    Truemodal: false
    
    }
},
      methods: {
        close(){
            // if(document.querySelector(".modal").classList.contains("close")){
            // this.closes = false;
            // }else{
            //     this.closes = true
            // }
             
        },
        openMessage(){
            this.Truemodal = !this.Truemodal
        }
    }
  }
  
</script>


<style lang="scss" scoped>
@import "src/assets/styles/fonts";
.close{
    display: none;
}
.modal{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(137, 136, 131, 0.7);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-block{
    padding-top: size(64, 1920);
    padding-bottom: size(60, 1920);
    width: size(510, 1920);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: size(520, 1920);
    border: 1px solid red;
    background-color: white;
    border: 1px solid rgba(39, 39, 39, 0.1);
     align-items: center;
   
}
.modal-block-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    img{
        width: size(81, 1920);
        height: size(67, 1920);
        margin-bottom: size(29, 1920) !important;
    }
    span{
        font-size: (20, 1920);
        line-height: (28, 1920);
        font-weight: 500;
        font-style: bold;
        margin-bottom: size(20, 1920) !important;
    }
}
.form-input{
    display: flex;
    flex-direction: column;
    width: 100%;
    span{
        color: rgba(23, 23, 25, 0.3);
        font-size: size(16, 1920);
        margin-bottom: size(5, 1920);
    }
    input{
        width:size(334, 1920);
        height:size(48, 1920);
        padding-left: size(15, 1920);
        border: 1px solid rgba(23, 23, 25, 0.2);
        border-radius: 10px;
        outline: none;
         transition: all .5s linear 0s;
    }
    input:focus{
        background: rgba(106, 87, 195, 0.3);
        border: 1px solid #6A57C3;
         transition: all .5s linear 0s;
    }
}
form{
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button{
        width: size(176, 1920);
        height: size(52, 1920);
         background: #46DFDD;
   color: black;
   border: none;
    }
}
.close{
    display: none;
}
</style>