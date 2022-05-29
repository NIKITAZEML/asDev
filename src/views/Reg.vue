<template>
  <div class="wrapper">
    <div class="main">
      <div class="signup" @submit.prevent="signup">
        <form>
          <label>Регистрация</label>
          <input type="text" name="txt" placeholder="Логин" v-model="signupData.login">
          <input type="email" name="eml" placeholder="Email" v-model="signupData.email">
          <input type="password" name="pswd" placeholder="Пароль" v-model="signupData.password">
          <input type="password" name="pswd" placeholder="Повторите пароль" v-model="signupData.repeatPassword">
          <button class="signup-button">Регистрация</button>
          <p style="color: red" v-if="signupErrors.emptyFields.status">{{ signupErrors.emptyFields.text }}</p>
          <p style="color: red" v-if="signupErrors.checkRepeatPassword.status">{{ signupErrors.checkRepeatPassword.text }}</p>
          <p style="color: red" v-if="signupErrors.serverError.status">{{ signupErrors.serverError.text }}</p>
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
      isLogin: false,
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
      }
    }
  },
  created() {
    if(this.$store.getters.getMail.trim()){
      this.signupData.email = this.$store.getters.getMail
    }
  },
  methods: {
    async signup() {
      this.signupErrors.checkRepeatPassword.status = false
      this.signupErrors.emptyFields.status = false
      this.signupErrors.serverError.status = false
      if(this.signupData.login.trim() && this.signupData.email.trim() && this.signupData.password.trim()){
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
              this.$router.push('/auth')
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
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/fonts";

.wrapper{
  display: flex;
  justify-content: center;
}

form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main{
  width: size(510, 1920);
  overflow: hidden;
  box-shadow: 5px 20px 50px #000;
  background: #FFFFFF;
}


.signup{
  padding: size(50, 1920) size(90, 1920) size(50, 1920) size(90, 1920);
}

p{
  padding-top: size(20, 1920);
  font-size: size(20, 1920);
}

label{
  color: #573b8a;
  font-size: size(36, 1920);
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
  margin-bottom: size(50, 1920);
}
input{
  width: size(334, 1920);
  height: size(48, 1920);
  background: #e0dede;
  justify-content: center;
  display: flex;
  border: none;
  margin: size(20, 1920) auto;
  padding: size(10, 1920);
  outline: none;
  border-radius: 2px;
  font-weight: 400;
  font-size: size(20, 1920);
  line-height: size(24, 1920);
  margin-bottom: size(20, 1920);
}

.signup-button{
  width: size(334, 1920);
  height: size(40, 1920);
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
  margin: auto;
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



@media (max-width: 750px){
  .wrapper{
    display: flex;
    justify-content: center;
  }

  .main{
    width: size(510, 750);
    height: size(600, 750);
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
    font-size: size(36, 750);
    justify-content: center;
    display: flex;
    margin: size(60, 750);
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
  }
  input{
    width: size(334, 750);
    height: size(48, 750);
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: size(20, 750) auto;
    padding: size(10, 750);
    border: none;
    outline: none;
    border-radius: 2px;
    font-weight: 400;
    font-size: size(20, 750);
    line-height: size(24, 750);
  }

  .signup-button{
    width: size(334, 750);
    height: size(40, 750);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    color:white;
    background: #6d44b8;
    font-size: size(20, 750);
    line-height: size(24, 750);
    font-weight: 400;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }
  .login-button{
    width: size(334, 750);
    height: size(40, 750);
    margin: size(40, 750) auto;
    justify-content: center;
    align-items: center;
    display: flex;
    color:white;
    background: #6d44b8;
    font-size: size(20, 750);
    line-height: size(24, 750);
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
    width: size(81, 750);
    height: size(67, 750);
  }

  .login{
    height: size(600, 750);
    background: #eee;
    transform: translateY(size(40, 750));
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
    margin-top: size(30, 750);
  }

  }
@media (max-width: 468px){
  .main{
    width: 90vw;
    overflow: hidden;
    box-shadow: 5px 20px 50px #000;
    height: size(600, 468);
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
    font-size: size(36, 468);
    justify-content: center;
    display: flex;
    margin: size(60, 468);
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
  }
  input{
    width: size(334, 468);
    height: size(48, 468);
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: size(20, 468) auto;
    padding: size(10, 468);
    border: none;
    outline: none;
    border-radius: 2px;
    font-weight: 400;
    font-size: size(20, 468);
    line-height: size(24, 468);
  }

  .signup-button{
    width: size(334, 468);
    height: size(40, 468);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    color:white;
    background: #6d44b8;
    font-size: size(20, 468);
    line-height: size(24, 468);
    font-weight: 400;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }
  .login-button{
    width: size(334, 468);
    height: size(40, 468);
    margin: size(40, 468) auto;
    justify-content: center;
    align-items: center;
    display: flex;
    color:white;
    background: #6d44b8;
    font-size: size(20, 468);
    line-height: size(24, 468);
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
    width: size(81, 468);
    height: size(67, 468);
  }

  .login{
    height: size(600, 468);
    background: #eee;
    transform: translateY(size(40, 468));
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
    margin-top: size(30, 468);
  }

}
</style>