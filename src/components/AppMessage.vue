<template>
    <div class="message">
        <img v-if="uspeh" src="@/assets/images/icons/uspeh.svg" alt="">
        <img v-else src="@/assets/images/icons/error.svg" alt="">
        <span>{{messages}}</span>
    </div>
</template>


<script>
export default{
    data(){
        return{
            messages: "dsadfasf",
            uspeh: true
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/fonts";
  .message{
      z-index: 9999;
      position: absolute;
      top: 10%;
      right: 10%;
      width: size(327, 1920);
      height: size(32, 1920);
      background-color: white;
      padding-left: size(20, 1920);
  }
</style>
