<template>
  <section class="main">
    <div class="container">
      <div class="main-container">
      <div class="main-container__text">
        <span class="main__title">Покупайте, торгуйте и храните более 600 криптовалют на</span>
        <span class="main__little">CryptoDev</span>
      </div>
        <div class="main-button__container">
          <input type="email" class="main-button__email"  placeholder="Введите email">
          <div class="main-button__register">Зарегистрироваться </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/styles/fonts";

  /*------------MAIN--------------*/

  .main{
    height: size(896, 1920);
    background-image: url('../assets/images/mainbg.png');
  }

  .container{
    width: size(1440, 1920);
    margin: 0 auto;
  }

  .main-container{
    padding-top: size(306, 1920);
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: end;
    text-align: end;
  }

  .main-container__text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: size(517, 1920);
    margin-bottom: size(40, 1920);
  }

  .main-button__container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .main-button__email{
    width: size(290, 1920);
    height: size(44, 1920);
    border: 0;
    outline: none;
    padding-left: size(17, 1920);
    &::placeholder{
      font-weight: 600;
      font-size: size(15, 1920);
      line-height: size(18, 1920);
      color: #8A8A8A;
    }
  }

  .main-button__register{
    width: size(196, 1920);
    height: size(43, 1920);
    background: #FFFFFF;
    text-align: center;
    font-weight: 600;
    font-size: size(16, 1920);
    line-height: size(19, 1920);
    color: #000000;
    padding: size(12, 1920) size(17, 1920);
    margin-left: size(31, 1920);
  }

  /*------------TEXT-STYLE---------------*/

  .main__title{
    font-weight: 400;
    font-size: size(48, 1920);
    line-height: size(56, 1920);
    color: #FFFFFF;
  }

  .main__little{
    font-weight: 600;
    font-size: size(48, 1920);
    line-height: size(56, 1920);
    color: #FFFFFF;

  }
</style>
