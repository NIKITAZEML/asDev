<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
 
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  @import "src/assets/styles/fonts";
  #app{
    background: #1D114F;
  }
</style>

