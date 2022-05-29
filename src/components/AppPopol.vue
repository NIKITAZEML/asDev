<template>
    <div class="modal" v-if="isOpen">
       <div class="modal-block">
         <span class="close" @click="closePopup">×</span>
           <div class="modal-block-logo">
               <img src="@/assets/images/logologin.png" alt="">
               <span>Пополнение счёта</span>
           </div>
           <form @submit.prevent="sendDonate">
                        <div class="form-input">
                            <span>Номер карты</span>
                            <input type="number" v-model="cardN" placeholder="Номер карты" required>
                        </div>
                        <div class="form-input">
                             <span>Сумма ₽</span>
                            <input type="number" v-model="summ" placeholder="Сумма" required>
                        </div>
                        <button v-on:click="openMessage" class="signup-button">Пополнить</button>
                    </form>
       </div>
    </div>
</template>

<script>
 import axios from "axios";
  export default {
     components: {

     },

data(){
    return{
    closes:false,
      summ: null,
      cardN: null,
    Truemodal: false,
      isOpen: false
    
    }
},
      methods: {
        openMessage(){
            this.Truemodal = !this.Truemodal
        },
        openPopup() {
          this.isOpen = true
        },
        closePopup() {
          this.isOpen = false
        },
        async sendDonate () {
          let date = new Date();
          let testD  = date.toISOString().split('T')[0] + ' ' + date.toTimeString().split(' ')[0];
          console.log(testD)
          try {
            const token = localStorage.getItem("token");
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            let res = await axios.post('http://localhost:5000/api/payment', {
              date: testD,
              firstSumm: this.summ
            })
            this.$emit('checkMsg')
            console.log(res.data)
            this.Truemodal = true

            return res.data
          } catch (e) {
            console.log(e)
            return e
          } finally {
            this.summ = null
            this.cardN = null
            this.closePopup()
            this.$emit('getNew')
          }
        }
    }
  }
  
</script>


<style lang="scss" scoped>
@import "src/assets/styles/fonts";
  //.close{
  //    display: none;
  //}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.modal{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(137, 136, 131, 0.7);
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-block{
  position: relative;
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
   z-index: 999;
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
  color: #46DFDD; font-size: 2vw;
    position: absolute;
  right: 2vw;
  top: 1vw;
  cursor: pointer;
}
@media (max-width: 750px){
    .modal-block{
    padding-top: size(64, 750);
    padding-bottom: size(60, 750);
    width: size(510, 750);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: size(520, 750);
    border: 1px solid red;
    background-color: white;
    border: 1px solid rgba(39, 39, 39, 0.1);
     align-items: center;
   z-index: 999;
}
.modal-block-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    img{
        width: size(81, 750);
        height: size(67, 750);
        margin-bottom: size(29, 750) !important;
    }
    span{
        font-size: (20, 750);
        line-height: (28, 750);
        font-weight: 500;
        font-style: bold;
        margin-bottom: size(20, 750) !important;
    }
}
.form-input{
    display: flex;
    flex-direction: column;
    width: 100%;
    span{
        color: rgba(23, 23, 25, 0.3);
        font-size: size(16, 750);
        margin-bottom: size(5, 750);
    }
    input{
        width:size(334, 750);
        height:size(48, 750);
        padding-left: size(15, 750);
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
        width: size(176, 750);
        height: size(52, 750);
         background: #46DFDD;
   color: black;
   border: none;
    }
}
}
@media (max-width: 468px){
    .modal-block{
    padding-top: size(64, 468);
    padding-bottom: size(60, 468);
    width: size(410, 468);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: size(520, 468);
    border: 1px solid red;
    background-color: white;
    border: 1px solid rgba(39, 39, 39, 0.1);
     align-items: center;
   z-index: 999;
}
.modal-block-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    img{
        width: size(81, 468);
        height: size(67, 468);
        margin-bottom: size(29, 468) !important;
    }
    span{
        font-size: (20, 468);
        line-height: (28, 468);
        font-weight: 500;
        font-style: bold;
        margin-bottom: size(20, 468) !important;
    }
}
.form-input{
    display: flex;
    flex-direction: column;
    width: 100%;
    span{
        color: rgba(23, 23, 25, 0.3);
        font-size: size(16, 468);
        margin-bottom: size(5, 468);
    }
    input{
        width:size(334, 468);
        height:size(48, 468);
        padding-left: size(15, 468);
        border: 1px solid rgba(23, 23, 25, 0.5);
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
        width: size(176, 468);
        height: size(52, 468);
         background: #46DFDD;
   color: black;
   border: none;
    }
}
}
</style>