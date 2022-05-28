<template>

            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true">
                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Регистрация</label>
                        <input type="text" name="txt" placeholder="Логин" required="">
                        <input type="password" name="pswd" placeholder="Пароль" required="">
                        <input type="password" name="pswd" placeholder="Повторите пароль" required="">
                        <button class="signup-button">Регистрация</button>
                    </form>
                </div>
                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Войти</label>
                        <input type="text" name="txt" placeholder="Логин" required="">
                        <input type="password" name="pswd" placeholder="Пароль" required="">
                        <button class="login-button">Войти</button>
                        <img src="../assets/images/logologin.png" >
                    </form>
                </div>
            </div>

</template>

<script>
    export default {
        name: "AuthView"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";


    .main{
        width: size(510, 1920);
        height: size(600, 1920) !important;
        overflow: hidden;
        box-shadow: 5px 20px 50px #000;
        margin: size(100, 1920)  auto;
    }

    #chk{
        display: none;
    }
    .signup{
        position: relative;
        width:100%;
        height: 100%;
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
        transform: translateY(size(-140, 1920));
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
        transform: translateY(size(-570, 1920));
    }
    #chk:checked ~ .login label{
        transform: scale(1);
    }
    #chk:checked ~ .signup label{
        transform: scale(.6);
    }


</style>