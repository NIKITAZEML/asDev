<template>
        <div class="wrapper">
            <div class="main">
                <div class="login">
                    <form @submit.prevent="login">
                        <label class="vhod">Войти</label>
                        <input type="text" name="eml" placeholder="Email" v-model="loginData.email">
                        <input type="password" name="pswd" placeholder="Пароль" v-model="loginData.password">
                        <p style="color: red" v-if="loginErrors.emptyFields.status">{{ loginErrors.emptyFields.text }}</p>
                        <p style="color: red" v-if="loginErrors.serverErrors.status">{{ loginErrors.serverErrors.text }}</p>
                        <button class="login-button">Войти</button>
                        <img src="../assets/images/logologin.png" >
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AuthView",
        data () {
          return {
            loginData: {
              email: '',
              password: ''
            },

            loginErrors: {
              emptyFields: {
                text: 'Заполните все поля',
                status: false
              },
              serverErrors: {
                text: '',
                status: false
              }
            }
          }
        },
        methods: {
          
          async login() {
            this.loginErrors.emptyFields.status = false
            this.loginErrors.serverErrors.status = false
            if(this.loginData.email.trim() && this.loginData.password.trim()){
              try {
                let res = await axios.post('https://c6d9-178-234-155-136.ngrok.io/api/login', {
                  email: this.loginData.email,
                  password: this.loginData.password
                })
                console.log(res.data)
                if(res.data.token){
                  // записываю токен
                  localStorage.setItem('token', res.data.token)
                  localStorage.setItem('username', res.data.username)
                  // перекидываю в личный кабинет
                  this.$router.push('/account')
                }
                return res.data
              } catch (e) {
                console.log(e.response.data.message)
                this.loginErrors.serverErrors.text = e.response.data.message
                this.loginErrors.serverErrors.status = true
                return e.response.data.errorText
              }
            } else {
              this.loginErrors.emptyFields.status = true
            }
          }
        },
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";
.vhod{
  color: white;
}
    .wrapper{
        display: flex;
        justify-content: center;
    }

    .main{
        width: size(510, 1920);
        height: size(600, 1920);
        overflow: hidden;
        box-shadow: 5px 20px 50px #000;
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    .signup{
        position: relative;
        width: auto;
        height: auto;
    }
    label{
        font-size: size(36, 1920);
        justify-content: center;
        display: flex;
        margin: size(60, 1920);
        font-weight: bold;
        cursor: pointer;
        transition: .5s ease-in-out;
    }
    input{
        width: size(334, 1920);
        height: size(48, 1920);
        background: #e0dede;
        justify-content: center;
        display: flex;
        margin: size(20, 1920) auto;
        padding: size(10, 1920);
        border: none;
        outline: none;
        border-radius: 2px;
        font-weight: 400;
        font-size: size(20, 1920);
        line-height: size(24, 1920);
    }

    .signup-button{
      cursor: pointer;
        width: size(334, 1920);
        height: size(40, 1920);
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        color:white;
        background: #6d44b8;
        font-size: size(20, 1920);
        line-height: size(24, 1920);
        font-weight: 400;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: .2s ease-in;
        cursor: pointer;
    }
    .login-button{
        width: size(334, 1920);
        height: size(40, 1920);
        margin: size(40, 1920) auto;
        justify-content: center;
        align-items: center;
        display: flex;
        color:white;
        background: #6d44b8;
        font-size: size(20, 1920);
        line-height: size(24, 1920);
        font-weight: 400;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: .2s ease-in;
        cursor: pointer;
    }
    button:hover{
        background: #46DFDD;
        color:black;
    }

    img{
        margin-top: size(30, 1920);
        width: size(81, 1920);
        height: size(67, 1920);
    }




@media (max-width: 750px){
  .main{
        width: size(510, 750);
        height: auto;
    }
    label{
        font-size: size(36, 750);
        margin: size(60, 750);
    }
    input{
        width: size(334, 750);
        height: size(48, 750);
        margin: size(20, 750) auto;
        padding: size(10, 750);
        border-radius: 2px;
        font-weight: 400;
        font-size: size(20, 750);
        line-height: size(24, 750);
    }

    .signup-button{
        width: size(334, 750);
        height: size(40, 750);
        font-size: size(20, 750);
        line-height: size(24, 750);
    }
    .login-button{
        width: size(334, 750);
        height: size(40, 750);
        margin: size(40, 750) auto;
        font-size: size(20, 750);
        line-height: size(24, 750);
    }
    img{
        margin-top: size(30, 750);
        width: size(81, 750);
        height: size(67, 750);
    }
}
@media (max-width: 468px){
   .main{
        width: size(450, 468);
        height: auto;
    }
    label{
        font-size: size(36, 468);
        margin: size(60, 468);
    }
    input{
        width: size(334, 468);
        height: size(48, 468);
        margin: size(20, 468) auto;
        padding: size(10, 468);
        border-radius: 2px;
        font-weight: 400;
        font-size: size(20, 468);
        line-height: size(24, 468);
    }

    .signup-button{
        width: size(334, 468);
        height: size(40, 468);
        font-size: size(20, 468);
        line-height: size(24, 468);
    }
    .login-button{
        width: size(334, 468);
        height: size(40, 468);
        margin: size(40, 468) auto;
        font-size: size(20, 468);
        line-height: size(24, 468);
    }
    img{
        margin-top: size(30, 468);
        width: size(81, 468);
        height: size(67, 468);
    }
}

</style>