<template>
  <div id="app">
    <component :is="getLayout"></component>
<!--    <AppHeader/>-->
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  computed: {
    getLayout() {
      return this.$route.meta.layout
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import "src/assets/styles/fonts";
  #app{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    background: #1D114F;
  }
    .select-input{
      padding:0 0 0 size(10, 1920) !important;
    }
    .placeholder{
      display: none !important;
    }

  @media (max-width: 750px){
    #app{ height:auto;}
  }
</style>

