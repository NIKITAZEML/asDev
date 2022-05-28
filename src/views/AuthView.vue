<template>
        <div class="wrapper">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" v-model="openAuth">
                <div class="signup" @submit.prevent="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Регистрация</label>
                        <input type="text" name="txt" placeholder="Логин" v-model="signupData.login">
                        <input type="text" name="eml" placeholder="Email" v-model="signupData.email">
                        <input type="password" name="pswd" placeholder="Пароль" v-model="signupData.password">
                        <input type="password" name="pswd" placeholder="Повторите пароль" v-model="signupData.repeatPassword">
                        <p style="color: red" v-if="signupErrors.emptyFields.status">{{ signupErrors.emptyFields.text }}</p>
                        <p style="color: red" v-if="signupErrors.checkRepeatPassword.status">{{ signupErrors.checkRepeatPassword.text }}</p>
                        <p style="color: red" v-if="signupErrors.serverError.status">{{ signupErrors.serverError.text }}</p>
                        <button class="signup-button">Регистрация</button>
                    </form>
                </div>
                <div class="login">
                    <form @submit.prevent="login">
                        <label for="chk" aria-hidden="true">Войти</label>
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
            isAuth: true,
            openAuth: '',
            signupData: {
              login: '',
              email: '',
              password: '',
              repeatPassword: ''
            },
            signupErrors: {
              emptyFields: {
                text: 'Заполните все поля',
                status: false
              },
              checkRepeatPassword: {
                text: 'Пароли должны совпадать',
                status: false
              },
              serverError: {
                text: '',
                status: false
              }
            },

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
          async signup() {
            this.signupErrors.checkRepeatPassword.status = false
            this.signupErrors.emptyFields.status = false
            this.signupErrors.serverError.status = false
            if(this.signupData.login.trim() && this.signupData.email.trim()){
              if(this.signupData.password.trim() === this.signupData.repeatPassword.trim()){
                let res
                try {
                  res = await axios.post('http://localhost:5000/api/signup', {
                    login: this.signupData.login,
                    email: this.signupData.email,
                    password: this.signupData.password
                  })
                  console.log(res.data)
                  if(res.data.registerStatus){
                    this.openAuth = true
                  }
                  return res.data
                } catch (e) {
                  this.signupErrors.serverError.text = e.response.data.errorText
                  this.signupErrors.serverError.status = true
                  console.log(e.response.data.errorText)
                  return e.response.data.errorText
                }
              } else {
                // пароли должны совпадать
                this.signupErrors.checkRepeatPassword.status = true
              }
            } else {
              // заполните все поля
              this.signupErrors.emptyFields.status = true
            }
          },
          async login() {
            this.loginErrors.emptyFields.status = false
            this.loginErrors.serverErrors.status = false
            if(this.loginData.email.trim() && this.loginData.password.trim()){
              try {
                let res = await axios.post('http://localhost:5000/api/login', {
                  email: this.loginData.email,
                  password: this.loginData.password
                })
                console.log(res.data)
                if(res.data.token){
                  // записываю токен
                  localStorage.setItem('token', res.data.token)
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
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";

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

    #chk{
        display: none;
    }
    .signup{
        position: relative;
        width: auto;
        height: auto;
    }
    label{
        color: #fff;
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
        width: size(81, 1920);
        height: size(67, 1920);
    }

    .login{
        height: size(600, 1920);
        background: #eee;
        transform: translateY(size(40, 1920));
        transition: .8s ease-in-out;
        form{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }
    .login label{
        color: #573b8a;
        transform: scale(.6);
        margin-top: size(30, 1920);
    }

    #chk:checked ~ .login{
        transform: translateY(size(-465, 1920));
    }
    #chk:checked ~ .login label{
        transform: scale(1);
    }
    #chk:checked ~ .signup label{
        transform: scale(.6);
    }


</style>