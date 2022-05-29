<template>
    <div class="message">
<!--        <img v-if="!uspeh" src="@/assets/images/icons/uspeh.svg" alt="">-->
<!--        <img src="@/assets/images/icons/error.svg" alt="">-->
        <span>{{messages}}</span>
    </div>
</template>


<script>
export default{
    data(){
        return{
            messages: "Успешно пополнено",
            // uspeh: true
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/fonts";
  .message{
    //background: #46DFDD;

      z-index: 9999;
      position: absolute;
      top: 10%;
      right: 10%;
      width: size(327, 1920);
      height: size(32, 1920);
      height: auto;
      display: flex;
      align-items: center;
      background-color: white;
      padding-left: size(20, 1920);
      padding-top: size(19, 1920);
      padding-bottom: size(19, 1920);
      img {
          width: size(40, 1920);
          height: size(40, 1920);
          margin-right: size(10, 1920);
      }
      span{
          font-size: size(16, 1920);
          color: black;
      }
  }
  @media (max-width: 768px){
      .message{
      z-index: 9999;
      position: absolute;
      top: 10%;
      right: 10%;
      width: size(327, 750);
      height: size(32, 750);
      height: auto;
      display: flex;
      align-items: center;
      background-color: white;
      padding-left: size(20, 750);
      padding-top: size(19, 750);
      padding-bottom: size(19, 750);
      img {
          width: size(40, 750);
          height: size(40, 750);
          margin-right: size(10, 750);
      }
      span{
          font-size: size(16, 750);
          color: black;
      }
  }
  }
</style>
